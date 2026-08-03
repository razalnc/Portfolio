import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem, Theme } from '../types';
import { PROJECTS_CATALOG } from '../data/projects';
import { Sparkles, Play, ExternalLink, Code2, Layers, Cpu, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectDemoModal } from './ProjectDemoModal';

interface ProjectsSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme, getThemeCardClass }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDemoProject, setActiveDemoProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI & LLMs', 'Creative Web', 'Full-Stack', 'UI/UX Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_CATALOG
    : PROJECTS_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <section id="projects-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
          <Sparkles size={12} className="text-blue-400" />
          <span>Selected Works // Catalog 2026</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
          Engineered With Intent
        </h2>

        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          A showcase of real-time AI reasoning systems, WebGL shaders, full-stack agent environments, and high-performance design component architectures.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group rounded-2xl p-6 md:p-8 border ${getThemeCardClass()} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative flex flex-col justify-between overflow-hidden`}
          >
            {/* Top Bar: Status Badge & Category */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${project.statusColor}`}>
                  {project.status}
                </span>
                <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-blue-500 transition duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-blue-400 mb-3 font-medium">
                {project.tagline}
              </p>
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Metrics Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((metric, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] font-mono text-neutral-700 dark:text-neutral-300 flex items-center space-x-1">
                    <Activity size={10} className="text-blue-400" />
                    <span>{metric}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Tech Tags */}
            <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {(project.technologies || []).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveDemoProject(project)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition cursor-pointer flex items-center space-x-2 shadow-md hover:shadow-lg active:scale-95"
                >
                  <Play size={12} className="fill-current" />
                  <span>Interactive Live Demo</span>
                </button>

                <button
                  onClick={() => setActiveDemoProject(project)}
                  className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer text-neutral-600 dark:text-neutral-300"
                  title="View Specs"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Modal */}
      {activeDemoProject && (
        <ProjectDemoModal
          project={activeDemoProject}
          theme={theme}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
    </section>
  );
};
