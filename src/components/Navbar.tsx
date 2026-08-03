import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, Proposal } from '../types';
import { Sparkles, Briefcase, Menu, X, Download } from 'lucide-react';
import { downloadCV } from '../utils/downloadCv';

interface NavbarProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  activeHighlight: string | null;
  triggerHighlight: (section: 'bio' | 'projects' | 'call' | 'skills' | 'sandbox') => void;
  proposals: Proposal[];
  setShowInquiriesPanel: (v: boolean) => void;
  showInquiriesPanel: boolean;
  setIsHireOpen: (v: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
  handleReload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  activeHighlight,
  triggerHighlight,
  proposals,
  setShowInquiriesPanel,
  showInquiriesPanel,
  setIsHireOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleReload
}) => {
  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 rounded-2xl md:rounded-full border backdrop-blur-md px-4 py-2.5 transition-all duration-500 shadow-xl ${
      theme === 'warm' 
        ? 'bg-white/80 border-neutral-200/60 text-neutral-800 shadow-neutral-300/30' 
        : 'bg-[#121214]/85 border-white/10 text-white shadow-black/40'
    }`}>
      <div className="flex items-center justify-between">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReload}
            className="flex items-center space-x-2 group cursor-pointer"
            title="Refresh Entrance Effects"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center border border-white/10 shadow-inner group-hover:rotate-180 transition duration-700">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="font-display font-black text-xs tracking-wider uppercase">
              RazalNC<span className="text-blue-500">.</span>in
            </span>
          </button>
          <div className="hidden sm:flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[8.5px] font-bold text-emerald-500 tracking-wider uppercase">
              Active
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          {[
            { id: 'bio', label: 'Overview' },
            { id: 'projects', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'featured-projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => triggerHighlight(item.id as any)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide uppercase transition duration-300 cursor-pointer ${
                activeHighlight === item.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2.5">
          
          {/* Quick theme dots */}
          <div className="hidden sm:flex items-center space-x-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
            {(['warm', 'slate', 'neon'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-4 h-4 rounded-full border transition cursor-pointer ${
                  t === 'warm' 
                    ? 'bg-neutral-100 border-neutral-300' 
                    : t === 'slate'
                      ? 'bg-[#1E2025] border-neutral-600'
                      : 'bg-[#151030] border-purple-500'
                } ${theme === t ? 'ring-2 ring-blue-500 scale-110 shadow-sm' : 'opacity-60 hover:opacity-100'}`}
                title={`Switch to ${t} backdrops`}
              />
            ))}
          </div>

          {/* Ledger button if proposals exist */}
          {proposals.length > 0 && (
            <button 
              onClick={() => setShowInquiriesPanel(!showInquiriesPanel)}
              className="relative flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 text-[10px] font-bold tracking-wider uppercase transition cursor-pointer border border-amber-500/20"
            >
              <Briefcase size={10} />
              <span>Ledger ({proposals.length})</span>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </button>
          )}

          {/* "Download CV" button */}
          <button
            onClick={() => {
              downloadCV();
              setIsHireOpen(true);
            }}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] tracking-wider uppercase shadow-md hover:shadow-lg transition cursor-pointer active:scale-95"
          >
            <Download size={12} />
            <span>Download CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 md:hidden transition cursor-pointer"
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden mt-3 border-t border-black/5 dark:border-white/5 pt-2"
          >
            <div className="flex flex-col space-y-1.5 pb-2">
              {[
                { id: 'bio', label: 'Overview' },
                { id: 'projects', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'featured-projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => triggerHighlight(item.id as any)}
                  className={`w-full py-2 text-left px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeHighlight === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-neutral-500 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-neutral-800 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-black/5 dark:border-white/5 pt-2 mt-1">
                <p className="text-[9px] font-mono uppercase text-neutral-400 px-3 mb-1.5">Backdrop Theme</p>
                <div className="grid grid-cols-3 gap-1 px-3">
                  {(['warm', 'slate', 'neon'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-1 rounded text-[10px] font-bold uppercase transition ${
                        theme === t
                          ? 'bg-neutral-800 dark:bg-white text-white dark:text-neutral-950'
                          : 'bg-black/5 dark:bg-white/5 text-neutral-500 hover:bg-black/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
