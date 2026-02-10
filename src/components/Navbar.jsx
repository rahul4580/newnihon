'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../utils/translations';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language]?.nav || {};
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  const links = [
    { name: t.home || 'Home', href: '/' },
    { name: t.about || 'About', href: '/about' },
    { name: t.more || 'More', href: '/more' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-3 sm:px-6 md:px-12 py-4 ${
        isScrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div
        className={`max-w-[1700px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-[2.5rem] transition-all duration-500 backdrop-blur-2xl border ${
          isScrolled
            ? 'bg-white/85 dark:bg-black/85 border-black/10 dark:border-white/15 shadow-2xl'
            : 'bg-white/55 dark:bg-black/55 border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-white/5'
        }`}
      >
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white ring-1 ring-black/10 dark:ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:rotate-3 group-hover:scale-[1.06]">
            <Image 
              src="/nihongo.jpg" 
              alt="Dinakramam Logo" 
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white transition-colors">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black/70 to-black/40 dark:from-white dark:via-white/80 dark:to-white/50">
              Dinakramam
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600/90 dark:bg-red-500/90" aria-hidden />
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link 
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                } ${language === 'jp' ? 'font-noto' : ''}`}
              >
                {link.name}
              </Link>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black dark:bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                console.log('Language toggle clicked, current language:', language);
                toggleLanguage();
              }}
              className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-lg transition-all ${
                isScrolled || theme === 'dark' 
                  ? 'border border-black/10 text-black hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black' 
                  : 'border border-white/20 text-white hover:bg-white hover:text-black dark:border-black/20 dark:text-black dark:hover:bg-black dark:hover:text-white'
              } ${isScrolled ? '' : 'mix-blend-difference'}`}
            >
              {language === 'en' ? 'JP' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all ${
                isScrolled || theme === 'dark' 
                  ? 'border border-black/10 text-black hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black' 
                  : 'border border-white/20 text-white hover:bg-white hover:text-black dark:border-black/20 dark:text-black dark:hover:bg-black dark:hover:text-white'
              } ${isScrolled ? '' : 'mix-blend-difference'}`}
            >
              {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>

            {/* Auth Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <span
                  className={`cursor-pointer text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-lg transition-all ${
                    isScrolled || theme === 'dark' 
                      ? 'border border-black/10 text-black hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black' 
                      : 'border border-white/20 text-white hover:bg-white hover:text-black dark:border-black/20 dark:text-black dark:hover:bg-black dark:hover:text-white'
                  } ${isScrolled ? '' : 'mix-blend-difference'}`}
                >
                  Sign In
                </span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 rounded-full border border-black/10 dark:border-white/10",
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
            isScrolled
              ? 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
              : 'border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
          }`}
        >
          <FaBars className="text-sm" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-black border-l border-black/10 dark:border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-black/10 dark:border-white/10">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-white ring-1 ring-black/10 dark:ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                    <Image 
                      src="/nihongo.jpg" 
                      alt="Logo" 
                      width={40}
                      height={40}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white">
                    Dinakramam
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              <div className="px-6 py-6 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xs font-black uppercase tracking-[0.2em] ${
                        'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
                      } ${language === 'jp' ? 'font-noto' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <button
                      onClick={() => toggleLanguage()}
                      aria-label="Toggle language"
                      className="text-[10px] font-black uppercase tracking-widest w-10 h-10 flex items-center justify-center rounded-full transition-all border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  >
                      {language === 'en' ? 'JP' : 'EN'}
                  </button>

                  <button
                      onClick={() => toggleTheme()}
                      className="w-10 h-10 flex items-center justify-center rounded-full border transition-all border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      aria-label="Toggle Theme"
                  >
                      {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                  </button>

                  {/* Mobile Auth */}
                  <SignedOut>
                    <SignInButton mode="modal">
                      <span
                        className="cursor-pointer text-[10px] font-black uppercase tracking-widest h-10 px-4 flex items-center justify-center rounded-full transition-all border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                      >
                        Sign In
                      </span>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
