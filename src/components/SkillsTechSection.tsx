import React from 'react';
import { motion } from 'motion/react';
import { Theme, Skill } from '../types';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Wrench, 
  Palette, 
  Users, 
  Languages, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Lightbulb
} from 'lucide-react';

interface SkillsTechSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
  skills?: Skill[];
  onToggleStar?: (index: number, e: React.MouseEvent) => void;
}

export const SkillsTechSection: React.FC<SkillsTechSectionProps> = ({ theme, getThemeCardClass }) => {
  const skillCategories = [
    {
      title: 'Front-End Development',
      icon: Code,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      tagColor: 'text-blue-400 border-blue-500/30',
      description: 'Build responsive and interactive web applications with modern web technologies.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'Responsive Web Design',
        'Flexbox & CSS Grid',
        'DOM Manipulation'
      ]
    },
    {
      title: 'Programming Languages',
      icon: Terminal,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      tagColor: 'text-amber-400 border-amber-500/30',
      description: 'Strong foundation in programming and problem-solving.',
      skills: [
        'Python',
        'C',
        'JavaScript'
      ]
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: Cpu,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      tagColor: 'text-purple-400 border-purple-500/30',
      description: 'Currently learning AI concepts and building a strong foundation in machine learning.',
      skills: [
        'Python for AI',
        'Machine Learning Fundamentals',
        'Data Preprocessing',
        'Model Training Basics',
        'Artificial Intelligence Concepts'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      tagColor: 'text-emerald-400 border-emerald-500/30',
      description: 'The software and tools I use throughout development.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Canva',
        'Microsoft Office'
      ]
    },
    {
      title: 'Design & Creativity',
      icon: Palette,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      tagColor: 'text-pink-400 border-pink-500/30',
      description: 'Combining technical skills with creativity to build engaging digital experiences.',
      skills: [
        'Graphic Design',
        'Poster Design',
        'Video Editing',
        'UI Layout Design',
        'Color & Typography'
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      tagColor: 'text-indigo-400 border-indigo-500/30',
      description: 'Skills that help me collaborate, learn, and deliver quality work.',
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Communication',
        'Time Management',
        'Adaptability',
        'Creativity',
        'Attention to Detail',
        'Continuous Learning'
      ]
    }
  ];

  const spokenLanguages = [
    { name: 'English', flag: '🇬🇧', level: 'Advanced', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
    { name: 'Malayalam', flag: '🇮🇳', level: 'Native', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    { name: 'Hindi', flag: '🇮🇳', level: 'Intermediate', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30' }
  ];

  return (
    <section id="skills-card-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-16">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
          <Sparkles size={12} className="text-blue-400" />
          <span>Core Competencies & Stack</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
          My Skills
        </h2>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          A collection of the technologies, tools, and concepts I've learned through academic projects, internships, and freelance work.
        </p>
      </div>

      {/* SKILLS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-5 hover:shadow-2xl transition duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-2xl border ${cat.color} shrink-0`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className={`text-lg font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed border-b border-black/5 dark:border-white/10 pb-4">
                  {cat.description}
                </p>

                {/* Skill Checklist */}
                <div className="space-y-2 pt-1">
                  {cat.skills.map((skillItem, i) => (
                    <div key={i} className="flex items-center space-x-2.5 text-xs font-sans text-neutral-700 dark:text-neutral-200">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span className="font-medium">{skillItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${cat.tagColor}`}>
                  {cat.skills.length} Capabilities
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* LANGUAGES SPOKEN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-6 max-w-3xl mx-auto shadow-xl`}
      >
        <div className="flex items-center space-x-3 border-b border-black/5 dark:border-white/10 pb-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
            <Languages size={22} />
          </div>
          <div>
            <h3 className={`text-xl font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
              Languages
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
              Linguistic proficiency for international and regional communication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {spokenLanguages.map((lang, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-display font-bold text-sm text-neutral-800 dark:text-neutral-100">{lang.name}</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${lang.badge}`}>
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
