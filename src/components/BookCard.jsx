'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaStar, FaDownload, FaBookOpen, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const BookCard = ({ book, onRead, onRate, onViewRatings }) => {
  // Demo user - no Clerk needed
  const user = { id: 'demo-user' };
  const isLoaded = true;
  const [isRating, setIsRating] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const handleRating = async () => {
    if (isSubmitting) return; // Prevent double submission
    
    setIsSubmitting(true);
    try {
      const userId = user?.id || 'demo-user';
      await onRate(book.id, userId, userRating, comment, userName);
      
      // Show alert and clear form for next submission
      alert('Done!');
      setUserRating(0);
      setComment('');
      // Keep form open and userName for convenience
      
    } catch (error) {
      console.error('Rating error:', error);
      alert('Failed to submit rating. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = book.downloadUrl;
    link.download = `${book.title.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">
          {book.category}
        </div>
        <FaBookOpen className="text-6xl text-blue-500 dark:text-blue-400" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{book.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {book.author}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(book.rating)}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {book.rating} ({book.totalRatings} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {book.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>{book.pages} pages</span>
          <span>{book.year}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onRead(book)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaBookOpen className="text-sm" />
            Read
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaDownload className="text-sm" />
            Download
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => onViewRatings(book)}
            className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
          >
            View all ratings
          </button>
          
          <button
            onClick={() => setIsRating(!isRating)}
            className="ml-4 text-sm text-green-500 hover:text-green-600 transition-colors"
          >
            Rate this book
          </button>
        </div>

        {isRating && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="mb-3">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm mb-3"
              />
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium">Your rating:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className="text-xl transition-colors"
                  >
                    {star <= userRating ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-gray-400 hover:text-yellow-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a review (optional)..."
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm resize-none"
              rows={3}
            />
            
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleRating}
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm font-medium"
              >
                Submit Rating
              </button>
              <button
                onClick={() => {
                  setIsRating(false);
                  setUserRating(0);
                  setComment('');
                  setUserName('');
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BookCard;
