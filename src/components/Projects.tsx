import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, AppWindow, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onOpenDemo: (projectTitle: string, demoUrl: string) => void;
}

export default function Projects({ onOpenDemo }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const initialProjects: Project[] = [
    {
      id: 'proj-1',
      title: 'Travel Diary App',
      description: 'An Android app for logging travel experiences with photos, maps, and offline SQLite support, featuring an AI travel assistant.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8NFTcLGbDqA2DZwxAhXUrMwzWBdwdV1QKRKwOWjb8b_c0zrif9UhWDiiimmVPjnaEUuk3YwoDmPTOWr3dndRQBV6FuufVHSB2SKQxsPJNRAQwmphtt4F98GUj7LXJk2OnxiMJcYfD9xZV4kusppXMWFux9uilL--gopkKcdhnv2oBkTM7MUvCfbj79Jdi_l9B0ocG7Z876jhKNlG30C8NV80ikAKswhV_9SQ_cN8moOaONJ0T_8CW7GYS_3diSwt2Ur4X9v5_9K8',
      tags: ['App', 'Android', 'Kotlin', 'Firebase', 'Gemini API'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Travel_Diary',
      demoUrl: 'https://example.com/travel-diary',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Fitness Commerce Website',
      description: 'A modern, responsive fitness web application built with vanilla JavaScript, CSS, and HTML. This platform helps users discover fitness resources, track their wellness journey, and access valuable fitness information.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6RBV2-GA3nsNtJCXpu8zaW_IDodng03_Eg4fXU4JUkNlpBeEOtzNnaw1wwKhrNqQwTATyMFeWNlECv8H40BIU7FlBp-2C_e6I3HOcwTWPsEMrstax097eYnfEka8tIvWq1pfbS69htyiBPuThBiYV7u0dGAIXKZAHuQwQ67xYlfJwrwmPSBVzGKf-pEveiJSNvH-VSmCZfQIvfClK8A4t5mUiuza7Q2BaRMcfT37k9d3rq0nfFm09zJhIdDZwNM2RXx7ApRbhdk',
      tags: ['Web', 'React', 'Tailwind CSS', 'JavaScript', 'Firebase'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Fitness-Website',
      demoUrl: 'https://fitness-website-tau-flame.vercel.app/',
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'Gamestore (Full Stack)',
      description: 'E-commerce platform for games with secure RBAC user access, MySQL database inventory, and encryption.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8yJurASMpgQF8HlKNWv2CVTavee414F37ATjCM-7Z1D8ChNEZY36TbANkUoJJDpM3yejhYYUPjOwD9otqZGc9Kd3id9EL90Bup8wG1L_WSeNHmjFyWpGEXTQdgJl2fuMlz9iHEjuWpQ9_dSWfI--Ce2vq96KsFBQ5ayXXIMhys-oBkyM_6C_zCrKRDxnG4GL_m7MkneH9-JORGHqIFNsK1nePtK3jQa5xr6NZBTOJxV8xIFi0h9bhrxsOSJUccwgI1YNbkmfTwQg',
      tags: ['Web', 'React.js', 'Node.js', 'Express.js', 'MySQL'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Game-Store-Full-Stack',
      demoUrl: 'https://example.com/gamestore',
      featured: true,
    },
    { 
      id: 'proj-4',
      title: 'Secret Calculator App',
      description: 'A disguised note-taking Android app unlocked via a calculator passcode UI, featuring secure notes and currency rates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['App', 'Android', 'Kotlin', 'REST APIs', 'SQLite'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Calculator_APP',
      demoUrl: 'https://example.com/secret-calc',
      featured: true,
    },

  ];

  const additionalProjects: Project[] = [
    {
      id: 'proj-5',
      title: 'Weather & News App',
      description: 'An Android app fetching real-time weather forecasts and worldwide news stories using RESTful OpenWeatherMap and NewsAPI.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      tags: ['App', 'Android', 'Kotlin', 'OpenWeatherMap', 'NewsAPI'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Weather_and_NewsAPP',
      demoUrl: 'https://example.com/weather-news',
      featured: false,
    },
          {
      id: 'proj-6',
      title: 'RENTAL WEBSITE',
      description: 'A modern, responsive rental web application built with vanilla JavaScript, CSS, and HTML. This platform allows users to browse available properties, view details, and submit rental requests.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6RBV2-GA3nsNtJCXpu8zaW_IDodng03_Eg4fXU4JUkNlpBeEOtzNnaw1wwKhrNqQwTATyMFeWNlECv8H40BIU7FlBp-2C_e6I3HOcwTWPsEMrstax097eYnfEka8tIvWq1pfbS69htyiBPuThBiYV7u0dGAIXKZAHuQwQ67xYlfJwrwmPSBVzGKf-pEveiJSNvH-VSmCZfQIvfClK8A4t5mUiuza7Q2BaRMcfT37k9d3rq0nfFm09zJhIdDZwNM2RXx7ApRbhdk',
      tags: ['Web', 'JavaScript', 'CSS', 'HTML', 'Firebase'],
      codeUrl: 'https://github.com/mAbdullah02-bit/Rent-website',
      demoUrl: 'https://rent-website-sage.vercel.app/vehicles',
      featured: true,
    },
        {
      id: 'proj-7',
      title: 'Customer Churn Prediction',
      description: 'Data science prediction model using a 7k+ records Telco dataset comparing Logistic Regression, Decision Tree, and Random Forest models.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6RBV2-GA3nsNtJCXpu8zaW_IDodng03_Eg4fXU4JUkNlpBeEOtzNnaw1wwKhrNqQwTATyMFeWNlECv8H40BIU7FlBp-2C_e6I3HOcwTWPsEMrstax097eYnfEka8tIvWq1pfbS69htyiBPuThBiYV7u0dGAIXKZAHuQwQ67xYlfJwrwmPSBVzGKf-pEveiJSNvH-VSmCZfQIvfClK8A4t5mUiuza7Q2BaRMcfT37k9d3rq0nfFm09zJhIdDZwNM2RXx7ApRbhdk',
      tags: ['Data Analysis', 'Python', 'Pandas', 'Numpy', 'Scikit-learn', 'Matplotlib'],
      codeUrl: 'https://github.com/mAbdullah02-bit',
      demoUrl: 'https://example.com/churn-prediction',
      featured: true,
    },
  ];

  const allProjects = [...initialProjects, ...additionalProjects];
  const displayedProjects = showAll ? allProjects : initialProjects;

  const filters = ['All', 'App', 'Web', 'Data Analysis', 'AI'];

  const filteredProjects = activeFilter === 'All'
    ? displayedProjects
    : displayedProjects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="py-12 relative">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase font-extrabold tracking-widest text-primary-container">
          Portfolio
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl font-bold">
          My <span className="text-primary-container">Projects</span>
        </h2>
        <p className="font-body-md text-sm text-neutral-500 dark:text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent work across different technologies.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${activeFilter === filter
                ? 'bg-primary-container text-white shadow-md shadow-primary-container/20'
                : 'bg-neutral-100 text-neutral-600 dark:bg-white/5 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-full rounded-xl overflow-hidden bg-white dark:bg-surface-container/30 backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary-container/40 dark:hover:border-primary-container/40 transition-all duration-300"
            >
              {/* Product Cover Image with overlay zoom */}
              <div className="aspect-video relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-150 dark:border-white/5">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[10px] text-white font-mono bg-primary-container/90 px-2 py-0.5 rounded-full">
                    Active Production Deploy
                  </span>
                </div>
              </div>

              {/* Text & Tech Stack details */}
              <div className="p-4 flex-grow flex flex-col space-y-3">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-primary-container transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags Chips */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-primary-container/5 text-primary-container text-[10px] font-bold border border-primary-container/10 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions: code & demo */}
                <div className="flex gap-2 pt-3 border-t border-neutral-100 dark:border-white/5">
                  {/* Code Button with GitHub Icon */}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 py-2 rounded-full border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/5 flex items-center justify-center gap-1.5 text-[11px] font-bold transition-all text-neutral-700 dark:text-neutral-300"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>

                  {/* Highlighted Demo Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex-1 bg-primary-container hover:bg-primary-container/90 text-white py-2 rounded-full flex items-center justify-center gap-1.5 text-[11px] font-bold hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-primary-container/20 border border-transparent cursor-pointer text-center"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show All Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold border-2 border-primary-container/30 hover:border-primary-container transition-all text-primary-container bg-transparent text-xs cursor-pointer shadow-md shadow-primary-container/5 overflow-hidden active:scale-95"
        >
          <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
          <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
        </button>
      </div>
    </section>
  );
}
