import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence, collection, addDoc, getDoc, getDocs, query, orderBy, where, doc, updateDoc, deleteDoc, setDoc, serverTimestamp, onSnapshot, arrayUnion, arrayRemove, increment } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYEo4o-7E26euG4DnGthoGzpbw1e-WtA0",
  authDomain: "rahul-a3af4.firebaseapp.com",
  databaseURL: "https://rahul-a3af4-default-rtdb.firebaseio.com",
  projectId: "rahul-a3af4",
  storageBucket: "rahul-a3af4.firebasestorage.app",
  messagingSenderId: "200265465858",
  appId: "1:200265465858:web:8533662b73c4b467aa271b",
  measurementId: "G-4EH784L5Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = () => signOut(auth);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
export { analytics };

if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err?.code === 'failed-precondition') {
      console.warn('Firestore persistence not enabled (multiple tabs).');
      return;
    }
    if (err?.code === 'unimplemented') {
      console.warn('Firestore persistence not supported in this browser/environment.');
      return;
    }
    console.warn('Firestore persistence enable failed:', err);
  });
}

const isOfflineFirestoreError = (error) => {
  const code = error?.code || '';
  const message = String(error?.message || '').toLowerCase();
  return code === 'unavailable' || message.includes('client is offline');
};

let signInPromise = null;

const ensureSignedIn = async () => {
  if (auth.currentUser) return auth.currentUser;
  if (signInPromise) return signInPromise;

  signInPromise = (async () => {
    try {
      const cred = await signInAnonymously(auth);
      return cred.user;
    } catch (error) {
      // Handle various auth configuration errors
      if (
        error?.code === 'auth/admin-restricted-operation' ||
        error?.code === 'auth/operation-not-allowed' ||
        error?.code === 'auth/configuration-not-found'
      ) {
        // Firebase Auth not configured - use fallback user
        console.warn('Firebase Auth not configured - using fallback user mode');
        
        // Create a fallback user object for basic functionality
        const fallbackUser = {
          uid: 'fallback-user-' + Math.random().toString(36).substr(2, 9),
          isAnonymous: true,
          displayName: 'Guest User',
          isFallback: true
        };
        
        console.warn('Using fallback user for basic functionality. Some features may be limited.');
        return fallbackUser;
      }
      throw error;
    } finally {
      signInPromise = null;
    }
  })();

  return signInPromise;
};

export { ensureSignedIn };

const storageRefFromDownloadUrl = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('firebasestorage.googleapis.com')) return null;
  try {
    const u = new URL(url);
    // Extract the full path after '/o/' and before any parameters
    const decodedPath = decodeURIComponent(u.pathname.split('/o/')[1]);
    return ref(storage, decodedPath);
  } catch (e) {
    console.warn('Failed to parse storage URL:', e);
    return null;
  }
};

// Media Upload functions
export const compressImage = (file, maxWidth = 1000, quality = 0.5) => {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith('image/')) {
      resolve(file);
      return;
    }

    // Set a timeout to prevent hanging if image processing fails
    const timeout = setTimeout(() => {
      console.warn('Image compression timed out, uploading original file.');
      resolve(file);
    }, 5000);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = () => {
      clearTimeout(timeout);
      resolve(file);
    };
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(file);
      };
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          clearTimeout(timeout);
          if (!blob) {
            resolve(file);
            return;
          }
          const compressedFile = new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        }, 'image/jpeg', quality);
      };
    };
  });
};

export const uploadMedia = async (file, folder = 'articles', onProgress = () => {}) => {
  try {
    await ensureSignedIn();
    console.log(`Starting optimized upload for ${file.name} to ${folder}...`);
    const fileToUpload = file.type.startsWith('image/') ? await compressImage(file) : file;
    const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    
    return new Promise((resolve, reject) => {
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
          console.log(`Upload is ${progress}% done`);
        }, 
        (error) => {
          console.error('Upload failed:', error);
          reject(error);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(`Upload successful: ${downloadURL}`);
          resolve({
            url: downloadURL,
            type: file.type.startsWith('video/') ? 'video' : 'image'
          });
        }
      );
    });
  } catch (error) {
    console.error('Error in uploadMedia:', error);
    throw error;
  }
};

// Notes functions
export const addNote = async (bookId, userId, noteText, pageNumber = 1) => {
  try {
    await ensureSignedIn();
    const docRef = await addDoc(collection(db, 'notes'), {
      bookId,
      userId,
      text: noteText,
      pageNumber,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  }
};

export const getNotes = async (bookId, userId = null) => {
  try {
    const notesQuery = userId 
      ? query(collection(db, 'notes'), where('bookId', '==', bookId), where('userId', '==', userId), orderBy('createdAt', 'desc'))
      : query(collection(db, 'notes'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(notesQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting notes:', error);
    throw error;
  }
};

// Subscribe to real-time notes updates
export const subscribeToNotes = (bookId, callback) => {
  const notesQuery = query(collection(db, 'notes'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
  
  return onSnapshot(notesQuery, (querySnapshot) => {
    const notes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(notes);
  });
};

// Update note
export const updateNote = async (noteId, updates) => {
  try {
    const noteRef = doc(db, 'notes', noteId);
    await updateDoc(noteRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

// Delete note
export const deleteNote = async (noteId) => {
  try {
    const noteRef = doc(db, 'notes', noteId);
    await deleteDoc(noteRef);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

// Ratings functions
export const addRating = async (bookId, userId, rating, comment = '', userName = null) => {
  try {
    await ensureSignedIn();
    const docRef = await addDoc(collection(db, 'ratings'), {
      bookId,
      userId,
      rating,
      comment,
      userName,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding rating:', error);
    throw error;
  }
};

export const getRatings = async (bookId) => {
  try {
    const ratingsQuery = query(collection(db, 'ratings'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(ratingsQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting ratings:', error);
    throw error;
  }
};

// Subscribe to real-time updates
export const subscribeToRatings = (bookId, callback) => {
  const ratingsQuery = query(collection(db, 'ratings'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
  
  return onSnapshot(ratingsQuery, (querySnapshot) => {
    const ratings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(ratings);
  });
};

// Books functions
export const addBook = async (bookData) => {
  try {
    await ensureSignedIn();
    const docRef = await addDoc(collection(db, 'books'), {
      ...bookData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const booksQuery = query(collection(db, 'books'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(booksQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting books:', error);
    throw error;
  }
};

// Articles functions
export const addArticle = async (articleData) => {
  try {
    await ensureSignedIn();
    const docRef = await addDoc(collection(db, 'articles'), {
      ...articleData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      likes: [],
      comments: [],
      shares: 0
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding article:', error);
    throw error;
  }
};

export const updateArticle = async (articleId, updates) => {
  try {
    await ensureSignedIn();
    if (updates?.mediaUrl) {
      try {
        const currentSnap = await getDoc(doc(db, 'articles', articleId));
        const current = currentSnap.exists() ? currentSnap.data() : null;
        const oldUrl = current?.mediaUrl;
        const newUrl = updates.mediaUrl;
        if (oldUrl && oldUrl !== newUrl) {
          const oldRef = storageRefFromDownloadUrl(oldUrl);
          if (oldRef) await deleteObject(oldRef);
        }
      } catch (e) {
        console.warn('Failed to cleanup old article media:', e);
      }
    }

    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating article:', error);
    throw error;
  }
};

export const deleteArticle = async (articleId) => {
  try {
    await ensureSignedIn();
    try {
      const snap = await getDoc(doc(db, 'articles', articleId));
      const data = snap.exists() ? snap.data() : null;
      if (data?.mediaUrl) {
        const mediaRef = storageRefFromDownloadUrl(data.mediaUrl);
        if (mediaRef) await deleteObject(mediaRef);
      }
    } catch (e) {
      console.warn('Failed to delete article media from Storage:', e);
    }

    const articleRef = doc(db, 'articles', articleId);
    await deleteDoc(articleRef);
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};

export const toggleLikeArticle = async (articleId, userId, isLiked) => {
  try {
    await ensureSignedIn();
    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      likes: isLiked ? arrayRemove(userId) : arrayUnion(userId)
    });
  } catch (error) {
    console.error('Error toggling like:', error);
    throw error;
  }
};

export const addCommentToArticle = async (articleId, commentData) => {
  try {
    await ensureSignedIn();
    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      comments: arrayUnion({
        ...commentData,
        createdAt: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

export const cleanupExpiredArticles = async (expirationDate) => {
  try {
    const q = query(collection(db, 'articles'), where('createdAt', '<', expirationDate));
    const snapshot = await getDocs(q);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error cleaning up articles:', error);
    throw error;
  }
};

export const shareArticle = async (articleId) => {
  try {
    await ensureSignedIn();
    const articleRef = doc(db, 'articles', articleId);
    await updateDoc(articleRef, {
      shares: increment(1)
    });
  } catch (error) {
    console.error('Error sharing article:', error);
    throw error;
  }
};

export const getArticles = async () => {
  try {
    const articlesQuery = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(articlesQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting articles:', error);
    throw error;
  }
};

// User Profile functions
export const upsertUserProfile = async (userData) => {
  if (!userData.id) throw new Error('User ID is required for upsert.');
  try {
    await ensureSignedIn();

    try {
      const displayName = userData?.name || undefined;
      const photoURL = userData?.profilePic || undefined;
      if (auth.currentUser && (displayName || photoURL) && !auth.currentUser?.isFallback) {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL
        });
      }
    } catch (e) {
      if (e?.code === 'auth/configuration-not-found' || e?.code === 'auth/requires-recent-login') {
        console.warn('Firebase Auth profile update failed - using Firestore only');
      } else {
        console.warn('Failed to update Firebase Auth profile:', e);
      }
    }

    const userRef = doc(db, 'users', userData.id);
    await setDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error upserting user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  if (!userId) return null;
  try {
    const userRef = doc(db, 'users', userId);
    const snap = await getDoc(userRef);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (error) {
    if (isOfflineFirestoreError(error)) return null;
    console.error('Error getting user profile:', error);
    throw error;
  }
};

// Notion-style pages
export const createNotionPage = async (data = {}) => {
  try {
    const user = await ensureSignedIn();
    const docRef = await addDoc(collection(db, 'notionPages'), {
      title: data.title || 'Untitled',
      content: data.content || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      ownerUid: user?.uid || null
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating notion page:', error);
    throw error;
  }
};

export const updateNotionPage = async (pageId, updates) => {
  try {
    await ensureSignedIn();
    const pageRef = doc(db, 'notionPages', pageId);
    await updateDoc(pageRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating notion page:', error);
    throw error;
  }
};

export const deleteNotionPage = async (pageId) => {
  try {
    await ensureSignedIn();
    await deleteDoc(doc(db, 'notionPages', pageId));
  } catch (error) {
    console.error('Error deleting notion page:', error);
    throw error;
  }
};

export const subscribeToNotionPages = (callback) => {
  const q = query(collection(db, 'notionPages'), orderBy('updatedAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const pages = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(pages);
  });
};

export const subscribeToNotionPage = (pageId, callback) => {
  const pageRef = doc(db, 'notionPages', pageId);
  return onSnapshot(pageRef, (snap) => {
    if (!snap.exists()) return callback(null);
    callback({ id: snap.id, ...snap.data() });
  });
};
