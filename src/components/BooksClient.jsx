'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { FaBookOpen, FaSearch, FaFilter, FaTimes, FaStar } from 'react-icons/fa';
import BookCard from './BookCard';
import BookReaderSimple from './BookReaderSimple';
import { booksData, categories } from '@/data/books';
import { addRating, getRatings, subscribeToRatings } from '@/lib/firebase';

export default function BooksClient() {
  const { language } = useLanguage();
  const t = translations[language].more_books || {};
  const list = t.list || [];

  // Demo user - no Clerk needed
  const user = { id: 'demo-user' };
  const isLoaded = true;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showReader, setShowReader] = useState(false);
  const [showRatingsModal, setShowRatingsModal] = useState(false);
  const [bookRatings, setBookRatings] = useState([]);
  const [allRatings, setAllRatings] = useState({}); // Store all ratings by bookId
  const [loading, setLoading] = useState(false);

  const floatingKanji = ['本', '読', '学', '知', '心', '道'];

  // Real-time subscription for ratings when modal is open
  useEffect(() => {
    if (showRatingsModal && selectedBook) {
      const unsubscribe = subscribeToRatings(selectedBook.id, (ratings) => {
        setBookRatings(ratings);
        // Also update the allRatings cache
        setAllRatings(prev => ({
          ...prev,
          [selectedBook.id]: ratings
        }));
      });
      return unsubscribe;
    }
  }, [showRatingsModal, selectedBook]);

  // Load all ratings on component mount
  useEffect(() => {
    const loadAllRatings = async () => {
      try {
        const ratingsPromises = booksData.map(async (book) => {
          const ratings = await getRatings(book.id);
          return { bookId: book.id, ratings };
        });
        
        const allRatingsData = await Promise.all(ratingsPromises);
        const ratingsMap = {};
        allRatingsData.forEach(({ bookId, ratings }) => {
          ratingsMap[bookId] = ratings;
        });
        
        setAllRatings(ratingsMap);
      } catch (error) {
        console.error('Error loading all ratings:', error);
      }
    };

    loadAllRatings();
  }, []);

  useEffect(() => {
    let filtered = booksData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory]);

  const handleRead = (book) => {
    setSelectedBook(book);
    setShowReader(true);
  };

  const handleRate = async (bookId, userId, rating, comment, userName) => {
    setLoading(true);
    try {
      await addRating(bookId, userId, rating, comment, userName);
      
      // Refresh ratings if modal is open
      if (showRatingsModal && selectedBook?.id === bookId) {
        const ratings = await getRatings(bookId);
        setBookRatings(ratings);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchRatings = async (bookId) => {
    try {
      const ratings = await getRatings(bookId);
      setBookRatings(ratings);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  const handleViewRatings = async (book) => {
    setSelectedBook(book);
    setShowRatingsModal(true);
    
    // Use cached ratings immediately for instant display
    if (allRatings[book.id]) {
      setBookRatings(allRatings[book.id]);
    }
    
    // Also fetch fresh ratings to ensure we have the latest
    await fetchRatings(book.id);
  };

  // Real-time ratings subscription
  useEffect(() => {
    if (!showRatingsModal || !selectedBook) return;

    const unsubscribe = subscribeToRatings(selectedBook.id, (ratings) => {
      setBookRatings(ratings);
    });

    return () => unsubscribe();
  }, [showRatingsModal, selectedBook]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-400 opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        {floatingKanji.map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
              y: [0, -100, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
            className="absolute text-[15vw] font-noto text-black dark:text-white"
            style={{
              left: `${(i + 1) * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            {k}
          </motion.div>
        ))}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[120px] -mr-[25vw] -mt-[10vw]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[100px] -ml-[20vw] -mb-[10vw]"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, rotate: 10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-block p-5 rounded-[1.5rem] bg-black text-white dark:bg-white dark:text-black mb-8 shadow-2xl"
          >
            <FaBookOpen className="text-4xl" />
          </motion.div>
          <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.title || 'Digital Library'}
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-500 max-w-2xl mx-auto font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle || 'Read, download, and explore our collection of books'}
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books by title, author, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaTimes />
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onRead={handleRead}
                  onRate={handleRate}
                  onViewRatings={handleViewRatings}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaBookOpen className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No books found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Book Reader Modal */}
      {showReader && selectedBook && (
        <BookReaderSimple
          bookId={selectedBook.id}
          bookUrl={selectedBook.readUrl}
          bookTitle={selectedBook.title}
          onClose={() => {
            setShowReader(false);
            setSelectedBook(null);
          }}
        />
      )}

      {/* Ratings Modal */}
      {showRatingsModal && selectedBook && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedBook.title} - Ratings & Reviews
                </h2>
                <button
                  onClick={() => {
                    setShowRatingsModal(false);
                    setSelectedBook(null);
                    setBookRatings([]);
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {bookRatings.length > 0 ? (
                <div className="space-y-4">
                  {bookRatings.map((rating) => (
                    <div key={rating.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(rating.rating)}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {rating.userName ? `${rating.userName} • ` : ''}{rating.createdAt?.toDate?.() ? new Date(rating.createdAt.toDate()).toLocaleDateString() : new Date().toLocaleDateString()}
                        </span>
                      </div>
                      {rating.comment && (
                        <p className="text-gray-700 dark:text-gray-300">{rating.comment}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaStar className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    No ratings yet. Be the first to rate this book!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
