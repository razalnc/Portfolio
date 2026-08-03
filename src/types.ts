export type Theme = 'warm' | 'slate' | 'neon';

export interface Skill {
  name: string;
  category: string;
  starColor: string;
  isStarred: boolean;
  description: string;
  project: string;
  proficiency?: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  screenshot: string;
  technologies: string[];
  challenges: string[];
  whatYouLearned: string[];
  liveDemoUrl: string;
  githubUrl: string;
  status?: string;
  statusColor?: string;
  metrics?: string[];
  demoType?: 'ai-stream' | 'terminal' | 'visualizer' | 'design-system';
}

export interface Proposal {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget: number;
  message: string;
  date: string;
}

export interface TechStackCategory {
  category: 'Languages & Runtimes' | 'AI & Autonomous Models' | 'Graphics & Audio' | 'Cloud & Infrastructure';
  items: {
    name: string;
    level: string;
    experience: string;
    iconName: string;
    description: string;
  }[];
}

export interface TimelineMilestone {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  tech: string[];
}
