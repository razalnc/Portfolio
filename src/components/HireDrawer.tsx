import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Proposal } from '../types';
import { 
  FileText, 
  Download, 
  Printer, 
  Mail, 
  User, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MapPin,
  Globe,
  Github,
  Linkedin
} from 'lucide-react';
import { downloadCV } from '../utils/downloadCv';

interface HireDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  formName: string;
  setFormName: (v: string) => void;
  formEmail: string;
  setFormEmail: (v: string) => void;
  projectType: string;
  setProjectType: (v: string) => void;
  budget: number;
  setBudget: (v: number) => void;
  formMessage: string;
  setFormMessage: (v: string) => void;
  formSubmitted: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export const HireDrawer: React.FC<HireDrawerProps> = ({
  isOpen,
  onClose,
  formName,
  setFormName,
  formEmail,
  setFormEmail,
  projectType,
  setProjectType,
  budget,
  setBudget,
  formMessage,
  setFormMessage,
  formSubmitted,
  handleFormSubmit
}) => {
  const [activeTab, setActiveTab] = useState<'cv' | 'inquire'>('cv');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ncrazal123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-out Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-lg h-full bg-[#121215] border-l border-white/10 text-white shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="h-8 w-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h2 className="text-base font-display font-bold text-white">Razal NC — CV & Resume</h2>
                    <p className="text-[10px] font-mono text-neutral-400">Computer Science Student & Creative Engineer</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer text-xs"
                >
                  Close
                </button>
              </div>

              {/* Mode Toggle Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl mb-6 border border-white/5 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('cv')}
                  className={`py-2 rounded-lg flex items-center justify-center space-x-2 transition cursor-pointer ${
                    activeTab === 'cv' 
                      ? 'bg-blue-600 text-white shadow-md font-bold' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <FileText size={14} />
                  <span>Resume / CV Preview</span>
                </button>
                <button
                  onClick={() => setActiveTab('inquire')}
                  className={`py-2 rounded-lg flex items-center justify-center space-x-2 transition cursor-pointer ${
                    activeTab === 'inquire' 
                      ? 'bg-blue-600 text-white shadow-md font-bold' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Mail size={14} />
                  <span>Send Proposal</span>
                </button>
              </div>

              {activeTab === 'cv' ? (
                /* CV PREVIEW & DOWNLOAD CENTER */
                <div className="space-y-6 text-left">
                  
                  {/* Primary Download Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Sparkles size={14} className="text-amber-400" />
                          Curriculum Vitae Ready
                        </h3>
                        <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed">
                          Download Razal NC's complete formatted resume for recruitment, engineering opportunities, or offline review.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => downloadCV()}
                        className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition cursor-pointer"
                      >
                        <Download size={14} />
                        <span>Download PDF</span>
                      </button>
                      <button
                        onClick={() => downloadCV()}
                        className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 border border-white/10 active:scale-95 transition cursor-pointer"
                      >
                        <FileText size={14} />
                        <span>Get PDF File</span>
                      </button>
                    </div>
                  </div>

                  {/* Contact Chips */}
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300">
                      <MapPin size={12} className="text-blue-400" />
                      <span>Kerala, India</span>
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 cursor-pointer transition"
                    >
                      <Mail size={12} className="text-blue-400" />
                      <span>ncrazal123@gmail.com</span>
                      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} className="text-neutral-500" />}
                    </button>
                    <a 
                      href="https://razalnc.in" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 transition"
                    >
                      <Globe size={12} className="text-blue-400" />
                      <span>RazalNC.in</span>
                      <ExternalLink size={10} className="text-neutral-500" />
                    </a>
                  </div>

                  {/* Summary */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block">
                      📌 Professional Summary
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5 font-sans">
                      Motivated B.Sc. Computer Science student with a strong interest in front-end web development, Python, and Artificial Intelligence/Machine Learning. Skilled in HTML, CSS, JavaScript, and Python, with hands-on experience gained through academic projects and an AI/ML internship. Experienced as a college video editor and poster designer, demonstrating creativity, teamwork, and attention to detail.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                      🎓 Education
                    </span>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-white">Bachelor of Computer Science</span>
                        <span className="text-[10px] font-mono text-neutral-400">Expected Mar 2027</span>
                      </div>
                      <p className="text-[11px] text-blue-400 font-medium">Regional College of Science and Humanities • Kizhisseri, Kerala, India</p>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                      ⚡ Technical & Soft Skills
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold text-white">Technical Skills</div>
                        <div className="text-[10px] text-neutral-400">HTML5, CSS3, JavaScript, Python, Front-End Development, AI/ML, Graphic Design</div>
                      </div>
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold text-white">Languages & Soft Skills</div>
                        <div className="text-[10px] text-neutral-400">English (C1), Malayalam (C2), Hindi (B2), Problem Solving, Creativity, Communication</div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      💼 Experience Highlights
                    </span>
                    <div className="space-y-2">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-white">Python Intern</span>
                          <span className="text-[10px] font-mono text-neutral-400">Jan 2026 – Jun 2026</span>
                        </div>
                        <div className="text-[10px] text-blue-400">Regional Technologies, Kozhikode, India</div>
                        <p className="text-[11px] text-neutral-300">Gained hands-on experience in Python programming and AI/ML fundamentals. Optimized data preprocessing and model evaluation.</p>
                      </div>

                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-white">Web Developer (Freelance)</span>
                          <span className="text-[10px] font-mono text-neutral-400">Jan 2026 – Current</span>
                        </div>
                        <div className="text-[10px] text-blue-400">Remote</div>
                        <p className="text-[11px] text-neutral-300">Developed responsive website for a medical laboratory using HTML, CSS, and JS across mobile, tablet, and desktop devices.</p>
                      </div>

                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-white">Video Editor & Poster Designer (Freelance)</span>
                          <span className="text-[10px] font-mono text-neutral-400">2024 – Current</span>
                        </div>
                        <div className="text-[10px] text-blue-400">Remote</div>
                        <p className="text-[11px] text-neutral-300">Edited promotional/academic event videos and designed social media graphics using typography and branding principles.</p>
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* INQUIRY FORM */
                <div>
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto animate-bounce border border-green-500/20">
                        <Check size={32} />
                      </div>
                      <h3 className="text-xl font-display font-bold">Proposal Transmitted!</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mx-auto font-sans">
                        Awesome! Your proposal has been cataloged. I will review and reply shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 text-left font-sans">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-[#1e1e24] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
                          Your Email
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full bg-[#1e1e24] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
                          Project Scope
                        </label>
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-[#1e1e24] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option>Web Application Development</option>
                          <option>Full-Stack Custom Platform</option>
                          <option>UI/UX Design & Figma System</option>
                          <option>Gemini AI Model Integration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
                          Message
                        </label>
                        <textarea 
                          rows={3}
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          placeholder="Project details..."
                          className="w-full bg-[#1e1e24] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg active:scale-95"
                      >
                        <Send size={14} />
                        <span>Send Proposal</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
              <span>Razal NC Curriculum Vitae</span>
              <span>RazalNC.in 2026</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
