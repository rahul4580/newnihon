'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaBook, FaCheckCircle, FaChevronLeft, FaChevronRight, FaPlay, FaRedo, FaTrophy, FaStar, FaInfoCircle, FaHourglassHalf, FaVolumeUp } from 'react-icons/fa';
import { GRAMMAR_DATA } from '../../../../utils/grammarData';
import { PARTICLE_DATA } from '../../../../utils/particleData';

export default function GrammarPage() {
  const [level, setLevel] = useState('N5'); // 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  const [chapterIdx, setChapterIdx] = useState(0);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [userSentence, setUserSentence] = useState('');
  const [correction, setCorrection] = useState(null);
  const filteredChapters = useMemo(() => 
    GRAMMAR_DATA.filter(ch => ch.level === level)
  , [level]);

  const filteredParticles = useMemo(() =>
    PARTICLE_DATA.filter(p => p.level === level)
  , [level]);

  const simpleCorrect = useCallback((text) => {
    if (!text) return null;
    let t = text.trim();
    t = t.replace(/\bi\b/g, 'I');
    t = t.replace(/\s+/g, ' ');
    t = t.replace(/\bdoesn\'t\b\s+\b\w+ed\b/gi, (m) => m.replace(/ed\b/i, ''));
    t = t.replace(/\b(a|an)\s+([aeiou]\w+)/gi, 'an $2').replace(/\b(a|an)\s+([^aeiou]\w+)/gi, 'a $2');
    return t;
  }, []);

  const [view, setView] = useState('dashboard'); // 'dashboard', 'learn', 'quiz', 'results', 'particle_master', 'particle_learn', 'particle_quiz', 'particle_results'
  const [activeChapter, setActiveChapter] = useState(null);
  const [currentPatternIdx, setCurrentPatternIdx] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizState, setQuizState] = useState({ score: 0, history: [], feedback: null });
  const [masteredChapters, setMasteredChapters] = useState([]);
  const [stats, setStats] = useState({ daily: 0, weekly: 0 });
  const [practiceState, setPracticeState] = useState({ 
    active: false,
    sentences: [], 
    currentIdx: 0, 
    blocks: [], 
    selected: [], 
    isCorrect: null 
  });
  const [activeParticle, setActiveParticle] = useState(null);
  const [particleQuizIdx, setParticleQuizIdx] = useState(0);

  // Load Persistence
  useEffect(() => {
    const saved = localStorage.getItem('grammar_pro_mastery');
    if (saved) setMasteredChapters(JSON.parse(saved));
    
    const savedStats = localStorage.getItem('grammar_pro_stats');
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  const playSound = useCallback((text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleChapterSelect = (chapter) => {
    setActiveChapter(chapter);
    setView('learn');
    setCurrentPatternIdx(0);
  };

  const startPractice = (chapter) => {
    setActiveChapter(chapter);
    setView('practice');
    const allExamples = chapter.patterns.flatMap(p => p.examples);
    setPracticeState(prev => ({
      ...prev,
      active: true,
      sentences: allExamples,
      currentIdx: 0
    }));
    initPractice(allExamples[0], 0, allExamples);
  };

  const initPractice = (example, idx, allSentences = practiceState.sentences) => {
    const blocks = example.jp.split(' ').length > 1 ? example.jp.split(' ') : example.jp.split(/([はにをでへのを、。])/).filter(Boolean);
    setPracticeState(prev => ({
      ...prev,
      currentIdx: idx,
      target: example.jp,
      meaning: example.en,
      blocks: [...blocks].sort(() => Math.random() - 0.5),
      selected: [],
      isCorrect: null
    }));
  };

  const handleBlockClick = (block) => {
    if (practiceState.isCorrect) return;
    const newSelected = [...practiceState.selected, block];
    const currentText = newSelected.join('');
    
    setPracticeState(prev => ({ ...prev, selected: newSelected }));

    if (currentText === practiceState.target.replace(/\s/g, '')) {
      setPracticeState(prev => ({ ...prev, isCorrect: true }));
      playSound(practiceState.target);
      
      setTimeout(() => {
        if (practiceState.currentIdx < practiceState.sentences.length - 1) {
          const nextIdx = practiceState.currentIdx + 1;
          initPractice(practiceState.sentences[nextIdx], nextIdx);
        } else {
          setView('dashboard');
          setPracticeState(prev => ({ ...prev, active: false }));
        }
      }, 1500);
    } else if (currentText.length >= practiceState.target.replace(/\s/g, '').length) {
      setPracticeState(prev => ({ ...prev, isCorrect: false }));
      setTimeout(() => setPracticeState(prev => ({ ...prev, selected: [], isCorrect: null })), 800);
    }
  };

  const startQuiz = () => {
    setView('quiz');
    setQuizIdx(0);
    setQuizState({ score: 0, history: [], feedback: null });
  };

  const handleAnswer = (option) => {
    if (quizState.feedback) return;
    
    const correctAns = activeChapter.quiz[quizIdx].ans;
    const isCorrect = option === correctAns;
    
    setQuizState(prev => ({
      ...prev,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
      history: [...prev.history, { q: activeChapter.quiz[quizIdx].q, wasCorrect: isCorrect }]
    }));

    if (isCorrect) playSound(option);

    setTimeout(() => {
      if (quizIdx < 9) {
        setQuizIdx(idx => idx + 1);
        setQuizState(prev => ({ ...prev, feedback: null }));
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  const finishQuiz = () => {
    const finalScore = quizState.score;
    if (finalScore >= 10) {
      const newMastery = [...new Set([...masteredChapters, activeChapter.chapter])];
      setMasteredChapters(newMastery);
      localStorage.setItem('grammar_pro_mastery', JSON.stringify(newMastery));
    }

    const newStats = { daily: stats.daily + 1, weekly: stats.weekly + 1 };
    setStats(newStats);
    localStorage.setItem('grammar_pro_stats', JSON.stringify(newStats));
    
    setView('results');
  };

  const startDailyTest = () => {
    // Collect all quiz questions across filtered chapters
    const allQuizQuestions = filteredChapters.flatMap((ch, idx) => ch.quiz.map(q => ({ ...q, chId: ch.chapter })));
    const shuffled = [...allQuizQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    
    // Create a temporary "Chapter" object for the daily test
    const dailyChapter = {
      chapter: 'Daily',
      title: `Global ${level} Challenge`,
      quiz: shuffled
    };
    
    setActiveChapter(dailyChapter);
    setView('quiz');
    setQuizIdx(0);
    setQuizState({ score: 0, history: [], feedback: null });
  };

  const handleParticleAnswer = (option) => {
    if (quizState.feedback) return;
    
    const correctAns = activeParticle.quiz[particleQuizIdx].ans;
    const isCorrect = option === correctAns;
    
    setQuizState(prev => ({
      ...prev,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
      history: [...prev.history, { q: activeParticle.quiz[particleQuizIdx].q, wasCorrect: isCorrect }]
    }));

    if (isCorrect) playSound(option);

    setTimeout(() => {
      if (particleQuizIdx < 1) {
        setParticleQuizIdx(idx => idx + 1);
        setQuizState(prev => ({ ...prev, feedback: null }));
      } else {
        setView('particle_results');
      }
    }, 1500);
  };

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden selection:bg-rose-500 selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div />
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
                      layoutId="level-toggle"
                      className="absolute inset-0 bg-rose-500 rounded-xl shadow-lg shadow-rose-500/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{lv}</span>
                </button>
             ))}
          </div>
        </div>
        
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
           <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
             <FaChevronLeft /> Back to Languages
           </a>
        </motion.div>
        
        
        


        
        
        
        {view === 'dashboard' ? (
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
               <div className="inline-block px-4 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest mb-6 font-noto">Minna no Nihongo</div>
               
               <div className="mt-12 mb-16 max-w-2xl mx-auto p-1 bg-white dark:bg-neutral-900 rounded-[3rem] shadow-22 border border-black/5 flex items-center gap-8 pr-12">
                  <div className="w-40 h-40 rounded-[2.5rem] bg-rose-500 flex flex-col items-center justify-center text-white shadow-2xl shadow-rose-500/30">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Today&apos;s Test</span>
                     <span className="text-4xl font-black">{stats.daily % 2 ? '100%' : 'GO!'}</span>
                  </div>
                  <div className="text-left flex-1 py-4">
                     <h2 className="text-2xl font-black tracking-tighter mb-1 select-none">Daily Mastery Challenge</h2>
                     <p className="text-[11px] text-gray-400 font-medium mb-6">Test your skills with 10 random questions from all 25 chapters.</p>
                     <button onClick={startDailyTest} className="px-8 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Complete Today&apos;s Test</button>
                  </div>
               </div>

                <div className="flex justify-center gap-12 mt-12 opacity-40">
                   <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Total Chapters</p><p className="text-3xl font-black">{filteredChapters.length}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Chapter Mastery</p><p className="text-3xl font-black text-rose-500">{masteredChapters.length}</p></div>
                  <div className="text-center"><p className="text-[10px] font-black uppercase tracking-widest mb-1">Weekly Tests</p><p className="text-3xl font-black">{stats.weekly}</p></div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="group p-8 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-orange-500 text-white transition-all text-left flex flex-col items-start gap-4 shadow-xl shadow-rose-500/20"
               >
                 <div className="flex justify-between w-full items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                       <FaStar className="text-xl" />
                    </div>
                 </div>
                 <button onClick={() => setView('particle_master')} className="text-left">
                    <h3 className="text-[10px] font-black uppercase tracking-widest mb-1 text-white/80">Special Module</h3>
                    <h4 className="text-xl font-black tracking-tighter mb-1">Particle Master</h4>
                    <p className="text-[11px] text-white/70 font-medium line-clamp-1">20 Key Particles (wa, ga, ni, de...)</p>
                 </button>
                 <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-1/4"></div>
                 </div>
               </motion.div>

               {filteredChapters.map((ch) => (
                 <motion.div 
                   key={ch.chapter} 
                   whileHover={{ y: -5 }}
                   className="group p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 hover:border-rose-500/50 transition-all text-left flex flex-col items-start gap-4 shadow-xl shadow-black/5"
                 >
                    <div className="flex justify-between w-full items-start">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors ${masteredChapters.includes(ch.chapter) ? 'bg-green-500 text-white' : 'bg-rose-500 text-white'}`}>
                          {masteredChapters.includes(ch.chapter) ? <FaCheckCircle className="text-xl" /> : <FaBook className="text-xl" />}
                       </div>
                       <button onClick={() => startPractice(ch)} className="text-[10px] font-black uppercase tracking-widest text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity hover:underline">Practice Mode</button>
                    </div>
                    <button onClick={() => handleChapterSelect(ch)} className="text-left">
                       <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Lesson {ch.chapter}</h3>
                       <h4 className="text-xl font-black tracking-tighter mb-1">{ch.title}</h4>
                       <p className="text-[11px] text-gray-400 font-medium line-clamp-1">{ch.desc}</p>
                    </button>
                    <div className="mt-4 w-full h-1 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                       <div className={`h-full transition-all duration-1000 ${masteredChapters.includes(ch.chapter) ? 'w-full bg-green-500' : 'w-0'}`}></div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        ) : null}
        
        {view === 'learn' && activeChapter ? (
          <div className="max-w-4xl mx-auto">
             <div className="flex justify-between items-center mb-16">
                <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"><FaChevronLeft /> Back to Lessons</button>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Lesson {activeChapter.chapter} / Pattern {currentPatternIdx + 1}</div>
             </div>

             <AnimatePresence mode="wait">
                <motion.div 
                  key={currentPatternIdx}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-neutral-900 p-12 rounded-[3.5rem] shadow-22 border border-black/5 mb-10"
                >
                   <div className="flex items-start justify-between mb-8">
                      <div>
                        <span className="px-4 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 text-[10px] font-black border border-rose-500/20 uppercase tracking-widest mb-4 inline-block">Rule Breakdown</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight font-noto">{activeChapter.patterns[currentPatternIdx].label}</h2>
                      </div>
                      <button onClick={() => playSound(activeChapter.patterns[currentPatternIdx].label)} className="p-5 rounded-full bg-gray-50 dark:bg-neutral-800 text-rose-500 hover:scale-110 transition-transform shadow-lg"><FaVolumeUp className="text-xl" /></button>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                      <div className="space-y-6">
                         <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0 mt-1"><FaInfoCircle /></div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Meaning</p>
                               <p className="text-xl font-bold">{activeChapter.patterns[currentPatternIdx].meaning}</p>
                            </div>
                         </div>
                         <div className="p-8 rounded-[2rem] bg-gray-50 dark:bg-neutral-800/50 border border-black/5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Grammar Note</p>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-neutral-400 font-medium">{activeChapter.patterns[currentPatternIdx].explanation}</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Example Use Cases</p>
                         {activeChapter.patterns[currentPatternIdx].examples.map((ex, i) => (
                           <button 
                             key={i} 
                             onClick={() => playSound(ex.jp)}
                             className="w-full group p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 shadow-sm hover:border-rose-500 hover:shadow-lg transition-all text-left relative overflow-hidden"
                           >
                              <div className="flex items-start gap-5 relative z-10">
                                 <div className="w-10 h-10 rounded-full bg-rose-500/5 text-rose-500 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                    <FaVolumeUp className="text-sm" />
                                 </div>
                                 <div>
                                    <p className="text-xl font-black font-noto leading-relaxed mb-1">{ex.jp}</p>
                                    <p className="text-xs font-black text-rose-500/50 uppercase tracking-widest mb-0.5">{ex.romaji}</p>
                                    <p className="text-sm text-gray-500 font-medium group-hover:text-rose-500 transition-colors">{ex.en}</p>
                                 </div>
                              </div>
                           </button>
                         ))}
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>

             <div className="flex justify-between items-center mt-16 pt-8 border-t border-black/5 dark:border-white/5">
                <button 
                  disabled={currentPatternIdx === 0}
                  onClick={() => setCurrentPatternIdx(p => p - 1)}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-30 text-[10px] font-black uppercase tracking-widest"
                >
                  <FaChevronLeft /> Previous
                </button>

                <div className="flex gap-1.5">
                   {activeChapter.patterns.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentPatternIdx ? 'w-8 bg-rose-500' : 'w-1.5 bg-black/10 dark:bg-white/10'}`} />
                   ))}
                </div>

                <button 
                  onClick={() => currentPatternIdx < activeChapter.patterns.length - 1 ? setCurrentPatternIdx(p => p + 1) : startQuiz()}
                  className="flex items-center gap-3 px-8 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform text-[10px] font-black uppercase tracking-widest shadow-xl"
                >
                  {currentPatternIdx < activeChapter.patterns.length - 1 ? 'Next Pattern' : 'Start Quiz'} <FaChevronRight />
                </button>
             </div>
          </div>
        ) : null}

        
        {view === 'practice' && activeChapter ? (
          <div className="max-w-4xl mx-auto text-center">
             <div className="mb-16">
                <div className="flex justify-between items-center mb-8">
                   <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"><FaChevronLeft /> Back to Dashboard</button>
                   <div className="flex gap-1">
                      {practiceState.sentences.map((_, i) => (
                        <div key={i} className={`h-1 w-6 rounded-full transition-all duration-500 ${i <= practiceState.currentIdx ? (i === practiceState.currentIdx && !practiceState.isCorrect ? 'bg-rose-500 animate-pulse' : 'bg-green-500') : 'bg-gray-100 dark:bg-neutral-800'}`}></div>
                      ))}
                   </div>
                </div>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-rose-500 mb-2">Sentence Practice {practiceState.currentIdx + 1}/{practiceState.sentences.length}</h2>
                <p className="text-xl font-medium text-gray-400 italic">&ldquo;{practiceState.meaning}&rdquo;</p>
             </div>

             <div className="min-h-[120px] flex flex-wrap justify-center gap-2 mb-16 p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border-2 border-dashed border-gray-200 dark:border-neutral-800 transition-colors">
                {practiceState.selected.map((word, i) => (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} key={i} className="px-6 py-3 rounded-xl bg-rose-500 text-white font-noto text-xl font-black shadow-lg shadow-rose-500/20">{word}</motion.div>
                ))}
                {practiceState.isCorrect && <div className="w-full mt-4 text-green-500 font-black uppercase tracking-widest text-xs">Correct Sentences!</div>}
             </div>

             <div className="flex flex-wrap justify-center gap-4">
                {practiceState.blocks.map((word, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleBlockClick(word)}
                    disabled={practiceState.selected.includes(word) && practiceState.blocks.filter(b => b === word).length <= practiceState.selected.filter(s => s === word).length}
                    className={`px-8 py-4 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-black/5 hover:border-black transition-all text-xl font-black font-noto disabled:opacity-20 shadow-xl`}
                  >
                    {word}
                  </button>
                ))}
             </div>

             <button onClick={() => setPracticeState(p => ({ ...p, selected: [], isCorrect: null }))} className="mt-20 text-[10px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 flex items-center gap-2 mx-auto transition-opacity"><FaRedo /> Reset Current Sentence</button>
          </div>
         ) : null}

        
        {view === 'quiz' && activeChapter ? (
          <div className="max-w-4xl mx-auto w-full">
             <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-neutral-950 border border-black/5 shadow-22 mb-10 relative overflow-hidden">
                
                <div className="absolute top-0 right-0 p-12 rotate-12 opacity-[0.03] select-none pointer-events-none text-rose-500">
                    <FaBook className="text-[20rem]" />
                </div>

                <div className="flex justify-between items-center mb-10 relative z-10">
                   <div>
                      <button onClick={() => setView('learn')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-4"><FaChevronLeft /> Back to Lesson</button>
                      <h2 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-0.5">Mastery Quiz</h2>
                      <p className="text-[11px] font-black uppercase tracking-widest text-rose-500">Lesson {activeChapter.chapter === 'Daily' ? 'Daily Challenge' : `${activeChapter.chapter}: ${activeChapter.title}`}</p>
                   </div>
                   <div className="text-right">
                      <div className="text-[9px] font-black uppercase opacity-20 mb-1">Pass Requirement: 10/10</div>
                      <div className="flex gap-1 justify-end">
                         {[...Array(10)].map((_, i) => (
                           <div key={i} className={`h-1 w-4 rounded-full transition-all duration-500 ${i < quizIdx ? (quizState.history[i]?.wasCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-100 dark:bg-neutral-800'}`}></div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="text-center py-8 relative z-10">
                   <div className="mb-8">
                      <span className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-neutral-900 text-[9px] font-black uppercase tracking-[0.3em]">Question {quizIdx + 1}</span>
                   </div>
                   <h3 className="text-2xl md:text-plus-4xl font-medium leading-relaxed font-noto mb-12 whitespace-pre-wrap">
                      {activeChapter.quiz[quizIdx].q.split('___').map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i === 0 && (
                            <span className={`inline-flex items-center justify-center min-w-[100px] h-12 md:h-14 mx-3 rounded-xl border-2 transition-all duration-500 ${
                              quizState.feedback === 'correct' ? 'bg-green-100 border-green-500 text-green-600 scale-105' : 
                              quizState.feedback === 'incorrect' ? 'bg-red-100 border-red-500 text-red-600 animate-shake' : 
                              'bg-rose-500/5 border-rose-500 border-dashed text-rose-500'
                            }`}>
                               {quizState.feedback ? activeChapter.quiz[quizIdx].ans : '?'}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                   </h3>
                </div>
             </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {activeChapter.quiz[quizIdx].options.map((opt, i) => (
                  <motion.button 
                    key={i} 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!quizState.feedback}
                    className={`relative overflow-hidden aspect-[1.4/1] rounded-3xl text-xl font-black transition-all border-2 flex items-center justify-center shadow-xl shadow-black/5 ${
                      quizState.feedback === 'correct' && opt === activeChapter.quiz[quizIdx].ans ? 'bg-green-500 text-white border-green-500' : 
                      quizState.feedback === 'incorrect' && opt === activeChapter.quiz[quizIdx].ans ? 'bg-green-500/20 border-green-500 text-green-500' :
                      quizState.feedback === 'incorrect' && opt !== activeChapter.quiz[quizIdx].ans ? 'opacity-20 grayscale' :
                      'bg-white dark:bg-neutral-900 border-black/5 hover:border-rose-500 dark:text-neutral-200'
                    }`}
                  >
                    {opt}
                    {quizState.feedback === 'correct' && opt === activeChapter.quiz[quizIdx].ans && (
                       <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                          <FaCheckCircle className="text-4xl text-white/50" />
                       </motion.div>
                    )}
                  </motion.button>
                ))}
             </div>
          </div>
        ) : null}

        
        {view === 'particle_master' ? (
          <div className="max-w-6xl mx-auto">
             <div className="mb-12 flex justify-between items-end">
                <div>
                   <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-4"><FaChevronLeft /> Back to Dashboard</button>
                   <h2 className="text-4xl font-black tracking-tighter">Particle Master</h2>
                   <p className="text-gray-400 text-sm mt-1 font-medium">Master the backbone of Japanese grammar ({filteredParticles.length} Essential Markers)</p>
                </div>
                <div className="flex gap-4">
                   <div className="bg-rose-500/10 text-rose-500 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-rose-500/20">Unlocked: {filteredParticles.length}/{filteredParticles.length}</div>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredParticles.map((p) => (
                  <motion.button
                    key={p.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setActiveParticle(p); setView('particle_learn'); }}
                    className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 hover:border-rose-500/30 transition-all text-center flex flex-col items-center gap-2 shadow-xl shadow-black/5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/5 flex items-center justify-center text-2xl font-black text-rose-500 mb-2 font-noto">
                       {p.label.split(' ')[0]}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-30">{p.title}</div>
                    <div className="text-[11px] font-bold text-gray-400 line-clamp-1 italic">&ldquo;{p.hinglish}&rdquo;</div>
                  </motion.button>
                ))}
             </div>
          </div>
        ) : null}

        
        {view === 'particle_learn' && activeParticle ? (
          <div className="max-w-4xl mx-auto">
             <div className="mb-12">
                <button onClick={() => setView('particle_master')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-8"><FaChevronLeft /> Back to Master List</button>
                
                <div className="flex items-start justify-between">
                   <div>
                      <h2 className="text-6xl font-black tracking-tighter mb-4 flex items-center gap-6">
                         <span className="font-noto text-rose-500">{activeParticle.label.split(' ')[0]}</span>
                         <span className="text-gray-200 text-3xl opacity-30 font-light">/</span>
                         <span className="text-3xl uppercase tracking-[0.2em]">{activeParticle.title}</span>
                      </h2>
                      <div className="flex gap-3 items-center">
                         <div className="px-3 py-1 bg-rose-500/10 text-rose-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-rose-500/20">Hinglish Key</div>
                         <p className="text-xl font-medium text-rose-500/80">&ldquo;{activeParticle.hinglish}&rdquo;</p>
                      </div>
                   </div>
                   <button 
                     onClick={() => { setParticleQuizIdx(0); setQuizState({ score: 0, history: [], feedback: null }); setView('particle_quiz'); }}
                     className="px-8 py-4 rounded-2xl bg-black dark:bg-white dark:text-black text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                   >
                     Test {activeParticle.label.split(' ')[0]} Skill
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="md:col-span-2 space-y-8">
                   <div className="p-10 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-22">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-6 flex items-center gap-2">
                         <FaInfoCircle /> Explanation & Usage
                      </h3>
                      <p className="text-lg font-medium leading-relaxed mb-8 text-neutral-600 dark:text-neutral-300">{activeParticle.explanation}</p>
                      
                      <div className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-black/5">
                         <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30 mb-3">Usage Formula</div>
                         <code className="text-xl font-black text-rose-500 whitespace-pre-wrap">{activeParticle.usage}</code>
                      </div>
                   </div>

                   <div className="p-10 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-22">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-8 flex items-center gap-2">
                         <FaPlay /> Examples in Context
                      </h3>
                      <div className="space-y-10">
                         {activeParticle.examples.map((ex, i) => (
                           <div key={i} className="group relative">
                              <div className="flex items-center gap-6 mb-2">
                                 <button 
                                   onClick={() => playSound(ex.jp)} 
                                   className="w-12 h-12 rounded-xl bg-rose-500/5 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                                 >
                                    <FaVolumeUp />
                                 </button>
                                 <div className="text-2xl font-black font-noto tracking-wider">{ex.jp}</div>
                              </div>
                              <div className="pl-18">
                                 <div className="text-[10px] font-black text-rose-500/50 uppercase tracking-widest mb-1">{ex.romaji}</div>
                                 <div className="text-gray-400 font-medium">{ex.en}</div>
                              </div>
                              {i < activeParticle.examples.length - 1 && <div className="absolute -bottom-5 left-18 right-0 h-[1px] bg-black/5"></div>}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black text-white shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><FaTrophy className="text-8xl" /></div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50 relative z-10">Mastery Goal</h4>
                      <p className="text-xl font-black mb-6 relative z-10">Score 100% on the particle test to mark as mastered.</p>
                      <div className="w-full h-1 bg-white/10 rounded-full mb-2 relative z-10">
                         <div className="h-full bg-rose-500 w-1/2"></div>
                      </div>
                      <div className="text-[9px] font-bold opacity-30 relative z-10">Estimated Time: 5 mins</div>
                   </div>
                   
                   <div className="p-8 rounded-[2rem] bg-rose-500/5 border border-rose-500/10 shadow-xl">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-4 opacity-50">Pro Tip</h4>
                      <p className="text-xs font-bold leading-relaxed opacity-60 italic">Particles are the glue of Japanese. Focus on the relationship between nouns and verbs!</p>
                   </div>
                </div>
             </div>
          </div>

        ) : null}


         
         {view === 'particle_quiz' && activeParticle ? (
           <div className="max-w-4xl mx-auto w-full">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-neutral-950 border border-black/5 shadow-22 mb-10 relative overflow-hidden">
                 
                 <div className="absolute top-0 right-0 p-12 rotate-12 opacity-[0.03] select-none pointer-events-none text-rose-500">
                     <FaStar className="text-[20rem]" />
                 </div>

                 <div className="flex justify-between items-center mb-10 relative z-10">
                    <div>
                       <button onClick={() => setView('particle_learn')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-4"><FaChevronLeft /> Back to Lesson</button>
                       <h2 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-0.5">Particle Mastery Quiz</h2>
                       <p className="text-[11px] font-black uppercase tracking-widest text-rose-500">Particle: {activeParticle.label}</p>
                    </div>
                    <div className="text-right">
                       <div className="text-[9px] font-black uppercase opacity-20 mb-1">Pass Requirement: 2/2</div>
                       <div className="flex gap-1 justify-end">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className={`h-1 w-4 rounded-full transition-all duration-500 ${i < particleQuizIdx ? (quizState.history[i]?.wasCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-100 dark:bg-neutral-800'}`}></div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="text-center py-8 relative z-10">
                    <div className="mb-8">
                       <span className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-neutral-900 text-[9px] font-black uppercase tracking-[0.3em]">Question {particleQuizIdx + 1}</span>
                    </div>
                    <h3 className="text-2xl md:text-plus-4xl font-medium leading-relaxed font-noto mb-12 whitespace-pre-wrap">
                       {activeParticle.quiz[particleQuizIdx].q.split('___').map((part, i) => (
                         <React.Fragment key={i}>
                           {part}
                           {i === 0 && (
                             <span className={`inline-flex items-center justify-center min-w-[100px] h-12 md:h-14 mx-3 rounded-xl border-2 transition-all duration-500 ${
                               quizState.feedback === 'correct' ? 'bg-green-100 border-green-500 text-green-600 scale-105' : 
                               quizState.feedback === 'incorrect' ? 'bg-red-100 border-red-500 text-red-600 animate-shake' : 
                               'bg-rose-500/5 border-rose-500 border-dashed text-rose-500'
                             }`}>
                                {quizState.feedback ? activeParticle.quiz[particleQuizIdx].ans : '?'}
                             </span>
                           )}
                         </React.Fragment>
                       ))}
                    </h3>
                 </div>
              </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                 {activeParticle.quiz[particleQuizIdx].options.map((opt, i) => (
                   <button 
                     key={i} 
                     onClick={() => handleParticleAnswer(opt)}
                     disabled={!!quizState.feedback}
                     className={`aspect-[1.4/1] rounded-3xl text-xl font-black transition-all border-2 flex items-center justify-center hover:scale-[1.03] active:scale-95 shadow-xl shadow-black/5 ${
                       quizState.feedback === 'correct' && opt === activeParticle.quiz[particleQuizIdx].ans ? 'bg-green-500 text-white border-green-500' : 
                       quizState.feedback === 'incorrect' && opt === activeParticle.quiz[particleQuizIdx].ans ? 'bg-green-500/20 border-green-500 text-green-500' :
                       quizState.feedback === 'incorrect' && opt !== activeParticle.quiz[particleQuizIdx].ans ? 'opacity-20 grayscale' :
                       'bg-white dark:bg-neutral-900 border-black/5 hover:border-rose-500 dark:text-neutral-200'
                     }`}
                   >
                     {opt}
                   </button>
                 ))}
              </div>
           </div>
         ) : null}

          
         {view === 'particle_results' && activeParticle ? (
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="w-32 h-32 rounded-full bg-rose-500/10 flex items-center justify-center mb-8 border border-rose-500/20 relative">
                 <FaTrophy className="text-6xl text-rose-500 animate-bounce" />
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-rose-500/30 rounded-full"></motion.div>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
                 {quizState.score === 2 ? <span className="text-green-500 uppercase tracking-widest">Mastered!</span> : <span className="text-gray-300">Great Effort</span>}
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-12">Particle {activeParticle.label} proficiency test results.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
                 <div className="p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0"><FaStar className="text-2xl" /></div>
                    <div className="text-left">
                       <p className="text-[10px] font-black uppercase opacity-30 mb-0.5">Proficiency Score</p>
                       <p className="text-3xl font-black">{quizState.score} / 2</p>
                    </div>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0"><FaCheckCircle className="text-2xl" /></div>
                    <div className="text-left">
                       <p className="text-[10px] font-black uppercase opacity-30 mb-0.5">Status Update</p>
                       <p className="text-3xl font-black text-rose-500">{quizState.score === 2 ? 'PARTICLE MASTERED' : 'TRY AGAIN'}</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-4">
                 <button onClick={() => setView('particle_master')} className="px-10 py-5 rounded-3xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">Particle Master</button>
                 <button onClick={() => { setParticleQuizIdx(0); setQuizState({ score: 0, history: [], feedback: null }); setView('particle_quiz'); }} className="px-10 py-5 rounded-3xl bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-rose-500/20 flex items-center gap-3"><FaRedo className="text-[8px]" /> Retake Test</button>
              </div>
          </motion.div>
         ) : null}

        
        {view === 'results' && activeChapter ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="w-32 h-32 rounded-full bg-rose-500/10 flex items-center justify-center mb-8 border border-rose-500/20 relative">
                <FaTrophy className="text-6xl text-rose-500 animate-bounce" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-rose-500/30 rounded-full"></motion.div>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
                {quizState.score === 10 ? <span className="text-green-500 uppercase tracking-widest">Mastered!</span> : <span className="text-gray-300">Great Effort</span>}
             </h2>
             <p className="text-sm text-gray-400 font-medium mb-12">Lesson {activeChapter.chapter === 'Daily' ? 'Daily Challenge' : activeChapter.chapter} proficiency session results.</p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
                <div className="p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0"><FaStar className="text-2xl" /></div>
                   <div className="text-left">
                      <p className="text-[10px] font-black uppercase opacity-30 mb-0.5">Proficiency Score</p>
                      <p className="text-3xl font-black">{quizState.score} / 10</p>
                   </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-xl flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0"><FaCheckCircle className="text-2xl" /></div>
                   <div className="text-left">
                      <p className="text-[10px] font-black uppercase opacity-30 mb-0.5">Status Update</p>
                      <p className="text-3xl font-black text-rose-500">{quizState.score === 10 ? 'CHAPTER CLEAR' : 'TRY AGAIN'}</p>
                   </div>
                </div>
             </div>

             <div className="flex gap-4">
                <button onClick={() => setView('dashboard')} className="px-10 py-5 rounded-3xl bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">Lesson Dashboard</button>
                <button onClick={startQuiz} className="px-10 py-5 rounded-3xl bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-rose-500/20 flex items-center gap-3"><FaRedo className="text-[8px]" /> Retake Exam</button>
             </div>
          </motion.div>
        ) : null}


      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out infinite; }
        .shadow-22 { box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1); }
      `}</style>
      
      <Footer />
    </div>
  );
}

