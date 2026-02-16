'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const NoboriBanner = ({ side, text }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    whileInView={{ opacity: 1, scaleY: 1 }}
    viewport={{ once: true }}
    className={`absolute top-0 ${side === 'left' ? 'left-4' : 'right-4'} h-full w-12 hidden lg:block pointer-events-none`}
  >
    <div className="sticky top-20 flex flex-col items-center">
      {/* Wooden Pole */}
      <div className="w-1.5 h-64 bg-amber-900 rounded-full relative">
        {/* Banner Fabric */}
        <div className={`absolute top-4 ${side === 'left' ? 'left-full' : 'right-full'} w-10 h-48 bg-red-600 border-2 border-white shadow-lg writing-vertical flex items-center justify-center`}>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{text}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const FestivalLantern = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    className="absolute -top-10 right-12 w-16 h-20 pointer-events-none z-20"
  >
    <div className="relative w-full h-full">
      {/* Lantern String */}
      <div className="absolute top-0 left-1/2 w-px h-6 bg-neutral-400 -translate-x-1/2"></div>
      {/* Lantern Body (提灯 - Chouchin) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-14 bg-red-500 rounded-xl border-2 border-black/10 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
        <div className="absolute top-1 left-0 right-0 h-px bg-black/10"></div>
        <div className="absolute top-3 left-0 right-0 h-px bg-black/10"></div>
        <div className="absolute top-5 left-0 right-0 h-px bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-[8px] font-black opacity-30 select-none">MERN</span>
        </div>
      </div>
      {/* Inner Glow */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-400/30 rounded-full blur-md animate-pulse"></div>
      {/* Bottom Tassel */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-red-600 rounded-b-full"></div>
    </div>
  </motion.div>
);

const BlueprintNode = ({ title, capabilities, icon: Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative p-10 bg-white dark:bg-neutral-900 border-2 border-red-500/10 dark:border-red-600/20 rounded-[3rem] group overflow-hidden"
  >
    {/* Traditional "Asanoha" Hemp Leaf Pattern Background */}
    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#ff0000_1px,transparent_1px)] bg-size-[20px_20px]"></div>

    {/* Festival Lantern Decoration */}
    <FestivalLantern delay={index * 0.5} />

    {/* Stall Sign Mockup Header */}
    <div className="absolute top-0 right-0 px-6 py-2 bg-black text-white text-[8px] font-black uppercase tracking-[0.4em] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity">
      Standard // 0{index + 1}
    </div>
    
    <div className="flex items-center gap-6 mb-12 relative z-10">
      <motion.div 
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 10, 0],
          transition: { duration: 0.4 }
        }}
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-xl shadow-red-500/20 border-b-4 border-red-800"
      >
        {Icon && <Icon className="text-4xl" />}
      </motion.div>
      <div>
        {/* Signage Style Label */}
        <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-[9px] font-black uppercase tracking-[0.3em] rounded mb-2 border border-red-200 dark:border-red-900">
          Architecture
        </div>
        <h3 className="text-3xl font-black tracking-tighter uppercase">{title}</h3>
      </div>
    </div>

    <div className="space-y-10 relative z-10">
       {(capabilities || []).map((cap, i) => (
         <div key={i} className="relative pl-10 group/item">
            {/* Traditional Dot (Umebachi style) */}
            <div className="absolute left-0 top-3 w-4 h-4 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover/item:scale-150 transition-transform"></div>
              <div className="absolute inset-0 border border-red-500/30 rounded-full animate-ping opacity-20"></div>
            </div>
            
            <h4 className="text-sm font-black uppercase tracking-widest mb-3 italic text-gray-900 dark:text-white">{cap.title}</h4>
            <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium leading-relaxed max-w-md">
              {cap.description}
            </p>
         </div>
       ))}
    </div>

    {/* Decorative Stamp (Hanko Style) */}
    <div className="absolute bottom-10 right-10 w-12 h-12 border-4 border-red-500/10 dark:border-red-600/10 flex items-center justify-center rotate-12 transition-all group-hover:rotate-0 group-hover:border-red-500/40">
       <span className="text-red-500/20 dark:text-red-600/20 text-xl font-black">{title[0]}</span>
    </div>
  </motion.div>
);

const WhatICanDo = () => {
  const { language } = useLanguage();
  const t = translations[language]?.whatICanDo || {};
  const containerRef = useRef(null);

  const stack = [
    { title: 'MongoDB', icon: SiMongodb, capabilities: t.mongodb },
    { title: 'Express', icon: SiNodedotjs, capabilities: t.express },
    { title: 'React', icon: SiReact, capabilities: t.react },
    { title: 'Node', icon: SiNodedotjs, capabilities: t.node }
  ];

  return (
    <section id="capabilities" ref={containerRef} className="py-40 px-6 md:px-20 bg-[#fafafa] dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <NoboriBanner side="left" text="Natsu Matsuri" />
      <NoboriBanner side="right" text="Building Systems" />

      {/* Background Motifs */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0,80 Q25,60 50,80 T100,80 L100,100 L0,100 Z" fill="currentColor" className="text-red-500" />
           <path d="M0,90 Q25,80 50,90 T100,90 L100,100 L0,100 Z" fill="currentColor" className="text-red-400" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">

            
            <h2 className={`text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12 ${language === 'jp' ? 'font-noto' : ''}`}>
               BUILDING<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 dark:from-red-500 dark:to-red-700">SYSTEMS.</span>
            </h2>
            
            <p className={`text-2xl text-gray-500 dark:text-neutral-500 font-medium leading-snug lg:pr-20 ${language === 'jp' ? 'font-noto' : ''}`}>
               {t.subtitle}
            </p>
          </div>

          <div className="hidden lg:block relative">
             <div className="w-40 h-40 border-8 border-red-500/10 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="text-4xl">🏮</div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest opacity-20">
                Premium
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {stack.map((item, i) => (
            <BlueprintNode key={item.title} {...item} index={i} />
          ))}
        </div>

        {/* Matsuri CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 p-16 bg-black dark:bg-white rounded-[4rem] relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(220,38,38,0.3)]"
        >
          {/* Fireworks Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [-20, -100],
                  x: [0, (Math.random() - 0.5) * 100],
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-red-500 rounded-full blur-[1px]"
                style={{ 
                  left: `${20 + Math.random() * 60}%`, 
                  bottom: "10%"
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
             <div className="max-w-xl">
                <h3 className={`text-5xl font-black text-white dark:text-black mb-6 tracking-tighter italic ${language === 'jp' ? 'font-noto' : ''}`}>
                  {t.cta_title}
                </h3>
                <p className="text-xl text-neutral-400 dark:text-neutral-500 font-medium leading-relaxed">
                  {t.cta_description}
                </p>
             </div>
             
             <motion.button
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className={`px-16 py-8 bg-red-600 text-white font-black text-xs uppercase tracking-[0.5em] rounded-full shadow-2xl shadow-red-600/50 hover:bg-red-700 transition-all ${language === 'jp' ? 'font-noto' : ''}`}
             >
                {t.cta_button}
             </motion.button>
          </div>

          {/* Large Matsuri Kanji Background */}
          <div className="absolute -bottom-10 -right-10 text-[15rem] lg:text-[25rem] font-black text-white/[0.03] dark:text-black/[0.03] select-none pointer-events-none leading-none">
            夏祭
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatICanDo;
