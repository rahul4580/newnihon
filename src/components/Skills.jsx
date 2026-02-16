'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { FaGraduationCap, FaBriefcase, FaPassport, FaToriiGate } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ title, skills, progress, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 rounded-4xl overflow-hidden"
  >
    {/* Animated Dot Background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-size-[20px_20px] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]"></div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-red-500 text-white dark:bg-red-600 rounded-2xl shadow-xl">
          <Icon className="text-2xl" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Category</span>
      </div>

      <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase">{title}</h3>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest rounded-full border border-black/5 dark:border-white/5 group-hover:bg-red-500 group-hover:text-white dark:group-hover:bg-red-600 transition-all">
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-black/5 dark:border-white/5">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Proficiency</span>
            <span className="text-sm font-mono font-bold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: delay + 0.2 }}
              className="h-full bg-red-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language]?.skills || {};

  return (
    <section id="skills" className="py-32 px-6 md:px-20 bg-[#fafafa] dark:bg-black transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className={`inline-block px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               Arsenal
            </div>
            <h2 className={`text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-8 ${language === 'jp' ? 'font-noto' : ''}`}>
               NIHONGO<br/>
               <span className="text-gray-200 dark:text-neutral-900">MATRIX.</span>
            </h2>
            <p className={`text-xl text-gray-500 dark:text-neutral-500 font-medium leading-tight ${language === 'jp' ? 'font-noto' : ''}`}>
               {t.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">
                →
             </div>
             <span className="text-xs font-black uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
              title={t.frontend} 
              skills={['N5', 'N4', 'N3', 'N2', 'N1']}
              progress={95}
              icon={FaGraduationCap}
              delay={0.1}
          />
          <SkillCard 
              title={t.backend}
              skills={['IT/Soft ~¥12M', 'Business ~¥8M', 'Teaching', 'Admin']}
              progress={90}
              icon={FaBriefcase}
              delay={0.2}
          />
          <SkillCard 
              title={t.data}
              skills={['PR Status', 'Fast Visa', '70+ Points', 'Japan PR']}
              progress={85}
              icon={FaPassport}
              delay={0.3}
          />
          <SkillCard 
              title={t.tools}
              skills={['Business Keigo', 'Networking', 'Etiquette', 'Customs']}
              progress={80}
              icon={FaToriiGate}
              delay={0.4}
          />
        </div>

        {/* Global Achievement Banner - IMPACT SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 md:p-16 bg-black text-white dark:bg-white dark:text-black rounded-[4rem] flex flex-col md:flex-row justify-between items-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] dark:shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)]"
        >
          {/* Advanced Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none"></div>
          
          {/* Floating Deco Elements */}
          <div className="absolute -left-10 -top-10 text-[12rem] font-black italic text-white/[0.03] dark:text-black/[0.03] select-none pointer-events-none">
            NIHON
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 text-4xl font-black italic text-red-500/10 pointer-events-none hidden md:block"
          >
            N1
          </motion.div>

          <div className="relative z-10 mb-12 md:mb-0 max-w-2xl text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-full border border-white/10 dark:border-black/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Status: World Class</span>
                </div>
                <div className="h-px w-12 bg-red-500/30"></div>
             </div>
             
             <h3 className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter italic ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.results?.toUpperCase() || 'IMPACT'}
             </h3>
             <p className={`text-lg md:text-xl text-white/50 dark:text-black/50 font-medium leading-relaxed max-w-lg mx-auto md:mx-0 ${language === 'jp' ? 'font-noto' : ''}`}>
                {t.results_desc}
             </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 px-12 py-6 bg-red-600 text-white font-black text-xs uppercase tracking-[0.4em] rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:shadow-[0_25px_60px_rgba(220,38,38,0.5)] hover:bg-red-500 transition-all duration-300 ${language === 'jp' ? 'font-noto' : ''}`}
          >
             {t.view_projects}
          </motion.button>

          {/* Bottom Edge Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
