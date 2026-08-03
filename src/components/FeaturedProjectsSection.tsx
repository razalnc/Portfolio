import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, ProjectItem } from '../types';
import { PROJECTS_CATALOG } from '../data/projects';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Code2, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Monitor, 
  Maximize2,
  X
} from 'lucide-react';

interface FeaturedProjectsSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  theme,
  getThemeCardClass
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showLivePreviewModal, setShowLivePreviewModal] = useState<boolean>(false);

  // Lock body scroll when project modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="featured-projects-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-16">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
          <FolderGit2 size={12} className="text-blue-400" />
          <span>Selected Work & Case Studies</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
          Featured Projects
        </h2>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          Click on any project to open its dedicated project page with architecture breakdowns, screenshot previews, technical challenges, and repository links.
        </p>
      </div>

      {/* FEATURED PROJECTS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_CATALOG.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className={`group rounded-3xl overflow-hidden border ${getThemeCardClass()} hover:shadow-2xl transition duration-500 cursor-pointer flex flex-col justify-between relative`}
          >
            {/* Screenshot Frame Preview */}
            <div className="relative h-56 md:h-64 w-full overflow-hidden bg-neutral-900 border-b border-black/10 dark:border-white/10">
              <img 
                src={project.screenshot} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Category & Status Badges */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                  {project.category}
                </span>
                {project.status && (
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] uppercase border ${project.statusColor}`}>
                    {project.status}
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-blue-600 text-white shadow-lg group-hover:scale-110 transition shrink-0">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>

            {/* Card Content Brief */}
            <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Technologies Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[10px] font-mono">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-blue-500 group-hover:text-blue-400">
                <span>View Full Project Page</span>
                <span className="group-hover:translate-x-1 transition duration-300">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DEDICATED PROJECT PAGE OVERLAY / MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 md:p-8 flex justify-center items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`w-full max-w-5xl my-8 rounded-3xl border ${theme === 'warm' ? 'bg-[#F9F9F8] border-neutral-300 text-neutral-900' : 'bg-[#141416] border-white/10 text-white'} shadow-2xl overflow-hidden relative`}
            >
              
              {/* TOP NAVIGATION BAR */}
              <div className="p-4 md:p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-black/5 dark:bg-white/5">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setShowLivePreviewModal(false);
                  }}
                  className="px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-xs font-mono font-bold uppercase tracking-wider transition cursor-pointer flex items-center space-x-2"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Projects</span>
                </button>

                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-bold border border-blue-500/20 uppercase">
                    {selectedProject.category}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setShowLivePreviewModal(false);
                    }}
                    className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-10 space-y-10">
                
                {/* PROJECT HEADER & TITLE */}
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight">
                    {selectedProject.title}
                  </h1>
                  <p className="text-base md:text-lg text-blue-500 dark:text-blue-400 font-medium font-sans">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* SCREENSHOT HERO FRAME */}
                <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black relative">
                  {/* Browser Toolbar Header */}
                  <div className="px-4 py-2.5 bg-[#1E1E22] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 truncate max-w-xs">
                      {selectedProject.liveDemoUrl}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live App Preview</span>
                    </span>
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative max-h-[500px] overflow-hidden">
                    <img 
                      src={selectedProject.screenshot} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* ACTION BUTTONS: LIVE DEMO & GITHUB */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center space-x-2 shadow-lg"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-900 text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center space-x-2 shadow-lg"
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                  </a>
                </div>

                {/* DETAILED SECTIONS GRID */}
                <div className="grid grid-cols-1 gap-8">
                  
                  {/* DESCRIPTION */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${getThemeCardClass()} space-y-3`}>
                    <div className="flex items-center space-x-2 text-blue-500">
                      <Code2 size={20} />
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider">Project Description</h3>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* TECHNOLOGIES USED */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${getThemeCardClass()} space-y-4`}>
                    <div className="flex items-center space-x-2 text-emerald-500">
                      <Layers size={20} />
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-mono font-medium flex items-center space-x-1.5"
                        >
                          <CheckCircle2 size={12} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CHALLENGES */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${getThemeCardClass()} space-y-4`}>
                    <div className="flex items-center space-x-2 text-amber-500">
                      <AlertTriangle size={20} />
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider">Technical Challenges</h3>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                          <span className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WHAT YOU LEARNED */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${getThemeCardClass()} space-y-4`}>
                    <div className="flex items-center space-x-2 text-purple-500">
                      <Lightbulb size={20} />
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider">What I Learned</h3>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.whatYouLearned.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                          <span className="p-1 rounded bg-purple-500/10 text-purple-400 mt-0.5 shrink-0">
                            <Sparkles size={12} />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* BOTTOM CLOSE BAR */}
                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-xs font-mono font-bold uppercase transition cursor-pointer"
                  >
                    Close Project Details
                  </button>
                  <span className="text-xs font-mono text-neutral-400">
                    Razal NC Portfolio • 2026
                  </span>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
