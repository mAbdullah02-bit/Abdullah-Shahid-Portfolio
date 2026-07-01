export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
  iconName: string;
  colorClass: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
