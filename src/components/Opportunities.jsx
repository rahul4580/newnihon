'use client';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { FaSuitcase, FaUserGraduate, FaHome, FaRocket, FaClock } from 'react-icons/fa';

const OpportunitySection = ({ title, items, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative p-10 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 rounded-[3rem] group"
  >
    <div className="flex items-center gap-6 mb-10">
      <div className="w-16 h-16 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center transition-all group-hover:bg-red-500 group-hover:text-white dark:group-hover:bg-red-600">
        {Icon && <Icon className="text-2xl" />}
      </div>
      <div>
        <h3 className="text-2xl font-black tracking-tighter uppercase italic">{title}</h3>
      </div>
    </div>

    <div className="flex flex-wrap gap-3">
      {items?.map((item, i) => (
        <span 
          key={i} 
          className="px-4 py-2 bg-[#fafafa] dark:bg-neutral-800 text-[10px] font-black uppercase tracking-widest border border-black/5 dark:border-white/5 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Opportunities = () => {
  const { language } = useLanguage();
  const t = translations[language]?.opportunities || {};

  return (
    <section id="opportunities" className="py-32 px-6 md:px-20 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 ${language === 'jp' ? 'font-noto' : ''}`}
          >
            {t.label}
          </motion.div>
          <h2 className={`text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-10 ${language === 'jp' ? 'font-noto' : ''}`}>
             FUTURE<br/>
             <span className="text-gray-300 dark:text-neutral-800">PATHWAYS.</span>
          </h2>
          <p className={`text-2xl text-gray-500 dark:text-neutral-500 font-medium max-w-3xl leading-snug ${language === 'jp' ? 'font-noto' : ''}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OpportunitySection 
            title={t.categories?.careers?.title} 
            items={t.categories?.careers?.items} 
            icon={FaSuitcase} 
            delay={0.1} 
          />
          <OpportunitySection 
            title={t.categories?.study?.title} 
            items={t.categories?.study?.items} 
            icon={FaUserGraduate} 
            delay={0.2} 
          />
          <OpportunitySection 
            title={t.categories?.living?.title} 
            items={t.categories?.living?.items} 
            icon={FaHome} 
            delay={0.3} 
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-red-500 text-white rounded-[3.5rem] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-8">
                <FaRocket className="text-xl" />
              </div>
              <h3 className="text-4xl font-black mb-4 italic tracking-tighter uppercase">{t.entrepreneurship?.title}</h3>
              <p className="text-lg font-medium opacity-80 h-100">
                {t.entrepreneurship?.desc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-[3.5rem] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-neutral-100 flex items-center justify-center mb-8">
                <FaClock className="text-xl" />
              </div>
              <h3 className="text-4xl font-black mb-4 italic tracking-tighter uppercase">{t.timeline?.title}</h3>
              <p className="text-lg font-medium opacity-60">
                {t.timeline?.desc}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['N5', 'N4', 'N3', 'N2', 'N1'].map(n => (
                  <div key={n} className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-white text-black text-[10px] font-black flex items-center justify-center">
                    {n}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Journey Pathway</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
