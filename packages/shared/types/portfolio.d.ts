/**
 * Shared TypeScript type definitions for the portfolio.
 * These types are used by both frontend and can be referenced by backend schemas.
 */

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  resumeFile: string;
  socialLinks: {
    github: string;
    linkedin: string;
    medium: string;
  };
  navName: string;
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  percentage: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  image: string;
  title: string;
  desc: string;
  lang: string;
  link: string;
  repo: string;
  category: 'Projects' | 'Contributions';
  services: string[];
}

export interface Qualification {
  id: number;
  title: string;
  subtitle: string;
  calendar: string;
  services: string[];
  image: string;
  type: 'ed' | 'exp';
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface AboutInfo {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  achievements: Achievement[];
}

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

export interface RAGQuery {
  question: string;
}

export interface RAGResponse {
  answer: string;
  sources: string[];
}
