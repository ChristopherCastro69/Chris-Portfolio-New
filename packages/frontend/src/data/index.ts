/**
 * Central export point for all portfolio data.
 * Data is loaded from JSON files and can be replaced with API calls in the future.
 */

import personalData from './personal.json';
import skillsData from './skills.json';
import projectsData from './projects.json';
import qualificationsData from './qualifications.json';
import servicesData from './services.json';
import aboutData from './about.json';
import contactData from './contact.json';

export {
  personalData,
  skillsData,
  projectsData,
  qualificationsData,
  servicesData,
  aboutData,
  contactData,
};

// Re-export types for convenience
export type {
  PersonalInfo,
  Skill,
  SkillCategory,
  Project,
  Qualification,
  Service,
  ContactInfo
} from '../types/portfolio';
