import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Sparkles, ArrowUp, Heart, Terminal } from 'lucide-react';

interface FooterProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, setTheme }) => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-black/5 dark:border-white/10 py-12 px-4 md:px-8 relative z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Signature */}
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center border border-white/10 shadow-inner">
            <Sparkles size={14} className="text-white" />
          </div>
          <div>
            <span className="font-display font-black text-xs tracking-wider uppercase block">
              RazalNC<span className="text-blue-500">.</span>in
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              © {new Date().getFullYear()} Razal — Creative Engineer
            </span>
          </div>
        </div>

        {/* Live Clock & Status */}
        <div className="flex items-center space-x-4 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operational // {timeString || 'LIVE'}</span>
          </div>
        </div>

        {/* Theme Picker & Scroll to Top */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/10">
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
                } ${theme === t ? 'ring-2 ring-blue-500 scale-110' : 'opacity-60 hover:opacity-100'}`}
                title={`Switch to ${t} backdrops`}
              />
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition cursor-pointer text-neutral-600 dark:text-neutral-300"
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
