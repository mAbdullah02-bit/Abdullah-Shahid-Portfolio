import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, isDark, onToggleTheme, onScrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
      scrolled
        ? 'bg-white/95 dark:bg-surface-container/95 border-neutral-200/80 dark:border-white/10 shadow-md'
        : 'bg-white/80 dark:bg-surface-container-lowest/80 border-neutral-150/10 dark:border-white/5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          id="navbar-logo"
          onClick={() => handleLinkClick('home')}
          className="font-display-lg-mobile text-xl font-bold text-neutral-900 dark:text-white tracking-tighter hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
        >
          <Rocket className="h-5 w-5 text-primary-container" />
          <span>Abdullah.</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center font-body-md text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-1 py-1 transition-colors duration-300 cursor-pointer font-semibold ${
                  isActive
                    ? 'text-primary-container'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-on-surface-variant dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-container"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Theme and Hire Me buttons */}
        <div className="flex items-center gap-2.5">
          {/* Theme Mode Toggle Button */}
          <button
            id="theme-toggle"
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 text-primary-container transition-all duration-300 active:scale-90 flex items-center justify-center border border-transparent hover:border-neutral-200 dark:hover:border-white/10"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-neutral-800" />}
          </button>

          {/* Hire Me Button - scrolls to contact as requested */}
          <button
            id="hire-me-nav"
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:block bg-primary-container text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition-all duration-300 active:scale-95 text-xs shadow-md shadow-primary-container/20 cursor-pointer"
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-surface-container-high/95 backdrop-blur-lg overflow-hidden shadow-2xl p-4 space-y-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-between text-xs ${
                    isActive
                      ? 'bg-primary-container/10 text-primary-container border-l-4 border-primary-container'
                      : 'text-neutral-600 dark:text-on-surface-variant hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary-container" />}
                </button>
              );
            })}

            {/* Mobile Hire Me Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-2 bg-primary-container text-white py-2.5 rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all text-center block shadow-lg shadow-primary-container/20 text-xs"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
