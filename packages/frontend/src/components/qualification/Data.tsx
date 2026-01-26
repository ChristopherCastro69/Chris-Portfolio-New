// Data.jsx
import javascript from "./../../assets/certificates/JS.png";
import python from "./../../assets/certificates/Python.png";
import BI from "./../../assets/certificates/BI.png";
import data from "./../../assets/certificates/DataOff.png";
import web from "./../../assets/certificates/web.jpg";
import Angular from "./../../assets/certificates/angular.jpg";

//Exp
import hacktoberfest from "./../../assets/certificates/hacktoberfest1.jpg";
import Symph from "./../../assets/certificates/SymphCert.jpg";
import AI from "./../../assets/certificates/AI-Pilipinas.jpg";
import GDG from "./../../assets/certificates/GDG.png";

export const educationData = [
  {
    id: 1,
    title: "Computer Science",
    subtitle: "Cebu Institute of Technology",
    calendar: "May 2025",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: "",
    type: "ed",
  },
  {
    id: 2,
    title: "The Complete 2024 Web Development Bootcamp",
    subtitle: "Udemy",
    calendar: "December 18, 2024",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: web,
    type: "ed",
  },
  {
    id: 3,
    title: "Angular - The Complete Guide (2025) Edition",
    subtitle: "Udemy",
    calendar: "Febraury 9, 2025",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: Angular,
    type: "ed",
  },
  {
    id: 4,
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    subtitle: "Udemy",
    calendar: "December 25, 2023",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: javascript,
    type: "ed",
  },
  {
    id: 5,
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    subtitle: "Udemy",
    calendar: "January 10, 2024",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: python,
    type: "ed",
  },
  {
    id: 6,
    title: "Python for Data Science and Machine Learning Bootcamp",
    subtitle: "Udemy",
    calendar: "May 25, 2024",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: data,
    type: "ed",
  },
  {
    id: 7,
    title: "The Business Intelligence Analyst Course 2023",
    subtitle: "Udemy",
    calendar: "August 1, 2023",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: BI,
    type: "ed",
  },
  {
    id: 8,
    title: "Git Complete: The definitive, step-by-step guide to Git",
    subtitle: "Udemy",
    calendar: "January 21, 2025",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: BI,
    type: "ed",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Software Engineer Intern ",
    subtitle: "Symph",
    calendar: " July 2024 - November 2024",
    services: [
      "Developed frontend and database solutions for theonehourproject.app, directly collaborating with clients to deliver high-quality, production-ready software in a fast-paced 1-month sprint.",

      "Enhanced AI-driven UX for the GOAB Photobooth Kiosk, implementing prompt engineering to create an interactive face-swap experience used at Geeks on a Beach 2024 and DevFest 2024, impressing investors and developers.",
    ],
    image: Symph,
    type: "exp",
  },
  {
    id: 2,
    title: "AI & Machine Learning Advocate",
    subtitle: "AI Pilipinas Cebu",
    calendar: " August 2024 - January 2025",
    services: [
      "Authored AI/ML blogs focusing on real-world applications in healthcare and business, showcasing technical expertise and industry relevance.",
      "Designed and deployed AI-powered web applications, demonstrating the practical impact of AI in solving real-world problems.",
    ],
    image: AI,
    type: "exp",
  },
  {
    id: 3,
    title: "Best Overall Open Source Contributor",
    subtitle: "Cebu Hacktoberfest 2024",
    calendar: "October 2024",
    services: [
      "Awarded Best Overall Contributor for significant open-source contributions, improving deployment processes and user experience for tech community platforms, including PizzaPy Cebu and Cebby (JavaScript Cebu Community).",

      "Delivered impactful feature enhancements and bug fixes, showcasing strong problem-solving and collaboration in open-source environments.",
    ],
    image: hacktoberfest,
    type: "exp",
  },
  {
    id: 4,
    title: "Programs & Speakers Lead",
    subtitle: "Google Developer Group Cebu",
    calendar: " September 2024 - Present",
    services: [
      "Spearheaded DevFest 2024, leading speaker coordination and program management, ensuring a seamless experience for hundreds of attendees and AI experts.",

      "Developed an automated certificate distribution system, significantly reducing manual work and enhancing participant satisfaction.",
    ],
    image: GDG,
    type: "exp",
  },
];
