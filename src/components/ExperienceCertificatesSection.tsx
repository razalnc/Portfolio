import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';

// @ts-ignore
import webDesignCertImg from '../assets/images/web_design_cert_user_1785733939111.jpg';
import certificateImg from '../assets/images/certificate.png';
import certificate2Img from '../assets/images/certificate2.png';
import { 
  Briefcase, 
  Award, 
  Code, 
  Video, 
  Palette, 
  Terminal, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Sparkles,
  ArrowDown,
  ShieldCheck,
  Calendar,
  Building2,
  Download
} from 'lucide-react';

interface ExperienceCertificatesSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  gradient: string;
  image: string;
}

export const ExperienceCertificatesSection: React.FC<ExperienceCertificatesSectionProps> = ({
  theme,
  getThemeCardClass
}) => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  // Lock body scroll when certificate modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  const timelineItems = [
    {
      role: 'Python Intern',
      tag: 'Software & Backend',
      icon: Terminal,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      arrowColor: 'text-blue-500',
      desc: 'Applied Python programming for automation scripts, data manipulation, REST API development, and software testing.'
    },
    {
      role: 'Web Developer',
      tag: 'Front-End & React',
      icon: Code,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      arrowColor: 'text-emerald-500',
      desc: 'Crafting responsive, high-performance web applications using modern JavaScript, React.js, HTML5/CSS3, and Tailwind CSS.'
    },
    {
      role: 'Video Editor',
      tag: 'Multimedia & Motion',
      icon: Video,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      arrowColor: 'text-purple-500',
      desc: 'Producing engaging video content, promotional reels, and video tutorials with visual effects and crisp audio editing.'
    },
    {
      role: 'Poster Designer',
      tag: 'Graphic & UI Layouts',
      icon: Palette,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      arrowColor: 'text-pink-500',
      desc: 'Designing creative event posters, digital graphics, and UI mockups leveraging composition, color theory, and typography.'
    }
  ];

  const certificates: CertificateItem[] = [
    {
      id: 'python-internship',
      title: 'Python Internship',
      issuer: 'Technical Development Institute',
      date: '2024',
      credentialId: 'CERT-PY-2024-8891',
      description: 'Successfully completed intensive industrial training in Python programming, covering object-oriented design, API integration, and backend development workflows.',
      skills: ['Python', 'Data Structures', 'REST APIs', 'Automation'],
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      image: certificate2Img
    },
    {
      id: 'ai-ml-training',
      title: 'AI/ML Training',
      issuer: 'AI & Machine Learning Specialization',
      date: '2025',
      credentialId: 'CERT-AIML-2025-4420',
      description: 'Comprehensive course completion covering Artificial Intelligence fundamentals, machine learning algorithms, data preprocessing, and model evaluation techniques.',
      skills: ['Python for AI', 'Machine Learning', 'Data Preprocessing', 'Scikit-Learn'],
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      image: certificate2Img
    },
    {
      id: 'web-development',
      title: 'Web Designing Add-On Course',
      issuer: 'Regional College of Science and Humanities',
      date: '2025 - 2026',
      credentialId: 'RCAYSCSO15',
      description: 'Official Certificate of Completion for the Add-On Course in WEB DESIGNING conducted by the Department of Computer Science, Regional College of Science and Humanities, Kizhisseri (Academic Year 2025 - 2026).',
      skills: ['Web Designing', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Department of Computer Science'],
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      image: certificateImg
    },
    {
      id: 'college-certificates',
      title: 'College Certificates',
      issuer: 'Calicut University',
      date: '2023 - Present',
      credentialId: 'CERT-CS-ACA-7731',
      description: 'Soon to be completed',
      skills: ['Computer Science Fundamentals', 'Academic Excellence', 'Technical Seminars', 'Team Leadership'],
      gradient: 'from-amber-600 via-orange-600 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-24">
      
      {/* SECTION 1: EXPERIENCE TIMELINE */}
      <section id="experience-section" className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
            <Briefcase size={12} className="text-blue-400" />
            <span>Practical Experience & Roles</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            Experience Timeline
          </h2>

          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
            A visual overview of my technical progression, practical roles, and creative skill set over time.
          </p>
        </div>

        {/* VISUAL FLOW TIMELINE */}
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">
          {timelineItems.map((item, index) => {
            const IconComp = item.icon;
            const isLast = index === timelineItems.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`w-full rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl border ${item.color} shrink-0 shadow-inner`}>
                      <IconComp size={24} />
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 uppercase font-bold text-neutral-500 dark:text-neutral-400">
                          Step 0{index + 1}
                        </span>
                        <span className="text-[10px] font-mono text-blue-500 font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className={`text-xl font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
                        {item.role}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans max-w-lg leading-relaxed pt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[11px] font-semibold">
                    <CheckCircle2 size={14} />
                    <span>Completed</span>
                  </div>
                </motion.div>

                {/* Arrow Connector between steps */}
                {!isLast && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="py-1 flex flex-col items-center justify-center text-blue-500 dark:text-blue-400"
                  >
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/80 to-purple-500/80 my-0.5" />
                    <ArrowDown size={18} className="animate-bounce" />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>


      {/* SECTION 2: CERTIFICATES */}
      <section id="certificates-section" className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] tracking-widest uppercase">
            <Award size={12} className="text-purple-400" />
            <span>Verified Learning & Credentials</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            Certificates
          </h2>

          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
            Verified technical certifications, internship completion records, and academic milestones. Click any card to inspect details.
          </p>
        </div>

        {/* CERTIFICATE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 border ${getThemeCardClass()} hover:shadow-2xl transition duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group`}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${cert.gradient} text-white shadow-md`}>
                    <Award size={22} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-display font-bold ${theme === 'warm' ? 'text-neutral-900' : 'text-white'} group-hover:text-blue-500 transition`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Button Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="w-full py-2.5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition duration-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                >
                  <FileText size={14} />
                  <span>📄 View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* INTERACTIVE CERTIFICATE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl border ${theme === 'warm' ? 'bg-[#FAFAFA] border-neutral-300 text-neutral-900' : 'bg-[#161618] border-white/15 text-white'} shadow-2xl overflow-hidden relative my-auto`}
            >
              {/* Sticky Top Bar - Close Button (X) is ALWAYS visible on mobile & desktop */}
              <div className="sticky top-0 z-30 bg-[#FAFAFA] dark:bg-[#161618] px-5 py-4 flex justify-between items-center border-b border-black/10 dark:border-white/10 shrink-0">
                <div className="flex items-center space-x-2 text-blue-500">
                  <ShieldCheck size={20} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Verified Credential</span>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-neutral-400 hover:text-red-400 transition cursor-pointer flex items-center justify-center shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto p-4 md:p-6 space-y-6 flex-1">
                {/* CERTIFICATE DOCUMENT & IMAGE VISUAL FRAME */}
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/40 overflow-hidden space-y-4 relative shadow-xl">
                  
                  {/* Certificate High-Res Image Header */}
                  <div className="relative w-full h-56 sm:h-64 md:h-80 overflow-hidden bg-neutral-900 border-b border-white/10 group">
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                    
                    {/* Top Badge Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 font-mono text-[9px] sm:text-[10px] uppercase font-bold border border-amber-500/30 flex items-center space-x-1">
                        <ShieldCheck size={12} />
                        <span>Official Certificate</span>
                      </span>
                      <a 
                        href={selectedCertificate.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-full bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md text-white font-mono text-[9px] sm:text-[10px] uppercase font-bold border border-blue-400/30 flex items-center space-x-1 pointer-events-auto transition"
                      >
                        <ExternalLink size={12} />
                        <span>Open Image</span>
                      </a>
                    </div>

                    {/* Bottom Image Overlay Text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
                        Credential • {selectedCertificate.issuer}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold uppercase leading-tight">
                        {selectedCertificate.title}
                      </h3>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-4 md:p-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs font-sans leading-relaxed text-neutral-300">
                      "{selectedCertificate.description}"
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[10.5px] font-mono border border-blue-500/20">
                          ✓ {s}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-neutral-400 gap-2">
                      <span>ID: {selectedCertificate.credentialId}</span>
                      <span>Issued: {selectedCertificate.date}</span>
                      <span className="text-emerald-400 font-bold flex items-center space-x-1">
                        <CheckCircle2 size={12} />
                        <span>VERIFIED CREDENTIAL</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Sticky Footer Actions */}
              <div className="sticky bottom-0 z-30 bg-[#FAFAFA] dark:bg-[#161618] px-5 py-3.5 border-t border-black/10 dark:border-white/10 flex justify-between items-center shrink-0">
                <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[200px] sm:max-w-none">
                  Razal NC Academic Portfolio
                </span>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase transition cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
