/**
 * Type definitions for the canonical resume data.
 * All portfolio content is typed here and consumed via resume.tsx.
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  showInHome: boolean;
  showInFooter: boolean;
  footerIcon?: string;
}

export interface NavItem {
  name: string;
  icon: string;
  href: string;
}

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
}

export interface AboutSection {
  id: number;
  title: string;
  subtitle: string;
  points: string[];
}

export interface About {
  images: string[];
  imageRotationInterval: number;
  sectionRotationInterval: number;
  sections: AboutSection[];
  achievements: Achievement[];
  ctaText: string;
  ctaLink: string;
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  percentage: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ServiceLink {
  url: string;
  icon: string;
  label: string;
}

export interface Service {
  id: number;
  icon: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  link?: ServiceLink;
}

export interface ProjectItem {
  id: number;
  image: string;
  title: string;
  desc: string;
  lang: string;
  link: string;
  repo: string;
  category: string;
  services: string[];
}

export interface ProjectCategory {
  name: string;
}

export interface QualificationEntry {
  id: number;
  title: string;
  subtitle: string;
  calendar: string;
  services: string[];
  image: string;
  type: 'ed' | 'exp';
}

export interface ContactCard {
  id: number;
  icon: string;
  title: string;
  data: string;
  link: string;
  linkText: string;
}

export interface ContactForm {
  namePlaceholder: string;
  emailPlaceholder: string;
  questionPlaceholder: string;
  submitText: string;
}

export interface Contact {
  sectionTitle: string;
  formTitle: string;
  cards: ContactCard[];
  form: ContactForm;
}

export interface TestimonialItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface Footer {
  name: string;
  education: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  resumeFile: string;
  socialLinks: SocialLink[];
  navbar: NavItem[];
  about: About;
  skills: { categories: SkillCategory[] };
  services: { items: Service[] };
  projects: { items: ProjectItem[]; categories: ProjectCategory[] };
  qualifications: { education: QualificationEntry[]; experience: QualificationEntry[] };
  contact: Contact;
  testimonials: TestimonialItem[];
  footer: Footer;
  seo: SEO;
}
