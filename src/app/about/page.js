'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaToriiGate, FaGlobe, FaCompass, FaLightbulb, FaUsers } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BentoCard = ({ children, className, delay = 0, title, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
    className={`relative overflow-hidden group rounded-[2.5rem] ${className}`}
  >
    {imageUrl && (
      <div className="absolute inset-0 z-0">
        <Image src={imageUrl} alt={title || "Bento Card Background"} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>
    )}
    <div className={`relative z-10 p-10 h-full flex flex-col justify-between ${imageUrl ? 'text-white' : 'bg-white/70 dark:bg-neutral-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-neutral-800/50'}`}>
      {title && <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${imageUrl ? 'text-white/60' : 'opacity-30'} mb-8`}>{title}</h3>}
      {children}
    </div>
  </motion.div>
);

export default function About() {
  const { language } = useLanguage();
  const t = translations[language]?.about || {};
  
  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-rose-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />
      
      {/* Background Decorative Text */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute top-1/4 -left-20 text-[20vw] font-black uppercase -rotate-12 tracking-tighter">VISION</div>
        <div className="absolute bottom-1/4 -right-20 text-[20vw] font-black uppercase rotate-12 tracking-tighter text-rose-500">NIHON</div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-32 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-black/5 dark:border-white/5 mb-10 bg-white dark:bg-neutral-900 shadow-xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500">
              {t.hero_badge}
            </span>
          </motion.div>
          
          <h1 className={`text-7xl md:text-[9rem] font-black mb-10 leading-[0.85] tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.title?.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-gray-300 dark:text-neutral-800" : ""}>{word} </span>
            ))}
          </h1>
          
          <p className={`text-2xl md:text-3xl text-gray-500 dark:text-neutral-500 max-w-3xl leading-snug font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Mission Intro */}
          <BentoCard className="md:col-span-8 min-h-[450px]" delay={0.1} title="Mission">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className={`text-4xl md:text-5xl font-black mb-8 max-w-xl leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>{t.intro?.title}</h3>
                <p className={`text-xl md:text-2xl text-gray-500 dark:text-neutral-400 leading-relaxed font-medium ${language === 'jp' ? 'font-noto' : ''}`}>
                  {t.intro?.text}
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-3xl">
                  <FaGlobe className="animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Impact</p>
                  <p className="text-xl font-bold">10,000+ Students Guided</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Vision Summary */}
          <BentoCard className="md:col-span-4 bg-rose-500 text-white shadow-2xl shadow-rose-500/20" delay={0.2} title="Future">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8">
              <FaCompass className="text-3xl" />
            </div>
            <h3 className={`text-2xl font-black mb-4 ${language === 'jp' ? 'font-noto' : ''}`}>{t.vision?.title}</h3>
            <p className={`text-sm text-white/80 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.vision?.text}
            </p>
          </BentoCard>

          {/* Culture Section: Bento Cards */}
          <div className="col-span-full mt-16 mb-8">
             <h2 className="text-xs font-black uppercase tracking-[0.5em] opacity-30 text-center mb-12">Japanese Cultural Hub</h2>
          </div>

          {/* Festival Card */}
          <BentoCard 
            className="md:col-span-4 min-h-[400px]" 
            delay={0.3} 
            title="Festivals"
            imageUrl="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80"
          >
            <div className="relative z-10">
              <h3 className={`text-2xl font-black mb-4 ${language === 'jp' ? 'font-noto' : ''}`}>{t.culture?.festivals?.title}</h3>
              <p className={`text-sm text-white/70 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.culture?.festivals?.text}
              </p>
            </div>
          </BentoCard>

          {/* Tradition Card */}
          <BentoCard 
            className="md:col-span-4 min-h-[400px]" 
            delay={0.4} 
            title="Tradition"
            imageUrl="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
          >
            <div className="relative z-10">
              <h3 className={`text-2xl font-black mb-4 ${language === 'jp' ? 'font-noto' : ''}`}>{t.culture?.tradition?.title}</h3>
              <p className={`text-sm text-white/70 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.culture?.tradition?.text}
              </p>
            </div>
          </BentoCard>

          {/* Modern Card */}
          <BentoCard 
            className="md:col-span-4 min-h-[400px]" 
            delay={0.5} 
            title="Modern"
            imageUrl="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80"
          >
            <div className="relative z-10">
              <h3 className={`text-2xl font-black mb-4 ${language === 'jp' ? 'font-noto' : ''}`}>{t.culture?.modern?.title}</h3>
              <p className={`text-sm text-white/70 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.culture?.modern?.text}
              </p>
            </div>
          </BentoCard>

          {/* Additional Pillar Section */}
          <div className="col-span-full mt-40 grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {t.skills_list?.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group relative"
              >
                <div className="text-[10rem] font-black opacity-[0.03] absolute -mt-16 -ml-8 group-hover:opacity-[0.08] transition-opacity dark:text-white">0{i+1}</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/5 text-rose-500 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500">
                    {i === 0 ? <FaLightbulb className="text-2xl" /> : i === 1 ? <FaToriiGate className="text-2xl" /> : <FaUsers className="text-2xl" />}
                  </div>
                  <h4 className={`text-2xl font-black mb-4 tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>{pillar.name}</h4>
                  <p className={`text-lg text-gray-500 dark:text-neutral-500 font-medium leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform Ecosystem Section */}
          <div className="col-span-full mt-40">
             <div className="text-center mb-16">
                <h3 className="text-xs font-black uppercase tracking-[0.5em] opacity-30 mb-4">{t.ecosystem?.title}</h3>
                <h4 className={`text-5xl md:text-6xl font-black border-none shadow-none bg-transparent ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.subtitle}</h4>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Language Hub Card */}
                <Link href="/more/languages" className="block group">
                  <BentoCard className="h-full border-indigo-500/20 hover:border-indigo-500/50 transition-colors" delay={0.1}>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FaGlobe className="text-2xl" />
                    </div>
                    <h3 className={`text-2xl font-black mb-3 ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.languages?.title}</h3>
                    <p className={`text-gray-500 dark:text-neutral-500 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.languages?.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-indigo-500 font-bold text-sm">
                       Explore Hub <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </BentoCard>
                </Link>

                {/* Workspace Card */}
                <Link href="/more/notion" className="block group">
                  <BentoCard className="h-full border-amber-500/20 hover:border-amber-500/50 transition-colors" delay={0.2}>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FaCompass className="text-2xl" />
                    </div>
                    <h3 className={`text-2xl font-black mb-3 ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.workspace?.title}</h3>
                    <p className={`text-gray-500 dark:text-neutral-500 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.workspace?.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-amber-500 font-bold text-sm">
                       Open Workspace <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </BentoCard>
                </Link>

                {/* Connectivity Card */}
                <Link href="/more/video-call" className="block group">
                  <BentoCard className="h-full border-emerald-500/20 hover:border-emerald-500/50 transition-colors" delay={0.3}>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FaUsers className="text-2xl" />
                    </div>
                    <h3 className={`text-2xl font-black mb-3 ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.connectivity?.title}</h3>
                    <p className={`text-gray-500 dark:text-neutral-500 font-medium ${language === 'jp' ? 'font-noto' : ''}`}>{t.ecosystem?.connectivity?.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-emerald-500 font-bold text-sm">
                       Start Call <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </BentoCard>
                </Link>
             </div>
          </div>

          {/* New Gallery Section */}
          <div className="col-span-full mt-40">
             <div className="text-center mb-16">
                <h3 className="text-xs font-black uppercase tracking-[0.5em] opacity-30 mb-4 italic">Experience the Aesthetic</h3>
                <h4 className="text-5xl font-black border-none shadow-none bg-transparent">Culture in Motion</h4>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden group relative">
                   <Image src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=80" alt="Kyoto Temples" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                   <div className="absolute bottom-10 left-10 text-white font-black text-2xl drop-shadow-lg">Kyoto Temples</div>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden group relative">
                   <Image src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80" alt="Festival" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden group relative">
                   <Image src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80" alt="Modern Japan" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="col-span-2 rounded-[2.5rem] overflow-hidden group relative">
                   <Image src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1000&q=80" alt="Cherry Blossoms" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                   <div className="absolute bottom-10 left-10 text-white font-black text-2xl drop-shadow-lg">Cherry Blossoms</div>
                </div>
             </div>
          </div>

        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-48 py-20 rounded-[4rem] bg-black text-white dark:bg-white dark:text-black overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-rose-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.76, 0, 0.24, 1]"></div>
          
          <Link href="/more/languages" className="relative z-10 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Discovery</span>
            <span className={`text-5xl md:text-8xl font-black tracking-tighter ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.cta} →
            </span>
          </Link>
        </motion.div>

      </div>
      
      <div className="absolute top-0 right-10 h-full hidden lg:flex items-center pointer-events-none opacity-20">
         <span className="text-[10px] font-black uppercase tracking-[1em] rotate-90 whitespace-nowrap">CULTURAL IMMERSION</span>
      </div>

      <Footer />
    </div>
  );
}
