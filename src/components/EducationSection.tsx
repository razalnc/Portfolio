import React from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Building,
  School
} from 'lucide-react';

interface EducationSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  theme,
  getThemeCardClass
}) => {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Web Development',
    'Python Programming',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence Fundamentals'
  ];

  return (
    <section id="education-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-12">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 font-mono text-[10px] tracking-widest uppercase">
          <GraduationCap size={14} />
          <span>Academic Background</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight flex items-center justify-center space-x-3 ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
          <span>🎓</span>
          <span>Education</span>
        </h2>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          My formal computer science degree, academic institution details, performance metrics, and core technical coursework.
        </p>
      </div>

      {/* MAIN EDUCATION CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`max-w-4xl mx-auto rounded-3xl p-6 md:p-10 border ${getThemeCardClass()} shadow-2xl space-y-8 relative overflow-hidden`}
      >
        {/* Subtle Background Glow Accent */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* TOP ROW: DEGREE TITLE & SGPA BADGE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 dark:border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 shrink-0 shadow-sm">
                <School size={28} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 dark:text-amber-400 font-bold block">
                  Degree Program
                </span>
                <h3 className={`text-2xl md:text-3xl font-display font-extrabold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                  Bachelor of Computer Science
                </h3>
              </div>
            </div>

            {/* COLLEGE & LOCATION */}
            <div className="space-y-1.5 pt-1 pl-1">
              <div className="flex items-center space-x-2 text-sm font-sans font-semibold text-neutral-800 dark:text-neutral-200">
                <Building size={16} className="text-blue-500 shrink-0" />
                <span>Regional College of Science and Humanities</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-sans text-neutral-500 dark:text-neutral-400">
                <MapPin size={14} className="text-red-400 shrink-0" />
                <span>Kizhisseri, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* SGPA & GRADUATION STATS */}
          <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-4 shrink-0">
            {/* SGPA METRIC BADGE */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-right space-y-1 shadow-inner min-w-[140px]">
              <div className="flex items-center justify-end space-x-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                <Award size={12} />
                <span>Academic SGPA</span>
              </div>
              <div className="text-3xl font-display font-black tracking-tight">
                7.5 <span className="text-xs font-mono font-normal text-neutral-400">/ 10</span>
              </div>
            </div>

            {/* EXPECTED GRADUATION */}
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 font-mono text-xs border border-black/5 dark:border-white/10">
              <Calendar size={14} className="text-blue-400" />
              <span>Expected: <strong>March 2027</strong></span>
            </div>
          </div>
        </div>

        {/* RELEVANT COURSEWORK SECTION */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen size={18} className="text-blue-500" />
            <h4 className={`text-lg font-display font-bold uppercase tracking-wider ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
              Relevant Coursework
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coursework.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center space-x-3 hover:border-amber-500/30 transition group"
              >
                <CheckCircle2 size={16} className="text-amber-500 dark:text-amber-400 shrink-0 group-hover:scale-110 transition" />
                <span className="text-xs font-sans font-medium text-neutral-800 dark:text-neutral-200">
                  {course}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>

    </section>
  );
};
