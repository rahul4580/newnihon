'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaTable, FaClone, FaQuestionCircle, FaChevronRight, FaChevronLeft, FaRedo, FaVolumeUp, FaCheckCircle, FaStar, FaTrophy, FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';

// Hiragana Dataset
const HIRAGANA_DATA = {
  basic: [
    { char: 'あ', romaji: 'a', type: 'vowel' }, { char: 'い', romaji: 'i', type: 'vowel' }, { char: 'う', romaji: 'u', type: 'vowel' }, { char: 'え', romaji: 'e', type: 'vowel' }, { char: 'お', romaji: 'o', type: 'vowel' },
    { char: 'か', romaji: 'ka', type: 'k-row' }, { char: 'き', romaji: 'ki', type: 'k-row' }, { char: 'く', romaji: 'ku', type: 'k-row' }, { char: 'け', romaji: 'ke', type: 'k-row' }, { char: 'こ', romaji: 'ko', type: 'k-row' },
    { char: 'さ', romaji: 'sa', type: 's-row' }, { char: 'し', romaji: 'shi', type: 's-row' }, { char: 'す', romaji: 'su', type: 's-row' }, { char: 'せ', romaji: 'se', type: 's-row' }, { char: 'そ', romaji: 'so', type: 's-row' },
    { char: 'た', romaji: 'ta', type: 't-row' }, { char: 'ち', romaji: 'chi', type: 't-row' }, { char: 'つ', romaji: 'tsu', type: 't-row' }, { char: 'て', romaji: 'te', type: 't-row' }, { char: 'と', romaji: 'to', type: 't-row' },
    { char: 'な', romaji: 'na', type: 'n-row' }, { char: 'に', romaji: 'ni', type: 'n-row' }, { char: 'ぬ', romaji: 'nu', type: 'n-row' }, { char: 'ね', romaji: 'ne', type: 'n-row' }, { char: 'の', romaji: 'no', type: 'n-row' },
    { char: 'は', romaji: 'ha', type: 'h-row' }, { char: 'ひ', romaji: 'hi', type: 'h-row' }, { char: 'ふ', romaji: 'fu', type: 'h-row' }, { char: 'へ', romaji: 'he', type: 'h-row' }, { char: 'ほ', romaji: 'ho', type: 'h-row' },
    { char: 'ま', romaji: 'ma', type: 'm-row' }, { char: 'み', romaji: 'mi', type: 'm-row' }, { char: 'む', romaji: 'mu', type: 'm-row' }, { char: 'め', romaji: 'me', type: 'm-row' }, { char: 'も', romaji: 'mo', type: 'm-row' },
    { char: 'や', romaji: 'ya', type: 'y-row' }, { char: null }, { char: 'ゆ', romaji: 'yu', type: 'y-row' }, { char: null }, { char: 'よ', romaji: 'yo', type: 'y-row' },
    { char: 'ら', romaji: 'ra', type: 'r-row' }, { char: 'り', romaji: 'ri', type: 'r-row' }, { char: 'る', romaji: 'ru', type: 'r-row' }, { char: 'れ', romaji: 're', type: 'r-row' }, { char: 'ろ', romaji: 'ro', type: 'r-row' },
    { char: 'わ', romaji: 'wa', type: 'w-row' }, { char: null }, { char: null }, { char: null }, { char: 'を', romaji: 'wo', type: 'w-row' },
    { char: 'ん', romaji: 'n', type: 'n' }
  ],
  dakuten: [
    { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' }, { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' },
    { char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' },
    { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji' }, { char: 'づ', romaji: 'zu' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' },
    { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' }, { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' }
  ],
  handakuten: [
    { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' }, { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }
  ],
  yoon: [
    { char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' },
    { char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' },
    { char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' },
    { char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' },
    { char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' },
    { char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' },
    { char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' },
    { char: 'ぎゃ', romaji: 'gya' }, { char: 'ぎゅ', romaji: 'gyu' }, { char: 'ぎょ', romaji: 'gyo' },
    { char: 'じゃ', romaji: 'ja' }, { char: 'じゅ', romaji: 'ju' }, { char: 'じょ', romaji: 'jo' },
    { char: 'びゃ', romaji: 'bya' }, { char: 'びゅ', romaji: 'byu' }, { char: 'びょ', romaji: 'byo' },
    { char: 'ぴゃ', romaji: 'pya' }, { char: 'ぴゅ', romaji: 'pyu' }, { char: 'ぴょ', romaji: 'pyo' }
  ]
};

export default function HiraganaPage() {
  const [mode, setMode] = useState('grid'); // 'grid', 'flashcards', 'quiz', 'results'
  const [selectedGroup, setSelectedGroup] = useState('basic');
  const [difficulty, setDifficulty] = useState('easy'); // 'easy', 'mid', 'hard'
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizState, setQuizState] = useState({
    currentQuestion: null,
    options: [],
    score: 0,
    total: 0,
    history: [], // tracks last session for results
    feedback: null // 'correct', 'incorrect'
  });
  const [stats, setStats] = useState({ daily: 0, weekly: 0, lastCheck: null });

  // Sound Utility
  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  };

  const allCharsManual = useMemo(() => {
    return [...HIRAGANA_DATA.basic, ...HIRAGANA_DATA.dakuten, ...HIRAGANA_DATA.handakuten, ...HIRAGANA_DATA.yoon].filter(item => item && item.char);
  }, []);

  const quizPool = useMemo(() => {
    if (difficulty === 'easy') return HIRAGANA_DATA.basic.filter(i => i?.char);
    if (difficulty === 'mid') return [...HIRAGANA_DATA.basic, ...HIRAGANA_DATA.dakuten, ...HIRAGANA_DATA.handakuten].filter(i => i?.char);
    return allCharsManual;
  }, [difficulty, allCharsManual]);

  // Persistence Logic
  useEffect(() => {
    const saved = localStorage.getItem('hiragana_stats');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Basic reset logic for daily/weekly (simplified for MVP)
      const now = new Date();
      const last = new Date(parsed.lastCheck || now);
      if (now.getDate() !== last.getDate()) parsed.daily = 0;
      if (now.getTime() - last.getTime() > 7 * 24 * 60 * 60 * 1000) parsed.weekly = 0;
      setStats(parsed);
    }
  }, []);

  const updateStats = useCallback(() => {
    const newStats = {
      daily: stats.daily + 1,
      weekly: stats.weekly + 1,
      lastCheck: new Date().toISOString()
    };
    setStats(newStats);
    localStorage.setItem('hiragana_stats', JSON.stringify(newStats));
  }, [stats]);

  // Quiz Logic
  const startNewQuestion = useCallback(() => {
    if (quizState.total >= 10 && quizState.total > 0) {
      setMode('results');
      updateStats();
      return;
    }

    const correct = quizPool[Math.floor(Math.random() * quizPool.length)];
    const others = quizPool.filter(c => c.romaji !== correct.romaji);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [...shuffledOthers, correct].sort(() => 0.5 - Math.random());
    
    setQuizState(prev => ({
      ...prev,
      currentQuestion: correct,
      options,
      feedback: null
    }));
  }, [quizPool, quizState.total, updateStats]);

  const handleAnswer = (option) => {
    if (quizState.feedback) return;

    const isCorrect = option.romaji === quizState.currentQuestion.romaji;
    if (isCorrect) playSound(quizState.currentQuestion.char);

    setQuizState(prev => ({
      ...prev,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
      total: prev.total + 1,
      history: [...prev.history, { ...prev.currentQuestion, wasCorrect: isCorrect }]
    }));

    setTimeout(() => {
      startNewQuestion();
    }, 1200);
  };

  useEffect(() => {
    if (mode === 'quiz' && !quizState.currentQuestion) {
      startNewQuestion();
    }
  }, [mode, quizState.currentQuestion, startNewQuestion]);

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        {/* Navigation & Difficulty */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
               <FaChevronLeft /> Back to Languages
             </a>
           </motion.div>

           <div className="flex gap-4">
              {['easy', 'mid', 'hard'].map(d => (
                <button
                  key={d}
                  onClick={() => { setDifficulty(d); setQuizState({currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null}); }}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                    difficulty === d ? 'bg-blue-500 border-blue-500 text-white shadow-lg' : 'border-black/5 dark:border-white/5 opacity-40'
                  }`}
                >
                  {d}
                </button>
              ))}
           </div>

           <div className="flex gap-6">
              <div className="flex items-center gap-2 opacity-60">
                 <FaCalendarDay className="text-orange-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Day: {stats.daily}</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                 <FaCalendarWeek className="text-blue-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Week: {stats.weekly}</span>
              </div>
           </div>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6">Hiragana Pro</div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">平仮名 <span className="text-gray-300 dark:text-neutral-800">Learning</span></h1>
          
          <div className="flex justify-center gap-2 bg-gray-100 dark:bg-neutral-900 p-1.5 rounded-2xl w-fit mx-auto shadow-inner">
            {[{ id: 'grid', icon: <FaTable />, label: 'Grid' }, { id: 'flashcards', icon: <FaClone />, label: 'Cards' }, { id: 'quiz', icon: <FaQuestionCircle />, label: 'Quiz' }].map((m) => (
              <button key={m.id} onClick={() => setMode(m.id)} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${mode === m.id ? 'bg-white dark:bg-black shadow-xl scale-105' : 'opacity-40 hover:opacity-100'}`}>
                {m.icon} {m.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            {mode === 'grid' && (
              <motion.div key="grid" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }}>
                <div className="flex gap-4 mb-10 justify-center">
                  {['basic', 'dakuten', 'handakuten', 'yoon'].map(group => (
                    <button key={group} onClick={() => setSelectedGroup(group)} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${selectedGroup === group ? 'border-blue-500 text-blue-500' : 'border-transparent opacity-30'}`}>{group}</button>
                  ))}
                </div>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
                  {HIRAGANA_DATA[selectedGroup].map((item, idx) => item ? (
                    <motion.div key={idx} whileHover={{ scale: 1.05, y: -2 }} onClick={() => playSound(item.char)} className="aspect-square flex flex-col items-center justify-center rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-500 group cursor-pointer p-2">
                      <span className="text-2xl font-noto font-black group-hover:text-blue-500 transition-colors">{item.char}</span>
                      <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">{item.romaji}</span>
                    </motion.div>
                  ) : <div key={idx} className="aspect-square opacity-0" />)}
                </div>
              </motion.div>
            )}

            {mode === 'flashcards' && (
              <motion.div key="flashcards" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center py-6">
                <div className="w-72 h-[400px] relative perspective-1000 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
                  <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ type: 'spring', damping: 20, stiffness: 100 }} className="w-full h-full relative preserve-3d">
                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-22 flex flex-col items-center justify-center gap-6">
                       <span className="text-7xl font-noto font-black">{allCharsManual[activeIndex].char}</span>
                       <button onClick={(e) => { e.stopPropagation(); playSound(allCharsManual[activeIndex].char); }} className="p-3 rounded-full bg-gray-100 dark:bg-neutral-800 hover:scale-110 transition-transform"><FaVolumeUp className="text-blue-500" /></button>
                    </div>
                    <div className="absolute inset-0 backface-hidden bg-blue-500 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 text-white" style={{ transform: 'rotateY(180deg)' }}>
                       <span className="text-5xl font-black uppercase tracking-tighter">{allCharsManual[activeIndex].romaji}</span>
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Romaji</span>
                    </div>
                  </motion.div>
                </div>
                <div className="flex gap-4 mt-12">
                   <button onClick={() => { setIsFlipped(false); setActiveIndex((p) => (p - 1 + allCharsManual.length) % allCharsManual.length); }} className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg transition-all hover:bg-black hover:text-white"><FaChevronLeft /></button>
                   <div className="flex items-center px-6 bg-gray-200 dark:bg-neutral-900 rounded-full text-[10px] font-black uppercase tracking-widest">{activeIndex + 1} / {allCharsManual.length}</div>
                   <button onClick={() => { setIsFlipped(false); setActiveIndex((p) => (p + 1) % allCharsManual.length); }} className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg transition-all hover:bg-black hover:text-white"><FaChevronRight /></button>
                </div>
              </motion.div>
            )}

            {mode === 'quiz' && quizState.currentQuestion && (
              <motion.div key="quiz" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center">
                <div className="flex gap-1 items-center mb-8">
                   {[...Array(10)].map((_, i) => (
                     <div key={i} className={`h-1 w-6 rounded-full transition-all duration-300 ${i < quizState.total ? (quizState.history[i]?.wasCorrect ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 scale-90') : 'bg-gray-200 dark:bg-neutral-800'}`}></div>
                   ))}
                </div>

                <div className="text-center mb-12">
                  <motion.div animate={quizState.feedback ? (quizState.feedback === 'correct' ? { scale: [1, 1.1, 1] } : { x: [-10, 10, -10, 10, 0] }) : {}} className={`inline-block p-10 rounded-[3rem] bg-white dark:bg-neutral-900 shadow-2xl border-2 transition-colors duration-500 ${quizState.feedback === 'correct' ? 'border-green-500' : quizState.feedback === 'incorrect' ? 'border-red-500' : 'border-transparent'}`}>
                    <span className="text-7xl font-noto font-black">{quizState.currentQuestion.char}</span>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                   {quizState.options.map((option, i) => (
                     <button key={i} onClick={() => handleAnswer(option)} disabled={!!quizState.feedback} className={`p-5 rounded-2xl text-lg font-black uppercase tracking-widest border-2 transition-all duration-300 ${quizState.feedback && option.romaji === quizState.currentQuestion.romaji ? 'bg-green-500 border-green-500 text-white scale-105' : quizState.feedback === 'incorrect' && option.romaji !== quizState.currentQuestion.romaji ? 'opacity-30' : 'bg-white dark:bg-neutral-900 border-black/5 dark:border-white/5 hover:border-black'}`}>
                       {option.romaji}
                     </button>
                   ))}
                </div>
              </motion.div>
            )}

            {mode === 'results' && (
              <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center">
                 <div className="w-32 h-32 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                    <FaTrophy className="text-6xl text-blue-500" />
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Mission <span className="text-blue-500">Complete</span></h2>
                 <p className="text-xl text-gray-500 font-medium mb-12">You scored {quizState.score} out of 10 in {difficulty} mode.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-16">
                    <div className="p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6">
                       <FaStar className="text-4xl text-orange-500" />
                       <div className="text-left">
                          <div className="text-xs font-black uppercase tracking-widest opacity-40">Accuracy</div>
                          <div className="text-3xl font-black">{Math.round((quizState.score / 10) * 100)}%</div>
                       </div>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6">
                       <FaCheckCircle className="text-4xl text-green-500" />
                       <div className="text-left">
                          <div className="text-xs font-black uppercase tracking-widest opacity-40">Tasks Done</div>
                          <div className="text-3xl font-black">{stats.daily}/5</div>
                       </div>
                    </div>
                 </div>

                 <button onClick={() => { setQuizState({currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null}); setMode('quiz'); }} className="px-12 py-5 rounded-[2rem] bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.3em] hover:scale-105 transition-transform flex items-center gap-4">
                    <FaRedo /> Try Again
                 </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
      
      <Footer />
    </div>
  );
}



