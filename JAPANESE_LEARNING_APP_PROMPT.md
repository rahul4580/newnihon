# Japanese Language Learning App - Development Prompt

## 🎯 Project Overview
Create a modern, interactive Japanese language learning application with a beautiful UI that teaches Hiragana, Katakana, Kanji, Grammar, Vocabulary, and Conversation skills through engaging interfaces and gamified learning experiences.

## 🏗️ Architecture Requirements

### **Tech Stack**
- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom Japanese design system
- **Animations**: Framer Motion (motion/react)
- **Icons**: React Icons (Fa icons)
- **State Management**: React hooks (useState, useEffect, useMemo, useCallback)
- **Audio**: Web Speech API for pronunciation
- **Storage**: localStorage for progress tracking

### **File Structure**
```
src/app/more/languages/
├── page.js                    # Main languages dashboard
├── hiragana/page.js          # Hiragana learning module
├── katakana/page.js          # Katakana learning module
├── n5-kanji/page.js         # N5 Kanji with exam system
├── n4-kanji/page.js         # N4 Kanji (intermediate)
├── n3-kanji/page.js         # N3 Kanji (advanced)
├── n2-kanji/page.js         # N2 Kanji (upper-intermediate)
├── n1-kanji/page.js         # N1 Kanji (advanced)
├── grammar/page.js           # Grammar lessons
├── vocabulary/page.js        # Vocabulary builder
├── listening/page.js         # Nihon Bot AI assistant
├── jlpt-prep/page.js        # Stories & Reading
├── anime-manga/page.js       # Media-based learning
└── conversation/page.js      # Speaking practice
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Japanese-inspired gradients
  - Hiragana: Pink to Rose (#ec4899 to #f43f5e)
  - Katakana: Cyan to Blue (#06b6d4 to #3b82f6)
  - Kanji: Purple to Indigo (#a855f7 to #6366f1)
  - Grammar: Emerald to Teal (#10b981 to #14b8a6)

### **Typography**
- **Japanese**: Noto Sans JP font family
- **Headings**: Font-black, tracking-tighter
- **Body**: Font-medium, leading-relaxed
- **UI Elements**: Font-black, uppercase, tracking-widest

### **UI Components**
- **Cards**: Rounded-2xl/3xl with shadows and hover effects
- **Buttons**: Rounded-full with gradient backgrounds
- **Modals**: Backdrop blur with scale animations
- **Progress**: Visual bars with percentage indicators
- **Backgrounds**: Decorative floating kanji elements

## 📚 Core Features

### **1. Character Learning (Hiragana/Katakana)**
```javascript
// Character dataset structure
const CHARACTER_DATA = {
  basic: [
    { char: 'あ', romaji: 'a', type: 'vowel' },
    { char: 'か', romaji: 'ka', type: 'k-row' },
    // ... all basic characters
  ],
  dakuten: [
    { char: 'が', romaji: 'ga' },
    // ... voiced characters
  ],
  yoon: [
    { char: 'きゃ', romaji: 'kya' },
    // ... compound characters
  ]
};
```

**Features Required:**
- Interactive character grid with hover effects
- Click-to-pronounce functionality
- Progress tracking with visual indicators
- Multiple study modes: Grid, Flashcards, Quiz
- Completion badges and statistics
- Responsive design for all devices

### **2. Kanji Learning System (N5-N1)**
```javascript
// Kanji dataset structure
const KANJI_DATA = {
  numbers: [
    { char: '一', meaning: 'One', onyomi: 'ichi', kunyomi: 'hito', strokes: 1 }
  ],
  daily: [
    { char: '日', meaning: 'Day', onyomi: 'nichi', kunyomi: 'hi', strokes: 4 }
  ],
  // ... categorized by difficulty and topic
};
```

**Features Required:**
- JLPT level progression (N5 → N1)
- Exam mode with countdown timers
- Multiple difficulty tiers (Easy, Medium, Hard, Elite)
- Sentence-based questions with context
- Real-time scoring and feedback
- Audio pronunciation for all kanji
- Progress persistence across sessions

### **3. Grammar Learning**
```javascript
// Grammar topics structure
const GRAMMAR_TOPICS = [
  {
    topic: 'Particles',
    description: '助詞 - Subject markers',
    examples: [
      { japanese: '学生が学校に行きます', english: 'The student goes to school' }
    ]
  }
];
```

**Features Required:**
- Topic-based learning modules
- Interactive examples with translations
- Practice exercises for each concept
- Progress tracking per topic
- Visual explanations of sentence structure

### **4. Main Dashboard**
```javascript
// Study modules configuration
const studyModules = [
  {
    title: 'Hiragana',
    description: 'ひらがな - Basic Japanese phonetic script',
    icon: <FaPen />,
    href: '/more/languages/hiragana',
    color: 'bg-pink-500',
    gradient: 'from-pink-400 to-pink-600'
  }
  // ... all modules
];
```

**Features Required:**
- Beautiful hero section with Japanese typography
- JLPT level overview cards
- Study module grid with hover effects
- Progress statistics
- Quick access to all learning modules

## 🎮 Interactive Features

### **Study Modes**
1. **Grid Mode**: Browse all characters/kanji
2. **Flashcards**: Flip cards for memorization
3. **Quiz Mode**: Multiple choice questions
4. **Exam Mode**: Timed challenges with scoring
5. **Practice Mode**: Writing and recognition

### **Gamification Elements**
- Progress bars and completion percentages
- Daily/weekly statistics tracking
- Achievement badges and milestones
- Streak counters for consistent practice
- Level-based difficulty progression

### **Audio Integration**
```javascript
// Text-to-speech implementation
const playSound = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  }
};
```

## 🎯 User Experience Requirements

### **Navigation**
- Breadcrumb navigation for easy backtracking
- Smooth page transitions with animations
- Mobile-responsive hamburger menu
- Quick access shortcuts

### **Progress Tracking**
- localStorage for persistent data
- Visual progress indicators
- Session statistics
- Learning streaks
- Achievement unlocks

### **Accessibility**
- Dark/light mode support
- Keyboard navigation support
- Screen reader compatibility
- High contrast options
- Touch-friendly interfaces

## 🚀 Performance Requirements

### **Optimization**
- Lazy loading for character datasets
- Efficient state management
- Smooth 60fps animations
- Minimal bundle size
- Fast page transitions

### **Responsive Design**
- Mobile-first approach
- Tablet-optimized layouts
- Desktop-enhanced features
- Touch gesture support

## 📱 Component Templates

### **Character Card Component**
```jsx
const CharacterCard = ({ character, romaji, onClick, completed }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    onClick={onClick}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer relative group"
  >
    {completed && (
      <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
        <FaCheck className="text-white text-xs" />
      </div>
    )}
    <div className="text-center">
      <span className="text-4xl font-noto font-black">{character}</span>
      <span className="text-xs font-black opacity-30 uppercase">{romaji}</span>
    </div>
  </motion.div>
);
```

### **Progress Bar Component**
```jsx
const ProgressBar = ({ progress, color }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
    <motion.div 
      className={`h-full bg-gradient-to-r ${color} rounded-full`}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </div>
);
```

## 🎨 Animation Guidelines

### **Page Transitions**
- Fade in from bottom for main content
- Scale animations for modals
- Slide animations for navigation
- Stagger animations for grids

### **Micro-interactions**
- Hover states with scale and shadow
- Button press feedback
- Card flip animations
- Progress bar animations
- Loading states

## 📊 Data Management

### **Character Datasets**
- Complete Hiragana (46 basic + variations)
- Complete Katakana (46 basic + variations)
- N5-N1 Kanji with metadata
- Grammar rules and examples
- Vocabulary lists by JLPT level

### **User Progress**
```javascript
// Progress tracking structure
const userProgress = {
  hiragana: {
    completed: ['あ', 'か', 'さ'],
    stats: { daily: 5, weekly: 23, lastCheck: '2026-02-11' }
  },
  kanji: {
    n5: { completed: 15, total: 100 },
    n4: { completed: 0, total: 150 }
  }
};
```

## 🔧 Development Guidelines

### **Code Standards**
- Functional components with hooks
- TypeScript for type safety
- Consistent naming conventions
- Modular component structure
- Performance-optimized rendering

### **Testing Requirements**
- Unit tests for core logic
- Integration tests for user flows
- Accessibility testing
- Performance testing
- Cross-browser compatibility

### **Deployment**
- Static site generation for performance
- CDN optimization for assets
- Progressive web app features
- SEO optimization
- Analytics integration

## 🎯 Success Metrics

### **Learning Outcomes**
- Character recognition accuracy
- Retention rates over time
- Progress completion rates
- User engagement duration
- Feature adoption rates

### **Technical Metrics**
- Page load times < 2 seconds
- Lighthouse scores > 90
- Mobile responsiveness 100%
- Accessibility compliance WCAG 2.1
- Error rates < 1%

---

## 🚀 Getting Started

1. **Setup Project**
   ```bash
   npx create-next-app@latest japanese-learning-app
   cd japanese-learning-app
   npm install framer-motion react-icons
   ```

2. **Install Dependencies**
   ```bash
   npm install tailwindcss autoprefixer postcss
   npx tailwindcss init -p
   ```

3. **Configure Tailwind**
   ```js
   // tailwind.config.js
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {
         fontFamily: {
           'noto': ['Noto Sans JP', 'sans-serif']
         }
       }
     }
   }
   ```

4. **Create Components**
   - Start with main dashboard
   - Build character learning modules
   - Add progress tracking
   - Implement animations
   - Test and optimize

This prompt provides a comprehensive foundation for building a world-class Japanese language learning application with modern web technologies and beautiful user experience design.
