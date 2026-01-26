/**
 * TypeScript type definitions for the portfolio application.
 */

// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  resumeFile: string;
  socialLinks: SocialLinks;
  navName: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  medium: string;
}

// Skills
export interface Skill {
  name: string;
  level: SkillLevel;
  percentage: number;
}

export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced';

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

// Projects
export interface Project {
  id: number;
  image: string;
  title: string;
  desc: string;
  lang: string;
  link: string;
  repo: string;
  category: ProjectCategory;
  services: string[];
}

export type ProjectCategory = 'Projects' | 'Contributions';

export interface ProjectsData {
  items: Project[];
  categories: { name: string }[];
}

// Qualifications
export interface Qualification {
  id: number;
  title: string;
  subtitle: string;
  calendar: string;
  services: string[];
  image: string;
  type: QualificationType;
}

export type QualificationType = 'ed' | 'exp';

export interface QualificationsData {
  education: Qualification[];
  experience: Qualification[];
}

// Services
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface ServicesData {
  items: Service[];
}

// About
export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
}

export interface AboutSection {
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  achievements: Achievement[];
  sections: AboutSection[];
}

// Contact
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

export interface ContactSubmitStatus {
  type: 'success' | 'error' | '';
  message: string;
}

// Navigation
export interface NavItem {
  name: string;
  icon: string;
  href: string;
}

// Component Props
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface LoadingProps {
  message?: string;
}

// Data Service
export type DataType =
  | 'personal'
  | 'skills'
  | 'projects'
  | 'qualifications'
  | 'services'
  | 'about'
  | 'contact';

export interface DataServiceConfig {
  useApi: boolean;
  apiUrl: string;
}

// Hook Return Types
export interface UsePortfolioDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface UseScrollPositionResult {
  isPastThreshold: boolean;
  scrollY: number;
}
