/**
 * Data Service
 *
 * Abstracts data fetching to allow easy switching between local JSON and API.
 * Uses environment variables to toggle between local and API modes.
 */

import type { DataType } from '../types/portfolio';

// Local data imports
import personalData from '../data/personal.json';
import skillsData from '../data/skills.json';
import projectsData from '../data/projects.json';
import qualificationsData from '../data/qualifications.json';
import servicesData from '../data/services.json';
import aboutData from '../data/about.json';
import contactData from '../data/contact.json';

// Configuration from environment variables
const USE_API = process.env.REACT_APP_USE_API === 'true';
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Type for local data store
type LocalDataStore = {
  personal: typeof personalData;
  skills: typeof skillsData;
  projects: typeof projectsData;
  qualifications: typeof qualificationsData;
  services: typeof servicesData;
  about: typeof aboutData;
  contact: typeof contactData;
};

// Local data store
const localData: LocalDataStore = {
  personal: personalData,
  skills: skillsData,
  projects: projectsData,
  qualifications: qualificationsData,
  services: servicesData,
  about: aboutData,
  contact: contactData,
};

/**
 * Generic data fetcher that supports both local JSON and API modes.
 * Falls back to local data if API request fails.
 */
export async function fetchData<T>(dataType: DataType): Promise<T> {
  if (USE_API) {
    try {
      const response = await fetch(`${API_BASE_URL}/${dataType}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json() as T;
    } catch (error) {
      console.warn(`API fetch failed for ${dataType}, falling back to local data:`, error);
      return localData[dataType] as T;
    }
  }

  return localData[dataType] as T;
}

// Convenience functions for specific data types
export const getPersonalInfo = () => fetchData<typeof personalData>('personal');
export const getSkills = () => fetchData<typeof skillsData>('skills');
export const getProjects = () => fetchData<typeof projectsData>('projects');
export const getQualifications = () => fetchData<typeof qualificationsData>('qualifications');
export const getServices = () => fetchData<typeof servicesData>('services');
export const getAboutInfo = () => fetchData<typeof aboutData>('about');
export const getContactInfo = () => fetchData<typeof contactData>('contact');

// Synchronous getters for immediate access (used when data is known to be local)
export const getLocalData = <K extends DataType>(dataType: K): LocalDataStore[K] => {
  return localData[dataType];
};

// Export configuration for debugging
export const getDataServiceConfig = () => ({
  useApi: USE_API,
  apiUrl: API_BASE_URL,
});
