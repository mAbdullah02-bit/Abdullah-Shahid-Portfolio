import { useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Cpu, Atom, Wind, Flame, Binary, Zap, Award, HelpCircle } from 'lucide-react';

interface SkillItem {
  name: string;
  proficiency: number;
  icon: ReactNode;
  category: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skills: SkillItem[] = [
    { name: 'Kotlin & SQLite', proficiency: 90, icon: <Layers className="h-5 w-5" />, category: 'App Dev' },
    { name: 'React.js & Tailwind', proficiency: 80, icon: <Atom className="h-5 w-5" />, category: 'Web Dev' },
    { name: 'Python (Pandas,Numpy,Scikit-learn,Matplotlib)', proficiency: 85, icon: <Binary className="h-5 w-5" />, category: 'Data Analysis' },
    { name: 'Power BI & Excel', proficiency: 85, icon: <Cpu className="h-5 w-5" />, category: 'Data Analysis' },
    { name: 'MySQL & Firebase', proficiency: 85, icon: <Flame className="h-5 w-5" />, category: 'Others' },
    { name: 'Docker & Linux', proficiency: 75, icon: <Zap className="h-5 w-5" />, category: 'Others' },
    { name: 'C++ & Algorithms', proficiency: 85, icon: <Award className="h-5 w-5" />, category: 'Others' },
    { name: 'Figma UI/UX', proficiency: 85, icon: <Sparkles className="h-5 w-5" />, category: 'Others' },
  ];

  const categories = ['All', 'App Dev', 'Web Dev', 'Data Analysis', 'Others'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-12 relative">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase font-extrabold tracking-widest text-primary-container">
          My Expertise
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl font-bold">
          My <span className="text-primary-container">Skills</span>
        </h2>
        <p className="font-body-md text-sm text-neutral-500 dark:text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Transforming complex requirements into simple, beautiful, and functional technical solutions using the latest industry standards.
        </p>

        {/* Filter categories tabs */}
        <div className="flex justify-center gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === cat
                ? 'bg-primary-container text-white shadow-md shadow-primary-container/20'
                : 'bg-neutral-100 text-neutral-600 dark:bg-white/5 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid containing Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative rounded-xl p-5 bg-white dark:bg-surface-container/30 backdrop-blur-md border border-neutral-200 dark:border-white/10 hover:border-primary-container dark:hover:border-primary-container/80 shadow-sm hover:shadow-lg hover:shadow-primary-container/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Hover background gloss */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-3">
                {/* Skill Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary-container/10 dark:bg-primary-container/20 border border-primary-container/20 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="font-bold text-base text-neutral-800 dark:text-white group-hover:text-primary-container transition-colors">
                  {skill.name}
                </span>
              </div>

              <span className="text-[10px] font-mono bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded">
                {skill.category}
              </span>
            </div>

            {/* Proficiency Meter */}
            <div className="space-y-1.5 relative z-10">
              <div className="flex justify-between text-[11px] font-bold text-neutral-500 dark:text-neutral-400">
                <span>Proficiency</span>
                <span className="text-primary-container">{skill.proficiency}%</span>
              </div>
              <div className="h-1.5 w-full bg-neutral-100 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-primary-container to-amber-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
