import React from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { 
  Github, 
  GitCommit, 
  Flame, 
  FolderGit2, 
  Code2, 
  Star, 
  GitFork, 
  Quote, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface GithubStatsSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
}

export const GithubStatsSection: React.FC<GithubStatsSectionProps> = ({
  theme,
  getThemeCardClass
}) => {
  // Top languages breakdown data
  const languages = [
    { name: 'Python', percentage: 42, color: 'bg-blue-500', textColor: 'text-blue-400' },
    { name: 'JavaScript', percentage: 35, color: 'bg-amber-400', textColor: 'text-amber-400' },
    { name: 'HTML / CSS', percentage: 15, color: 'bg-purple-500', textColor: 'text-purple-400' },
    { name: 'C', percentage: 8, color: 'bg-emerald-400', textColor: 'text-emerald-400' }
  ];

  // Simulated Github contribution heat grid (last 5 months / 20 weeks x 7 days)
  const weeks = 22;
  const days = 7;

  // Function to generate pseudo contribution levels (0 to 4)
  const getContributionLevel = (w: number, d: number) => {
    const seed = (w * 7 + d * 3 + 12) % 17;
    if (seed === 0) return 0;
    if (seed < 5) return 1;
    if (seed < 11) return 2;
    if (seed < 15) return 3;
    return 4;
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-950/40 border-emerald-800/40 dark:bg-emerald-900/50';
      case 2: return 'bg-emerald-700/60 dark:bg-emerald-700/80';
      case 3: return 'bg-emerald-500 dark:bg-emerald-500';
      case 4: return 'bg-emerald-400 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]';
      case 0:
      default:
        return 'bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5';
    }
  };

  const testimonials = [
    {
      quote: "Razal delivered the project on time and was easy to work with.",
      author: "Freelance Client",
      role: "Web Application Project",
      avatarBg: "bg-blue-500"
    },
    {
      quote: "Strong technical grasp of Python and front-end design. Shows continuous curiosity and great attention to detail.",
      author: "Academic Mentor",
      role: "Computer Science Dept.",
      avatarBg: "bg-purple-500"
    },
    {
      quote: "Communicated cleanly throughout development, solved UI layout challenges quickly, and produced highly responsive code.",
      author: "Project Collaborator",
      role: "Open Source Contributor",
      avatarBg: "bg-emerald-500"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-24">
      
      {/* SECTION 8: GITHUB STATS */}
      <section id="github-stats-section" className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-widest uppercase">
            <Github size={14} />
            <span>Developer Metrics & Activity</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            GitHub Stats
          </h2>

          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Open-source contribution frequency, repository breakdown, primary language distribution, and commit streaks.
          </p>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Total Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-6 border ${getThemeCardClass()} space-y-2 flex flex-col justify-between shadow-xl`}
          >
            <div className="flex justify-between items-center text-blue-400">
              <FolderGit2 size={24} />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Public</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-black tracking-tight block">24+</span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">Total Repositories</span>
            </div>
          </motion.div>

          {/* Total Commits */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className={`rounded-3xl p-6 border ${getThemeCardClass()} space-y-2 flex flex-col justify-between shadow-xl`}
          >
            <div className="flex justify-between items-center text-emerald-400">
              <GitCommit size={24} />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">2026 YTD</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-black tracking-tight block">480+</span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">Total Commits</span>
            </div>
          </motion.div>

          {/* Streak Counter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`rounded-3xl p-6 border ${getThemeCardClass()} space-y-2 flex flex-col justify-between shadow-xl`}
          >
            <div className="flex justify-between items-center text-amber-500">
              <Flame size={24} className="animate-pulse" />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Active</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-black tracking-tight block">18 Days</span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">Current Streak</span>
            </div>
          </motion.div>

          {/* Stars & Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`rounded-3xl p-6 border ${getThemeCardClass()} space-y-2 flex flex-col justify-between shadow-xl`}
          >
            <div className="flex justify-between items-center text-purple-400">
              <Star size={24} />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">Starred</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-black tracking-tight block">32</span>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">Repository Stars</span>
            </div>
          </motion.div>

        </div>

        {/* CONTRIBUTION GRAPH & TOP LANGUAGES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CONTRIBUTION GRAPH HEATMAP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-2 rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-6 shadow-xl relative overflow-hidden`}
          >
            <div className="flex justify-between items-center border-b border-black/5 dark:border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <Github size={18} className="text-emerald-400" />
                <h3 className={`text-base font-display font-bold uppercase ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                  Contribution Graph
                </h3>
              </div>
              <a 
                href="https://github.com/razalcodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <span>@razalcodes</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-3 overflow-x-auto pb-2">
              <div className="flex space-x-1.5 min-w-[500px]">
                {Array.from({ length: weeks }).map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col space-y-1.5">
                    {Array.from({ length: days }).map((_, dIdx) => {
                      const level = getContributionLevel(wIdx, dIdx);
                      return (
                        <div
                          key={dIdx}
                          title={`Contributions level ${level}`}
                          className={`w-3.5 h-3.5 rounded-sm transition duration-300 ${getLevelColor(level)}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2">
                <span>Recent 5 Months Activity</span>
                <div className="flex items-center space-x-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-black/10 dark:bg-white/5" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900/60" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TOP LANGUAGES BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-6 shadow-xl flex flex-col justify-between`}
          >
            <div className="flex items-center space-x-2 border-b border-black/5 dark:border-white/10 pb-4">
              <Code2 size={18} className="text-blue-400" />
              <h3 className={`text-base font-display font-bold uppercase ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                Top Languages
              </h3>
            </div>

            {/* Stack Bar */}
            <div className="space-y-4">
              <div className="h-3 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden flex">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.percentage}%` }}
                    className={`h-full ${lang.color} transition-all duration-500`}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language List */}
              <div className="space-y-2.5">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span className="text-neutral-700 dark:text-neutral-300 font-bold">{lang.name}</span>
                    </div>
                    <span className={lang.textColor}>{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-neutral-400">
                Calculated across public commits & repos
              </span>
            </div>
          </motion.div>

        </div>
      </section>


      {/* SECTION 9: TESTIMONIALS */}
      <section id="testimonials-section" className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-[10px] tracking-widest uppercase">
            <MessageSquare size={14} />
            <span>Client & Collaborator Feedback</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            Testimonials
          </h2>

          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Feedback from individuals, clients, and mentors I've collaborated with on projects and freelance initiatives.
          </p>
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-6 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <Quote size={32} className="text-blue-500/20 absolute top-4 right-4" />

              <p className="text-xs md:text-sm font-sans italic leading-relaxed text-neutral-700 dark:text-neutral-200 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-black/5 dark:border-white/10">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-display font-bold text-sm flex items-center justify-center shadow-md shrink-0`}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className={`text-sm font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                    {item.author}
                  </h4>
                  <span className="text-[10.5px] font-mono text-neutral-400 block">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
