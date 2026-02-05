import { NextResponse } from 'next/server';
import { db, collection, addDoc, getDocs, query, orderBy, where, doc, updateDoc, serverTimestamp } from '../../../../lib/firebase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookId = searchParams.get('bookId');
    
    if (!bookId) {
      return NextResponse.json({ error: 'bookId is required' }, { status: 400 });
    }

    const ratingsQuery = query(
      collection(db, 'ratings'),
      where('bookId', '==', bookId),
      orderBy('createdAt', 'desc')
    );
    
    const snapshot = await getDocs(ratingsQuery);
    const ratings = (snapshot.docs || []).map(doc => ({ id: doc.id, ...doc.data() }));
    
    return NextResponse.json({ ratings });
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return NextResponse.json({ error: 'Failed to fetch ratings' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { bookId, userId, rating, comment } = await request.json();
    
    if (!bookId || !userId || rating === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ratingData = {
      bookId,
      userId,
      rating: Number(rating),
      comment: comment || '',
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'ratings'), ratingData);
    
    return NextResponse.json({ id: docRef.id, ...ratingData });
  } catch (error) {
    console.error('Error adding rating:', error);
    return NextResponse.json({ error: 'Failed to add rating' }, { status: 500 });
  }
}
