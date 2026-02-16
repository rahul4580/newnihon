'use client';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { FaGlobeAsia, FaBrain, FaPlane, FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';

const FeatureCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="p-8 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[2.5rem] hover:shadow-2xl transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-black mb-4 tracking-tighter uppercase">{title}</h3>
    <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

const WhyLearn = () => {
  const { language } = useLanguage();
  const t = translations[language]?.whyLearn || {};

  const icons = [FaGlobeAsia, FaBriefcase, FaBrain, FaPlane, FaGraduationCap, FaUsers];

  return (
    <section id="why-learn" className="py-32 px-6 md:px-20 bg-[#fafafa] dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`inline-block px-4 py-2 bg-red-500 text-white rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 ${language === 'jp' ? 'font-noto' : ''}`}
            >
              {t.label}
            </motion.div>
            <h2 className={`text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.title}
            </h2>
            <p className={`text-2xl text-gray-500 dark:text-neutral-500 font-medium leading-snug ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.subtitle}
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 p-10 rounded-[3rem] border border-black/5 dark:border-white/5 max-w-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-4">{t.unique?.title}</h4>
            <p className="text-base font-bold leading-relaxed">
              {t.unique?.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features?.map((feature, i) => (
            <FeatureCard 
              key={i} 
              title={feature.title} 
              desc={feature.desc} 
              icon={icons[i]} 
              delay={i * 0.1} 
            />
          ))}
        </div>

        <div className="mt-24 p-12 bg-black text-white dark:bg-white dark:text-black rounded-[4rem] relative overflow-hidden text-center md:text-left">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.5),transparent_50%)]"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                 <h3 className="text-3xl font-black mb-4 italic tracking-tighter uppercase">{t.stats?.title}</h3>
                 <p className="text-lg opacity-60 font-medium">
                   {t.stats?.desc}
                 </p>
              </div>
              <div className="text-8xl font-black italic opacity-20 hidden md:block select-none">3RD</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
