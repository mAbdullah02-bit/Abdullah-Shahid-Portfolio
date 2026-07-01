import { Share2, Video, Github, MessageSquare, Download, Mail, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenShare: () => void;
  onOpenVideo: () => void;
  onDownloadCV: () => void;
}

export default function Hero({ onScrollToSection, onOpenShare, onOpenVideo, onDownloadCV }: HeroProps) {
  // Let's create high-end staggered animation variables
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const socialButtons = [
    {
      id: 'linkedin',
      icon: <Linkedin className="h-5 w-5" />,
      label: 'View LinkedIn Profile',
      action: () => window.open('https://www.linkedin.com/in/m-abdullah-8901b529a', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'github',
      icon: <Github className="h-5 w-5" />,
      label: 'View GitHub Profile',
      action: () => window.open('https://github.com/mAbdullah02-bit', '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'video',
      icon: <Video className="h-5 w-5" />,
      label: 'Watch Introduction Video',
      action: onOpenVideo,
    },
    {
      id: 'share',
      icon: <Share2 className="h-5 w-5" />,
      label: 'Share Portfolio',
      action: onOpenShare,
    },
    {
      id: 'chat',
      icon: <MessageSquare className="h-5 w-5" />,
      label: 'Let\'s Chat',
      action: () => onScrollToSection('contact'),
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[70vh] md:min-h-[75vh] flex flex-col md:grid md:grid-cols-2 items-center gap-8 py-8 md:py-12 relative"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-container/10 dark:bg-primary-container/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Info Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 order-2 md:order-1"
      >
        {/* Social Buttons */}
        <div className="flex gap-3">
          {socialButtons.map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.action}
              className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-primary-container dark:hover:text-primary-container transition-colors duration-300 cursor-pointer border border-neutral-200/50 dark:border-white/10 shadow-sm relative group bg-white/5 backdrop-blur-md"
              title={btn.label}
            >
              {btn.icon}
              {/* Tooltip */}
              <span className="absolute -bottom-10 scale-0 transition-all rounded-lg bg-neutral-900 text-white px-3 py-1.5 text-xs font-semibold group-hover:scale-100 whitespace-nowrap z-20">
                {btn.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Hero Title */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold text-neutral-900 dark:text-white">
            Hi, I'm <span className="text-primary-container">Abdullah Shahid</span>
          </h1>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-sm sm:text-base md:text-lg text-neutral-600 dark:text-on-surface-variant max-w-xl leading-relaxed"
        >
          An App Developer and Data Analyst crafting high-quality mobile applications and deriving actionable insights from complex datasets. I specialize in building robust apps and analytics solutions that combine logic with intuitive user experiences.
        </motion.p>

        {/* Actions Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
          <a
            href="/cv.pdf"
            download="Muhammad_Abdullah_Shahid_CV.pdf"
            className="bg-primary-container text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-container/20 cursor-pointer text-xs sm:text-sm text-center"
          >
            <Download className="h-4 w-4 animate-bounce" /> Download CV
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="border-2 border-primary-container text-primary-container bg-transparent px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary-container/10 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm text-center"
          >
            👁️ View CV
          </a>

          {/* contact me button: taking user to contact me section */}
          <button
            onClick={() => onScrollToSection('contact')}
            className="border-2 border-neutral-400 text-neutral-600 dark:border-white/10 dark:text-neutral-300 bg-transparent px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Image / Animated Character Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
        className="relative order-1 md:order-2 flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-primary-container/15 dark:bg-primary-container/10 blur-[100px] rounded-full" />

        {/* Floating Elements & Image Wrapper */}
        <div className="relative z-10 w-full max-w-[340px] aspect-square flex items-center justify-center">
          <motion.img
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full object-contain rounded-2xl shadow-xl border border-neutral-200/30 dark:border-white/10"
            referrerPolicy="no-referrer"
            // /src/assets/images/developer_hero_1782715795270.jpg
            src="/src/assets/images/picofme (1).png"
            alt="3D Character Abdullah Shahid Developer with beard and glasses"
          />

          {/* Floating 'Hi!' Speech Bubble */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-4 right-4 z-20"
          >
            <div className="glass-card px-4 py-1.5 rounded-full font-bold text-primary-container shadow-lg bg-white/80 dark:bg-surface-container-high/80 border border-neutral-200 dark:border-white/10 text-xs">
              Hi! 👋
            </div>
          </motion.div>

          {/* Floating folder emblem */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-4 left-4 z-20"
          >
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/25 border border-cyan-400/40 shadow-lg flex items-center justify-center text-cyan-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
