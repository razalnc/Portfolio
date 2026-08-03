import { Skill, TechStackCategory, TimelineMilestone } from '../types';

export const DEFAULT_SKILLS: Skill[] = [
  { 
    name: 'HTML5', 
    category: 'Web Standards', 
    starColor: 'text-[#E34F26]', 
    isStarred: true,
    description: 'Structured semantic content, modern SEO integration, web accessibility compliance, and robust DOM schemas.',
    project: 'Web structures, optimized index documents.',
    proficiency: 98
  },
  { 
    name: 'CSS3 & Tailwind', 
    category: 'Styling & Motion', 
    starColor: 'text-[#1572B6]', 
    isStarred: true,
    description: 'Responsive styling, Flexbox/Grid layouts, fluid typography, tailwind v4, and high-performance hardware-accelerated transitions.',
    project: 'Tailwind designs, fluid user interfaces.',
    proficiency: 96
  },
  { 
    name: 'JavaScript / ESNext', 
    category: 'Logic & Runtime', 
    starColor: 'text-[#F7DF1E]', 
    isStarred: true,
    description: 'Asynchronous event management, modern ESNext features, browser DOM scripting, and lightweight data binding pipelines.',
    project: 'Interactive web components, client-side mechanics.',
    proficiency: 95
  },
  { 
    name: 'TypeScript', 
    category: 'Type Systems', 
    starColor: 'text-[#3178C6]', 
    isStarred: true,
    description: 'Strict type safety, generic constraints, AST tree transformations, and enterprise application architecture.',
    project: 'Type-safe React applications and API contracts.',
    proficiency: 94
  },
  { 
    name: 'Python', 
    category: 'Backend & Automation', 
    starColor: 'text-[#3776AB]', 
    isStarred: true,
    description: 'Scripting tools, lightweight Fast/Express microservices, AI data extraction routines, and automation logic.',
    project: 'Data extraction systems, automation routines.',
    proficiency: 88
  },
  { 
    name: 'Front-End Development', 
    category: 'Frameworks & Architecture', 
    starColor: 'text-[#61DAFB]', 
    isStarred: true,
    description: 'Building cohesive reactive applications with React 19, complex component graphs, state containment, and modular visual layers.',
    project: 'React web builds, single-view dashboards.',
    proficiency: 96
  },
  { 
    name: 'Graphic & UI/UX Design', 
    category: 'Aesthetic & Visuals', 
    starColor: 'text-[#FF61F6]', 
    isStarred: true,
    description: 'Establishing typography pairings, rich spacing grids, visual rhythm, high-contrast layouts, and custom vector templates.',
    project: 'Asset composition, creative portfolio models.',
    proficiency: 92
  }
];

export const TECH_STACK_MATRIX: TechStackCategory[] = [
  {
    category: 'Languages & Runtimes',
    items: [
      { name: 'TypeScript 5.8', level: 'Expert', experience: '5+ Years', iconName: 'Code2', description: 'Strict typing, type inference, AST manipulation, and runtime interfaces.' },
      { name: 'React 19 & Vite 6', level: 'Master', experience: '5+ Years', iconName: 'Box', description: 'Modern concurrent React, custom hooks, Framer Motion, and HMR pipelines.' },
      { name: 'Node.js & Express', level: 'Advanced', experience: '4+ Years', iconName: 'Terminal', description: 'Server-side API routes, streaming SSE endpoints, and middleware auth.' },
      { name: 'Python 3.12', level: 'Proficient', experience: '3+ Years', iconName: 'Cpu', description: 'Data pipelines, PyTorch/Transformers inference wrappers, and scripting.' }
    ]
  },
  {
    category: 'AI & Autonomous Models',
    items: [
      { name: 'Gemini 2.5 API', level: 'Expert', experience: '2+ Years', iconName: 'Sparkles', description: 'Server-side multimodal generation, function calling, and live audio streams.' },
      { name: 'AST Code Agents', level: 'Advanced', experience: '2+ Years', iconName: 'Flame', description: 'Autonomous file diffs, code generation engines, and self-healing compilers.' },
      { name: 'Vector Search & Embeddings', level: 'Proficient', experience: '2+ Years', iconName: 'Layers', description: 'Semantic retrieval, cosine similarity indexing, and context chunking.' }
    ]
  },
  {
    category: 'Graphics & Audio',
    items: [
      { name: 'Tailwind CSS v4', level: 'Master', experience: '4+ Years', iconName: 'Sliders', description: 'Custom design tokens, fluid clamp sizing, and optical glassmorphism.' },
      { name: 'Three.js & GLSL', level: 'Advanced', experience: '3+ Years', iconName: 'Activity', description: 'Custom vertex/fragment shaders, particle fields, and WebGL pipelines.' },
      { name: 'WebAudio DSP API', level: 'Advanced', experience: '3+ Years', iconName: 'Zap', description: 'Frequency analyzer nodes, synthesis oscillators, and real-time audio reactivity.' }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'Docker & Cloud Run', level: 'Advanced', experience: '3+ Years', iconName: 'ShieldCheck', description: 'Containerized microservices, isolated sandboxes, and serverless deploys.' },
      { name: 'Git & AST-Grep', level: 'Expert', experience: '5+ Years', iconName: 'Code', description: 'Version control workflows, automated linting, and structural code refactoring.' }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2024 — PRESENT',
    role: 'Lead Creative Developer & AI Systems Architect',
    company: 'RazalNC.in // Independent Practice',
    description: 'Leading the design and engineering of high-performance interactive web applications, AI spatial reasoning engines, and custom WebGL visualizer interfaces.',
    highlights: [
      'Architected Neural Canvas AI Engine delivering 0.42s latency multi-modal UI generation.',
      'Developed Quantum Glass UI design token framework used across 12+ live client builds.',
      'Pioneered server-side Gemini 2.5 streaming pipelines with zero browser API key exposure.'
    ],
    tech: ['TypeScript', 'React 19', 'Gemini 2.5', 'Tailwind CSS', 'Docker']
  },
  {
    year: '2022 — 2024',
    role: 'Senior Full-Stack Web Engineer',
    company: 'Horizon Interactive Labs',
    description: 'Engineered real-time web applications, audio DSP synthesizers, and scalable Node.js backend infrastructure.',
    highlights: [
      'Built Horizon 3D Audio DSP engine rendering 120,000 reactive GLSL particles at 120 FPS.',
      'Scaled real-time WebSocket backend infrastructure to support 15,000 concurrent active users.',
      'Optimized Core Web Vitals across major marketing portals achieving 100/100 Lighthouse score.'
    ],
    tech: ['React', 'Three.js', 'Node.js', 'WebAudio DSP', 'WebSockets']
  },
  {
    year: '2020 — 2022',
    role: 'Frontend UI/UX Specialist & Designer',
    company: 'Apex Digital Design',
    description: 'Crafted bespoke web layouts, design systems, and custom interactive web animations for modern tech products.',
    highlights: [
      'Designed and built over 30 bespoke web platforms with custom CSS animations.',
      'Created reusable glassmorphism component libraries accelerating team delivery by 40%.'
    ],
    tech: ['JavaScript', 'HTML5/CSS3', 'Tailwind', 'Figma', 'UI/UX']
  }
];
