'use client';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WhatICanDo from '../components/WhatICanDo';
import DataAnalysisCapabilities from '../components/DataAnalysisCapabilities';
import WhatILove from '../components/WhatILove';
import Work from '../components/Work';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const handleBack = () => {
    // Go back in browser history if possible, otherwise navigate to about page
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/about';
    }
  };

  return (
    <div className="bg-[#fafafa] dark:bg-black text-black dark:text-white min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleBack}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-black dark:text-white p-3 rounded-full hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl group"
          aria-label="Go back"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      
      <Navbar />
      <Hero />
      <Skills />
      <WhatICanDo />
      <Services />
      <Work />
      <Projects />
      <DataAnalysisCapabilities />
      <WhatILove />
      
      <section id="contact" className="py-20 px-8 md:px-20 border-t border-black/5 dark:border-white/5">
         <div className="flex justify-center">
            <Contact />
         </div>
      </section>

      <Footer />
    </div>
  );
}






