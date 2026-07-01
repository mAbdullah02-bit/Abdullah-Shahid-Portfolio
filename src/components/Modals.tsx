import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, MapPin, GraduationCap, Heart, User, Briefcase, Share2, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-2xl dark:bg-surface-container-high border border-neutral-200 dark:border-white/10 text-on-surface"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 dark:border-white/5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary-container animate-pulse" />
                <h3 className="text-2xl font-bold font-display-lg text-primary-container">About Abdullah Shahid</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-6 max-h-[70vh] overflow-y-auto pr-2 space-y-6 scrollbar-thin">
              {/* Introduction */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-bold text-lg text-neutral-900 dark:text-white">
                  <User className="h-5 w-5 text-primary-container" /> Who Am I?
                </h4>
                <p className="text-neutral-600 dark:text-on-surface-variant text-sm leading-relaxed">
                  I'm an App Developer and Data Analyst based in <strong>Faisalabad, Punjab, Pakistan</strong>. Currently pursuing my studies in computer science, I specialize in crafting mobile application experiences and diving deep into data analysis to solve complex challenges.
                </p>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Location & Hometown */}
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
                  <h5 className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-white mb-2">
                    <MapPin className="h-4 w-4 text-primary-container" /> Location
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-on-surface-variant">
                    Living and studying in Faisalabad, Punjab, Pakistan. Open to remote work, freelancing, and collaboration opportunities.
                  </p>
                </div>

                {/* Studies */}
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
                  <h5 className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-white mb-2">
                    <GraduationCap className="h-4 w-4 text-primary-container" /> Education &amp; Studies
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-on-surface-variant">
                    Bachelor of Science in Computer Science from FAST-NUCES (National University of Computer and Emerging Sciences), one of Pakistan's premier IT universities.
                  </p>
                </div>

                {/* Hobbies */}
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
                  <h5 className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-white mb-2">
                    <Heart className="h-4 w-4 text-primary-container" /> Passions &amp; Hobbies
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-on-surface-variant">
                    Traveling and exploring scenic destinations, playing and following sports, experimenting with data visualization models, and building mini-apps.
                  </p>
                </div>

                {/* Why Work With Me */}
                <div className="rounded-xl bg-neutral-50 p-4 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
                  <h5 className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-white mb-2">
                    <Briefcase className="h-4 w-4 text-primary-container" /> Why Work With Me?
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-on-surface-variant">
                    I combine a strong foundation in computer science with a data-driven approach. I construct clean codebase architectures for apps and write optimized scripts to clean, process, and analyze datasets.
                  </p>
                </div>
              </div>

              {/* Personal philosophy */}
              <div className="rounded-xl bg-primary-container/10 p-5 border border-primary-container/20">
                <h5 className="font-bold text-primary-container mb-2">My Design &amp; Data Philosophy</h5>
                <p className="text-sm text-neutral-700 dark:text-on-surface-variant leading-relaxed">
                  "Mobile apps build the bridge to the user, and data analysis lays down the map. I code to design fluid interfaces, and I analyze to make sure every decision is backed by solid numbers."
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end border-t border-neutral-100 pt-4 dark:border-white/5">
              <button
                onClick={onClose}
                className="bg-primary-container text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Got It!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl: string;
}

export function ShareModal({ isOpen, onClose, appUrl }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-surface-container-high border border-neutral-200 dark:border-white/10 text-on-surface animate-fade-in"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4 dark:border-white/5">
              <h3 className="text-xl font-bold text-primary-container flex items-center gap-2">
                <Share2 className="h-5 w-5" /> Share Portfolio
              </h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm text-neutral-600 dark:text-on-surface-variant">
              Share this polished interactive design portfolio with recruiters, managers, or colleagues!
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-neutral-100 p-2 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <input
                type="text"
                readOnly
                value={appUrl}
                className="w-full bg-transparent px-3 text-xs text-neutral-700 dark:text-white outline-none border-none focus:ring-0"
              />
              <button
                onClick={handleCopy}
                className="bg-primary-container text-white p-2 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                title="Copy to clipboard"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {copied && (
              <p className="mt-2 text-center text-xs text-emerald-500 font-medium">
                Successfully copied link to clipboard!
              </p>
            )}

            <div className="mt-6 flex gap-3 justify-center">
              <a
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20portfolio!%20${encodeURIComponent(appUrl)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors text-sm font-semibold"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] transition-colors text-sm font-semibold"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoTourModal({ isOpen, onClose }: VideoTourModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-2xl dark:bg-surface-container-high border border-neutral-200 dark:border-white/10 text-on-surface"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 p-4 dark:border-white/5">
              <h3 className="text-xl font-bold text-primary-container flex items-center gap-2">
                <span>🎥 Abdullah's Introduction Video</span>
              </h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Canvas or HTML5 Video Player */}
            <div className="aspect-video bg-neutral-950 flex flex-col items-center justify-center text-center p-2 relative">
              <video
                controls
                className="w-full h-full object-contain rounded-xl"
                src="/intro.mp4"
                poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              >
                Your browser does not support the video tag. Please place your 'intro.mp4' file inside the 'public' folder.
              </video>
            </div>

            <div className="p-4 bg-neutral-50 dark:bg-white/5 text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                "App developer and data analyst focused on building scalable, data-driven solutions."
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface ToastNotificationProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
}

export function ToastNotification({ message, isOpen, onClose, type = 'success' }: ToastNotificationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-white shadow-2xl dark:bg-white dark:text-neutral-900 border border-neutral-800 dark:border-neutral-200"
        >
          {type === 'success' ? (
            <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">
              ✓
            </div>
          ) : (
            <div className="h-5 w-5 rounded-full bg-primary-container flex items-center justify-center text-white text-xs">
              ℹ
            </div>
          )}
          <span className="text-sm font-semibold">{message}</span>
          <button
            onClick={onClose}
            className="ml-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-800 hover:text-white dark:text-neutral-500 dark:hover:bg-neutral-100 dark:hover:text-black transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProjectDemoModalProps {
  isOpen: boolean;
  projectTitle: string;
  onClose: () => void;
}

export function ProjectDemoModal({ isOpen, projectTitle, onClose }: ProjectDemoModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'info'>('preview');
  
  // Simulated Interactive States for different projects
  // 1. Travel Diary App
  const [travelChat, setTravelChat] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to your Travel Diary Assistant! Where are you planning to travel next?' }
  ]);
  const [travelInput, setTravelInput] = useState('');

  // 2. Secret Calculator App
  const [calcDisplay, setCalcDisplay] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [secretNotes, setSecretNotes] = useState('Top Secret Notes:\n- Database SQLite initialized offline.\n- Play Store listing screenshots prepared.\n- Firebase config secrets stored.');

  // 3. Customer Churn Prediction
  const [contractLength, setContractLength] = useState(12);
  const [monthlyCharges, setMonthlyCharges] = useState(70);
  const [churnProb, setChurnProb] = useState(24);

  // 4. Gamestore (Full Stack)
  const [games, setGames] = useState([
    { id: 1, name: 'Elden Ring', price: 59, stock: 15 },
    { id: 2, name: 'Cyberpunk 2077', price: 49, stock: 8 },
    { id: 3, name: 'GTA V', price: 29, stock: 2 }
  ]);
  const [cartCount, setCartCount] = useState(0);

  // 5. Weather & News App
  const [selectedCity, setSelectedCity] = useState('Faisalabad');

  const cityWeather: { [key: string]: { temp: number; desc: string; news: string } } = {
    'Faisalabad': { temp: 38, desc: 'Hot & Sunny', news: 'FAST-NUCES campus hosts annual software project competition.' },
    'Lahore': { temp: 36, desc: 'Hazy Sun', news: 'IT hub expands with new tech incubators in Lahore Software Park.' },
    'Islamabad': { temp: 31, desc: 'Clear & Breezy', news: 'Green initiatives launched to preserve Margalla Hills forest reserve.' },
    'Karachi': { temp: 33, desc: 'Humid & Wind', news: 'Local gaming platform startup raises record seed capital funding.' }
  };

  const handleTravelSend = (e: FormEvent) => {
    e.preventDefault();
    if (!travelInput.trim()) return;
    const msg = travelInput;
    setTravelChat(prev => [...prev, { role: 'user', text: msg }]);
    setTravelInput('');

    setTimeout(() => {
      let res = `That sounds like an amazing trip! Logging this in your Travel Diary will keep your memories safe.`;
      const lower = msg.toLowerCase();
      if (lower.includes('pakistan') || lower.includes('faisalabad') || lower.includes('lahore')) {
        res = `Exploring Pakistan! You should check out the Clock Tower bazaar in Faisalabad, the historic Badshahi Mosque in Lahore, or plan a hike in Hunza Valley!`;
      } else if (lower.includes('hike') || lower.includes('mountain') || lower.includes('nature')) {
        res = `For nature and hiking, Naran, Babusar Top, and Hunza offer breathtaking photo logs. Gemini AI can draft a custom 3-day itinerary!`;
      } else if (lower.includes('gemini') || lower.includes('ai')) {
        res = `Gemini API integration provides smart destination summaries and auto-drafts your diary captions based on photos!`;
      }
      setTravelChat(prev => [...prev, { role: 'ai', text: res }]);
    }, 800);
  };

  const handleCalcClick = (val: string) => {
    if (val === 'C') {
      setCalcDisplay('');
    } else if (val === '=') {
      if (calcDisplay === '1234') {
        setIsUnlocked(true);
      } else {
        try {
          // simple parser
          const res = Function(`"use strict"; return (${calcDisplay})`)();
          setCalcDisplay(String(res));
        } catch {
          setCalcDisplay('Error');
        }
      }
    } else {
      setCalcDisplay(p => p + val);
    }
  };

  const handleAddGameToCart = (gameId: number) => {
    setGames(prev => prev.map(g => {
      if (g.id === gameId && g.stock > 0) {
        setCartCount(c => c + 1);
        return { ...g, stock: g.stock - 1 };
      }
      return g;
    }));
  };

  const calculateChurn = (months: number, charges: number) => {
    // contract impact is negative (longer contracts = less churn)
    // charges impact is positive (more expensive = more churn)
    const base = 42;
    const contractImpact = -months * 1.6;
    const chargesImpact = (charges - 50) * 0.35;
    const res = Math.min(99, Math.max(1, Math.round(base + contractImpact + chargesImpact)));
    setChurnProb(res);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white overflow-hidden shadow-2xl dark:bg-surface-container-high border border-neutral-200 dark:border-white/10 text-on-surface"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 p-4 dark:border-white/5 bg-neutral-50 dark:bg-white/5">
              <div>
                <span className="text-[10px] font-mono text-primary-container uppercase font-bold tracking-widest">Interactive Sandbox</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{projectTitle}</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation tabs */}
            <div className="flex border-b border-neutral-100 dark:border-white/5 text-xs bg-neutral-50/50 dark:bg-white/5">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 py-3 text-center font-bold border-b-2 transition-all cursor-pointer ${
                  activeTab === 'preview' ? 'border-primary-container text-primary-container' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                🎮 Sandbox Live Preview
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-3 text-center font-bold border-b-2 transition-all cursor-pointer ${
                  activeTab === 'info' ? 'border-primary-container text-primary-container' : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                📝 Technical Specs
              </button>
            </div>

            {/* Body */}
            <div className="p-6 h-[350px] overflow-y-auto">
              {activeTab === 'preview' ? (
                <div className="h-full flex flex-col justify-between">
                  
                  {/* Travel Diary App Interactive Preview */}
                  {projectTitle.includes('Travel') ? (
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between items-center bg-primary-container/10 p-2.5 rounded-xl border border-primary-container/20 text-[11px] mb-2">
                        <span className="font-bold text-primary-container">✈️ Gemini Travel Assistant Enabled</span>
                        <span className="font-mono text-neutral-400">Offline SQLite: Active</span>
                      </div>
                      <div className="flex-grow overflow-y-auto space-y-2 pr-2 border border-neutral-100 dark:border-white/5 rounded-xl p-3 bg-neutral-50/50 dark:bg-neutral-900/40">
                        {travelChat.map((m, i) => (
                          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                              m.role === 'user' ? 'bg-primary-container text-white rounded-br-none' : 'bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 rounded-bl-none'
                            }`}>
                              {m.text}
                            </div>
                          </div>
                        ))}
                      </div>
                      <form onSubmit={handleTravelSend} className="mt-2.5 flex gap-2">
                        <input
                          type="text"
                          value={travelInput}
                          onChange={e => setTravelInput(e.target.value)}
                          placeholder="Ask for suggestions (e.g. 'suggestions for Pakistan' or 'hike')"
                          className="flex-grow bg-neutral-100 dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-full px-4 py-2 text-xs text-neutral-800 dark:text-white outline-none focus:border-primary-container"
                        />
                        <button type="submit" className="bg-primary-container text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-all">
                          Send
                        </button>
                      </form>
                    </div>

                  /* Secret Calculator App Interactive Preview */
                  ) : projectTitle.includes('Calculator') ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                      {/* Calculator Keypad */}
                      <div className="bg-neutral-100 dark:bg-white/5 p-3 rounded-2xl border border-neutral-200 dark:border-white/10 flex flex-col justify-between">
                        <div className="bg-white dark:bg-neutral-900 rounded-lg p-2 text-right font-mono text-lg text-neutral-800 dark:text-white overflow-hidden min-h-[40px] border border-neutral-250 dark:border-white/5">
                          {calcDisplay || '0'}
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 mt-2">
                          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(btn => (
                            <button
                              key={btn}
                              onClick={() => handleCalcClick(btn)}
                              className={`py-2 rounded-lg text-xs font-mono font-bold hover:scale-105 active:scale-95 transition-all ${
                                btn === '=' ? 'bg-primary-container text-white' : btn === 'C' ? 'bg-rose-500 text-white' : 'bg-neutral-200 hover:bg-neutral-300 dark:bg-white/10 dark:hover:bg-white/15'
                              }`}
                            >
                              {btn}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Secret Safe Interface */}
                      <div className="flex flex-col justify-center text-center p-3 rounded-2xl border border-dashed border-neutral-200 dark:border-white/10">
                        {isUnlocked ? (
                          <div className="h-full flex flex-col justify-between text-left space-y-2">
                            <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                              🔓 Safe Unlocked Successfully!
                            </span>
                            <textarea
                              value={secretNotes}
                              onChange={e => setSecretNotes(e.target.value)}
                              className="w-full flex-grow bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-xl p-2.5 text-xs text-neutral-800 dark:text-neutral-300 outline-none focus:border-primary-container font-mono"
                            />
                            <button
                              onClick={() => {
                                setIsUnlocked(false);
                                setCalcDisplay('');
                              }}
                              className="w-full bg-neutral-800 text-white py-1 rounded-full text-[10px] font-bold hover:bg-neutral-900"
                            >
                              Lock Safe Again
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2 py-6">
                            <span className="text-3xl">🔒</span>
                            <h4 className="text-xs font-bold text-neutral-800 dark:text-white">Secret Note Safe Locked</h4>
                            <p className="text-[10px] text-neutral-400">
                              Disguised note taking app. Type the secret passcode `1234` on the calculator and press `=` to unlock database logs.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                  /* Gamestore Full Stack E-Commerce Sandbox */
                  ) : projectTitle.includes('Gamestore') ? (
                    <div className="space-y-4 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-center bg-primary-container/10 p-3 rounded-xl border border-primary-container/20">
                        <span className="text-xs font-bold text-primary-container">👾 Gamestore Live DB Sync (MySQL Simulator)</span>
                        <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full shadow-sm text-xs font-bold">
                          🛒 Cart: <span className="text-primary-container">{cartCount} items</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {games.map(game => (
                          <div key={game.id} className="rounded-xl border border-neutral-100 dark:border-white/5 p-3 flex flex-col justify-between bg-neutral-50/50 dark:bg-white/5 text-center">
                            <span className="text-[11px] font-bold text-neutral-800 dark:text-white line-clamp-1">{game.name}</span>
                            <div className="my-1.5">
                              <span className="text-xs text-primary-container font-extrabold block">${game.price}.00</span>
                              <span className="text-[9px] text-neutral-400 block font-mono">In Stock: {game.stock}</span>
                            </div>
                            <button
                              disabled={game.stock === 0}
                              onClick={() => handleAddGameToCart(game.id)}
                              className="w-full bg-primary-container text-white py-1 rounded-full text-[10px] font-bold hover:scale-105 transition-all disabled:opacity-40 disabled:scale-100"
                            >
                              {game.stock > 0 ? 'Buy Game' : 'Out of Stock'}
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      {cartCount > 0 && (
                        <button
                          onClick={() => {
                            alert('Purchase completed! MySQL Relational stock values decremented successfully.');
                            setCartCount(0);
                          }}
                          className="w-full py-2 bg-emerald-500 text-white rounded-full text-xs font-bold hover:scale-105 transition-all text-center block mt-2"
                        >
                          Checkout Cart Items
                        </button>
                      )}
                    </div>

                  /* Customer Churn Prediction Interactive Preview */
                  ) : projectTitle.includes('Churn') ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full items-center">
                      <div className="space-y-4">
                        {/* Control Sliders */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-neutral-400 uppercase flex justify-between">
                            <span>Contract Length</span>
                            <span className="text-primary-container">{contractLength} months</span>
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="24"
                            value={contractLength}
                            onChange={e => {
                              const val = Number(e.target.value);
                              setContractLength(val);
                              calculateChurn(val, monthlyCharges);
                            }}
                            className="w-full accent-primary-container cursor-pointer"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-neutral-400 uppercase flex justify-between">
                            <span>Monthly Charges</span>
                            <span className="text-primary-container">${monthlyCharges}/mo</span>
                          </label>
                          <input
                            type="range"
                            min="20"
                            max="150"
                            value={monthlyCharges}
                            onChange={e => {
                              const val = Number(e.target.value);
                              setMonthlyCharges(val);
                              calculateChurn(contractLength, val);
                            }}
                            className="w-full accent-primary-container cursor-pointer"
                          />
                        </div>

                        <div className="flex gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[9px] font-mono">Logistic Reg: 82%</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-mono">Random Forest: 89%</span>
                        </div>
                      </div>

                      {/* Prediction Meter */}
                      <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 text-center flex flex-col justify-center space-y-2">
                        <span className="text-[11px] font-bold text-neutral-500 uppercase">Customer Churn Probability</span>
                        <div className="text-4xl font-extrabold font-mono text-rose-500 animate-pulse">
                          {churnProb}%
                        </div>
                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              churnProb > 50 ? 'bg-rose-500' : churnProb > 25 ? 'bg-amber-400' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${churnProb}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-neutral-400">
                          {churnProb > 50 ? '⚠️ High Risk! Recommend contract extension discount.' : '✅ Low Churn Risk. Highly satisfied.'}
                        </span>
                      </div>
                    </div>

                  /* Default Weather & News App Preview */
                  ) : (
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-center gap-3 bg-neutral-100 dark:bg-white/5 p-3 rounded-xl border border-neutral-200 dark:border-white/10">
                        <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">Select City Location:</span>
                        <select
                          value={selectedCity}
                          onChange={e => setSelectedCity(e.target.value)}
                          className="bg-white dark:bg-neutral-900 border border-neutral-250 dark:border-white/10 rounded-lg px-2.5 py-1 text-xs text-neutral-800 dark:text-white outline-none"
                        >
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Karachi">Karachi</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-3 flex-grow">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-400/25 flex flex-col justify-center items-center text-center">
                          <span className="text-3xl mb-1">{cityWeather[selectedCity].temp > 35 ? '☀️' : '⛅'}</span>
                          <span className="text-2xl font-extrabold font-mono text-neutral-800 dark:text-white">{cityWeather[selectedCity].temp}°C</span>
                          <span className="text-xs text-neutral-400">{cityWeather[selectedCity].desc}</span>
                        </div>
                        
                        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 flex flex-col justify-center text-left">
                          <span className="text-[10px] font-bold text-primary-container uppercase tracking-wider mb-1">Latest NewsAPI Feed</span>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-serif italic">
                            "{cityWeather[selectedCity].news}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ) : (
                /* Specs Tab */
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 rounded-xl">
                      <span className="font-bold text-primary-container">Architecture</span>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-1">Single Page Application / Container Isolated Web App</p>
                    </div>
                    <div className="p-3 bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 rounded-xl">
                      <span className="font-bold text-primary-container">Key libraries</span>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-1">React, Framer Motion, Tailwind CSS, Lucide Icons</p>
                    </div>
                  </div>

                  <div className="p-4 bg-primary-container/10 border border-primary-container/20 rounded-xl space-y-2">
                    <span className="font-bold text-primary-container block">Production Delivery Details</span>
                    <p className="text-neutral-700 dark:text-on-surface-variant leading-relaxed">
                      All elements are modularized to accommodate high volumes of dynamic inputs. It supports continuous deployment through Docker and integrates full responsiveness for mobile screens.
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center pt-2">
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-white/5 text-neutral-400 rounded-full text-[10px] font-mono">NODE_ENV: production</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-white/5 text-neutral-400 rounded-full text-[10px] font-mono">PORT: 3000</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-white/5 text-neutral-400 rounded-full text-[10px] font-mono">HMR: disabled</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-neutral-50 dark:bg-white/5 border-t border-neutral-100 dark:border-white/5 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="bg-primary-container text-white px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer"
              >
                Close Sandbox
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

