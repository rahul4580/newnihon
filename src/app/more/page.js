'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { 
  Globe, 
  Video, 
  FileText, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  LayoutGrid 
} from 'lucide-react';
import Footer from '../../components/Footer';

const BentoCard = ({ children, className, delay = 0, href, gradient = "from-neutral-900 to-neutral-950" }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-[2rem] border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-2xl transition-all duration-500 h-full ${className}`}
    >
      {/* Background Gradient/Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        {children}
      </div>

      {/* Hover Reveal Icon */}
      <div className="absolute top-6 right-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="bg-black/5 dark:bg-white/10 p-2 rounded-full backdrop-blur-md">
          <ArrowUpRight className="w-5 h-5 text-black dark:text-white" />
        </div>
      </div>
    </motion.div>
  );

  return href ? (
    <Link href={href} className="block h-full cursor-pointer">
      {content}
    </Link>
  ) : content;
};

export default function More() {
  const { language } = useLanguage();
  const t = translations[language]?.more || {};
  
  // Custom translations for new structure
  const t_custom = {
    hero_badge: language === 'jp' ? '探検する' : 'Explore',
    languages: {
      title: language === 'jp' ? '言語設定' : 'Languages',
      subtitle: language === 'jp' ? '世界とつながる' : 'Global Connection',
      desc: language === 'jp' ? '多言語サポートで体験をカスタマイズ' : 'Customize your experience with multi-language support.' // Added description
    },
    notion: {
      title: language === 'jp' ? 'ノート' : 'Notes',
      subtitle: language === 'jp' ? 'ワークスペース' : 'Workspace',
      desc: language === 'jp' ? 'Notionスタイルのドキュメント管理' : 'Notion-style documentation and knowledge base.'
    },
    video: {
      title: language === 'jp' ? 'ビデオ通話' : 'Video Call',
      subtitle: language === 'jp' ? 'リアルタイム通信' : 'Real-time Connect',
      desc: language === 'jp' ? '高品質なビデオ会議システム' : 'High-quality video conferencing system.'
    }
  };

  const containerRef = useRef(null);
  
  return (
    <div className="bg-neutral-50 dark:bg-black min-h-screen text-black dark:text-white overflow-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-48 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {t_custom.hero_badge}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-black to-black/50 dark:from-white dark:to-white/50 ${language === 'jp' ? 'font-noto' : ''}`}
          >
            {t.title || 'More'}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}
          >
            {t.subtitle || 'Discover additional tools, resources, and experiments.'}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
          
          {/* Card 1: Languages */}
          <BentoCard 
            href="/more/languages" 
            delay={0.3} 
            className="md:col-span-2 lg:col-span-2 min-h-[400px]"
            gradient="from-indigo-500/10 to-blue-500/10 dark:from-indigo-900/20 dark:to-blue-900/20"
          >
            <div className="flex justify-between items-start mb-auto">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className={`text-4xl font-bold mb-2 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>
                  {t_custom.languages.title}
                </h3>
                <p className={`text-lg text-neutral-500 dark:text-neutral-400 ${language === 'jp' ? 'font-noto' : ''}`}>
                  {t_custom.languages.subtitle}
                </p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
               {['JP', 'EN', 'HI'].map((lang, i) => (
                 <div key={lang} className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/5 text-center">
                    <span className="block text-2xl font-black mb-1">{lang}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-50">Supported</span>
                 </div>
               ))}
            </div>
          </BentoCard>

          {/* Card 2: Video Call (New) */}
          <BentoCard 
            href="/more/video-call" 
            delay={0.4} 
            className="min-h-[400px]"
            gradient="from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/20 dark:to-teal-900/20"
          >
             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                <Video className="w-6 h-6" />
             </div>
             
             <h3 className={`text-3xl font-bold mb-2 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>
               {t_custom.video.title}
             </h3>
             <p className={`text-base text-neutral-500 dark:text-neutral-400 mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               {t_custom.video.desc}
             </p>

             <div className="mt-auto relative rounded-xl overflow-hidden aspect-video bg-neutral-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                  <Video className="w-5 h-5 text-white" />
                </div>
             </div>
          </BentoCard>

           {/* Card 3: Notion */}
           <BentoCard 
            href="/more/notion" 
            delay={0.5} 
            className="md:col-span-3 min-h-[300px] flex flex-row items-center"
            gradient="from-neutral-500/10 to-neutral-500/10 dark:from-neutral-800/20 dark:to-neutral-800/20"
          >
            <div className="flex flex-col md:flex-row w-full gap-8 md:items-center">
              <div className="flex-1">
                 <div className="w-12 h-12 rounded-xl bg-neutral-500/10 dark:bg-neutral-500/20 flex items-center justify-center mb-6 text-neutral-600 dark:text-neutral-400">
                    <LayoutGrid className="w-6 h-6" />
                 </div>
                 <h3 className={`text-4xl font-bold mb-2 tracking-tight ${language === 'jp' ? 'font-noto' : ''}`}>
                   {t_custom.notion.title}
                 </h3>
                 <p className={`text-xl text-neutral-500 dark:text-neutral-400 ${language === 'jp' ? 'font-noto' : ''}`}>
                   {t_custom.notion.desc}
                 </p>
              </div>
              
              <div className="flex gap-4">
                  <div className="px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 flex items-center gap-3">
                    <FileText className="w-5 h-5 opacity-50" />
                    <div>
                      <div className="text-xs font-bold uppercase opacity-50">Pages</div>
                      <div className="text-xl font-black">12+</div>
                    </div>
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 flex items-center gap-3">
                    <Zap className="w-5 h-5 opacity-50" />
                    <div>
                      <div className="text-xs font-bold uppercase opacity-50">Sync</div>
                      <div className="text-xl font-black">Auto</div>
                    </div>
                  </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>

      <Footer />
    </div>
  );
}
