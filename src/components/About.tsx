import { Award, Code2, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onOpenLearnMore: () => void;
}

export default function About({ onOpenLearnMore }: AboutProps) {
  const stats = [
    {
      value: 'FAST',
      label: 'University',
      detail: 'BS CS student',
      icon: <BookOpen className="h-5 w-5 text-primary-container" />,
    },
    {
      value: 'App Dev',
      label: 'Specialty',
      detail: 'Flutter/Native',
      icon: <Award className="h-5 w-5 text-primary-container" />,
    },
    {
      value: 'Data',
      label: 'Specialty',
      detail: 'Analysis & Python',
      icon: <Code2 className="h-5 w-5 text-primary-container" />,
    },
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Animated SVG Star & Character Image */}
        <div className="relative flex justify-center items-center">
          {/* Animated 4-point Orange Star */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 scale-110 pointer-events-none">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="w-[105%] h-[105%] text-primary-container/10 dark:text-primary-container/10 fill-current opacity-80"
              viewBox="0 0 100 100"
            >
              <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
            </motion.svg>
          </div>

          {/* Interactive Character Illustration Image */}
          <div className="w-full max-w-[340px] relative group">
            <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/15 transition-colors pointer-events-none" />
            <motion.img
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-full h-auto object-contain rounded-2xl shadow-xl border border-neutral-200/30 dark:border-white/10 relative z-10"
              referrerPolicy="no-referrer"
              src="/src/assets/images/developer_working_1782715818127.jpg"
              alt="Abdullah Shahid Developer at Work"
            />
          </div>
        </div>

        {/* Right Side: Copywriting & Interactive Stats */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary-container flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary-container animate-spin-slow" /> Profile Overview
            </span>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold leading-tight text-neutral-900 dark:text-white">
              About <span className="text-primary-container">Me</span>
            </h2>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-white/50 dark:bg-surface-container/40 backdrop-blur-md border border-neutral-200/50 dark:border-white/10 shadow-lg space-y-3">
            <p className="font-body-lg text-sm sm:text-base text-neutral-600 dark:text-on-surface-variant leading-relaxed">
              I am a passionate App Developer and Data Analyst studying Computer Science at FAST-NUCES. I turn complex logic and raw datasets into elegant, functional code and beautiful, data-driven user experiences. I love designing interactive applications and building insightful analytical models.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 py-1">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center p-3 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-1">{stat.icon}</div>
                <div className="font-stat-value text-lg sm:text-xl font-extrabold text-primary-container">
                  {stat.value}
                </div>
                <div className="font-semibold text-[11px] text-neutral-800 dark:text-white mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[9px] text-neutral-400 dark:text-neutral-500 font-mono">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learn More button */}
          <button
            onClick={onOpenLearnMore}
            className="bg-primary-container/10 border-2 border-primary-container text-primary-container px-6 py-2.5 rounded-full font-bold hover:bg-primary-container hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-md shadow-primary-container/5 text-xs"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
