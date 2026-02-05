# 📚 How to Add Books to Your Website

## 🎯 Quick Steps:

### 1. Add PDF Book
```
public/books/your-book-name.pdf
```

### 2. Add Cover Image (Optional)
```
public/images/books/your-book-name.jpg
```

### 3. Add to books.js (if new book)
```javascript
{
  id: 'unique-id',
  title: 'Your Book Title',
  author: 'Author Name',
  category: 'Category',
  description: 'Book description',
  cover: '/images/books/your-book-name.jpg',
  downloadUrl: '/books/your-book-name.pdf',
  readUrl: '/books/your-book-name.pdf',
  rating: 4.5,
  totalRatings: 100,
  tags: ['tag1', 'tag2'],
  pages: 200,
  language: 'English',
  year: 2023
}
```

## 🚀 Test Your Book:
1. Go to: http://localhost:3000/more/books
2. Find your book
3. Click "Read" to view online
4. Click "Download" to save PDF

## ✅ Current Books Ready:
- Atomic Habits
- The World's Greatest Philosophers
- + 7 more books

Just add PDF files to make them work!
