/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Theme, Skill, Proposal } from './types';
import { DEFAULT_SKILLS } from './data/skills';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsTechSection } from './components/SkillsTechSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ExperienceCertificatesSection } from './components/ExperienceCertificatesSection';
import { EducationSection } from './components/EducationSection';
import { GithubStatsSection } from './components/GithubStatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HireDrawer } from './components/HireDrawer';
import { InquiriesModal } from './components/InquiriesModal';

export default function App() {
  // Theme state: 'warm' (original off-white studio), 'slate' (dark mode), 'neon' (indigo creative)
  const [theme, setTheme] = useState<Theme>('slate');
  
  // Custom text for the large display text background
  const [headlineWord1, setHeadlineWord1] = useState<string>('CREATIVE');
  const [headlineWord2, setHeadlineWord2] = useState<string>('DEVELOPER');
  const [urlInput, setUrlInput] = useState<string>('razalcodes.dev');

  // Interactive phone call widget states
  const [callStatus, setCallStatus] = useState<'ringing' | 'connected' | 'ended'>('ringing');
  const [callDuration, setCallDuration] = useState<number>(0);
  
  // Interactive bio & drawer states
  const [isHireOpen, setIsHireOpen] = useState<boolean>(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null);

  // Form states for "Hire Me"
  const [formName, setFormName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('Web Application');
  const [budget, setBudget] = useState<number>(15000);
  const [formMessage, setFormMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  
  // Proposals storage list
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [showInquiriesPanel, setShowInquiriesPanel] = useState<boolean>(false);

  // Key trigger for reload / entrance animation key
  const [entranceKey, setEntranceKey] = useState<number>(0);

  // Active navigation highlight & mobile menu states
  const [activeHighlight, setActiveHighlight] = useState<'bio' | 'projects' | 'call' | 'skills' | 'sandbox' | 'featured-projects' | 'experience' | 'certificates' | 'education' | 'contact' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Default skills list
  const [skills, setSkills] = useState<Skill[]>(DEFAULT_SKILLS);

  const triggerHighlight = (section: 'bio' | 'projects' | 'call' | 'skills' | 'sandbox' | 'featured-projects' | 'experience' | 'certificates' | 'education' | 'contact') => {
    setActiveHighlight(section);
    setIsMobileMenuOpen(false);
    
    const elementMap = {
      bio: 'bio-card-section',
      projects: 'projects-section',
      call: 'call-card-section',
      skills: 'skills-card-section',
      sandbox: 'sandbox-card-section',
      'featured-projects': 'featured-projects-section',
      experience: 'experience-section',
      certificates: 'certificates-section',
      education: 'education-section',
      contact: 'contact-section'
    };
    
    const targetId = elementMap[section];
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      setActiveHighlight(prev => prev === section ? null : prev);
    }, 2000);
  };

  // Load proposals from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('razal_proposals');
    if (saved) {
      try {
        setProposals(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Timer for call connection duration
  useEffect(() => {
    let interval: any;
    if (callStatus === 'connected') {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleToggleStar = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSkills(prev => prev.map((skill, i) => i === index ? { ...skill, isStarred: !skill.isStarred } : skill));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    const newProposal: Proposal = {
      id: Date.now().toString(),
      name: formName,
      email: formEmail,
      projectType,
      budget,
      message: formMessage || 'Let\'s collaborate on a fantastic project!',
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newProposal, ...proposals];
    setProposals(updated);
    localStorage.setItem('razal_proposals', JSON.stringify(updated));

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setIsHireOpen(false);
    }, 2000);
  };

  const handleClearInquiries = () => {
    setProposals([]);
    localStorage.removeItem('razal_proposals');
  };

  const handleReload = () => {
    setEntranceKey(prev => prev + 1);
  };

  // Theme helper styles
  const getThemeBackground = () => {
    switch (theme) {
      case 'slate':
        return 'bg-gradient-to-br from-[#121316] via-[#1E2025] to-[#121316] text-neutral-100';
      case 'neon':
        return 'bg-gradient-to-br from-[#0F0C20] via-[#151030] to-[#0A0518] text-neutral-100';
      case 'warm':
      default:
        return 'bg-gradient-to-br from-[#EAEAE8] via-[#F4F4F2] to-[#EAEAE8] text-neutral-800';
    }
  };

  const getThemeCardClass = () => {
    switch (theme) {
      case 'slate':
        return 'bg-[#22252A]/40 border-white/10 backdrop-blur-xl text-white';
      case 'neon':
        return 'bg-[#181335]/35 border-white/10 backdrop-blur-xl text-white shadow-[0_0_20px_rgba(139,92,246,0.08)]';
      case 'warm':
      default:
        return 'bg-white/35 border-white/20 backdrop-blur-xl text-neutral-800';
    }
  };

  const getHeadlineColors = () => {
    switch (theme) {
      case 'slate':
        return {
          word1: 'text-neutral-500/30',
          word2: 'text-[#2D313A]/50'
        };
      case 'neon':
        return {
          word1: 'text-indigo-500/20',
          word2: 'text-purple-600/10'
        };
      case 'warm':
      default:
        return {
          word1: 'text-neutral-400/40',
          word2: 'text-white'
        };
    }
  };

  return (
    <div className={`min-h-screen relative w-full overflow-x-hidden font-sans transition-colors duration-1000 ${getThemeBackground()} select-none`}>
      
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        activeHighlight={activeHighlight}
        triggerHighlight={triggerHighlight}
        proposals={proposals}
        setShowInquiriesPanel={setShowInquiriesPanel}
        showInquiriesPanel={showInquiriesPanel}
        setIsHireOpen={setIsHireOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleReload={handleReload}
      />

      {/* Main Content Area - Fully Scrollable */}
      <main className="w-full relative flex flex-col items-center">
        
        {/* Section 1: Hero Section */}
        <HeroSection
          theme={theme}
          headlineWord1={headlineWord1}
          headlineWord2={headlineWord2}
          getHeadlineColors={getHeadlineColors}
          getThemeCardClass={getThemeCardClass}
          activeHighlight={activeHighlight}
          setIsHireOpen={setIsHireOpen}
          callStatus={callStatus}
          setCallStatus={setCallStatus}
          callDuration={callDuration}
          formatDuration={formatDuration}
          skills={skills}
          selectedSkillIndex={selectedSkillIndex}
          setSelectedSkillIndex={setSelectedSkillIndex}
          handleToggleStar={handleToggleStar}
          urlInput={urlInput}
          setUrlInput={setUrlInput}
          setHeadlineWord1={setHeadlineWord1}
          setHeadlineWord2={setHeadlineWord2}
          setTheme={setTheme}
          handleReload={handleReload}
          entranceKey={entranceKey}
        />

        {/* Section 2: Comprehensive About Me Profile */}
        <AboutMeSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
          onOpenHireDrawer={() => setIsHireOpen(true)}
        />

        {/* Section 3: Skills Matrix */}
        <SkillsTechSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
          skills={skills}
          onToggleStar={handleToggleStar}
        />

        {/* Section 5: Featured Projects with Dedicated Project Pages */}
        <FeaturedProjectsSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
        />

        {/* Section 6: Experience Timeline & Certificates */}
        <ExperienceCertificatesSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
        />

        {/* Section 7: Academic Education */}
        <EducationSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
        />

        {/* Section 8: GitHub Stats & Client Testimonials */}
        <GithubStatsSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
        />

        {/* Section 9: Simple Contact Form & Social Links */}
        <ContactSection
          theme={theme}
          getThemeCardClass={getThemeCardClass}
          onOpenHireDrawer={() => setIsHireOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        setTheme={setTheme}
      />

      {/* Hire Me Proposal Drawer */}
      <HireDrawer
        isOpen={isHireOpen}
        onClose={() => setIsHireOpen(false)}
        formName={formName}
        setFormName={setFormName}
        formEmail={formEmail}
        setFormEmail={setFormEmail}
        projectType={projectType}
        setProjectType={setProjectType}
        budget={budget}
        setBudget={setBudget}
        formMessage={formMessage}
        setFormMessage={setFormMessage}
        formSubmitted={formSubmitted}
        handleFormSubmit={handleFormSubmit}
      />

      {/* Local Storage Proposal Inquiries Ledger Modal */}
      <InquiriesModal
        isOpen={showInquiriesPanel}
        onClose={() => setShowInquiriesPanel(false)}
        proposals={proposals}
        onClearInquiries={handleClearInquiries}
      />

    </div>
  );
}
