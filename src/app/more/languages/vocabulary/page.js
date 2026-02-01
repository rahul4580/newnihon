'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaChevronLeft, FaBook, FaVolumeUp, FaPlay, FaStar, FaCheckCircle } from 'react-icons/fa';
import { VOCABULARY_DATA } from '../../../../utils/vocabularyData';

export default function VocabularyPage() {
  const [view, setView] = useState('dashboard'); // 'dashboard', 'chapter', 'word_detail'
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [masteredChapters, setMasteredChapters] = useState([]);

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

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
           <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
             <FaChevronLeft /> Back to Languages
           </a>
        </motion.div>

        {/* VIEW: DASHBOARD */}
        {view === 'dashboard' && (
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
               <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6 font-noto">語彙 Vocabulary</div>
               <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Vocabulary <span className="text-gray-300 dark:text-neutral-800">Master</span></h1>
               <p className="text-gray-500 font-medium max-w-2xl mx-auto">Master 900+ essential Japanese words across 30 thematic chapters. Each word includes pronunciation, meaning, and real-world examples.</p>
               
               <div className="flex justify-center gap-12 mt-12 opacity-40">
                  <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Total Chapters</p><p className="text-3xl font-black">{VOCABULARY_DATA.length}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Total Words</p><p className="text-3xl font-black text-blue-500">{VOCABULARY_DATA.reduce((acc, ch) => acc + ch.words.length, 0)}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Mastered</p><p className="text-3xl font-black">{masteredChapters.length}</p></div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {VOCABULARY_DATA.map((chapter) => (
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
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Chapter {activeChapter.id}</div>
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
                      <div>
                        <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 text-[10px] font-black border border-blue-500/20 uppercase tracking-widest mb-4 inline-block">Vocabulary</span>
                        <h2 className="text-6xl md:text-7xl font-black tracking-tight font-noto mb-4">{activeChapter.words[activeWordIndex].japanese}</h2>
                        <p className="text-2xl text-blue-500 font-black uppercase tracking-widest mb-2">{activeChapter.words[activeWordIndex].romaji}</p>
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
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Example Sentences</h3>
                      <div className="space-y-6">
                         {activeChapter.words[activeWordIndex].examples.map((ex, i) => (
                           <div key={i} className="group p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-black/5 hover:border-blue-500 transition-all">
                              <div className="flex justify-between items-start gap-4 mb-3">
                                 <p className="text-xl font-black font-noto leading-[1.6]">{ex.jp}</p>
                                 <button 
                                   onClick={() => playSound(ex.jp)} 
                                   className="p-2.5 rounded-full bg-blue-500/5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-500 hover:text-white flex-shrink-0"
                                 >
                                   <FaPlay className="text-[10px]" />
                                 </button>
                              </div>
                              <p className="text-xs text-blue-500/60 font-bold mb-2">{ex.romaji}</p>
                              <p className="text-sm text-gray-600 dark:text-neutral-400 font-medium">{ex.en}</p>
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
                  <FaChevronLeft className="text-sm rotate-180" />
                </button>
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
