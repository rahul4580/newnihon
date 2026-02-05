'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { FaTimes, FaSearchPlus, FaSearchMinus, FaSync, FaDownload, FaTrash, FaEdit } from 'react-icons/fa';
import { addNote, getNotes, subscribeToNotes, updateNote, deleteNote } from '../lib/firebase';

const BookReaderSimple = ({ bookUrl, bookTitle, bookId, onClose }) => {
  // Demo user - no Clerk needed
  const user = { id: 'demo-user' };
  const isLoaded = true;
  const [scale, setScale] = useState(1.0);
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleZoomIn = useCallback(() => {
    setScale(prevScale => Math.min(prevScale + 0.2, 3.0));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1.0);
  }, []);

  // Load notes from Firebase when component mounts or bookId changes
  useEffect(() => {
    if (!bookId) return;

    const userId = user?.id || 'demo-user';
    const unsubscribe = subscribeToNotes(bookId, userId, (fetchedNotes) => {
      setNotes(fetchedNotes.map(note => ({
        ...note,
        timestamp: note.createdAt?.toDate?.() ? note.createdAt.toDate().toLocaleString() : 
                  note.createdAt ? new Date(note.createdAt).toLocaleString() : 
                  new Date().toLocaleString()
      })));
    });

    return () => unsubscribe();
  }, [bookId, user]);

  const handleSaveNote = async () => {
    if (!newNote.trim() || !bookId) return;
    
    setLoading(true);
    try {
      const userId = user?.id || 'demo-user';
      
      if (editingNote) {
        await updateNote(editingNote.id, { text: newNote.trim() });
        setEditingNote(null);
      } else {
        await addNote(bookId, userId, newNote.trim());
      }
      setNewNote('');
      setShowNoteModal(false);
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setNewNote(note.text);
    setShowNoteModal(true);
  };

  const handleDeleteNote = async (noteId) => {
    if (!confirm('Are you sure you want to delete this note?')) return;
    
    try {
      await deleteNote(noteId);
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = bookUrl;
    link.download = `${bookTitle.replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddNote = () => {
    setEditingNote(null);
    setNewNote('');
    setShowNoteModal(true);
  };

  const handleCancelNote = () => {
    setShowNoteModal(false);
    setEditingNote(null);
    setNewNote('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate flex-1">
          {bookTitle}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors"
            title="Download book"
          >
            <FaDownload className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Zoom out"
          >
            <FaSearchMinus className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Zoom in"
          >
            <FaSearchPlus className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Reset zoom"
          >
            <FaSync className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
            title="Close reader"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* PDF Viewer */}
        <div className="flex-1 bg-white dark:bg-gray-800 overflow-auto">
          <div className="p-4">
            <iframe
              src={bookUrl}
              width="100%"
              height="600px"
              className="border border-gray-300 dark:border-gray-600 rounded-lg"
              title={bookTitle}
            />
          </div>
        </div>

        {/* Notes Sidebar */}
        <div className="w-80 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">Notes</h3>
              <button
                onClick={handleAddNote}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors"
              >
                Add Note
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {notes.length > 0 ? (
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{note.text}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Page {note.pageNumber || 1}</span>
                      <div className="flex items-center gap-2">
                        <span>{note.timestamp}</span>
                        <button
                          onClick={() => handleEditNote(note)}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                          title="Edit note"
                        >
                          <FaEdit className="text-blue-500" />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                          title="Delete note"
                        >
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  No notes yet. Click "Add Note" to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Note Modal */}
      {showNoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {editingNote ? 'Edit Note' : 'Add Note'}
                </h3>
                <button
                  onClick={handleCancelNote}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write your note here..."
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                autoFocus
              />
              
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleSaveNote}
                  disabled={!newNote.trim() || loading}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  {loading ? 'Saving...' : (editingNote ? 'Update Note' : 'Save Note')}
                </button>
                <button
                  onClick={handleCancelNote}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookReaderSimple;
