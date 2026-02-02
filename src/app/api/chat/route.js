import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Global variable to store chat history in memory
// NOTE: This clears when the server restarts. For production, use a database (Redis/Postgres).
let chatHistory = [
  {
    id: 'system-1',
    user: 'System',
    text: 'Welcome to the Japanese Conversation Room! (ようこそ！)',
    timestamp: Date.now(),
    isSystem: true,
  }
];

export async function GET() {
  // Return the last 100 messages
  return NextResponse.json(chatHistory.slice(-100));
}

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type');
    
    if (contentType && contentType.includes('multipart/form-data')) {
      // Handle file upload
      const formData = await request.formData();
      const user = formData.get('user');
      const text = formData.get('text') || '';
      const file = formData.get('file');
      
      if (!user) {
        return NextResponse.json({ error: 'Missing user' }, { status: 400 });
      }

      let fileUrl = null;
      let fileType = null;

      if (file) {
        // Validate file
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Check file size (5MB limit)
        if (buffer.length > 5 * 1024 * 1024) {
          return NextResponse.json({ error: 'File too large. Max size is 5MB.' }, { status: 400 });
        }

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'text/plain'];
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json({ error: 'Invalid file type. Only images, PDFs, and text files are allowed.' }, { status: 400 });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2);
        const extension = path.extname(file.name);
        const filename = `${timestamp}-${randomString}${extension}`;
        
        // Ensure uploads directory exists
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        try {
          await mkdir(uploadsDir, { recursive: true });
        } catch (error) {
          // Directory might already exist
        }

        // Save file
        const filepath = path.join(uploadsDir, filename);
        await writeFile(filepath, buffer);
        
        fileUrl = `/uploads/${filename}`;
        fileType = file.type.startsWith('image/') ? 'image' : 'file';
      }

      const newMessage = {
        id: Date.now().toString() + Math.random().toString(36).substring(2),
        user: user,
        text: text,
        timestamp: Date.now(),
        isSystem: false,
        fileUrl: fileUrl,
        fileType: fileType,
        fileName: file?.name || null,
      };

      chatHistory.push(newMessage);

      // Keep memory usage check
      if (chatHistory.length > 500) {
        chatHistory = chatHistory.slice(-100);
      }

      return NextResponse.json({ success: true, message: newMessage });
    } else {
      // Handle text-only message
      const body = await request.json();
      const { user, text } = body;

      if (!user || !text) {
        return NextResponse.json({ error: 'Missing user or text' }, { status: 400 });
      }

      const newMessage = {
        id: Date.now().toString() + Math.random().toString(36).substring(2),
        user: user,
        text: text,
        timestamp: Date.now(),
        isSystem: false,
      };

      chatHistory.push(newMessage);

      // Keep memory usage check
      if (chatHistory.length > 500) {
        chatHistory = chatHistory.slice(-100);
      }

      return NextResponse.json({ success: true, message: newMessage });
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
