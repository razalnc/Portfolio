import React from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { 
  User, 
  BookOpen, 
  Code, 
  Sparkles, 
  Target, 
  MapPin, 
  GraduationCap, 
  Cpu, 
  Palette, 
  TrendingUp, 
  Heart, 
  Quote, 
  CheckCircle2, 
  Lightbulb, 
  Layers, 
  ShieldCheck, 
  Smile, 
  Award,
  ArrowRight,
  Compass,
  Briefcase,
  Download
} from 'lucide-react';
import { downloadCV } from '../utils/downloadCv';

// @ts-ignore
import profileImage from "../assets/images/me.jpeg";

interface AboutMeSectionProps {
  theme: Theme;
  getThemeCardClass: () => string;
  onOpenHireDrawer: () => void;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({ theme, getThemeCardClass, onOpenHireDrawer }) => {
  const quickFacts = [
    { icon: MapPin, text: 'Based in Kerala, India', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
    { icon: GraduationCap, text: 'Third-Year B.Sc. Computer Science Student', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { icon: Code, text: 'Passionate about Front-End Development', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { icon: Cpu, text: 'Exploring Artificial Intelligence & Machine Learning', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { icon: Palette, text: 'Graphic Designer & Video Editor', color: 'text-pink-400 bg-pink-500/10 border-pink-500/20' },
    { icon: Sparkles, text: 'Lifelong Learner', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  ];

  const currentFocusSkills = [
    { name: 'Advanced JavaScript', status: 'In Progress', color: 'border-yellow-500/30 text-yellow-400' },
    { name: 'React.js', status: 'Active', color: 'border-cyan-500/30 text-cyan-400' },
    { name: 'Python for AI', status: 'In Progress', color: 'border-blue-500/30 text-blue-400' },
    { name: 'Machine Learning', status: 'Exploring', color: 'border-purple-500/30 text-purple-400' },
    { name: 'Git & GitHub', status: 'Mastered', color: 'border-orange-500/30 text-orange-400' },
    { name: 'UI/UX Principles', status: 'Active', color: 'border-pink-500/30 text-pink-400' },
    { name: 'Java', status: 'Core Academic', color: 'border-red-500/30 text-red-400' },
  ];

  const timelineSteps = [
    { title: 'Started Learning HTML & CSS', desc: 'First step into web technologies and building structured pages.' },
    { title: 'Built My First Website', desc: 'Translated code into real browser layouts with responsive elements.' },
    { title: 'Learned JavaScript', desc: 'Unlocked client-side dynamics, DOM manipulation, and modern ES6+.' },
    { title: 'Started Python Programming', desc: 'Explored backend scripting, algorithms, and logic building.' },
    { title: 'Completed Python Internship', desc: 'Applied Python knowledge in practical software workflows.' },
    { title: 'Freelance Web Development', desc: 'Delivered custom client websites and interactive front-end designs.' },
    { title: 'Learning AI & Machine Learning', desc: 'Integrating generative AI, LLM frameworks, and modern full-stack workflows.' },
  ];

  const shortTermGoals = [
    'Build impactful web applications',
    'Gain internship experience',
    'Master React and Python',
    'Contribute to open-source projects'
  ];

  const longTermGoals = [
    'Become a Software Engineer',
    'Build AI-powered applications',
    'Work on products that solve real-world problems',
    'Continue learning emerging technologies'
  ];

  const values = [
    'Problem Solving',
    'Continuous Learning',
    'Creativity',
    'Clean Code',
    'Teamwork',
    'Curiosity',
    'Consistency',
    'Attention to Detail'
  ];

  const funFacts = [
    'I enjoy turning ideas into real projects.',
    'I believe learning never stops.',
    'I love combining design with technology.',
    'I like experimenting with new tools and frameworks.',
    'I enjoy creating clean and intuitive user interfaces.'
  ];

  return (
    <section id="projects-section" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20 space-y-20">
      
      {/* 1. 👋 ABOUT ME (INTRO HERO CARD) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-3xl p-8 md:p-12 border ${getThemeCardClass()} shadow-2xl relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-white/20 bg-gradient-to-b from-blue-500/20 to-purple-500/20 shadow-2xl flex items-center justify-center">
              <img 
                src={profileImage}
                alt="Razal NC" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase shadow-lg border border-white/20 flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kerala, India</span>
            </div>
          </div>

          {/* Greeting & Highlights */}
          <div className="space-y-4 text-center md:text-left flex-grow">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
              <span>👋 Welcome To My World</span>
            </div>

            <h2 className={`text-3xl md:text-5xl font-display font-black tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
              I'm Razal NC.
            </h2>

            {/* Sub-titles */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 font-mono text-xs text-blue-400">
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 font-semibold">Third-Year Computer Science Student</span>
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold">Front-End Developer</span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold">Python Enthusiast</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">AI Learner</span>
            </div>

            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed pt-2 max-w-2xl">
              I'm Razal NC, a third-year Computer Science student from Kerala, India. I enjoy building modern web applications, solving real-world problems through technology, and continuously learning new tools that help me grow as a developer.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. 📖 MY JOURNEY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-3xl p-8 md:p-10 border ${getThemeCardClass()} shadow-xl space-y-4`}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <BookOpen size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            📖 My Journey
          </h3>
        </div>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed pt-2">
          My interest in technology began with curiosity about how websites and applications work. What started with learning HTML and CSS gradually grew into exploring JavaScript, Python, and Artificial Intelligence. Every project I build teaches me something new and motivates me to improve both my technical and creative skills.
        </p>
      </motion.div>

      {/* 3. 💻 WHAT I DO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-3xl p-8 md:p-10 border ${getThemeCardClass()} shadow-xl space-y-4`}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Code size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            💻 What I Do
          </h3>
        </div>

        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed pt-2">
          I enjoy designing responsive and user-friendly websites that provide smooth experiences across devices. Alongside front-end development, I work with Python to understand automation, problem-solving, and machine learning fundamentals. I also have experience in graphic design and video editing, which helps me create visually appealing digital products.
        </p>
      </motion.div>

      {/* 4. 🚀 CURRENTLY LEARNING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Sparkles size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            🚀 Currently Learning
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentFocusSkills.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-4 border ${getThemeCardClass()} flex flex-col justify-between space-y-2`}
            >
              <span className="font-display font-bold text-xs md:text-sm">{item.name}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border w-fit ${item.color}`}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 5. 🎯 GOALS (SHORT-TERM & LONG-TERM) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Target size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            🎯 My Goals
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Short Term */}
          <div className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-4`}>
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3">
              <h4 className="font-display font-bold text-base text-amber-400 uppercase tracking-wider">Short-Term Ambitions</h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">Immediate</span>
            </div>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              {shortTermGoals.map((goal, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long Term */}
          <div className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-4`}>
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-3">
              <h4 className="font-display font-bold text-base text-blue-400 uppercase tracking-wider">Long-Term Vision</h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">Future Horizon</span>
            </div>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              {longTermGoals.map((goal, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  <TrendingUp size={16} className="text-blue-400 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* 6. ⚡ QUICK FACTS (CARDS) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Lightbulb size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            ⚡ Quick Facts
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickFacts.map((fact, idx) => {
            const IconComp = fact.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-5 border ${getThemeCardClass()} flex items-center space-x-4`}
              >
                <div className={`p-3 rounded-xl border ${fact.color} shrink-0`}>
                  <IconComp size={20} />
                </div>
                <span className="font-sans font-medium text-xs md:text-sm text-neutral-700 dark:text-neutral-200">
                  {fact.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 7. 📈 TIMELINE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <TrendingUp size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            📈 My Timeline
          </h3>
        </div>

        <div className={`rounded-3xl p-6 md:p-10 border ${getThemeCardClass()} relative overflow-hidden`}>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-emerald-500">
            {timelineSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12 flex flex-col space-y-1"
              >
                <div className="absolute left-1 md:left-3 top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-neutral-900 shadow-md" />
                <h4 className="font-display font-bold text-sm md:text-base">{step.title}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 8. ❤️ BEYOND CODING (BEYOND PROGRAMMING, FUN FACTS, VALUES & WHAT DRIVES ME) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <Heart size={20} />
          </div>
          <h3 className={`text-2xl font-display font-bold uppercase tracking-tight ${theme === 'warm' ? 'text-neutral-900' : 'text-white'}`}>
            ❤️ Beyond Coding
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Beyond Programming & What Drives Me */}
          <div className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-4`}>
            <h4 className="font-display font-bold text-base text-pink-400 uppercase tracking-wider">Passions & Drive</h4>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
              I'm someone who enjoys learning by building. Whether it's creating a portfolio website, experimenting with AI, or solving programming challenges, I believe every project is an opportunity to become a better developer.
            </p>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
              Outside of coding, I enjoy exploring design trends, editing videos, learning about new technologies, following football, watching movies and anime, and constantly finding ways to improve my creativity. These interests inspire many of the ideas behind the projects I build.
            </p>
          </div>

          {/* Fun Facts */}
          <div className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-4`}>
            <h4 className="font-display font-bold text-base text-purple-400 uppercase tracking-wider">Fun Facts</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              {funFacts.map((fact, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <Smile size={16} className="text-purple-400 shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Pills */}
        <div className={`rounded-3xl p-6 md:p-8 border ${getThemeCardClass()} space-y-4`}>
          <h4 className="font-display font-bold text-base text-indigo-400 uppercase tracking-wider">My Core Values</h4>
          <div className="flex flex-wrap gap-2">
            {values.map((v, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
                #{v}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 9. 💬 PERSONAL PHILOSOPHY & WHY HIRE ME */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Philosophy */}
        <div className={`rounded-3xl p-8 border ${getThemeCardClass()} space-y-4 relative overflow-hidden flex flex-col justify-between`}>
          <Quote size={40} className="text-blue-500/20 absolute top-4 right-4" />
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">💬 Personal Philosophy</span>
            <p className="text-base md:text-lg font-display font-bold italic leading-relaxed text-neutral-800 dark:text-neutral-100 pt-2">
              "Great software isn't just about writing code—it's about creating experiences that solve problems and make people's lives easier."
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400">— Razal NC</span>
        </div>

        {/* Why Hire Me */}
        <div className={`rounded-3xl p-8 border ${getThemeCardClass()} space-y-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-blue-500/5 to-purple-500/5`}>
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">🤝 Why Hire Me?</span>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
              I may still be a student, but I'm committed to continuous improvement and enjoy taking on new challenges. I approach every project with curiosity, attention to detail, and a willingness to learn. My goal is not just to write code but to build solutions that are useful, reliable, and enjoyable to use.
            </p>
          </div>
          <button
            onClick={() => {
              downloadCV();
              onOpenHireDrawer();
            }}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg active:scale-95"
          >
            <Download size={14} />
            <span>Download Resume / CV</span>
          </button>
        </div>
      </motion.div>

    </section>
  );
};
