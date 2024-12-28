// experiences
export interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    type?: string;
    location?: string;
    responsibilities: string[];
    skills?: string[];
    logo?: string;
  }
  
//   projects
export interface Project {
    title: string;
    description: string;
    link: string;
  }