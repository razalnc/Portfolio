import { ProjectItem } from '../types';

export const PROJECTS_CATALOG: ProjectItem[] = [
  {
    id: 'neural-canvas',
    title: 'Neural Canvas AI Engine',
    category: 'AI & Full-Stack',
    tagline: 'Real-time multi-modal generative UI workspace with streaming AST feedback',
    description: 'Neural Canvas is an interactive web-based generative UI builder that turns natural language prompts into live, production-ready React component code. Powered by server-side Gemini streaming and custom AST parsing, it provides instantaneous feedback with zero page reloads.',
    screenshot: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Gemini 2.5 API', 'Node.js', 'AST Parser', 'Framer Motion'],
    challenges: [
      'Managing high-frequency WebSockets state sync while streaming complex nested JSON structures from Gemini without flickering.',
      'Ensuring strict CSS and JavaScript sandbox execution inside browser iframe previews to maintain user data safety.'
    ],
    whatYouLearned: [
      'Deepened mastery over React hook dependencies, custom memoization techniques, and event loop optimization.',
      'Understood how token streaming works at the protocol level and how to parse partial JSON structures in real time.',
      'Mastered Tailwind CSS dynamic utility styling for high-performance dark/light theme switching.'
    ],
    liveDemoUrl: 'https://razalcodes.dev/neural-canvas',
    githubUrl: 'https://github.com/razalcodes/neural-canvas',
    status: 'LIVE PROD',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 'academic-portal',
    title: 'EduPulse Student Management Dashboard',
    category: 'Web Application',
    tagline: 'Streamlined academic records, course tracking, and attendance analytics portal',
    description: 'A comprehensive web application designed for computer science students and faculty to monitor course progress, compute GPA projections, and visualize attendance trends in real time with interactive charts.',
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'JavaScript (ES6+)', 'Python Flask', 'Tailwind CSS', 'Recharts', 'Git/GitHub'],
    challenges: [
      'Structuring complex relational data models for multi-semester course prerequisites and credit allocations.',
      'Building responsive data tables with client-side column filtering, pagination, and instant CSV export capabilities.'
    ],
    whatYouLearned: [
      'Enhanced understanding of full-stack data flow between React front-end components and Python API REST endpoints.',
      'Practiced modular UI component design principles to ensure high reusability across student and admin views.',
      'Learned data visualization strategies for presenting grade distribution metrics clearly.'
    ],
    liveDemoUrl: 'https://razalcodes.dev/edupulse',
    githubUrl: 'https://github.com/razalcodes/edupulse-dashboard',
    status: 'ACADEMIC CAPSTONE',
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 'ai-vision-analyzer',
    title: 'VisionPulse ML Image Insights',
    category: 'AI & Python',
    tagline: 'Python-powered machine learning pipeline for automated image classification & color palettes',
    description: 'An AI image inspection tool built with Python and Computer Vision libraries that extracts dominant color palettes, identifies object categories, and generates automated accessibility contrast reports.',
    screenshot: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Python', 'OpenCV', 'Scikit-Learn', 'React.js', 'Tailwind CSS', 'REST API'],
    challenges: [
      'Optimizing k-means clustering algorithms for high-resolution images to extract accurate color palettes in under 300 milliseconds.',
      'Handling multi-part file uploads safely while maintaining smooth UI feedback states.'
    ],
    whatYouLearned: [
      'Hands-on experience with computer vision algorithms, image matrix operations, and feature extraction in Python.',
      'Connecting Python data science logic with modern React user interfaces via asynchronous fetch APIs.',
      'Designing intuitive, accessible file drop zones with drag-and-drop feedback.'
    ],
    liveDemoUrl: 'https://razalcodes.dev/visionpulse',
    githubUrl: 'https://github.com/razalcodes/visionpulse-ai',
    status: 'FREELANCE RELEASE',
    statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    id: 'quantum-glass-ui',
    title: 'Quantum Glass UI Design System',
    category: 'UI/UX & Design',
    tagline: 'Zero cumulative layout shift glassmorphism component library',
    description: 'A modern design token system and React component suite crafted with mathematical spacing rules, accessible WCAG contrast ratios, and fluid spring physics for creative web applications.',
    screenshot: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'UI/UX Principles', 'Figma', 'TypeScript'],
    challenges: [
      'Maintaining consistent optical blur and contrast levels across both dark and light backdrop environments without compromising legibility.',
      'Ensuring zero cumulative layout shift (CLS) during dynamically expanding accordion cards and drawer menus.'
    ],
    whatYouLearned: [
      'Mastered advanced CSS backdrop filter effects, custom box-shadow stacking, and Tailwind utility customization.',
      'Understood mathematical spacing scales, typographic hierarchy, and micro-interaction design patterns.',
      'Improved cross-browser compatibility testing across Chrome, Firefox, and Safari rendering engines.'
    ],
    liveDemoUrl: 'https://razalcodes.dev/quantum-ui',
    githubUrl: 'https://github.com/razalcodes/quantum-glass-ui',
    status: 'OPEN SOURCE',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  }
];
