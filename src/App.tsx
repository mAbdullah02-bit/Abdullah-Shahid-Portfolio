import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  LearnMoreModal,
  ShareModal,
  VideoTourModal,
  ToastNotification,
  ProjectDemoModal,
} from './components/Modals';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  // Modals Visibility State
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoProjectTitle, setDemoProjectTitle] = useState('');

  // Toast State
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'info'>('success');

  // Handle local dark/light theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      showToast('Dark mode enabled', 'info');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      showToast('Light mode enabled', 'info');
    }
  };

  // Setup active section tracking with intersection observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Focus primarily on the active viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Offset slightly to align correctly below fixed sticky navbar
      const navbarOffset = 90;
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setIsToastOpen(true);
    // Auto collapse
    setTimeout(() => {
      setIsToastOpen(false);
    }, 4000);
  };

  // Button Action Trigger simulated pipelines
  const handleDownloadCV = () => {
    showToast('Download CV started! Simulating PDF generation...', 'success');
    // Simulate real PDF payload extraction trigger
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'OualiCode_CV_Resume.pdf');
      showToast('OualiCode_CV_Resume.pdf downloaded successfully!', 'success');
    }, 1500);
  };

  const handleContactSubmitSuccess = (fullName: string) => {
    showToast(`Thank you, ${fullName}! Your message has been sent successfully.`, 'success');
  };

  const handleOpenDemoModal = (projectTitle: string, demoUrl: string) => {
    setDemoProjectTitle(projectTitle);
    setIsDemoOpen(true);
    showToast(`Launching sandbox for ${projectTitle}...`, 'info');
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-background text-neutral-800 dark:text-on-surface selection:bg-primary-container selection:text-white transition-colors duration-300">
      {/* Dynamic Background Mesh Grids */}
      <div className="fixed inset-0 bg-mesh-light dark:bg-mesh-dark opacity-40 pointer-events-none -z-20" />

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16 pb-20 pt-6">
        
        {/* Hero Banner Section */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onOpenShare={() => setIsShareOpen(true)}
          onOpenVideo={() => setIsVideoOpen(true)}
          onDownloadCV={handleDownloadCV}
        />

        {/* Detailed Copywriting Profiles */}
        <About onOpenLearnMore={() => setIsLearnMoreOpen(true)} />

        {/* Competencies Progress Gauges */}
        <Skills />

        {/* Project Case Studies Showcase */}
        <Projects onOpenDemo={handleOpenDemoModal} />

        {/* Form validation & Messaging */}
        <Contact onSubmitSuccess={handleContactSubmitSuccess} />

      </main>

      {/* Page Ending */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Overlay Dialog Modals */}
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
      
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        appUrl={window.location.href}
      />
      
      <VideoTourModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      <ProjectDemoModal
        isOpen={isDemoOpen}
        projectTitle={demoProjectTitle}
        onClose={() => setIsDemoOpen(false)}
      />

      <ToastNotification
        message={toastMessage}
        isOpen={isToastOpen}
        type={toastType}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}
