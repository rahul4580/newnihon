'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaToriiGate, FaOm, FaSnowflake, FaFire, FaSun, FaMoon, FaFuji, FaCamera, FaMusic } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const BentoCard = ({ children, className, delay = 0, title, imageUrl, spanCols = 1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
    className={`relative overflow-hidden group rounded-[2.5rem] min-h-[300px] ${className}`}
    style={{ gridColumn: `span ${spanCols} / span ${spanCols}` }}
  >
    {imageUrl && (
      <div className="absolute inset-0 z-0">
        <Image src={imageUrl} alt={title || "Culture Background"} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>
    )}
    <div className={`relative z-10 p-8 h-full flex flex-col justify-between ${imageUrl ? 'text-white' : 'bg-white/70 dark:bg-neutral-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-neutral-800/50'}`}>
      {title && <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${imageUrl ? 'text-white/60' : 'opacity-30'} mb-6`}>{title}</h3>}
      {children}
    </div>
  </motion.div>
);

export default function Culture() {
  const { language } = useLanguage();
  const t = translations[language]?.about?.culture || {};
  const s = translations[language]?.summerInJapan || {};
  
  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />
      
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02] dark:opacity-[0.06]">
        <div className="absolute top-1/4 -left-20 text-[20vw] font-black uppercase -rotate-12 tracking-tighter">CULTURE</div>
        <div className="absolute bottom-1/4 -right-20 text-[20vw] font-black uppercase rotate-12 tracking-tighter text-indigo-500">MATSURI</div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-block px-5 py-2 rounded-full border border-black/5 dark:border-white/5 mb-8 bg-white dark:bg-neutral-900 shadow-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Japanese Spirit</span>
          </div>
          <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-500 max-w-2xl font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Main Hero Card: Festivals */}
          <BentoCard 
            className="md:col-span-2 md:row-span-2" 
            title="Matsuri (Summer Festivals)"
            imageUrl="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80"
          >
            <div>
              <h2 className="text-4xl font-black mb-4">{s.matsuri?.title}</h2>
              <p className="text-lg opacity-80 leading-relaxed max-w-xl">
                {s.matsuri?.desc}
              </p>
            </div>
            <div className="flex gap-4 mt-8">
               <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">Fireworks</span>
               <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">Yukata</span>
            </div>
          </BentoCard>

          {/* Obon Card */}
          <BentoCard 
            className="md:col-span-1" 
            title="Heritage"
            imageUrl="https://images.unsplash.com/photo-1528114039593-4366cc282c00?w=600&q=80"
          >
             <h3 className="text-2xl font-black mb-2">{s.obon?.title}</h3>
             <p className="text-sm opacity-70 leading-relaxed">
               {s.obon?.desc}
             </p>
          </BentoCard>

          {/* Sounds of Summer */}
          <BentoCard 
            className="md:col-span-1" 
            title="Ambience"
          >
             <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                <FaMusic className="text-xl" />
             </div>
             <h3 className="text-2xl font-black mb-2 text-black dark:text-white">{s.sounds?.title}</h3>
             <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
               {s.sounds?.desc}
             </p>
          </BentoCard>

          {/* Seasonal Aesthetics */}
          <BentoCard 
            className="md:col-span-3 min-h-[350px]" 
            title="Mono no Aware"
            imageUrl="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80"
          >
             <div className="max-w-2xl">
                <h3 className="text-4xl font-black mb-4">{s.essence?.title}</h3>
                <p className="text-xl opacity-80 leading-relaxed">
                  {s.essence?.desc}
                </p>
             </div>
          </BentoCard>

          {/* Modern Fusion */}
          <BentoCard 
            className="md:col-span-1" 
            title="Tokyo Nights"
            imageUrl="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80"
          >
             <h3 className="text-2xl font-black mb-2">Modern Energy</h3>
             <p className="text-sm opacity-70">Where neon meets tradition in the heart of Shibuya.</p>
          </BentoCard>

          {/* Photography section */}
          <BentoCard 
            className="md:col-span-2" 
            title="Visual Storytelling"
          >
             <div className="flex flex-col md:flex-row gap-12 items-center h-full">
                <div className="flex-1">
                   <FaCamera className="text-4xl text-indigo-500 mb-6" />
                   <h3 className="text-3xl font-black mb-4 dark:text-white">Cultural Immersion</h3>
                   <p className="text-gray-500 dark:text-neutral-500 leading-relaxed">
                     Capture the fleeting beauty of Japan through your lens. Every corner tells a story of a thousand years.
                   </p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2 w-full h-full">
                   <div className="relative rounded-2xl overflow-hidden h-32">
                      <Image src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&q=80" alt="Temple" fill className="object-cover" />
                   </div>
                   <div className="relative rounded-2xl overflow-hidden h-32">
                      <Image src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=300&q=80" alt="Sakura" fill className="object-cover" />
                   </div>
                   <div className="relative col-span-2 rounded-2xl overflow-hidden h-32">
                      <Image src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=300&q=80" alt="Matsuri" fill className="object-cover" />
                   </div>
                </div>
             </div>
          </BentoCard>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-32 p-16 rounded-[4rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 overflow-hidden relative group"
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black mb-8">Start Your Japanese Journey</h3>
            <Link href="/hero" className="px-10 py-4 bg-white text-indigo-600 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-transform">
               Enroll Now →
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
