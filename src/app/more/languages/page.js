'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import { FaLanguage } from 'react-icons/fa';
import Footer from '../../../components/Footer';

export default function Languages() {
  const { language } = useLanguage();
  const t = translations.jp?.more_languages || {};
  const t_jp = t.jp || {};

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="inline-block p-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black mb-6">
            <FaLanguage className="text-3xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter font-noto">
            {t.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-neutral-500 max-w-2xl mx-auto font-noto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Japanese Language Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 p-10 md:p-12 rounded-3xl"
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                Japanese Only
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight font-noto">{t_jp.name}</h2>
              <p className="text-base text-gray-600 dark:text-neutral-400 font-noto">{t_jp.desc}</p>
            </div>

            {/* Study Modules Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Hiragana', href: '/more/languages/hiragana' },
                { label: 'Katakana', href: '/more/languages/katakana' },
                { label: 'Kanji Master', href: '/more/languages/n5-kanji' },
                { label: 'Grammar', href: '/more/languages/grammar' },
                { label: 'Vocabulary', href: '/more/languages/vocabulary' },
                { label: 'Nihon Bot', href: '/more/languages/listening' },
                { label: 'Stories', href: '/more/languages/jlpt-prep' },
                { label: 'Anime & Manga', href: '/more/languages/anime-manga' },
                { label: 'Conversation', href: '/more/languages/conversation' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 bg-black/5 dark:bg-white/5 rounded-xl text-sm font-bold text-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/5 dark:border-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Kanji Preview */}
            <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl text-center border border-black/5 dark:border-white/5">
              <p className="text-[8px] text-gray-500 dark:text-neutral-500 font-black uppercase tracking-wider mb-3">Daily Kanji</p>
              <div className="text-6xl font-noto mb-2">夢</div>
              <div className="text-sm font-bold tracking-wide">YUME • DREAM</div>
            </div>
          </motion.div>

          {/* Study Library */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-black mb-2 tracking-tight">
              Japanese Study Library
            </h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400 mb-6">
              All reference books, PDFs, and notes I use for Japanese learning are organized here.
            </p>
            <button className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity">
              Download Bundle (Soon)
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
