'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

function Work() {
    const { language } = useLanguage();
    const t = translations[language].about.story;

    return (
        <section
          id="work"
          className="relative py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10 overflow-hidden">
            <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-blue-100 dark:bg-blue-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[60%] bg-orange-100 dark:bg-orange-950/20 blur-[120px] rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 mb-8 bg-gray-50 dark:bg-neutral-900/50 backdrop-blur-sm"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 dark:text-neutral-400">
                  {t.title}
                </span>
              </motion.div>

              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className={`text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>
                  The journey <span className="text-gray-400 dark:text-neutral-600">isn't just about</span> the destination.
                </h2>
                <p className={`text-xl md:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed mb-16 ${language === 'jp' ? 'font-noto' : ''}`}>
                  {t.text}
                </p>
              </motion.div>

              {/* Will of D Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative p-10 md:p-16 rounded-[3rem] bg-neutral-50 dark:bg-neutral-950 border border-black/5 dark:border-white/5 overflow-hidden group"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 p-8 text-neutral-200 dark:text-neutral-800 text-8xl font-black opacity-20 group-hover:scale-110 transition-transform duration-700">
                  D
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-8 text-orange-500 dark:text-orange-400">
                    {t.will_of_d.title}
                  </h3>
                  
                  <blockquote className="relative">
                    <p className={`text-2xl md:text-4xl font-bold italic tracking-tight leading-snug mb-6 ${language === 'jp' ? 'font-noto' : ''}`}>
                      {t.will_of_d.quote}
                    </p>
                    <footer className="text-gray-400 dark:text-neutral-500 text-xs font-bold uppercase tracking-widest">
                      — Eiichiro Oda
                    </footer>
                  </blockquote>
                </div>
              </motion.div>

              {/* Footer text */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <p className="text-gray-400 dark:text-neutral-600 font-medium uppercase tracking-[0.2em] text-[10px]">
                  Detailed case studies are highlighted in the Projects section.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
    );
}

export default Work;
