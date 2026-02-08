'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { 
  FaPlus, FaEdit, FaTrash, FaHeart, FaComment, FaShare, 
  FaImage, FaVideo, FaUser, FaRegHeart, FaPaperPlane, 
  FaEllipsisH, FaGlobeAmericas, FaTimes, FaCamera, FaFilm,
  FaCheckCircle, FaUserCircle
} from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

// Firebase imports
import { 
  db, storage, auth, uploadMedia, compressImage,
  addArticle, updateArticle, deleteArticle,
  addCommentToArticle, toggleLikeArticle, shareArticle,
  cleanupExpiredArticles, upsertUserProfile, getUserProfile
} from '@/lib/firebase';
import { 
  collection, getDocs, query, orderBy, 
  where, onSnapshot
} from 'firebase/firestore';

export default function ArticlesPage() {
  const { language } = useLanguage();
  const t = translations[language]?.articles || {};
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [optimisticPosts, setOptimisticPosts] = useState([]);
  
  // User Profile State
  const [userProfile, setUserProfile] = useState({
    name: '',
    profilePic: '',
    id: ''
  });
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingName, setOnboardingName] = useState('');
  const [onboardingPic, setOnboardingPic] = useState(null);
  const [onboardingPicPreview, setOnboardingPicPreview] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    mediaUrl: '',
    mediaType: '',
    tags: []
  });

  const fileInputRef = useRef(null);
  const onboardingPicRef = useRef(null);

  // Initial Load: Restore from Local & Sync with Firestore
  useEffect(() => {
    const savedName = localStorage.getItem('art_user_name');
    const savedPic = localStorage.getItem('art_user_pic');
    const savedId = localStorage.getItem('art_user_id');

    if (savedId) {
      const syncProfile = async () => {
        try {
          const remoteProfile = await getUserProfile(savedId);
          if (remoteProfile) {
            setUserProfile(remoteProfile);
            localStorage.setItem('art_user_name', remoteProfile.name);
            localStorage.setItem('art_user_pic', remoteProfile.profilePic);
          } else {
            setUserProfile({ name: savedName || 'Guest Contributor', profilePic: savedPic || '', id: savedId });
          }
        } catch (e) {
          console.warn('Profile sync failed, using local data:', e);
          setUserProfile({ name: savedName || 'Guest Contributor', profilePic: savedPic || '', id: savedId });
        }
      };
      syncProfile();
    } else {
      setShowOnboarding(true);
    }
  }, []);

  const handleProfileUpdate = async (newName, newPicFile) => {
    setUploading(true);
    try {
      let finalPicUrl = userProfile.profilePic;
      if (newPicFile) {
        const result = await uploadMedia(newPicFile, 'profiles', setUploadProgress);
        finalPicUrl = result.url;
      }

      const updatedProfile = {
        id: userProfile.id,
        name: newName,
        profilePic: finalPicUrl
      };

      // Save to Firestore for global persistence
      await upsertUserProfile(updatedProfile);

      localStorage.setItem('art_user_name', newName);
      localStorage.setItem('art_user_pic', finalPicUrl);
      
      document.cookie = `art_user_name=${newName}; path=/; max-age=${60*60*24*365}`;

      setUserProfile(updatedProfile);
      setShowProfileEdit(false);
      setShowOnboarding(false);
    } catch (err) {
      console.error('Profile update failed:', err);
      const msg = err.message || 'Unknown error';
      if (msg.includes('admin-restricted-operation')) {
        alert('CRITICAL: Anonymous Auth is disabled.\n\nPlease go to Firebase Console > Authentication > Sign-in Method and ENABLE "Anonymous" to allow profile creation.');
      } else if (msg.includes('storage/unauthorized')) {
        alert('Failed to upload: Firebase Storage permissions might be restricted to authenticated users.');
      } else {
        alert('Failed to update profile: ' + msg);
      }
    } finally {
      setUploading(false);
    }
  };

  const handleOnboardingSubmit = async () => {
    if (!onboardingName.trim()) return;
    
    setUploading(true);
    let picUrl = '';
    
    try {
      if (onboardingPic) {
        const result = await uploadMedia(onboardingPic, 'profiles', setUploadProgress);
        picUrl = result.url;
      }
      
      const newId = `user_${Date.now()}`;
      const newUser = {
        id: newId,
        name: onboardingName,
        profilePic: picUrl
      };

      // Save to Firestore
      await upsertUserProfile(newUser);

      localStorage.setItem('art_user_name', onboardingName);
      localStorage.setItem('art_user_pic', picUrl);
      localStorage.setItem('art_user_id', newId);
      
      document.cookie = `art_user_name=${onboardingName}; path=/; max-age=${60*60*24*365}`;
      document.cookie = `art_user_id=${newId}; path=/; max-age=${60*60*24*365}`;

      setUserProfile(newUser);
      console.log('Onboarding complete, closing modal.');
      setShowOnboarding(false);
    } catch (err) {
      console.error('Onboarding failed:', err);
      const msg = err.message || 'Unknown error';
      if (msg.includes('admin-restricted-operation')) {
        alert('CRITICAL: Anonymous Auth is disabled.\n\nPlease go to Firebase Console > Authentication > Sign-in Method and ENABLE "Anonymous" to allow identity creation.');
      } else if (msg.includes('storage/unauthorized')) {
        alert('Identity creation failed: Storage permissions error. Please check your Firebase rules.');
      } else {
        alert('Identity creation failed: ' + msg);
      }
    } finally {
      setUploading(false);
    }
  };

  // Subscribe to articles from Firebase
  useEffect(() => {
    // We fetch articles even if onboarding is shown, so visitors can see content background
    setLoading(true);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const articlesQuery = query(
      collection(db, 'articles'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const articlesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isExpired: doc.data().createdAt?.toDate() < threeMonthsAgo
      })).filter(article => !article.isExpired);
      
      setArticles(articlesData);
      // Clear optimistic posts that have now been confirmed by the server
      setOptimisticPosts(prev => prev.filter(op => !articlesData.some(ap => ap.content === op.content && ap.authorId === op.authorId)));
      setLoading(false);
    });

    // Pro-active background cleanup for expired articles (runs once)
    const cleanupExpired = async () => {
      try {
        await cleanupExpiredArticles(threeMonthsAgo);
      } catch (err) {
        console.error('Error in background cleanup:', err);
      }
    };
    cleanupExpired();

    return () => unsubscribe();
  }, [showOnboarding]);

  const handleMediaUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setMediaPreview({ url: reader.result, type: 'image' });
      reader.readAsDataURL(file);
    } else {
      setMediaPreview({ url: URL.createObjectURL(file), type: 'video' });
    }

    setUploading(true);
    setUploadProgress(0);
    try {
      const result = await uploadMedia(file, 'articles', setUploadProgress);
      setFormData(prev => ({ ...prev, mediaUrl: result.url, mediaType: result.type }));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
      setMediaPreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.content.trim() || uploading || saving) return;
    
    setSaving(true);
    const newPost = {
      ...formData,
      id: `temp_${Date.now()}`,
      authorName: userProfile.name,
      authorPic: userProfile.profilePic,
      authorId: userProfile.id,
      createdAt: { toDate: () => new Date() }, // Mock for UI
      isOptimistic: true,
      likes: [],
      comments: [],
      shares: 0
    };

    if (!editingArticle) {
      setOptimisticPosts(prev => [newPost, ...prev]);
    }

    try {
      setShowCreateForm(false); // Close immediately for "speed" feel

      if (editingArticle) {
        await updateArticle(editingArticle.id, {
          content: formData.content,
          mediaUrl: formData.mediaUrl,
          mediaType: formData.mediaType,
          tags: formData.tags || []
        });
      } else {
        await addArticle({
          ...formData,
          authorName: userProfile.name,
          authorPic: userProfile.profilePic,
          authorId: userProfile.id
        });
      }
      
      setFormData({ title: '', content: '', mediaUrl: '', mediaType: '', tags: [] });
      setMediaPreview(null);
      setEditingArticle(null);
    } catch (error) {
      console.error('Error saving article:', error);
      // Remove optimistic post on error
      if (!editingArticle) {
        setOptimisticPosts(prev => prev.filter(p => p.id !== newPost.id));
      }
      alert('Failed to save your insight. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleLike = async (article) => {
    if (!userProfile.id || userProfile.id.startsWith('user_guest')) {
      alert('Setting up a profile is required to Like or Comment. It only takes a second!');
      return setShowOnboarding(true);
    }
    try {
      const isLiked = article.likes?.includes(userProfile.id);
      await toggleLikeArticle(article.id, userProfile.id, isLiked);
    } catch (error) {
      console.error('Error liking article:', error);
    }
  };

  const handleComment = async (articleId, text) => {
    if (!userProfile.id || userProfile.id.startsWith('user_guest')) {
      alert('Setting up a profile is required to Like or Comment. It only takes a second!');
      return setShowOnboarding(true);
    }
    if (!text.trim()) return;
    try {
      await addCommentToArticle(articleId, {
        userName: userProfile.name,
        userPic: userProfile.profilePic,
        userId: userProfile.id,
        text: text
      });
    } catch (error) {
      console.error('Error commenting:', error);
    }
  };

  return (
    <div className="bg-[#f3f2ef] dark:bg-[#1a1c1e] min-h-screen text-[#191919] dark:text-[#e1e1e1] transition-colors duration-500 font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-20 max-w-2xl">
        {/* Top Creation Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#232629] rounded-xl shadow-sm border border-black/10 dark:border-white/5 p-4 mb-6 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              onClick={() => setShowProfileEdit(true)}
              className="group relative cursor-pointer"
            >
              {userProfile.profilePic ? (
                <Image 
                  src={userProfile.profilePic} 
                  alt="My Profile" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800" 
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                  <FaUser size={20} />
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <FaEdit className="text-white text-xs" />
              </div>
            </div>
            <button 
              onClick={() => setShowCreateForm(true)}
              className="flex-1 bg-gray-100 dark:bg-[#1a1c1e] hover:bg-gray-200 dark:hover:bg-[#2d3135] transition-all rounded-full px-5 py-3 text-left text-gray-500 font-medium border border-black/5 dark:border-white/5 active:scale-[0.98]"
            >
              Start a post
            </button>
          </div>
          <div className="flex justify-between items-center px-2">
            <button 
               onClick={() => { setShowCreateForm(true); setTimeout(() => fileInputRef.current?.click(), 100); }}
               className="flex items-center gap-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-2 rounded-lg transition-all font-semibold text-sm"
            >
              <FaImage /> <span>Media</span>
            </button>
            <button className="flex items-center gap-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-3 py-2 rounded-lg transition-all font-semibold text-sm">
              <FaGlobeAmericas /> <span>Anyone</span>
            </button>
            <button 
               onClick={() => setShowCreateForm(true)}
               className="flex items-center gap-2 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-3 py-2 rounded-lg transition-all font-semibold text-sm"
            >
              <FaEdit /> <span>Insight</span>
            </button>
          </div>
        </motion.div>

        {/* Articles Feed */}
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map(i => <ArticleSkeleton key={i} />)}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="space-y-6">
              {[...optimisticPosts, ...articles].map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  isOptimistic={article.isOptimistic}
                  isAuthor={article.authorId === userProfile.id}
                  currentUserId={userProfile.id}
                  onLike={() => handleLike(article)}
                  onComment={(text) => handleComment(article.id, text)}
                  onEdit={() => {
                    setEditingArticle(article);
                    setFormData({
                      title: article.title || '',
                      content: article.content || '',
                      mediaUrl: article.mediaUrl || '',
                      mediaType: article.mediaType || '',
                      tags: article.tags || []
                    });
                    if (article.mediaUrl) setMediaPreview({ url: article.mediaUrl, type: article.mediaType });
                    setShowCreateForm(true);
                  }}
                  onDelete={async () => {
                    if (confirm('Delete this insight?')) await deleteArticle(article.id);
                  }}
                  onShare={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                    shareArticle(article.id);
                  }}
                />
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>

      {/* Onboarding Modal */}
      <AnimatePresence>
        {showOnboarding && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white dark:bg-[#232629] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="p-8 text-center">
                <div className="mb-6 inline-block p-4 bg-blue-500/10 rounded-full text-blue-500">
                  <FaUserCircle size={48} />
                </div>
                <h2 className="text-2xl font-black mb-2">Welcome to Insights</h2>
                <p className="text-gray-500 mb-8 font-medium">Let&apos;s set up your profile to get started.</p>

                <div className="space-y-6 text-left">
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2 block">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      value={onboardingName}
                      onChange={(e) => setOnboardingName(e.target.value)}
                      className="w-full bg-gray-100 dark:bg-[#1a1c1e] border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2 block">Profile Picture</label>
                    <div 
                      onClick={() => onboardingPicRef.current?.click()}
                      className="group relative w-24 h-24 mx-auto rounded-full bg-gray-100 dark:bg-[#1a1c1e] border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all overflow-hidden"
                    >
                      {onboardingPicPreview ? (
                        <Image 
                          src={onboardingPicPreview} 
                          alt="Profile Preview" 
                          fill 
                          className="object-cover" 
                        />
                      ) : (
                        <FaCamera className="text-gray-400 group-hover:text-blue-500" />
                      )}
                    </div>
                    <input 
                      type="file" 
                      ref={onboardingPicRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setOnboardingPic(file);
                          const reader = new FileReader();
                          reader.onloadend = () => setOnboardingPicPreview(reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setShowOnboarding(false);
                    }}
                    disabled={uploading}
                    className="w-full bg-gray-100 dark:bg-[#1a1c1e] text-black dark:text-white font-black py-4 rounded-2xl hover:bg-gray-200 dark:hover:bg-[#2d3135] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <div className="pt-4 flex flex-col gap-3">
                    <button 
                      onClick={handleOnboardingSubmit}
                      disabled={uploading || !onboardingName.trim()}
                      className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                    >
                      {uploading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Get Started'}
                    </button>
                    
                    <button 
                      onClick={() => {
                        const guestId = `user_guest_${Date.now()}`;
                        localStorage.setItem('art_user_id', guestId);
                        setUserProfile({ name: 'Guest Explorer', profilePic: '', id: guestId });
                        setShowOnboarding(false);
                      }}
                      disabled={uploading}
                      className="w-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 font-bold py-3 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all active:scale-[0.98]"
                    >
                      Browse as Guest
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Creation Modal */}
      <AnimatePresence>
        {showCreateForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[150] flex items-center justify-center p-4">
            <motion.div
              layoutId="create-modal"
              className="bg-white dark:bg-[#232629] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            >
              <div className="p-4 border-b dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/10">
                <h3 className="font-bold text-lg">{editingArticle ? 'Edit Insight' : 'Create Insight'}</h3>
                <button onClick={() => { setShowCreateForm(false); setEditingArticle(null); setMediaPreview(null); }} className="hover:bg-gray-200 dark:hover:bg-white/10 p-2 rounded-full"><FaTimes /></button>
              </div>
              <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="flex gap-3 mb-4">
                   {userProfile.profilePic ? (
                     <Image 
                       src={userProfile.profilePic} 
                       alt="Author" 
                       width={48} 
                       height={48} 
                       className="w-12 h-12 rounded-full object-cover" 
                     />
                   ) : (
                     <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white"><FaUser size={20} /></div>
                   )}
                   <div>
                     <h4 className="font-bold text-[15px]">{userProfile.name}</h4>
                     <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                       <FaGlobeAmericas /> Public Insight
                     </span>
                   </div>
                </div>
                <textarea 
                  autoFocus
                  placeholder="Share your technical wisdom or thoughts..."
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full bg-transparent border-none outline-none text-lg min-h-[150px] resize-none placeholder:text-gray-400 font-medium leading-relaxed"
                />

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags?.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-2">
                        #{tag}
                        <button onClick={() => setFormData(prev => ({ ...prev, tags: prev.tags.filter((_, idx) => idx !== i) }))} className="hover:text-red-500 transition-colors"><FaTimes /></button>
                      </span>
                    ))}
                  </div>
                  <input 
                    type="text"
                    placeholder="Add tags (press Enter)..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const val = e.target.value.trim().replace(/^#/, '');
                        if (val && !formData.tags.includes(val)) {
                          setFormData(prev => ({ ...prev, tags: [...prev.tags, val] }));
                          e.target.value = '';
                        }
                      }
                    }}
                    className="w-full bg-gray-100 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:ring-1 focus:ring-blue-500/50"
                  />
                </div>
                
                {mediaPreview && (
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl mb-4 group ring-1 ring-white/10 dark:ring-white/20 shadow-2xl">
                    {uploading && (
                      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-6 transition-all duration-500">
                        <div className="w-full max-w-[200px] h-2 bg-white/10 rounded-full overflow-hidden mb-4 border border-white/10">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] drop-shadow-lg">{Math.round(uploadProgress)}% Uploading...</span>
                      </div>
                    )}
                    {mediaPreview.type === 'video' ? (
                      <video src={mediaPreview.url} controls className="w-full max-h-[400px]" />
                    ) : (
                      <div className="relative w-full h-[300px] max-h-[400px]">
                        <Image 
                          src={mediaPreview.url} 
                          alt="Media Preview" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    )}
                    <button 
                       onClick={() => { setMediaPreview(null); setFormData(p => ({ ...p, mediaUrl: '', mediaType: '' })); }}
                       className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all active:scale-90"
                    ><FaTimes /></button>
                  </div>
                )}
              </div>
              <div className="p-4 bg-gray-50/50 dark:bg-black/10 flex justify-between items-center">
                 <div className="flex gap-1">
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*,video/*" onChange={handleMediaUpload} />
                    <button onClick={() => fileInputRef.current?.click()} className="p-3 hover:bg-blue-500/10 rounded-full text-blue-500 transition-all"><FaCamera size={20} /></button>
                    <button onClick={() => fileInputRef.current?.click()} className="p-3 hover:bg-indigo-500/10 rounded-full text-indigo-500 transition-all"><FaFilm size={20} /></button>
                 </div>
                 <button 
                   disabled={!formData.content.trim() || uploading || saving}
                   onClick={handleSubmit}
                   className="px-8 py-2.5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg active:scale-95 flex items-center gap-2"
                 >
                   {(uploading || saving) && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                   {saving ? 'Saving...' : uploading ? 'Uploading...' : editingArticle ? 'Update Insight' : 'Publish Insight'}
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Profile Edit Modal */}
      <AnimatePresence>
        {showProfileEdit && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-[#232629] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black">Edit Profile</h2>
                  <button onClick={() => setShowProfileEdit(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"><FaTimes /></button>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div 
                      onClick={() => onboardingPicRef.current?.click()}
                      className="group relative w-32 h-32 mx-auto rounded-full bg-gray-100 dark:bg-[#1a1c1e] border-2 border-white dark:border-gray-800 shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all overflow-hidden"
                    >
                      {onboardingPicPreview || userProfile.profilePic ? (
                        <Image 
                          src={onboardingPicPreview || userProfile.profilePic} 
                          alt="Profile" 
                          fill 
                          className="object-cover" 
                        />
                      ) : (
                        <FaUserCircle size={64} className="text-gray-400" />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <FaCamera className="text-white text-xl" />
                      </div>
                    </div>
                    <p className="mt-3 text-[11px] font-black uppercase tracking-widest text-blue-500">Tap to change photo</p>
                    <input 
                      type="file" 
                      ref={onboardingPicRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setOnboardingPic(file);
                          const reader = new FileReader();
                          reader.onloadend = () => setOnboardingPicPreview(reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2 block">Display Name</label>
                    <input 
                      type="text" 
                      value={onboardingName || userProfile.name}
                      onChange={(e) => setOnboardingName(e.target.value)}
                      className="w-full bg-gray-100 dark:bg-[#1a1c1e] border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  <button 
                    onClick={() => handleProfileUpdate(onboardingName || userProfile.name, onboardingPic)}
                    disabled={uploading}
                    className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    {uploading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Save Changes'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <div className="bg-white dark:bg-[#232629] rounded-2xl p-4 border border-black/10 dark:border-white/5 animate-pulse">
      <div className="flex gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-200 dark:bg-white/10 rounded-full" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-200 dark:bg-white/10 rounded w-1/3" />
          <div className="h-3 bg-gray-200 dark:bg-white/10 rounded w-1/4" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-white/10 rounded w-5/6" />
      </div>
      <div className="h-[200px] bg-gray-200 dark:bg-white/10 rounded-2xl" />
    </div>
  );
}

function ArticleCard({ article, currentUserId, onLike, onComment, onEdit, onDelete, onShare, isOptimistic }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const isLiked = article.likes?.includes(currentUserId);

  return (
    <motion.article 
      layout
      className={`bg-white dark:bg-[#232629] rounded-2xl shadow-sm border border-black/10 dark:border-white/5 mb-5 overflow-hidden hover:shadow-lg transition-all duration-500 ${isOptimistic ? 'opacity-70 grayscale-[0.5]' : ''}`}
    >
      {isOptimistic && (
        <div className="bg-blue-500/10 px-4 py-1 flex items-center gap-2 border-b dark:border-white/5">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Syncing with Cosmos...</span>
        </div>
      )}
      <div className="p-4 flex justify-between items-start">
        <div className="flex gap-3">
           <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
             {article.authorPic ? (
               <Image 
                 src={article.authorPic} 
                 alt={article.authorName} 
                 fill 
                 className="object-cover" 
               />
             ) : (
               <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                 <FaUser size={20} />
               </div>
             )}
           </div>
           <div>
             <h4 className="font-black text-[15px] group hover:underline cursor-pointer">{article.authorName}</h4>
             <p className="text-[12px] text-gray-500 dark:text-gray-400 font-medium">Digital Creator | Insight Sharer</p>
             <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5 font-bold tracking-tight">
                <span>{new Date(article.createdAt?.toDate?.() || Date.now()).toLocaleDateString()}</span>
                <span>•</span>
                <FaGlobeAmericas size={10} />
             </div>
           </div>
        </div>
        {article.authorId === currentUserId && (
          <div className="flex gap-1 group">
             <button onClick={onEdit} className="p-2.5 hover:bg-blue-500/10 text-gray-400 hover:text-blue-500 rounded-full transition-all"><FaEdit size={14} /></button>
             <button onClick={onDelete} className="p-2.5 hover:bg-red-500/10 text-gray-400 hover:text-red-500 rounded-full transition-all"><FaTrash size={14} /></button>
          </div>
        )}
      </div>

      <div className="px-4 pb-3">
        <p className="text-[15px] leading-[1.6] whitespace-pre-wrap font-medium">{article.content}</p>
        
        {article.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-blue-500 text-[11px] font-black uppercase tracking-widest hover:underline cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {article.mediaUrl && (
        <div className="bg-black/5 dark:bg-black/20 flex items-center justify-center">
          {article.mediaType === 'video' ? (
            <video src={article.mediaUrl} controls className="max-h-[500px] w-full" />
          ) : (
            <div className="relative w-full h-[400px] max-h-[550px]">
              <Image 
                src={article.mediaUrl} 
                alt="Article media" 
                fill 
                className="object-contain" 
              />
            </div>
          )}
        </div>
      )}

      <div className="px-4 py-3 border-b dark:border-white/5 flex justify-between items-center text-[12px] font-bold text-gray-500">
         <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white ring-2 ring-white dark:ring-gray-800 shadow-sm"><FaHeart /></div>
            <span className="hover:text-blue-600 cursor-pointer">{article.likes?.length || 0}</span>
         </div>
         <div className="flex gap-4">
            <span onClick={() => setShowComments(!showComments)} className="hover:underline cursor-pointer">{article.comments?.length || 0} comments</span>
            <span>{article.shares || 0} shares</span>
         </div>
      </div>

      <div className="px-1 py-1 flex justify-around">
         <button onClick={onLike} className={`p-3 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-[14px] font-black ${isLiked ? 'text-blue-500' : 'text-gray-500'}`}>{isLiked ? <FaHeart /> : <FaRegHeart />} Like</button>
         <button onClick={() => setShowComments(!showComments)} className="p-3 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-[14px] font-black text-gray-500"><FaComment /> Comment</button>
         <button onClick={onShare} className="p-3 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-[14px] font-black text-gray-500"><FaShare /> Share</button>
      </div>

      <AnimatePresence>
        {showComments && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="p-4 border-t dark:border-white/5 bg-gray-50/30 dark:bg-black/10">
            <div className="flex gap-2 mb-4">
              <input 
                placeholder="Write a thoughtful comment..." 
                value={commentText} 
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => { if(e.key === 'Enter') { onComment(commentText); setCommentText(''); } }}
                className="flex-1 bg-white dark:bg-[#1a1c1e] border dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" 
              />
              <button onClick={() => { onComment(commentText); setCommentText(''); }} className="p-3 bg-blue-600 text-white rounded-xl active:scale-95 transition-all"><FaPaperPlane size={14} /></button>
            </div>
            <div className="space-y-4">
              {article.comments?.map(c => (
                <div key={c.id} className="flex gap-3">
                  {c.userPic ? (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image 
                        src={c.userPic} 
                        alt={c.userName} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                      <FaUser size={12} />
                    </div>
                  )}
                  <div className="bg-gray-100 dark:bg-[#1a1c1e] p-3 rounded-2xl flex-1 relative ring-1 ring-black/5">
                    <h5 className="font-black text-[12px] mb-1">{c.userName}</h5>
                    <p className="text-[13px] font-medium leading-[1.5]">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

