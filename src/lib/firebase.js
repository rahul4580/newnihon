import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc, deleteDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiWYxNNDEnytSjry3DXFzXRcyNaTyTqzg",
  authDomain: "rahul-79a9f.firebaseapp.com",
  projectId: "rahul-79a9f",
  storageBucket: "rahul-79a9f.firebasestorage.app",
  messagingSenderId: "333910964548",
  appId: "1:333910964548:web:bce4b24ee065332e94ff11",
  measurementId: "G-4F699J6CKY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Notes functions
export const addNote = async (bookId, userId, noteText, pageNumber = 1) => {
  try {
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

export const subscribeToNotes = (bookId, userId = null, callback) => {
  const notesQuery = userId 
    ? query(collection(db, 'notes'), where('bookId', '==', bookId), where('userId', '==', userId), orderBy('createdAt', 'desc'))
    : query(collection(db, 'notes'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
  
  return onSnapshot(notesQuery, (querySnapshot) => {
    const notes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(notes);
  });
};

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
    const docRef = await addDoc(collection(db, 'ratings'), {
      bookId,
      userId,
      userName: userName || 'You',
      rating,
      comment,
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

export { db, collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc, deleteDoc, serverTimestamp };
