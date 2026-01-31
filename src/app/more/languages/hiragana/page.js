'use client';

import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

export default function HiraganaPage() {
  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 dark:text-neutral-500 mb-4">
            Japanese Study
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter font-noto">
            Hiragana
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Dedicated space for Hiragana practice, stroke order, and reading drills. Content coming soon.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}


