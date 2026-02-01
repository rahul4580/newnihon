'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaTable, FaClone, FaQuestionCircle, FaChevronRight, FaChevronLeft, FaRedo, FaVolumeUp, FaCheckCircle, FaStar, FaTrophy, FaCalendarDay, FaCalendarWeek, FaClipboardList, FaBolt, FaHourglassHalf, FaKeyboard } from 'react-icons/fa';

// N5 Kanji Dataset
const KANJI_DATA = {
  numbers: [
    { char: '一', meaning: 'One', onyomi: 'ichi', kunyomi: 'hito' },
    { char: '二', meaning: 'Two', onyomi: 'ni', kunyomi: 'futa' },
    { char: '三', meaning: 'Three', onyomi: 'san', kunyomi: 'mi' },
    { char: '四', meaning: 'Four', onyomi: 'shi', kunyomi: 'yon/yo' },
    { char: '五', meaning: 'Five', onyomi: 'go', kunyomi: 'itsu' },
    { char: '六', meaning: 'Six', onyomi: 'roku', kunyomi: 'mu' },
    { char: '七', meaning: 'Seven', onyomi: 'shichi', kunyomi: 'nana' },
    { char: '八', meaning: 'Eight', onyomi: 'hachi', kunyomi: 'ya' },
    { char: '九', meaning: 'Nine', onyomi: 'kyuu/ku', kunyomi: 'kokono' },
    { char: '十', meaning: 'Ten', onyomi: 'juu', kunyomi: 'too' },
    { char: '百', meaning: 'Hundred', onyomi: 'hyaku', kunyomi: '-' },
    { char: '千', meaning: 'Thousand', onyomi: 'sen', kunyomi: 'chi' },
    { char: '万', meaning: 'Ten Thousand', onyomi: 'man/ban', kunyomi: '-' }
  ],
  nature: [
    { char: '日', meaning: 'Day / Sun', onyomi: 'nichi/jitsu', kunyomi: 'hi/bi' },
    { char: '月', meaning: 'Month / Moon', onyomi: 'getsu/gatsu', kunyomi: 'tsuki' },
    { char: '火', meaning: 'Fire', onyomi: 'ka', kunyomi: 'hi' },
    { char: '水', meaning: 'Water', onyomi: 'sui', kunyomi: 'mizu' },
    { char: '木', meaning: 'Tree / Wood', onyomi: 'moku/boku', kunyomi: 'ki' },
    { char: '金', meaning: 'Gold / Money', onyomi: 'kin/kon', kunyomi: 'kane' },
    { char: '土', meaning: 'Earth / Soil', onyomi: 'do/to', kunyomi: 'tsuchi' },
    { char: '山', meaning: 'Mountain', onyomi: 'san', kunyomi: 'yama' },
    { char: '川', meaning: 'River', onyomi: 'sen', kunyomi: 'kawa' },
    { char: '天', meaning: 'Heaven / Sky', onyomi: 'ten', kunyomi: 'ama' },
    { char: '雨', meaning: 'Rain', onyomi: 'u', kunyomi: 'ame' }
  ],
  time: [
    { char: '年', meaning: 'Year', onyomi: 'nen', kunyomi: 'toshi' },
    { char: '今', meaning: 'Now', onyomi: 'kon', kunyomi: 'ima' },
    { char: '時', meaning: 'Time / Hour', onyomi: 'ji', kunyomi: 'toki' },
    { char: '分', meaning: 'Minute / Part', onyomi: 'fun/bun', kunyomi: 'wa' },
    { char: '何', meaning: 'What', onyomi: 'ka', kunyomi: 'nani/nan' },
    { char: '先', meaning: 'Before / Ahead', onyomi: 'sen', kunyomi: 'saki' },
    { char: '生', meaning: 'Life / Birth', onyomi: 'sei/shou', kunyomi: 'i/u' }
  ],
  people: [
    { char: '人', meaning: 'Person', onyomi: 'jin/nin', kunyomi: 'hito' },
    { char: '子', meaning: 'Child', onyomi: 'shi', kunyomi: 'ko' },
    { char: '男', meaning: 'Man', onyomi: 'dan', kunyomi: 'otoko' },
    { char: '女', meaning: 'Woman', onyomi: 'jo', kunyomi: 'onna' },
    { char: '父', meaning: 'Father', onyomi: 'fu', kunyomi: 'chichi' },
    { char: '母', meaning: 'Mother', onyomi: 'bo', kunyomi: 'haha' }
  ],
  school: [
    { char: '学', meaning: 'Study / School', onyomi: 'gaku', kunyomi: 'mana' },
    { char: '校', meaning: 'School', onyomi: 'kou', kunyomi: '-' },
    { char: '書', meaning: 'Write / Book', onyomi: 'sho', kunyomi: 'ka' },
    { char: '聞', meaning: 'Hear / Listen', onyomi: 'bun/mon', kunyomi: 'ki' },
    { char: '話', meaning: 'Talk / Speak', onyomi: 'wa', kunyomi: 'hana' },
    { char: '語', meaning: 'Language', onyomi: 'go', kunyomi: 'kata' }
  ]
};

// Tiered Exam Sentences
const EXAM_DATA = {
  easy: [
    { sentence: "このりんごは *ひと*つ いくらですか。", target: "一", reading: "ひと", options: ["一", "二", "三", "四"], translation: "How much is one of these apples?" },
    { sentence: "あそこに *おとこ*のひとが います。", target: "男", reading: "おとこ", options: ["男", "女", "子", "父"], translation: "There is a man over there." },
    { sentence: "きょうは *しち*がつ なのかです。", target: "七", reading: "しち", options: ["七", "九", "五", "三"], translation: "Today is July 7th." },
    { sentence: "あそこに *やま*が あります。", target: "山", reading: "やま", options: ["山", "川", "田", "土"], translation: "There is a mountain over there." },
    { sentence: "きょうは *にち*ようびです。", target: "日", reading: "にち", options: ["日", "月", "火", "水"], translation: "Today is Sunday." }
  ],
  mid: [
    { sentence: "あしたの *じ*かんを おしえてください。", target: "時", reading: "じ", options: ["時", "待", "寺", "持"], translation: "Please tell me tomorrow's time." },
    { sentence: "わたしは *せん*げつ にほんへ きました。", target: "先", reading: "せん", options: ["先", "元", "洗", "入"], translation: "I came to Japan last month." },
    { sentence: "この*ほん*は おもしろいです。", target: "本", reading: "ほん", options: ["本", "体", "半", "木"], translation: "This book is interesting." },
    { sentence: "あしたは *あめ*が ふるでしょう。", target: "雨", reading: "あめ", options: ["雨", "天", "水", "雪"], translation: "It will probably rain tomorrow." },
    { sentence: "にほん*ご*の べんきょうは たのしいです。", target: "語", reading: "ご", options: ["語", "話", "語", "語"], translation: "Studying Japanese is fun." }
  ],
  hard: [
    { sentence: "まいにち *しん*ぶんを よみますか。", target: "新", reading: "しん", options: ["新", "親", "接", "聞"], translation: "Do you read the newspaper every day?" },
    { sentence: "あの*もん*の まえで まっています。", target: "門", reading: "もん", options: ["門", "問", "間", "聞"], translation: "I am waiting in front of that gate." },
    { sentence: "えきから *なん*ぷん かかりますか。", target: "何", reading: "なん", options: ["何", "荷", "河", "向"], translation: "How many minutes does it take from the station?" },
    { sentence: "この*みせ*は とても ゆうめいです。", target: "店", reading: "みせ", options: ["店", "座", "府", "点"], translation: "This shop is very famous." },
    { sentence: "らい*ねん* けっこんします。", target: "年", reading: "ねん", options: ["年", "牛", "午", "半"], translation: "I will get married next year." }
  ],
  top_hard: [
    { sentence: "ちかくの *びょう*いんへ いきました。", target: "病", reading: "びょう", options: ["病", "痛", "疲", "院"], translation: "I went to a nearby hospital." },
    { sentence: "この*くすり*を のんでください。", target: "薬", reading: "くすり", options: ["薬", "茶", "苦", "草"], translation: "Please take this medicine." },
    { sentence: "でんしゃの なかで *でん*わを しないでください。", target: "電", reading: "でん", options: ["電", "雷", "雨", "天"], translation: "Please do not talk on the phone in the train." },
    { sentence: "あしたの *し*けんは むずかしいですか。", target: "試", reading: "し", options: ["試", "諸", "話", "読"], translation: "Is tomorrow's exam difficult?" },
    { sentence: "わたしの *ゆめ*は せかいりょこうです。", target: "夢", reading: "ゆめ", options: ["夢", "多", "夕", "名"], translation: "My dream is to travel the world." }
  ]
};

export default function N5KanjiPage() {
  const [mode, setMode] = useState('grid');
  const [selectedGroup, setSelectedGroup] = useState('numbers');
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
  const [examCountdown, setExamCountdown] = useState(null); // 3, 2, 1
  const [timeLeft, setTimeLeft] = useState(null); 
  const timerRef = useRef(null);

  // Audio System
  const playSfx = (type) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    } else if (type === 'incorrect') {
      osc.frequency.setValueAtTime(110, ctx.currentTime); // A2
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

  const allKanji = useMemo(() => Object.values(KANJI_DATA).flat(), []);
  const currentPool = useMemo(() => KANJI_DATA[selectedGroup] || allKanji, [selectedGroup, allKanji]);

  useEffect(() => {
    const saved = localStorage.getItem('n5_kanji_stats');
    if (saved) {
      const parsed = JSON.parse(saved);
      const now = new Date();
      const last = new Date(parsed.lastCheck || now);
      if (now.getDate() !== last.getDate()) parsed.daily = 0;
      if (now.getTime() - last.getTime() > 7 * 24 * 60 * 60 * 1000) parsed.weekly = 0;
      setStats(parsed);
    }
  }, []);

  const updateStats = useCallback(() => {
    const newStats = { daily: (stats.daily || 0) + 1, weekly: (stats.weekly || 0) + 1, lastCheck: new Date().toISOString() };
    setStats(newStats);
    localStorage.setItem('n5_kanji_stats', JSON.stringify(newStats));
  }, [stats]);

  // Exam Logic
  const startNewQuestion = useCallback(() => {
    if (quizState.total >= 10 && quizState.total > 0) {
      setMode('results');
      updateStats();
      setTimeLeft(null);
      return;
    }

    // Reset Timer for Hard Mode
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
  }, [currentPool, quizState.total, updateStats, difficulty, mode]);

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
      history: [...prev.history, { ...prev.currentQuestion, wasCorrect: isCorrect, difficultyAchieved: difficulty }] 
    }));
    
    setTimeLeft(null); // Pause timer
    setTimeout(() => startNewQuestion(), 1500);
  }, [mode, quizState.currentQuestion, quizState.feedback, examCountdown, difficulty, startNewQuestion, playSound]);

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer('TIMEOUT_FORCED_FAIL');
      return;
    }
    if (timeLeft !== null && !quizState.feedback) {
      timerRef.current = setInterval(() => {
        setTimeLeft(p => p - 1);
        if (timeLeft <= 5) playSfx('tick');
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timeLeft, quizState.feedback, handleAnswer]);

  // Exam Startup Sequence
  const startExam = (diff) => {
    setDifficulty(diff);
    setMode('exam');
    setQuizState({ currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null });
    setExamCountdown(3);
  };

  useEffect(() => {
    if (examCountdown === 0) {
      setExamCountdown(null);
      startNewQuestion();
    } else if (examCountdown !== null) {
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
        
        {/* Exam Level Picker View */}
        {mode === 'grid' && (
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Ready for the <span className="text-purple-500">Exam?</span></h2>
               <p className="text-gray-500 font-medium">Choose your proficiency level to enter the immersive exam mode.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
               {[
                 { id: 'easy', label: 'Easy', desc: 'Basics & Numbers', color: 'bg-green-500' },
                 { id: 'mid', label: 'Medium', desc: 'Daily Words', color: 'bg-blue-500' },
                 { id: 'hard', label: 'Hard', desc: 'N5 Verbs + Timer', color: 'bg-purple-500' },
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

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-black uppercase tracking-widest mb-6 font-noto">漢字 Mastery</div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            {mode === 'exam' ? (difficulty === 'top_hard' ? 'Elite' : 'Level') : 'N5'} <span className={difficulty === 'top_hard' ? 'text-red-500' : 'text-gray-300 dark:text-neutral-800'}>{mode === 'exam' ? 'Challenge' : 'Kanji Pro'}</span>
          </h1>
          <div className="flex justify-center gap-2 bg-gray-100 dark:bg-neutral-900 p-1.5 rounded-2xl w-fit mx-auto shadow-inner">
            {[{ id: 'grid', icon: <FaTable />, label: 'Study' }, { id: 'flashcards', icon: <FaClone />, label: 'Cards' }, { id: 'quiz', icon: <FaQuestionCircle />, label: 'Quiz' }].map((m) => (
              <button key={m.id} onClick={() => { setMode(m.id); setDifficulty('mixed'); setQuizState({currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null}); }} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${mode === m.id ? 'bg-white dark:bg-black shadow-xl scale-105' : 'opacity-40 hover:opacity-100'}`}>{m.icon} {m.label}</button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto min-h-[550px]">
          <AnimatePresence mode="wait">
            
            {/* Exam Countdown Overlay */}
            {examCountdown !== null && (
              <motion.div key="countdown" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 2 }} className="fixed inset-0 z-[150] bg-black/90 flex items-center justify-center pointer-events-none">
                 <div className="text-center">
                    <p className="text-purple-500 text-sm font-black uppercase tracking-[0.5em] mb-10">Starting {difficulty.toUpperCase()} Exam</p>
                    <span className="text-[15rem] font-black text-white">{examCountdown}</span>
                 </div>
              </motion.div>
            )}

            {mode === 'grid' && (
              <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex flex-wrap gap-4 mb-10 justify-center">
                  {['all', ...Object.keys(KANJI_DATA)].map(group => (
                    <button key={group} onClick={() => setSelectedGroup(group === 'all' ? null : group)} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${selectedGroup === (group === 'all' ? null : group) ? 'border-purple-500 text-purple-500' : 'border-transparent opacity-30 whitespace-nowrap'}`}>{group}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {(selectedGroup ? KANJI_DATA[selectedGroup] : allKanji).map((item, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.05 }} onClick={() => playSound(item.char)} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:border-purple-500 cursor-pointer">
                      <span className="text-4xl font-noto font-black mb-2">{item.char}</span>
                      <span className="text-[10px] font-black opacity-30 uppercase">{item.meaning}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {mode === 'flashcards' && (
              <motion.div key="flashcards" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center">
                 <div className="w-80 h-[500px] perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                  <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ type: 'spring', damping: 20 }} className="w-full h-full preserve-3d">
                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 rounded-[3rem] shadow-22 flex flex-col items-center justify-center gap-8 text-black dark:text-white">
                       <span className="text-8xl font-noto font-black">{allKanji[activeIndex].char}</span>
                       <button onClick={(e) => { e.stopPropagation(); playSound(allKanji[activeIndex].char); }} className="p-5 rounded-full bg-gray-100 dark:bg-neutral-800"><FaVolumeUp className="text-purple-500" /></button>
                    </div>
                    <div className="absolute inset-0 backface-hidden bg-purple-600 rounded-[3rem] flex flex-col items-center justify-center gap-6 text-white text-center" style={{ transform: 'rotateY(180deg)' }}>
                       <span className="text-xs uppercase tracking-widest opacity-60">Meaning</span>
                       <span className="text-4xl font-black">{allKanji[activeIndex].meaning}</span>
                       <div className="flex gap-8 text-sm opacity-80 mt-4"><div>ON: {allKanji[activeIndex].onyomi}</div><div>KUN: {allKanji[activeIndex].kunyomi}</div></div>
                    </div>
                  </motion.div>
                 </div>
                 <div className="flex gap-6 mt-16"><button onClick={() => setActiveIndex((p) => (p - 1 + allKanji.length) % allKanji.length)} className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all text-black dark:text-white"><FaChevronLeft /></button><button onClick={() => setActiveIndex((p) => (p + 1) % allKanji.length)} className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all text-black dark:text-white"><FaChevronRight /></button></div>
              </motion.div>
            )}

            {mode === 'quiz' && quizState.currentQuestion && (
              <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                <div className="text-center mb-16">
                  <div className="text-xs font-black uppercase tracking-widest opacity-30 mb-8">Identify {quizState.questionType}</div>
                  <motion.div animate={quizState.feedback ? (quizState.feedback === 'correct' ? { scale: [1, 1.1, 1] } : { x: [-10, 10, -10, 10, 0] }) : {}} className={`p-12 rounded-[4rem] bg-white dark:bg-neutral-900 shadow-2xl border-2 transition-colors ${quizState.feedback === 'correct' ? 'border-green-500' : quizState.feedback === 'incorrect' ? 'border-red-500' : 'border-transparent'}`}><span className="text-7xl font-noto font-black">{quizState.currentQuestion.char}</span></motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                   {quizState.options.map((opt, i) => (
                     <button key={i} onClick={() => handleAnswer(opt)} className={`p-8 rounded-[2rem] font-bold border-2 transition-all ${quizState.feedback && opt.char === quizState.currentQuestion.char ? 'bg-green-500 text-white border-green-500' : 'bg-white dark:bg-neutral-900 border-black/5 hover:border-black'}`}>{opt.label}</button>
                   ))}
                </div>
              </motion.div>
            )}

            {mode === 'exam' && quizState.currentQuestion && (
              <motion.div 
                key="exam" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto w-full"
              >
                 {/* Exam Header Card */}
                 <div className={`p-8 md:p-12 rounded-[3rem] border transition-all duration-700 shadow-22 mb-8 ${difficulty === 'top_hard' ? 'bg-neutral-950 border-red-500/50 shadow-red-500/5' : 'bg-white dark:bg-neutral-900 border-black/5 shadow-xl shadow-black/5'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                       <div className="flex items-center gap-4">
                          <button 
                            onClick={() => setMode('grid')}
                            className="w-10 h-10 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                          >
                             <FaChevronLeft />
                          </button>
                          <div>
                             <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30">JLPT N5 Proficiency</p>
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
                          <span className="px-4 py-1.5 rounded-lg bg-purple-500/10 text-purple-500 text-[10px] font-black border border-purple-500/20 uppercase tracking-[0.2em]">問 {quizState.total + 1}</span>
                       </div>

                       <motion.div 
                         key={quizState.total}
                         className={`text-3xl md:text-5xl font-medium leading-[1.6] mb-8 font-noto ${difficulty === 'top_hard' ? 'text-white' : ''}`}
                       >
                          {quizState.currentQuestion.sentence.split('*').map((part, i) => (
                            i % 2 === 1 ? (
                              <span key={i} className="inline-block mx-1 relative">
                                <span className={`inline-flex items-center justify-center px-4 md:px-6 py-1 md:py-2 rounded-xl md:rounded-2xl border-2 font-black shadow-lg transition-all ${
                                  difficulty === 'top_hard' ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-purple-500/5 border-purple-500 text-purple-500'
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

                 {/* Choices Grid - Positioned Below Card */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                    {quizState.options.map((opt, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleAnswer(opt)} 
                        disabled={!!quizState.feedback}
                        className={`group relative aspect-square rounded-[2rem] md:rounded-[2.5rem] text-4xl md:text-6xl font-noto font-black transition-all border-2 md:border-4 flex items-center justify-center overflow-hidden hover:scale-[1.03] active:scale-95 shadow-xl shadow-black/5 ${
                          quizState.feedback === 'correct' && opt === quizState.currentQuestion.target 
                            ? 'bg-green-500 text-white border-green-500 shadow-green-500/20' 
                            : quizState.feedback === 'incorrect' && opt === quizState.currentQuestion.target
                            ? 'bg-green-500/20 border-green-500/50 text-green-500'
                            : quizState.feedback === 'incorrect' && opt !== quizState.currentQuestion.target
                            ? 'opacity-20 border-transparent grayscale scale-95' 
                            : (difficulty === 'top_hard' ? 'bg-neutral-900 text-white border-white/10 hover:border-red-500' : 'bg-white dark:bg-neutral-900 border-black/5 hover:border-purple-500')
                        }`}
                      >
                        <span className="relative z-10">{opt}</span>
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-1 text-[8px] md:text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity tracking-widest uppercase"><FaKeyboard /> {i+1}</div>
                        
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

            {mode === 'results' && (
              <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center">
                 <div className="w-40 h-40 rounded-full bg-purple-500/10 flex items-center justify-center mb-10 border border-purple-500/20"><FaTrophy className="text-7xl text-purple-500" /></div>
                 <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">{difficulty.toUpperCase()} <span className="text-purple-500">CLEARED</span></h2>
                 <p className="text-xl text-gray-500 font-medium mb-12">Congratulations on completing the proficiency session!</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-16">
                    <div className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6 text-black dark:text-white"><FaStar className="text-4xl text-yellow-500" /><div className="text-left"><div className="text-xs font-black uppercase opacity-40">Accuracy</div><div className="text-4xl font-black">{Math.round((quizState.score / 10) * 100)}%</div></div></div>
                    <div className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 border border-black/5 flex items-center gap-6 text-black dark:text-white"><FaCheckCircle className="text-4xl text-green-500" /><div className="text-left"><div className="text-xs font-black uppercase opacity-40">Daily Goal</div><div className="text-4xl font-black">{stats.daily || 0}/5</div></div></div>
                 </div>
                 <button onClick={() => { setQuizState({currentQuestion: null, options: [], score: 0, total: 0, history: [], feedback: null}); setMode('grid'); }} className="px-14 py-6 rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform flex items-center gap-3"><FaRedo /> Return to Study</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style jsx global>{`.perspective-1000 { perspective: 1000px; } .preserve-3d { transform-style: preserve-3d; } .backface-hidden { backface-visibility: hidden; } .animate-spin-slow { animation: spin 3s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <Footer />
    </div>
  );
}

