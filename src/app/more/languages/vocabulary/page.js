'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaChevronLeft, FaBook, FaVolumeUp, FaPlay, FaStar, FaCheckCircle, FaRedo, FaTrophy, FaHourglassHalf, FaChevronRight } from 'react-icons/fa';
import { VOCABULARY_DATA } from '../../../../utils/vocabularyData';

export default function VocabularyPage() {
  const [level, setLevel] = useState('N5'); // 'N5', 'N4', 'N3', 'N2', 'N1'
  const [view, setView] = useState('dashboard'); // 'dashboard', 'chapter', 'word_detail', 'quiz', 'results'
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [masteredChapters, setMasteredChapters] = useState([]);
  const [stats, setStats] = useState({ daily: 0, weekly: 0 });
  
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizState, setQuizState] = useState({ score: 0, history: [], feedback: null });

  // Filter Chapters by Level
  const filteredChapters = useMemo(() => 
    VOCABULARY_DATA.filter(ch => ch.level === level)
  , [level]);

  // Load Persistence
  useEffect(() => {
    const saved = localStorage.getItem('vocab_mastery');
    if (saved) setMasteredChapters(JSON.parse(saved));
    
    const savedStats = localStorage.getItem('vocab_stats');
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  // Text-to-Speech
  const playSound = useCallback((text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleChapterSelect = (chapter) => {
    setActiveChapter(chapter);
    setActiveWordIndex(0);
    setView('chapter');
  };

  const handleWordSelect = (index) => {
    setActiveWordIndex(index);
    setView('word_detail');
  };

  const nextWord = () => {
    if (activeWordIndex < activeChapter.words.length - 1) {
      setActiveWordIndex(prev => prev + 1);
    }
  };

  const prevWord = () => {
    if (activeWordIndex > 0) {
      setActiveWordIndex(prev => prev - 1);
    }
  };

  // Quiz Logic
  const startQuiz = () => {
    setView('quiz');
    setQuizIdx(0);
    setQuizState({ score: 0, history: [], feedback: null });
  };

  const handleAnswer = (option) => {
    if (quizState.feedback) return;
    
    const correctAns = activeChapter.words[quizIdx].english;
    const isCorrect = option === correctAns;
    
    setQuizState(prev => ({
      ...prev,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
      history: [...prev.history, { q: activeChapter.words[quizIdx].japanese, wasCorrect: isCorrect }]
    }));

    if (isCorrect) playSound(activeChapter.words[quizIdx].japanese);

    setTimeout(() => {
      if (quizIdx < activeChapter.words.length - 1 && quizIdx < 9) {
        setQuizIdx(idx => idx + 1);
        setQuizState(prev => ({ ...prev, feedback: null }));
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  const finishQuiz = () => {
    const finalScore = quizState.score;
    if (finalScore >= 8) {
      const newMastery = [...new Set([...masteredChapters, activeChapter.id])];
      setMasteredChapters(newMastery);
      localStorage.setItem('vocab_mastery', JSON.stringify(newMastery));
    }

    const newStats = { daily: stats.daily + 1, weekly: stats.weekly + 1 };
    setStats(newStats);
    localStorage.setItem('vocab_stats', JSON.stringify(newStats));
    
    setView('results');
  };

  const startDailyTest = () => {
    const allWords = filteredChapters.flatMap(ch => ch.words.map(w => ({ ...w, chId: ch.id })));
    if (allWords.length === 0) return;
    const shuffled = [...allWords].sort(() => Math.random() - 0.5).slice(0, 10);
    
    const dailyChapter = {
      id: 'Daily',
      title: `Global ${level} Challenge`,
      description: 'Test your knowledge across all chapters.',
      words: shuffled
    };
    
    setActiveChapter(dailyChapter);
    startQuiz();
  };

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        
        {/* Level Toggle */}
        <div className="mb-8 flex items-center justify-between">
           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
               <FaChevronLeft /> Back to Languages
             </a>
           </motion.div>
           
           <div className="flex items-center gap-1 bg-white dark:bg-neutral-900 p-1.5 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
              {['N5', 'N4', 'N3', 'N2', 'N1'].map((lv) => (
                 <button
                   key={lv}
                   onClick={() => { setLevel(lv); setView('dashboard'); }}
                   className={`relative px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                     level === lv ? 'text-white' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                   }`}
                 >
                   {level === lv && (
                     <motion.div
                       layoutId="vocab-level-toggle"
                       className="absolute inset-0 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30"
                       transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                   )}
                   <span className="relative z-10">{lv}</span>
                 </button>
              ))}
           </div>
        </div>

        {/* VIEW: DASHBOARD */}
        {view === 'dashboard' && (
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
               <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6 font-noto">語彙 Vocabulary</div>
               <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Vocabulary <span className="text-gray-300 dark:text-neutral-800">Master</span></h1>
               
               {/* Daily Challenge Card */}
               <div className="mt-12 mb-16 max-w-2xl mx-auto p-1 bg-white dark:bg-neutral-900 rounded-[3rem] shadow-22 border border-black/5 flex items-center gap-8 pr-12">
                  <div className="w-40 h-40 rounded-[2.5rem] bg-blue-500 flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-500/30">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Today&apos;s Test</span>
                     <span className="text-4xl font-black">{stats.daily % 2 ? '100%' : 'GO!'}</span>
                  </div>
                  <div className="text-left flex-1 py-4">
                     <h2 className="text-2xl font-black tracking-tighter mb-1 uppercase">Daily Challenge</h2>
                     <p className="text-[11px] text-gray-400 font-medium mb-6 line-clamp-2">Test your knowledge with 10 random words from all {level} chapters.</p>
                     <button onClick={startDailyTest} className="px-8 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Start Assessment</button>
                  </div>
               </div>

               <div className="flex justify-center gap-12 mt-12 opacity-40 uppercase">
                  <div className="text-center"><p className="text-[10px] font-black tracking-widest mb-1">Total Chapters</p><p className="text-3xl font-black">{filteredChapters.length}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black tracking-widest mb-1">Mastered</p><p className="text-3xl font-black text-blue-500">{masteredChapters.filter(id => filteredChapters.some(ch => ch.id === id)).length}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black tracking-widest mb-1">Total Words</p><p className="text-3xl font-black">{filteredChapters.reduce((acc, ch) => acc + ch.words.length, 0)}</p></div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredChapters.map((chapter) => (
                 <motion.div 
                   key={chapter.id} 
                   whileHover={{ y: -5 }}
                   onClick={() => handleChapterSelect(chapter)}
                   className="group p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 hover:border-blue-500/50 transition-all text-left flex flex-col items-start gap-4 shadow-xl shadow-black/5 cursor-pointer"
                 >
                    <div className="flex justify-between w-full items-start">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors ${masteredChapters.includes(chapter.id) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                          {masteredChapters.includes(chapter.id) ? <FaCheckCircle className="text-xl" /> : <FaBook className="text-xl" />}
                       </div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 opacity-60">Ch. {chapter.id}</div>
                    </div>
                    <div>
                       <h3 className="text-xl font-black tracking-tighter mb-1">{chapter.title}</h3>
                       <p className="text-[11px] text-gray-400 font-medium line-clamp-2">{chapter.description}</p>
                    </div>
                    <div className="mt-4 w-full h-1 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                       <div className={`h-full transition-all duration-1000 ${masteredChapters.includes(chapter.id) ? 'w-full bg-green-500' : 'w-0'}`}></div>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-30">{chapter.words.length} Words</div>
                 </motion.div>
               ))}
            </div>
          </div>
        )}

        {/* VIEW: CHAPTER (Word List) */}
        {view === 'chapter' && activeChapter && (
          <div className="max-w-6xl mx-auto">
             <div className="flex justify-between items-center mb-12">
                <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"><FaChevronLeft /> Back to Chapters</button>
                <button onClick={startQuiz} className="px-6 py-2 rounded-xl bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">Start Chapter Quiz</button>
             </div>

             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">{activeChapter.title}</h2>
                <p className="text-gray-500 font-medium">{activeChapter.description}</p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeChapter.words.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    onClick={() => handleWordSelect(index)}
                    className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-black/5 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-xl"
                  >
                     <div className="flex justify-between items-start mb-3">
                        <span className="text-3xl font-noto font-black">{word.japanese}</span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); playSound(word.japanese); }} 
                          className="p-2 rounded-full bg-blue-500/5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-500 hover:text-white"
                        >
                          <FaVolumeUp className="text-sm" />
                        </button>
                     </div>
                     <p className="text-xs text-blue-500 font-black uppercase tracking-widest mb-1">{word.romaji}</p>
                     <p className="text-sm font-medium text-gray-600 dark:text-neutral-400">{word.english}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        )}

        {/* VIEW: WORD DETAIL */}
        {view === 'word_detail' && activeChapter && (
          <div className="max-w-4xl mx-auto">
             <div className="flex justify-between items-center mb-12">
                <button onClick={() => setView('chapter')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"><FaChevronLeft /> Back to Word List</button>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Word {activeWordIndex + 1} / {activeChapter.words.length}</div>
             </div>

             <AnimatePresence mode="wait">
                <motion.div 
                  key={activeWordIndex}
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-neutral-900 p-12 rounded-[3.5rem] shadow-22 border border-black/5 mb-10"
                >
                   <div className="flex items-start justify-between mb-8">
                      <div className="flex-1">
                        <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 text-[10px] font-black border border-blue-500/20 uppercase tracking-widest mb-4 inline-block">Vocabulary</span>
                        <h2 className="text-6xl md:text-7xl font-black tracking-tight font-noto mb-4">{activeChapter.words[activeWordIndex].japanese}</h2>
                        <div className="flex items-center gap-4 mb-2">
                           <p className="text-2xl text-blue-500 font-black uppercase tracking-widest">{activeChapter.words[activeWordIndex].romaji}</p>
                           {activeChapter.words[activeWordIndex].hinglish && (
                              <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[9px] font-black rounded-full border border-green-500/20 uppercase tracking-widest">Hinglish: {activeChapter.words[activeWordIndex].hinglish}</span>
                           )}
                        </div>
                        <p className="text-3xl font-bold text-gray-600 dark:text-neutral-300">{activeChapter.words[activeWordIndex].english}</p>
                      </div>
                      <button 
                        onClick={() => playSound(activeChapter.words[activeWordIndex].japanese)} 
                        className="p-6 rounded-full bg-blue-500 text-white hover:scale-110 transition-transform shadow-xl shadow-blue-500/30"
                      >
                        <FaVolumeUp className="text-2xl" />
                      </button>
                   </div>

                   <div className="mt-12">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 font-noto">Example Sentences / 文</h3>
                      <div className="space-y-4">
                         {activeChapter.words[activeWordIndex].examples.map((ex, i) => (
                           <div key={i} className="group p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-black/5 hover:border-blue-500/20 transition-all">
                              <div className="flex justify-between items-start gap-4 mb-3">
                                 <p className="text-xl font-black font-noto leading-[1.6]">{ex.jp}</p>
                                 <button 
                                   onClick={() => playSound(ex.jp)} 
                                   className="p-2.5 rounded-full bg-blue-500/10 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-500 hover:text-white flex-shrink-0"
                                 >
                                   <FaPlay className="text-[10px]" />
                                 </button>
                              </div>
                              <p className="text-xs text-blue-500 font-bold mb-1 uppercase tracking-widest opacity-60">{ex.romaji}</p>
                              <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium italic">&quot;{ex.en}&quot;</p>
                           </div>
                         ))}
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>

             <div className="flex justify-center gap-4">
                <button 
                  disabled={activeWordIndex === 0}
                  onClick={prevWord}
                  className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:scale-105 disabled:opacity-20 transition-all border border-black/5"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <div className="flex items-center px-8 bg-gray-200 dark:bg-neutral-900 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {activeWordIndex + 1} / {activeChapter.words.length}
                </div>
                <button 
                  disabled={activeWordIndex === activeChapter.words.length - 1}
                  onClick={nextWord}
                  className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:scale-105 disabled:opacity-20 transition-all border border-black/5"
                >
                  <FaChevronRight className="text-sm" />
                </button>
             </div>
          </div>
        )}

        {/* VIEW: QUIZ */}
        {view === 'quiz' && activeChapter && (
          <div className="max-w-2xl mx-auto py-12">
            <div className="flex justify-between items-center mb-12">
              <button 
                onClick={() => setView('chapter')} 
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                <FaChevronLeft /> End Quiz
              </button>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-30">Question {quizIdx + 1} / {Math.min(activeChapter.words.length, 10)}</div>
            </div>

            <div className="mb-8 w-full h-1 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${((quizIdx + 1) / Math.min(activeChapter.words.length, 10)) * 100}%` }}
                 className="h-full bg-blue-500"
               />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={quizIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-white dark:bg-neutral-900 p-12 rounded-[3.5rem] border border-black/5 shadow-22 text-center"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8">What is the meaning of:</p>
                <h2 className="text-7xl font-black mb-12 tracking-tighter font-noto">{activeChapter.words[quizIdx].japanese}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[...activeChapter.words]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 4)
                    .map(w => w.english)
                    .includes(activeChapter.words[quizIdx].english) 
                      ? [...activeChapter.words].sort(() => Math.random() - 0.5).slice(0, 4).map(w => w.english)
                      : [activeChapter.words[quizIdx].english, ...activeChapter.words.filter(w=>w.english !== activeChapter.words[quizIdx].english).sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5)
                    .map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-6 rounded-2xl border-2 font-black text-sm transition-all shadow-sm flex items-center justify-between ${
                        quizState.feedback === 'correct' && option === activeChapter.words[quizIdx].english
                          ? 'border-green-500 bg-green-500/10 text-green-500'
                          : quizState.feedback === 'incorrect' && option === activeChapter.words[quizIdx].english
                          ? 'border-green-500 text-green-500'
                          : 'border-black/5 hover:border-blue-500/50 hover:bg-blue-500/5'
                      }`}
                    >
                      <span>{option}</span>
                      {quizState.feedback === 'correct' && option === activeChapter.words[quizIdx].english && <FaCheckCircle />}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* VIEW: RESULTS */}
        {view === 'results' && (
          <div className="max-w-4xl mx-auto text-center py-12">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-12">
               <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-2xl shadow-blue-500/40">
                  <FaTrophy />
               </div>
               <h2 className="text-6xl font-black tracking-tighter mb-4">Quiz Completed!</h2>
               <p className="text-gray-500 font-medium">You scored {quizState.score} out of {Math.min(activeChapter.words.length, 10)}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               <div className="p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Mastery Logic</h3>
                  <div className="flex items-center justify-between gap-4">
                     <div className="text-left">
                        <p className="text-sm font-bold">{quizState.score >= 8 ? 'Chapter Mastered!' : 'Keep Practicing'}</p>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-black">Requires 8+ score</p>
                     </div>
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${quizState.score >= 8 ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-neutral-800'}`}>
                        <FaCheckCircle />
                     </div>
                  </div>
               </div>
               <div className="p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Daily Bonus</h3>
                  <div className="flex items-center justify-between gap-4">
                     <div className="text-left">
                        <p className="text-sm font-bold">Progress Logged</p>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-black">Stats updated in storage</p>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-500 flex items-center justify-center">
                        <FaStar />
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex justify-center gap-6">
               <button onClick={() => setView('dashboard')} className="px-10 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Dashboard</button>
               <button onClick={startQuiz} className="px-10 py-4 rounded-2xl border-2 border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">Try Again <FaRedo className="inline ml-2" /></button>
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        .shadow-22 { box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); }
      `}</style>
      
      <Footer />
    </div>
  );
}
