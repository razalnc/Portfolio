import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, MessageSquare, Download } from 'lucide-react';
import { downloadCV } from '../utils/downloadCv';

interface ContactSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
  onOpenHireDrawer?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme, getThemeCardClass }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'ncrazal123@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-12">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
          <Mail size={14} />
          <span>Get In Touch</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
          Contact Me
        </h2>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          Have a question, project proposal, or collaboration opportunity? Send a message below or connect via social platforms.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* SIMPLE CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`md:col-span-3 rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} shadow-2xl space-y-6 relative`}
        >
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className={`text-xl font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm">
                Thank you for reaching out. I'll get back to your email as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs md:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition font-sans"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs md:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition font-sans"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs md:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 transition font-sans resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg active:scale-95"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </motion.div>

        {/* SOCIAL & DIRECT CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`md:col-span-2 rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} shadow-2xl space-y-6 flex flex-col justify-between`}
        >
          <div className="space-y-4">
            <h3 className={`text-xl font-display font-bold uppercase ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
              Connect Direct
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
              Feel free to connect directly through social networks or drop an email.
            </p>

            {/* Social Buttons */}
            <div className="space-y-3 pt-2">
              
              {/* Download CV Button */}
              <button
                onClick={() => downloadCV()}
                className="w-full p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-between text-xs font-mono font-bold transition shadow-md active:scale-95 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-white/20 text-white">
                    <Download size={18} />
                  </div>
                  <span>Download CV</span>
                </div>
                <span className="text-white/80">↓</span>
              </button>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/razal-nc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-blue-600/10 hover:border-blue-500/40 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-100 flex items-center justify-between text-xs font-mono font-semibold transition group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Linkedin size={18} />
                  </div>
                  <span>LinkedIn</span>
                </div>
                <span className="text-neutral-400 group-hover:text-blue-400 transition">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/razalcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-purple-600/10 hover:border-purple-500/40 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-100 flex items-center justify-between text-xs font-mono font-semibold transition group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Github size={18} />
                  </div>
                  <span>GitHub</span>
                </div>
                <span className="text-neutral-400 group-hover:text-purple-400 transition">↗</span>
              </a>

              {/* Email Direct Link */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-emerald-600/10 hover:border-emerald-500/40 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-100 flex items-center justify-between text-xs font-mono font-semibold transition group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail size={18} />
                  </div>
                  <span>Email Direct</span>
                </div>
                <span className="text-neutral-400 group-hover:text-emerald-400 transition">↗</span>
              </a>

            </div>
          </div>

          {/* Copy Email Button */}
          <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Direct Copy
            </span>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 text-xs font-mono transition flex items-center justify-between cursor-pointer"
            >
              <span className="truncate">{emailAddress}</span>
              {copiedEmail ? <Check size={14} className="text-emerald-400 shrink-0" /> : <Copy size={14} className="shrink-0" />}
            </button>
          </div>

        </motion.div>

      </div>

    </section>
  );
};
