'use client';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { FaWind, FaDrumstickBite, FaFire, FaUmbrellaBeach } from 'react-icons/fa';
import { GiWindchimes, GiJapan } from 'react-icons/gi';

const CulturalCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative p-8 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-[2.5rem] group overflow-hidden"
  >
    {/* Monochrome Accent */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-black dark:bg-white opacity-[0.02] rounded-full blur-3xl group-hover:opacity-[0.05] transition-opacity"></div>
    
    <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-3xl text-black dark:text-white" />
    </div>
    
    <h3 className="text-xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const SummerInJapan = () => {
  const { language } = useLanguage();
  const t = translations[language]?.summerInJapan || {};

  return (
    <section id="summer-japan" className="py-32 px-6 md:px-20 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cicada Pattern */}
        <div className="absolute top-20 right-10 text-8xl opacity-[0.02] select-none">🦗</div>
        <div className="absolute bottom-40 left-20 text-6xl opacity-[0.02] select-none">🎐</div>
        
        {/* Monochrome Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/2 dark:bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/2 dark:bg-white/2 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`inline-flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-lg ${language === 'jp' ? 'font-noto' : ''}`}
          >
            <span className="text-xl">🌸</span>
            {t.label || 'Cultural Experience'}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 ${language === 'jp' ? 'font-noto' : ''}`}
          >
            {t.title || 'Why Summer in Japan'}<br/>
            <span className="text-gray-400 dark:text-neutral-600">is Special</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl text-gray-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed ${language === 'jp' ? 'font-noto' : ''}`}
          >
            {t.intro || "Japanese summer is defined by distinctive sounds and vibrant traditions that create an unforgettable cultural experience."}
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <CulturalCard
            icon={GiWindchimes}
            title={t.sounds?.title || "Sounds of Summer"}
            description={t.sounds?.desc || "Cicadas reaching 107 decibels symbolize life's fleeting nature, while delicate fūrin (wind chimes) create psychological coolness during oppressive heat."}
            delay={0.1}
          />
          
          <CulturalCard
            icon={FaFire}
            title={t.matsuri?.title || "Summer Festivals (Matsuri)"}
            description={t.matsuri?.desc || "Portable shrine processions, food stalls with yakisoba and takoyaki, traditional games, and spectacular fireworks displays considered legitimate art forms."}
            delay={0.2}
          />
          
          <CulturalCard
            icon={GiJapan}
            title={t.obon?.title || "Obon Festival"}
            description={t.obon?.desc || "Honor deceased ancestors through grave visits, family reunions, and Bon Odori dances—a deeply spiritual tradition connecting past and present."}
            delay={0.3}
          />
        </div>

        {/* Featured Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-12 md:p-16 bg-black dark:bg-white text-white dark:text-black rounded-[4rem] overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-black/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 dark:bg-black/5 rounded-full -ml-24 -mb-24"></div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-white dark:bg-black rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            />
          ))}

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 opacity-20">🎐</div>
            <h3 className={`text-3xl md:text-5xl font-black mb-6 italic ${language === 'jp' ? 'font-noto' : ''}`}>
              {t.essence?.title || "Mono no Aware"}
            </h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 mb-8">
              {t.essence?.desc || "The true essence of Japanese summer lies in sharing experiences with loved ones, creating memories that embody mono no aware: appreciating beauty precisely because it is temporary."}
            </p>
            
            {/* Traditional Elements */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20">
                <span className="text-sm font-bold">Yukata 👘</span>
              </div>
              <div className="px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20">
                <span className="text-sm font-bold">Fireworks 🎆</span>
              </div>
              <div className="px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20">
                <span className="text-sm font-bold">Sōmen 🍜</span>
              </div>
              <div className="px-6 py-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20">
                <span className="text-sm font-bold">Bon Odori 💃</span>
              </div>
            </div>
          </div>

          {/* Large Kanji Watermark */}
          <div className="absolute -bottom-8 -right-8 text-[15rem] font-black text-white/3 dark:text-black/3 select-none pointer-events-none leading-none">
            夏
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerInJapan;
