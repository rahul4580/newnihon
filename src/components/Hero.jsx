'use client';
import { motion } from 'motion/react';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

import Link from 'next/link';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language]?.hero || {};

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-20 pt-24 pb-12 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors duration-500">
      


      {/* Marquee Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] whitespace-nowrap z-0 select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black uppercase tracking-tighter leading-none"
        >
          CREATIVE DEVELOPER • FULL STACK ARCHITECT • CREATIVE DEVELOPER • FULL STACK ARCHITECT • 
        </motion.div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 gap-12 md:gap-0">
        {/* Left Content */}
        <div className="flex-1 space-y-12 text-center md:text-left order-2 md:order-1">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md mb-8">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest">{t.greeting}</span>
              </div>

             <h1 className={`text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               {t.title}<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 dark:from-neutral-500 dark:to-neutral-100">{t.subtitle}</span>
             </h1>
          </motion.div>

          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl mx-auto md:mx-0"
          >
            <p className="text-xl md:text-2xl text-gray-500 dark:text-neutral-400 font-medium leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="flex flex-wrap gap-6 justify-center md:justify-start"
          >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20 transition-all"
              >
                  {t.cta}
              </motion.button>
              
              <Link href="/more/languages" className="group flex items-center gap-4 px-10 py-5 font-black text-xs uppercase tracking-[0.3em]">
                <span className="group-hover:translate-x-2 transition-transform duration-300">JLPT ROADMAP</span>
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  →
                </div>
              </Link>
          </motion.div>
        </div>

        {/* Right Content - JLPT Levels Grid */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
           className="relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[400px]">
            {t.levels?.map((level, index) => (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="aspect-square w-32 md:w-40 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">JLPT</span>
                <span className="text-4xl md:text-5xl font-black italic tracking-tighter">{level}</span>
                <div className="mt-4 w-8 h-px bg-red-500/30 group-hover:w-16 transition-all duration-500"></div>
              </motion.div>
            ))}
            
            {/* Special Highlight Card */}
            <Link href="/more" aria-label="N5 to N1 Journey">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="col-span-2 bg-black dark:bg-white p-8 rounded-[3rem] shadow-2xl flex items-center justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="relative z-10">
                  <p className="text-white/50 dark:text-black/50 text-[10px] font-black uppercase tracking-widest mb-1">Expert System</p>
                  <p className="text-white dark:text-black text-xl font-black italic tracking-tighter">N5 to N1 Journey.</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-black/10 flex items-center justify-center text-white dark:text-black text-2xl group-hover:translate-x-2 transition-transform">
                  →
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/[0.05] dark:text-black/[0.05] text-8xl font-black italic select-none">
                  NIHON
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-black dark:from-white to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;
