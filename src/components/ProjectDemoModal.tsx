import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem, Theme } from '../types';
import { X, Play, Terminal, Sparkles, Sliders, Check, Copy, Activity, Zap, RefreshCw } from 'lucide-react';

interface ProjectDemoModalProps {
  project: ProjectItem;
  theme: Theme;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, theme, onClose }) => {
  // Demo State for AI Stream (Neural Canvas)
  const [promptText, setPromptText] = useState('Build a futuristic dark glass pricing table');
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamProgress, setStreamProgress] = useState(100);
  const [streamLogs, setStreamLogs] = useState<string[]>([
    '[GEMINI 2.5] Initiating AST spatial synthesis pipeline...',
    '[TOKENIZER] Encoded 42 prompt tokens in 1.2ms',
    '[AST ENGINE] Generating 3 vector tree node layouts...',
    '[TAILWIND] Resolving glassmorphism color contrast WCAG AAA...',
    '[SUCCESS] Component tree compiled in 0.38s.'
  ]);

  // Demo State for Terminal (Antigravity Runtime)
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ antigravity --status',
    '[OK] Isolated Docker container ID: sandbox-c98a21',
    '[OK] AST AST-Grep parser active (8 parallel workers)',
    '$ npm run test:coverage',
    'PASS  src/core/ast.test.ts (100% coverage)',
    'PASS  src/agent/compiler.test.ts (100% coverage)'
  ]);
  const [commandInput, setCommandInput] = useState('');

  // Demo State for Visualizer (Horizon 3D Audio)
  const [particleCount, setParticleCount] = useState(120000);
  const [frequencyBoost, setFrequencyBoost] = useState(85);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Demo State for Design System (Quantum Glass UI)
  const [glassBlur, setGlassBlur] = useState(16);
  const [glassOpacity, setGlassOpacity] = useState(20);
  const [copiedToken, setCopiedToken] = useState(false);

  const handleRunAiStream = () => {
    setIsGenerating(true);
    setStreamProgress(0);
    setStreamLogs(['[GEMINI 2.5] Connecting to Gemini API...']);

    let step = 0;
    const interval = setInterval(() => {
      step += 25;
      setStreamProgress(step);
      if (step === 25) {
        setStreamLogs(prev => [...prev, '[AST PARSER] Constructing layout tree...']);
      } else if (step === 50) {
        setStreamLogs(prev => [...prev, '[COMPILER] Checking prop interfaces...']);
      } else if (step === 75) {
        setStreamLogs(prev => [...prev, '[TAILWIND] Injecting dynamic classes...']);
      } else if (step >= 100) {
        clearInterval(interval);
        setStreamLogs(prev => [...prev, '[SUCCESS] Rendered design canvas in 0.41s.']);
        setIsGenerating(false);
      }
    }, 300);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim();
    const newLogs = [...terminalHistory, `$ ${cmd}`];

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    } else if (cmd.includes('help')) {
      newLogs.push('Available commands: status, test, diff, heal, clear');
    } else if (cmd.includes('diff')) {
      newLogs.push('+ Added motion layout animation');
      newLogs.push('- Removed deprecated CSS inline styles');
    } else if (cmd.includes('heal')) {
      newLogs.push('[HEALER] Fixed 1 missing import in App.tsx automatically.');
    } else {
      newLogs.push(`[EXEC] Executed command: "${cmd}" cleanly.`);
    }

    setTerminalHistory(newLogs);
    setCommandInput('');
  };

  const handleCopyCodeToken = () => {
    const cssCode = `backdrop-filter: blur(${glassBlur}px);\nbackground: rgba(255, 255, 255, ${glassOpacity / 100});\nborder: 1px solid rgba(255, 255, 255, 0.15);`;
    navigator.clipboard.writeText(cssCode);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#121316] border border-white/10 text-white rounded-2xl shadow-2xl overflow-hidden my-8 z-10"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#181a1f] border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${project.statusColor}`}>
              {project.status}
            </span>
            <h3 className="text-base font-display font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Demo Body */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* DEMO TYPE 1: AI STREAMING (Neural Canvas) */}
          {project.demoType === 'ai-stream' && (
            <div className="bg-[#18191e] border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center">
                  <Sparkles size={14} className="mr-1.5" /> Gemini 2.5 Multi-Modal Prompt Synthesis
                </span>
                <span className="text-[10px] font-mono text-neutral-400">Sub-second AST Spatial Reasoning</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="flex-grow bg-[#22242a] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                  placeholder="Describe your desired UI component..."
                />
                <button
                  onClick={handleRunAiStream}
                  disabled={isGenerating}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition cursor-pointer flex items-center space-x-1.5 shrink-0"
                >
                  <Play size={12} />
                  <span>Synthesize</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${streamProgress}%` }}
                />
              </div>

              {/* Logs & Live Generated Mock Canvas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/50 border border-white/5 p-3 rounded-lg font-mono text-[11px] text-neutral-300 space-y-1 h-44 overflow-y-auto">
                  {streamLogs.map((log, i) => (
                    <div key={i} className="text-emerald-400/90 leading-tight">{log}</div>
                  ))}
                </div>

                {/* Canvas Output Preview */}
                <div className="bg-gradient-to-br from-[#1c1d24] to-[#121318] border border-emerald-500/20 p-4 rounded-lg flex flex-col justify-center items-center h-44 relative overflow-hidden">
                  <div className="text-center space-y-2 relative z-10">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase">
                      Generated Node
                    </span>
                    <h4 className="text-sm font-bold text-white">{promptText}</h4>
                    <div className="flex justify-center space-x-2 pt-2">
                      <button className="px-3 py-1 bg-emerald-500 text-black text-[10px] font-bold rounded">
                        Action CTA
                      </button>
                      <button className="px-3 py-1 bg-white/10 text-white text-[10px] rounded">
                        Secondary
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-500/5 blur-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {/* DEMO TYPE 2: TERMINAL (Antigravity Runtime) */}
          {project.demoType === 'terminal' && (
            <div className="bg-black/90 border border-white/10 rounded-xl p-4 font-mono space-y-3">
              <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-white/10 pb-2">
                <span className="flex items-center text-blue-400 font-bold">
                  <Terminal size={14} className="mr-1.5" /> Antigravity Isolated Shell
                </span>
                <span>Type 'help' or 'heal'</span>
              </div>

              <div className="h-48 overflow-y-auto space-y-1 text-xs text-neutral-300">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className={line.startsWith('$') ? 'text-blue-400 font-bold' : line.includes('PASS') ? 'text-emerald-400' : 'text-neutral-400'}>
                    {line}
                  </div>
                ))}
              </div>

              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-blue-400 text-xs font-bold">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="flex-grow bg-transparent text-xs text-white focus:outline-none font-mono"
                  placeholder="Type command e.g. status, test, diff, heal..."
                />
                <button type="submit" className="px-3 py-1 bg-blue-600 text-white text-[10px] rounded font-bold uppercase">
                  Run
                </button>
              </form>
            </div>
          )}

          {/* DEMO TYPE 3: VISUALIZER (Horizon 3D Audio) */}
          {project.demoType === 'visualizer' && (
            <div className="bg-[#18191e] border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-purple-400 flex items-center">
                  <Activity size={14} className="mr-1.5" /> WebGL GLSL Shader Particle Synthesis
                </span>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase cursor-pointer transition ${
                    isPlayingAudio ? 'bg-purple-500 text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {isPlayingAudio ? 'DSP Active (120 Hz)' : 'DSP Paused'}
                </button>
              </div>

              {/* Animated GLSL Canvas Simulation */}
              <div className="relative h-44 rounded-lg bg-black overflow-hidden flex items-center justify-center border border-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={isPlayingAudio ? {
                        scale: [1, 1.4, 0.8, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.8, 0.4, 0.9, 0.3]
                      } : { scale: 1, opacity: 0.2 }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="absolute rounded-full border border-purple-500/30"
                      style={{
                        width: `${(i + 1) * 24}px`,
                        height: `${(i + 1) * 24}px`,
                        boxShadow: '0 0 15px rgba(168,85,247,0.2)'
                      }}
                    />
                  ))}
                </div>
                <span className="relative z-10 text-xs font-mono text-purple-300 bg-black/60 px-3 py-1.5 rounded-full border border-purple-500/40 backdrop-blur-md">
                  {particleCount.toLocaleString()} GLSL Reactive Particles @ {frequencyBoost}Hz
                </span>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                    Particle Field Density: {particleCount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="10000"
                    value={particleCount}
                    onChange={(e) => setParticleCount(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                    WebAudio Frequency Boost: {frequencyBoost}Hz
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="160"
                    step="5"
                    value={frequencyBoost}
                    onChange={(e) => setFrequencyBoost(Number(e.target.value))}
                    className="w-full accent-purple-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* DEMO TYPE 4: DESIGN SYSTEM (Quantum Glass UI) */}
          {project.demoType === 'design-system' && (
            <div className="bg-[#18191e] border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center">
                  <Sliders size={14} className="mr-1.5" /> Quantum Glass Token Inspector
                </span>
                <button
                  onClick={handleCopyCodeToken}
                  className="flex items-center space-x-1 px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-[10px] font-mono rounded border border-amber-500/30 transition cursor-pointer"
                >
                  {copiedToken ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedToken ? 'Copied Token CSS' : 'Copy Tokens'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Live Card Render */}
                <div
                  className="p-6 rounded-xl border transition-all duration-300 text-left space-y-2 relative overflow-hidden"
                  style={{
                    backdropFilter: `blur(${glassBlur}px)`,
                    backgroundColor: `rgba(255, 255, 255, ${glassOpacity / 100})`,
                    borderColor: `rgba(255, 255, 255, ${glassOpacity / 150})`
                  }}
                >
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold">
                    TOKEN PREVIEW
                  </span>
                  <h4 className="text-sm font-bold text-white">Quantum Glass Token</h4>
                  <p className="text-[11px] text-neutral-200 leading-normal font-sans">
                    Zero layout shift glassmorphism element calculated dynamically in real-time.
                  </p>
                </div>

                {/* Sliders */}
                <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                      Backdrop Blur: {glassBlur}px
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="40"
                      value={glassBlur}
                      onChange={(e) => setGlassBlur(Number(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                      Background Opacity: {glassOpacity}%
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={glassOpacity}
                      onChange={(e) => setGlassOpacity(Number(e.target.value))}
                      className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tags & Links Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {(project.technologies || []).map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono rounded-lg transition"
              >
                View Repository ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
