'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaTable, FaClone, FaQuestionCircle, FaChevronRight, FaChevronLeft, FaRedo, FaVolumeUp, FaCheckCircle, FaStar, FaTrophy, FaClipboardList, FaHourglassHalf, FaKeyboard } from 'react-icons/fa';

import { N5_KANJI_DATA, N5_EXAM_DATA } from '../../../../utils/n5KanjiData';
import { N4_KANJI_DATA, N4_EXAM_DATA } from '../../../../utils/n4KanjiData';
import { N3_KANJI_DATA, N3_EXAM_DATA } from '../../../../utils/n3KanjiData';
import { N2_KANJI_DATA, N2_EXAM_DATA } from '../../../../utils/n2KanjiData';
import { N1_KANJI_DATA, N1_EXAM_DATA } from '../../../../utils/n1KanjiData';

const LEVEL_CONFIG = {
  N5: { data: N5_KANJI_DATA, exam: N5_EXAM_DATA, color: 'emerald', label: 'N5', desc: 'Beginner', gradient: 'from-emerald-500 to-teal-600' },
  N4: { data: N4_KANJI_DATA, exam: N4_EXAM_DATA, color: 'blue', label: 'N4', desc: 'Elementary', gradient: 'from-blue-500 to-indigo-600' },
  N3: { data: N3_KANJI_DATA, exam: N3_EXAM_DATA, color: 'purple', label: 'N3', desc: 'Intermediate', gradient: 'from-purple-500 to-violet-600' },
  N2: { data: N2_KANJI_DATA, exam: N2_EXAM_DATA, color: 'orange', label: 'N2', desc: 'Advanced', gradient: 'from-orange-500 to-red-500' },
  N1: { data: N1_KANJI_DATA, exam: N1_EXAM_DATA, color: 'red', label: 'N1', desc: 'Expert', gradient: 'from-red-600 to-rose-700' },
};

const ACCENT_COLORS = {
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', bgLight: 'bg-emerald-500/10', borderLight: 'border-emerald-500/20' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', bgLight: 'bg-blue-500/10', borderLight: 'border-blue-500/20' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', bgLight: 'bg-purple-500/10', borderLight: 'border-purple-500/20' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', bgLight: 'bg-orange-500/10', borderLight: 'border-orange-500/20' },
  red: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500', bgLight: 'bg-red-500/10', borderLight: 'border-red-500/20' },
};

export default function KanjiMasterPage() {
  const [level, setLevel] = useState('N5');
  const [mode, setMode] = useState('grid');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizState, setQuizState] = useState({
    currentQuestion: null,
    options: [],
    score: 0,
    total: 0,
    history: [],
    feedback: null,
    questionType: 'meaning'
  });
  const [stats, setStats] = useState({ daily: 0, weekly: 0, lastCheck: null });
  const [examCountdown, setExamCountdown] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const timerRef = useRef(null);

  const config = LEVEL_CONFIG[level];
  const accent = ACCENT_COLORS[config.color];
  const KANJI_DATA = config.data;
  const EXAM_DATA = config.exam;

  // Reset state when level changes
  useEffect(() => {
    setMode('grid');
    setSelectedGroup(null);
    setActiveIndex(0);
    setIsFlipped(false);
    setQuizState({ currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null, questionType: 'meaning' });
    setExamCountdown(null);
    setTimeLeft(null);
  }, [level]);

  // Audio System
  const playSfx = (type) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    } else if (type === 'incorrect') {
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    } else if (type === 'tick') {
      osc.frequency.setValueAtTime(1000, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    }
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  };

  const playSound = useCallback((text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const allKanji = useMemo(() => Object.values(KANJI_DATA).flat(), [KANJI_DATA]);
  const currentPool = useMemo(() => selectedGroup ? (KANJI_DATA[selectedGroup] || allKanji) : allKanji, [selectedGroup, allKanji, KANJI_DATA]);

  useEffect(() => {
    const saved = localStorage.getItem(`kanji_stats_${level}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      const now = new Date();
      const last = new Date(parsed.lastCheck || now);
      if (now.getDate() !== last.getDate()) parsed.daily = 0;
      if (now.getTime() - last.getTime() > 7 * 24 * 60 * 60 * 1000) parsed.weekly = 0;
      setStats(parsed);
    } else {
      setStats({ daily: 0, weekly: 0, lastCheck: null });
    }
  }, [level]);

  const updateStats = useCallback(() => {
    const newStats = { daily: (stats.daily || 0) + 1, weekly: (stats.weekly || 0) + 1, lastCheck: new Date().toISOString() };
    setStats(newStats);
    localStorage.setItem(`kanji_stats_${level}`, JSON.stringify(newStats));
  }, [stats, level]);

  // Exam Logic
  const startNewQuestion = useCallback(() => {
    if (quizState.total >= 10 && quizState.total > 0) {
      setMode('results');
      updateStats();
      setTimeLeft(null);
      return;
    }
    if (mode === 'exam' && (difficulty === 'hard' || difficulty === 'top_hard')) {
      setTimeLeft(difficulty === 'top_hard' ? 10 : 20);
    }
    if (mode === 'exam') {
      const tierPool = EXAM_DATA[difficulty] || EXAM_DATA.easy;
      const question = tierPool[Math.floor(Math.random() * tierPool.length)];
      setQuizState(prev => ({ ...prev, currentQuestion: question, options: [...new Set(question.options)].sort(() => 0.5 - Math.random()), feedback: null }));
    } else {
      const correct = currentPool[Math.floor(Math.random() * currentPool.length)];
      const others = currentPool.filter(c => c.char !== correct.char);
      const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
      let qType = ['easy', 'mid', 'hard', 'top_hard'].includes(difficulty) ? 'mixed' : difficulty;
      if (qType === 'mixed') qType = Math.random() > 0.5 ? 'meaning' : 'reading';
      const options = [...shuffledOthers, correct].sort(() => 0.5 - Math.random()).map(c => ({ char: c.char, label: qType === 'meaning' ? c.meaning : `${c.onyomi} / ${c.kunyomi}` }));
      setQuizState(prev => ({ ...prev, currentQuestion: correct, options, feedback: null, questionType: qType }));
    }
  }, [currentPool, quizState.total, updateStats, difficulty, mode, EXAM_DATA]);

  const handleAnswer = useCallback((option) => {
    if (quizState.feedback || examCountdown) return;
    const isCorrect = mode === 'exam' ? option === quizState.currentQuestion.target : (option.char || option) === (quizState.currentQuestion.char || quizState.currentQuestion.target);
    if (isCorrect) {
      playSfx('correct');
      playSound(mode === 'exam' ? quizState.currentQuestion.target : quizState.currentQuestion.char);
    } else {
      playSfx('incorrect');
    }
    setQuizState(prev => ({
      ...prev,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
      total: prev.total + 1,
      history: [...prev.history, { 
        ...prev.currentQuestion, 
        userChoice: mode === 'exam' ? option : (option.char || option),
        targetCheck: mode === 'exam' ? quizState.currentQuestion.target : (quizState.currentQuestion.char || quizState.currentQuestion.target),
        wasCorrect: isCorrect, 
        difficultyAchieved: difficulty 
      }]
    }));
    setTimeLeft(null);
    setTimeout(() => startNewQuestion(), 1500);
  }, [mode, quizState.currentQuestion, quizState.feedback, examCountdown, difficulty, startNewQuestion, playSound]);

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) { handleAnswer('TIMEOUT_FORCED_FAIL'); return; }
    if (timeLeft !== null && !quizState.feedback) {
      timerRef.current = setInterval(() => {
        setTimeLeft(p => p - 1);
        if (timeLeft <= 5) playSfx('tick');
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timeLeft, quizState.feedback, handleAnswer]);

  // Exam Startup
  const startExam = (diff) => {
    setDifficulty(diff);
    setMode('exam');
    setQuizState({ currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null });
    setExamCountdown(3);
  };

  useEffect(() => {
    if (examCountdown === 0) { setExamCountdown(null); startNewQuestion(); }
    else if (examCountdown !== null) {
      const t = setTimeout(() => setExamCountdown(p => p - 1), 1000);
      playSfx('tick');
      return () => clearTimeout(t);
    }
  }, [examCountdown, startNewQuestion]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeys = (e) => {
      if (quizState.feedback || examCountdown) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (quizState.options[idx]) handleAnswer(quizState.options[idx]);
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [quizState.options, quizState.feedback, examCountdown, handleAnswer]);

  useEffect(() => {
    if (mode === 'quiz' && !quizState.currentQuestion) startNewQuestion();
  }, [mode, quizState.currentQuestion, startNewQuestion]);

  const kanjiCount = allKanji.length;

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden selection:bg-purple-500 selection:text-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">

        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            <FaChevronLeft /> Back to Languages
          </a>
        </motion.div>

        {/* ═══════════════ JLPT LEVEL SELECTOR ═══════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex justify-center">
          <div className="flex items-center gap-1 bg-white dark:bg-neutral-900 p-1.5 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
             {Object.entries(LEVEL_CONFIG).map(([key, cfg]) => {
                const isActive = level === key;
                return (
                  <button
                    key={key}
                    onClick={() => setLevel(key)}
                    className={`relative px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="level-toggle"
                        className={`absolute inset-0 bg-${cfg.color}-500 rounded-xl shadow-lg shadow-${cfg.color}-500/30`}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{key}</span>
                  </button>
                );
             })}
          </div>
        </motion.div>

        {/* Exam Level Picker View */}
        {mode === 'grid' && (
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Ready for the <span className={accent.text}>Exam?</span></h2>
              <p className="text-gray-500 font-medium">Choose your proficiency level to enter the immersive exam mode.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              {[
                { id: 'easy', label: 'Easy', desc: 'Basics & Numbers', color: 'bg-green-500' },
                { id: 'mid', label: 'Medium', desc: 'Daily Words', color: 'bg-blue-500' },
                { id: 'hard', label: 'Hard', desc: `${level} Verbs + Timer`, color: 'bg-purple-500' },
                { id: 'top_hard', label: 'ELITE', desc: 'High Intensity!', color: 'bg-red-500' }
              ].map(tier => (
                <button key={tier.id} onClick={() => startExam(tier.id)} className="group p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 hover:border-purple-500 transition-all text-left flex flex-col items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${tier.color} text-white flex items-center justify-center shadow-lg`}><FaClipboardList /></div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-widest">{tier.label}</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{tier.desc}</p>
                  </div>
                  <div className="mt-4 opacity-30 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">Start Test <FaChevronRight /></div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Title + Mode Toggle */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-block px-4 py-1 rounded-full ${accent.bgLight} border ${accent.borderLight} ${accent.text} text-[10px] font-black uppercase tracking-widest mb-6 font-noto`}>漢字 Mastery • {level}</div>
          <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter">
            {mode === 'exam' ? (difficulty === 'top_hard' ? 'Elite' : level) : level}{' '}
            <span className="text-gray-300 dark:text-neutral-800">{mode === 'exam' ? 'Challenge' : 'Kanji Pro'}</span>
          </h1>
          <p className="text-sm text-gray-400 font-bold mb-8">{kanjiCount} Kanji • {Object.keys(KANJI_DATA).length} Categories</p>
          <div className="flex justify-center gap-2 bg-gray-100 dark:bg-neutral-900 p-1.5 rounded-2xl w-fit mx-auto shadow-inner">
            {[{ id: 'grid', icon: <FaTable />, label: 'Study' }, { id: 'flashcards', icon: <FaClone />, label: 'Cards' }, { id: 'quiz', icon: <FaQuestionCircle />, label: 'Quiz' }].map((m) => (
              <button key={m.id} onClick={() => { setMode(m.id); setDifficulty('mixed'); setQuizState({ currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null }); }} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${mode === m.id ? 'bg-white dark:bg-black shadow-xl scale-105' : 'opacity-40 hover:opacity-100'}`}>{m.icon} {m.label}</button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto min-h-[550px]">
          <AnimatePresence mode="wait">

            {/* Exam Countdown Overlay */}
            {examCountdown !== null && (
              <motion.div key="countdown" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 2 }} className="fixed inset-0 z-150 bg-black/90 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className={`${accent.text} text-sm font-black uppercase tracking-[0.5em] mb-10`}>Starting {level} {difficulty.toUpperCase()} Exam</p>
                  <span className="text-[15rem] font-black text-white">{examCountdown}</span>
                </div>
              </motion.div>
            )}

            {/* ═══════════════ STUDY GRID ═══════════════ */}
            {mode === 'grid' && (
              <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex flex-wrap gap-4 mb-10 justify-center">
                  {['all', ...Object.keys(KANJI_DATA)].map(group => (
                    <button key={group} onClick={() => setSelectedGroup(group === 'all' ? null : group)} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${selectedGroup === (group === 'all' ? null : group) ? `${accent.border} ${accent.text}` : 'border-transparent opacity-30 whitespace-nowrap'}`}>{group.replace(/_/g, ' ')}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {(selectedGroup ? KANJI_DATA[selectedGroup] : allKanji).map((item, idx) => (
                    <motion.div key={`${item.char}-${idx}`} whileHover={{ scale: 1.05 }} onClick={() => playSound(item.char)} className={`flex flex-col items-center justify-center p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:${accent.border} cursor-pointer transition-all`}>
                      <span className="text-4xl font-noto font-black mb-2">{item.char}</span>
                      <span className="text-[10px] font-black opacity-30 uppercase">{item.meaning}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══════════════ FLASHCARDS ═══════════════ */}
            {mode === 'flashcards' && (
              <motion.div key="flashcards" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center">
                <div className="w-80 h-[500px] perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                  <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ type: 'spring', damping: 20 }} className="w-full h-full preserve-3d">
                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-8 text-black dark:text-white">
                      <span className="text-8xl font-noto font-black">{allKanji[activeIndex]?.char}</span>
                      <button onClick={(e) => { e.stopPropagation(); playSound(allKanji[activeIndex]?.char); }} className="p-5 rounded-full bg-gray-100 dark:bg-neutral-800"><FaVolumeUp className={accent.text} /></button>
                    </div>
                    <div className={`absolute inset-0 backface-hidden bg-linear-to-br ${config.gradient} rounded-[3rem] flex flex-col items-center justify-center gap-6 text-white text-center`} style={{ transform: 'rotateY(180deg)' }}>
                      <span className="text-xs uppercase tracking-widest opacity-60">Meaning</span>
                      <span className="text-4xl font-black">{allKanji[activeIndex]?.meaning}</span>
                      <div className="flex gap-8 text-sm opacity-80 mt-4">
                        <div>ON: {allKanji[activeIndex]?.onyomi}</div>
                        <div>KUN: {allKanji[activeIndex]?.kunyomi}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex items-center gap-6 mt-16">
                  <button onClick={() => { setActiveIndex((p) => (p - 1 + allKanji.length) % allKanji.length); setIsFlipped(false); }} className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all text-black dark:text-white"><FaChevronLeft /></button>
                  <span className="text-xs font-mono font-black opacity-30">{activeIndex + 1} / {allKanji.length}</span>
                  <button onClick={() => { setActiveIndex((p) => (p + 1) % allKanji.length); setIsFlipped(false); }} className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all text-black dark:text-white"><FaChevronRight /></button>
                </div>
              </motion.div>
            )}

            {/* ═══════════════ QUIZ ═══════════════ */}
            {mode === 'quiz' && quizState.currentQuestion && (
              <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                <div className="text-center mb-16">
                  <div className="text-xs font-black uppercase tracking-widest opacity-30 mb-8">Identify {quizState.questionType}</div>
                  <motion.div animate={quizState.feedback ? (quizState.feedback === 'correct' ? { scale: [1, 1.1, 1] } : { x: [-10, 10, -10, 10, 0] }) : {}} className={`p-12 rounded-[4rem] bg-white dark:bg-neutral-900 shadow-2xl border-2 transition-colors ${quizState.feedback === 'correct' ? 'border-green-500' : quizState.feedback === 'incorrect' ? 'border-red-500' : 'border-transparent'}`}><span className="text-7xl font-noto font-black">{quizState.currentQuestion.char}</span></motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {quizState.options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt)} className={`p-8 rounded-4xl font-bold border-2 transition-all ${quizState.feedback && opt.char === quizState.currentQuestion.char ? 'bg-green-500 text-white border-green-500' : 'bg-white dark:bg-neutral-900 border-black/5 hover:border-black'}`}>{opt.label}</button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══════════════ EXAM MODE ═══════════════ */}
            {mode === 'exam' && quizState.currentQuestion && (
              <motion.div key="exam" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-4xl mx-auto w-full">
                {/* Exam Header Card */}
                <div className={`p-8 md:p-12 rounded-[3rem] border transition-all duration-700 shadow-2xl mb-8 ${difficulty === 'top_hard' ? 'bg-neutral-950 border-red-500/50 shadow-red-500/5' : 'bg-white dark:bg-neutral-900 border-black/5 shadow-xl shadow-black/5'}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="flex items-center gap-4">
                      <button onClick={() => setMode('grid')} className="w-10 h-10 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        <FaChevronLeft />
                      </button>
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30">JLPT {level} Proficiency</p>
                        <h2 className="text-sm font-black uppercase tracking-widest">{difficulty.toUpperCase()} MODE</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 w-full md:w-auto">
                      {timeLeft !== null && (
                        <div className={`flex items-center gap-2 transition-colors ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'opacity-60'}`}>
                          <FaHourglassHalf className="text-xs" />
                          <span className="text-lg font-black font-mono">{timeLeft}s</span>
                        </div>
                      )}
                      <div className="flex-1 md:flex-none">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-black uppercase opacity-30">Questions</span>
                          <span className="text-[10px] font-black uppercase opacity-60 font-mono">{quizState.total + 1} / 10</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className={`h-1.5 w-4 rounded-full transition-all duration-500 ${i < quizState.total ? (quizState.history[i]?.wasCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200 dark:bg-neutral-800'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center relative py-6">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className={`px-4 py-1.5 rounded-lg ${accent.bgLight} ${accent.text} text-[10px] font-black border ${accent.borderLight} uppercase tracking-[0.2em]`}>問 {quizState.total + 1}</span>
                    </div>
                    <motion.div key={quizState.total} className={`text-3xl md:text-5xl font-medium leading-[1.6] mb-8 font-noto ${difficulty === 'top_hard' ? 'text-white' : ''}`}>
                      {quizState.currentQuestion.sentence.split('*').map((part, i) => (
                        i % 2 === 1 ? (
                          <span key={i} className="inline-block mx-1 relative">
                            <span className={`inline-flex items-center justify-center px-4 md:px-6 py-1 md:py-2 rounded-xl md:rounded-2xl border-2 font-black shadow-lg transition-all ${
                              difficulty === 'top_hard' ? 'bg-red-500/10 border-red-500 text-red-500' : `${accent.bgLight} ${accent.border} ${accent.text}`
                            }`}>
                              {part}
                            </span>
                          </span>
                        ) : part
                      ))}
                    </motion.div>
                    <div className="h-6 flex items-center justify-center">
                      <AnimatePresence>
                        {quizState.feedback && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm md:text-base text-gray-400 font-medium italic">
                            &quot;{quizState.currentQuestion.translation}&quot;
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Choices Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                  {quizState.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!quizState.feedback}
                      className={`group relative aspect-square rounded-4xl md:rounded-[2.5rem] text-4xl md:text-6xl font-noto font-black transition-all border-2 md:border-4 flex items-center justify-center overflow-hidden hover:scale-[1.03] active:scale-95 shadow-xl shadow-black/5 ${
                        quizState.feedback === 'correct' && opt === quizState.currentQuestion.target
                          ? 'bg-green-500 text-white border-green-500 shadow-green-500/20'
                          : quizState.feedback === 'incorrect' && opt === quizState.currentQuestion.target
                          ? 'bg-green-500/20 border-green-500/50 text-green-500'
                          : quizState.feedback === 'incorrect' && opt !== quizState.currentQuestion.target
                          ? 'opacity-20 border-transparent grayscale scale-95'
                          : (difficulty === 'top_hard' ? 'bg-neutral-900 text-white border-white/10 hover:border-red-500' : `bg-white dark:bg-neutral-900 border-black/5 hover:${accent.border}`)
                      }`}
                    >
                      <span className="relative z-10">{opt}</span>
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-1 text-[8px] md:text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity tracking-widest uppercase"><FaKeyboard /> {i + 1}</div>
                      {quizState.feedback === 'correct' && opt === quizState.currentQuestion.target && (
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-green-500 flex items-center justify-center">
                          <FaCheckCircle className="text-white text-3xl md:text-5xl" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══════════════ RESULTS ═══════════════ */}
            {mode === 'results' && (
              <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center">
                <div className={`w-40 h-40 rounded-full ${accent.bgLight} flex items-center justify-center mb-10 border ${accent.borderLight}`}><FaTrophy className={`text-7xl ${accent.text}`} /></div>
                <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">{level} {difficulty.toUpperCase()} <span className={accent.text}>CLEARED</span></h2>
                <p className="text-xl text-gray-500 font-medium mb-12">Congratulations on completing the proficiency session!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-10 text-left">
                  <div className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6 text-black dark:text-white shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 animate-pulse"><FaStar className="text-4xl" /></div>
                    <div>
                      <div className="text-[10px] font-black uppercase opacity-40">Accuracy Score</div>
                      <div className="text-4xl font-black">{Math.round((quizState.score / 10) * 100)}%</div>
                    </div>
                  </div>
                  <div className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6 text-black dark:text-white shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center shrink-0"><FaCheckCircle className="text-4xl" /></div>
                    <div>
                      <div className="text-[10px] font-black uppercase opacity-40">Daily Progress</div>
                      <div className="text-4xl font-black">{stats.daily || 0}/5</div>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-2xl mb-16 text-left">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-6 px-4">Performance Review</h3>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {quizState.history.map((item, i) => (
                      <div key={i} className="group p-6 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 shadow-sm flex items-start gap-6 transition-all hover:border-black/10">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-xl ${item.wasCorrect ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                          {item.wasCorrect ? <FaCheckCircle /> : <FaRedo className="rotate-45" />}
                        </div>
                        <div className="flex-1 min-w-0">
                           {item.sentence ? (
                             <div className="text-xl font-medium font-noto mb-2 leading-relaxed">
                               {item.sentence.split('*').map((part, idx) => idx % 2 === 1 ? <span key={idx} className="text-purple-500 font-black">{item.targetCheck}</span> : part)}
                             </div>
                           ) : (
                             <div className="text-3xl font-black font-noto mb-1">{item.char}</div>
                           )}
                           <div className="flex gap-4 items-center">
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] font-black uppercase opacity-30">Your Answer:</span>
                                <span className={`text-[11px] font-bold ${item.wasCorrect ? 'text-green-500' : 'text-red-500'}`}>{item.userChoice}</span>
                              </div>
                              {!item.wasCorrect && (
                                <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-black uppercase opacity-30">Goal:</span>
                                  <span className="text-[11px] font-bold text-green-500">{item.targetCheck}</span>
                                </div>
                              )}
                              <div className="ml-auto text-[9px] font-black uppercase opacity-20 group-hover:opacity-100 transition-opacity">
                                {item.meaning || item.translation?.slice(0, 15)+'...'}
                              </div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={() => { setQuizState({ currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null }); setMode('grid'); }} className="px-14 py-6 rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl shadow-black/10"><FaRedo /> Return to Study</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style jsx global>{`.perspective-1000 { perspective: 1000px; } .preserve-3d { transform-style: preserve-3d; } .backface-hidden { backface-visibility: hidden; } .animate-spin-slow { animation: spin 3s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; } .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); }`}</style>
      <Footer />
    </div>
  );
}
