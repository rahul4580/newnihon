'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import { FaPenFancy } from 'react-icons/fa';
import Footer from '../../../components/Footer';

export default function Articles() {
  const { language } = useLanguage();
  const t = translations[language].more_articles || {};
  const list = t.list || [];

  const floatingKanji = ['文', '記', '想', '道', '知', '夢'];

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        {floatingKanji.map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
              y: [0, -100, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
            className="absolute text-[15vw] font-noto text-black dark:text-white"
            style={{
              left: `${(i + 1) * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            {k}
          </motion.div>
        ))}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-green-500/5 rounded-full blur-[120px] -mr-[25vw] -mt-[10vw]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] -ml-[20vw] -mb-[10vw]"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto mb-24 text-center"
         >
           <motion.div 
             initial={{ scale: 0.8, y: 20 }}
             animate={{ scale: 1, y: 0 }}
             className="inline-block p-6 rounded-full bg-black text-white dark:bg-white dark:text-black mb-10 shadow-2xl"
           >
             <FaPenFancy className="text-4xl" />
           </motion.div>
           <h1 className={`text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.title}
           </h1>
           <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-500 max-w-2xl mx-auto leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
             {t.subtitle}
           </p>
         </motion.div>

        {/* Single Focus Card (matches /more/languages style) */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-600 text-white p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-green-500/20 group"
          >
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none">
              <FaPenFancy className="text-[20rem]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">
                  Latest Article
                </span>
              </div>

              <h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>
                {list?.[0]?.title || 'Why I Love MERN Stack'}
              </h2>
              <p className={`text-xl text-white/85 mb-12 leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
                {list?.[0]?.snippet || 'Thoughts on building modern full-stack systems.'}
              </p>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-[2rem] mb-8 group-hover:bg-white/15 transition-colors duration-500">
                <p className="text-[10px] text-center text-white/70 font-black uppercase tracking-[0.2em] mb-4">
                  Archive
                </p>
                <div className="space-y-4">
                  {(list || []).slice(0, 3).map((a) => (
                    <div key={`${a.title}-${a.date}`} className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-lg font-black tracking-tight">{a.title}</div>
                        <div className="text-white/70 text-sm font-medium">{a.date}</div>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 whitespace-nowrap">
                        Saved
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              {['MERN', 'Next.js', 'Data', '3D Web', 'Systems', 'Design'].map((item) => (
                <span key={item} className="px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-[2rem] px-8 py-10 md:px-12 md:py-12 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">
                All Articles Download
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-neutral-400 max-w-xl">
                I’ll publish a single archive download soon. For now, the latest posts are highlighted above.
              </p>
            </div>
            <button className="px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.3em] bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Download (Soon)
            </button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
