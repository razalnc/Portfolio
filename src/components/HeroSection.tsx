import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Skill, Theme } from '../types';
import { 
  Sparkles, 
  Briefcase, 
  Building2, 
  PhoneOff, 
  Phone, 
  Terminal, 
  Star, 
  Monitor, 
  Lock, 
  RotateCw,
  ChevronDown,
  ArrowDown,
  Download
} from 'lucide-react';
import { downloadCV } from '../utils/downloadCv';

// @ts-ignore
import heroPortrait from '../assets/images/ImRAZAL.png';

interface HeroSectionProps {
  theme: Theme;
  headlineWord1: string;
  headlineWord2: string;
  getHeadlineColors: () => { word1: string; word2: string };
  getThemeCardClass: () => string;
  activeHighlight: string | null;
  setIsHireOpen: (v: boolean) => void;
  callStatus: 'ringing' | 'connected' | 'ended';
  setCallStatus: (v: 'ringing' | 'connected' | 'ended') => void;
  callDuration: number;
  formatDuration: (s: number) => string;
  skills: Skill[];
  selectedSkillIndex: number | null;
  setSelectedSkillIndex: (idx: number | null) => void;
  handleToggleStar: (idx: number, e: React.MouseEvent) => void;
  urlInput: string;
  setUrlInput: (v: string) => void;
  setHeadlineWord1: (v: string) => void;
  setHeadlineWord2: (v: string) => void;
  setTheme: (t: Theme) => void;
  handleReload: () => void;
  entranceKey: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  headlineWord1,
  headlineWord2,
  getHeadlineColors,
  getThemeCardClass,
  activeHighlight,
  setIsHireOpen,
  callStatus,
  setCallStatus,
  callDuration,
  formatDuration,
  skills,
  selectedSkillIndex,
  setSelectedSkillIndex,
  handleToggleStar,
  urlInput,
  setUrlInput,
  setHeadlineWord1,
  setHeadlineWord2,
  setTheme,
  handleReload,
  entranceKey
}) => {
  const scrollToProjects = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-between pt-24 pb-12 px-4 md:px-8">
      
      {/* ENTRANCE KEY CONTAINER (RE-TRIGGERS ANIMATIONS) */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={entranceKey}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15 } 
            }
          }}
          className="w-full max-w-7xl relative flex-grow flex flex-col justify-between items-center"
        >
          
          {/* BACKGROUND DISPLAY TYPOGRAPHY - Layered in behind the subject */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
            <motion.h2 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 50 }}
              className={`text-sm md:text-xl lg:text-2xl font-display font-medium tracking-[0.4em] uppercase text-center ${getHeadlineColors().word1} mb-2 transition-colors duration-1000`}
            >
              {headlineWord1}
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring', damping: 15 }}
              className={`text-[12vw] md:text-[11vw] lg:text-[13vw] font-display font-extrabold uppercase tracking-tighter leading-none text-center ${getHeadlineColors().word2} select-none transition-colors duration-1000`}
              style={{
                textShadow: theme === 'warm' ? '0 4px 20px rgba(0,0,0,0.02)' : '0 4px 30px rgba(0,0,0,0.1)'
              }}
            >
              {headlineWord2}
            </motion.h1>
          </div>

          {/* THE HERO SUBJECT PORTRAIT - Centered white stool setting */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[80vh] h-full flex items-center justify-center aspect-[16/9]"
            >
              <img 
                src={heroPortrait} 
                alt="Razal - Software Engineer and Creative Builder" 
                referrerPolicy="no-referrer"
                className="max-h-[75vh] object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </div>

          {/* INTERACTIVE FLOATING WIDGETS SECTION */}
          <div className="w-full relative min-h-[65vh] md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between z-20 gap-8 mt-6 md:mt-0">
            
            {/* LEFT SIDE COLUMN: Bio Widget & Incoming Call Widget */}
            <div className="contents md:flex md:flex-col md:space-y-5 md:space-y-6 w-full md:w-[16.5rem] items-center md:items-start md:translate-x-10 lg:translate-x-16">
              
              {/* WIDGET 1: THE BIO / INTRODUCTION CARD */}
              <motion.div 
                id="bio-card-section"
                variants={{
                  hidden: { opacity: 0, x: -50, scale: 0.95 },
                  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
                }}
                className={`w-full ${getThemeCardClass()} rounded-xl p-3.5 shadow-xl border backdrop-blur-xl transition-all duration-700 hover:shadow-2xl relative overflow-hidden ${activeHighlight === 'bio' ? 'ring-4 ring-blue-500/80 shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-[1.04]' : ''} order-1 md:order-none`}
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[8px] font-mono tracking-wider uppercase">
                    Overview
                  </span>
                  <Sparkles size={10} className="text-amber-500 animate-pulse" />
                </div>

                <h3 className="text-sm md:text-base font-display font-bold tracking-tight mb-1">
                  Developer, Thinker, Builder
                </h3>
                <p className="text-[10px] md:text-[11.5px] leading-relaxed opacity-85 mb-3 font-sans">
                  I am a creative software engineer turning code into high-performance, interactive visuals. From reliable server backends to responsive web dashboards, I craft applications that perform seamlessly and stand out.
                </p>

                <button 
                  onClick={() => {
                    downloadCV();
                    setIsHireOpen(true);
                  }}
                  className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-[10px] tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <Download size={12} />
                  <span>Download CV</span>
                </button>
              </motion.div>

              {/* WIDGET 2: INCOMING PHONE CALL PILL (Positioned directly under Bio card on mobile) */}
              <motion.div 
                id="call-card-section"
                variants={{
                  hidden: { opacity: 0, x: -50, scale: 0.9 },
                  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
                }}
                className={`w-full max-w-[21rem] mx-auto bg-[#0E0E0F]/95 border border-white/10 text-white rounded-full p-2.5 pl-4 pr-2.5 flex items-center justify-between shadow-2xl relative overflow-hidden transition-all duration-500 ${activeHighlight === 'call' ? 'ring-4 ring-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.6)] scale-[1.04]' : ''} order-2 md:order-none mt-3 md:mt-0`}
                animate={callStatus === 'ringing' ? {
                  y: [0, -4, 0],
                  rotate: [0, -1, 1, -1, 0]
                } : {}}
                transition={callStatus === 'ringing' ? {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                } : {}}
              >
                {callStatus === 'ringing' && (
                  <div className="absolute inset-0 bg-green-500/5 animate-pulse pointer-events-none" />
                )}

                <div className="flex items-center space-x-3 min-w-0">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold border border-white/10 overflow-hidden shadow-inner">
                      <Building2 size={18} className="text-white" />
                    </div>
                    {callStatus === 'connected' && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-[#0E0E0F] animate-ping" />
                    )}
                  </div>
                  
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold text-neutral-200 whitespace-nowrap">
                      {callStatus === 'ringing' ? 'Dream Company' : callStatus === 'connected' ? 'Dream Offer Live' : 'Offer Complete'}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-mono flex items-center space-x-1">
                      {callStatus === 'ringing' && (
                        <span className="text-green-400 animate-pulse">Incoming dream offer...</span>
                      )}
                      {callStatus === 'connected' && (
                        <span className="text-emerald-400 font-medium">Connected • {formatDuration(callDuration)}</span>
                      )}
                      {callStatus === 'ended' && (
                        <span className="text-neutral-500">Lines idle</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Call Action Buttons */}
                <div className="flex items-center space-x-2">
                  {callStatus === 'ringing' && (
                    <>
                      <button 
                        onClick={() => setCallStatus('ended')}
                        className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white cursor-pointer transition active:scale-90 shadow"
                        title="Decline"
                      >
                        <PhoneOff size={14} />
                      </button>
                      <button 
                        onClick={() => setCallStatus('connected')}
                        className="h-8 w-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white cursor-pointer transition active:scale-90 shadow animate-bounce"
                        title="Answer"
                      >
                        <Phone size={14} />
                      </button>
                    </>
                  )}
                  {callStatus === 'connected' && (
                    <button 
                      onClick={() => setCallStatus('ended')}
                      className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white cursor-pointer transition active:scale-90 shadow"
                      title="End Call"
                    >
                      <PhoneOff size={14} />
                    </button>
                  )}
                  {callStatus === 'ended' && (
                    <button 
                      onClick={() => setCallStatus('ringing')}
                      className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-[10px] font-medium tracking-wide uppercase text-neutral-300 transition cursor-pointer"
                    >
                      Call Back
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Call Transcript Box */}
              <AnimatePresence>
                {callStatus === 'connected' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="w-full bg-black/90 border border-white/10 text-xs text-neutral-300 p-4 rounded-xl space-y-2.5 shadow-2xl font-mono relative overflow-hidden order-3 md:order-none"
                  >
                    <div className="flex justify-between items-center pb-1.5 border-b border-neutral-800">
                      <span className="text-[10px] text-green-400 uppercase font-bold tracking-wider flex items-center">
                        <Terminal size={10} className="mr-1" /> Live Console
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping" />
                    </div>
                    <p className="leading-relaxed text-left text-neutral-300 text-[11px]">
                      <span className="text-purple-400"># Dream Recruiter:</span> "Hey Razal! We reviewed your portfolio. We would love to offer you a key Engineering & Design position!"
                    </p>
                    <p className="text-[9px] text-neutral-500 italic">
                      Click 'Download CV' on the left to review & download Razal's resume.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* MOBILE SPACER TO UNCOVER THE AVATAR/FACE ON MOBILE */}
              <div className="block md:hidden h-[34vh] sm:h-[42vh] order-4 pointer-events-none w-full shrink-0" />

            </div>

            {/* RIGHT SIDE COLUMN: Skills Header & List Widget */}
            <div className="contents md:flex md:flex-col md:space-y-2 w-full md:w-[15rem] items-center md:items-end md:-translate-x-10 lg:-translate-x-16">
              
              {/* SKILLS HEADER PILL */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
                }}
                className="bg-[#121214] text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1 rounded-full border border-neutral-800 shadow-md order-5 md:order-none"
              >
                Skills Map
              </motion.div>

              {/* SKILLS LIST CONTAINER */}
              <motion.div 
                id="skills-card-section"
                variants={{
                  hidden: { opacity: 0, x: 50, scale: 0.95 },
                  visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
                }}
                className={`w-full bg-[#18181A]/70 border border-white/10 text-white rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-500 ${activeHighlight === 'skills' ? 'ring-4 ring-indigo-500/80 shadow-[0_0_30px_rgba(99,102,241,0.6)] scale-[1.04]' : ''} order-6 md:order-none`}
              >
                <div className="py-1.5 px-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider">Skills</span>
                  <span className="text-[8px] text-neutral-400 font-mono">⭐ click to star</span>
                </div>

                <div className="divide-y divide-white/5">
                  {skills.map((skill, index) => {
                    const isExpanded = selectedSkillIndex === index;
                    return (
                      <div 
                        key={index} 
                        onClick={() => setSelectedSkillIndex(isExpanded ? null : index)}
                        className="group py-1.5 px-3 hover:bg-white/5 transition duration-300 cursor-pointer text-left relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="block text-[8px] text-neutral-400 tracking-wide uppercase font-mono mb-0.5">
                              {skill.category}
                            </span>
                            <span className="font-display font-medium text-[11.5px] group-hover:text-blue-400 transition">
                              {skill.name}
                            </span>
                          </div>
                          
                          <button 
                            onClick={(e) => handleToggleStar(index, e)}
                            className="p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
                          >
                            <Star 
                              size={11} 
                              className={`transition ${skill.isStarred ? `${skill.starColor} fill-current` : 'text-neutral-600 hover:text-neutral-400'}`} 
                            />
                          </button>
                        </div>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: 'auto', opacity: 1, marginTop: 6 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="text-[10px] space-y-1.5 border-t border-white/5 pt-1.5 text-neutral-300 font-sans">
                                <p className="leading-normal">{skill.description}</p>
                                <div className="flex items-center space-x-1 text-neutral-400 font-mono text-[8.5px] bg-white/5 p-1 rounded">
                                  <Monitor size={8} className="text-blue-400 shrink-0" />
                                  <span className="truncate"><strong className="text-neutral-300">Proj:</strong> {skill.project}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

            </div>

          </div>

          {/* LOWER PORTION: FLOATING SAFARI BROWSER ADDRESS BAR */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
            }}
            className="w-full mt-8 relative z-30"
          >
            <div className={`relative z-30 bg-white/80 dark:bg-[#1E1E22]/90 border border-neutral-200 dark:border-white/10 backdrop-blur-md rounded-full px-5 py-2.5 shadow-2xl flex items-center justify-between text-xs w-full max-w-lg mx-auto transition-all duration-500 ${activeHighlight === 'sandbox' ? 'ring-4 ring-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.6)] scale-[1.03]' : ''}`}>
              
              <button 
                onClick={() => {
                  const nextTheme = theme === 'warm' ? 'slate' : theme === 'slate' ? 'neon' : 'warm';
                  setTheme(nextTheme);
                }}
                className="flex items-center space-x-1 bg-neutral-200/50 dark:bg-white/10 hover:bg-neutral-200/80 dark:hover:bg-white/20 px-2.5 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition font-mono"
                title="Cycle Backdrops"
              >
                <span className="text-xs">A</span><span className="text-[10px]">A</span>
              </button>

              <div className="flex items-center space-x-2 flex-grow mx-4 max-w-xs justify-center font-sans">
                <Lock size={12} className="text-emerald-500 shrink-0" />
                
                <input 
                  type="text"
                  value={urlInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setUrlInput(val);
                    if (val.length > 0) {
                      const words = val.replace(/\.dev|\.com|\.io/g, '').split(/[.-]/);
                      if (words[0]) setHeadlineWord1(words[0].substring(0, 15).toUpperCase());
                      if (words[1]) setHeadlineWord2(words[1].substring(0, 15).toUpperCase());
                    }
                  }}
                  placeholder="razal.dev"
                  className="bg-transparent text-center font-medium focus:outline-none w-full text-neutral-800 dark:text-neutral-200 font-mono text-[11px] border-b border-transparent focus:border-blue-500/40"
                  title="Type domain to change display text words!"
                />
              </div>

              <button 
                onClick={handleReload}
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
                title="Trigger Entrance Animation Reload"
              >
                <RotateCw size={12} className="text-neutral-500 dark:text-neutral-400" />
              </button>

            </div>
          </motion.div>

          {/* DOWNWARD SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={scrollToProjects}
            className="cursor-pointer pt-6 flex flex-col items-center space-y-1 text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore profile</span>
            <ArrowDown size={14} />
          </motion.div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
};
