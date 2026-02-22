/**
 * Canonical resume data — single source of truth for all portfolio content.
 * Edit THIS file to update your portfolio.
 */

import type { ResumeData } from './types';

// ─── About Images ───
import CumLaude from '../assets/CumLaude.jpg';
import Bohol from '../assets/Bohol.jpg';
import rs from '../assets/rs.jpg';
import img7 from '../assets/img7.jpg';
import img6 from '../assets/img6.jpg';
import gdg from '../assets/gdg.png';

// ─── Project Images ───
import LoanChecker from '../assets/projects/LoanChecker.png';
import PizzaPy from '../assets/projects/PizzaPy.png';
import useClassImg from '../assets/projects/useClass.png';
import tohp from '../assets/projects/tohp.png';
import HeartAlert from '../assets/projects/HeartAlert.png';
import cebby from '../assets/projects/cebby.png';
import appImg from '../assets/app.png';

// ─── Certificate Images ───
import certWeb from '../assets/certificates/web.jpg';
import certAngular from '../assets/certificates/angular.jpg';
import certJS from '../assets/certificates/JS.png';
import certPython from '../assets/certificates/Python.png';
import certDataOff from '../assets/certificates/DataOff.png';
import certBI from '../assets/certificates/BI.png';
import certSymph from '../assets/certificates/SymphCert.jpg';
import certAI from '../assets/certificates/AI-Pilipinas.jpg';
import certHacktoberfest from '../assets/certificates/hacktoberfest1.jpg';
import certGDG from '../assets/certificates/GDG.png';

// ─── Testimonial Images ───
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import testimonial3 from '../assets/testimonial3.png';

// ─── Resume PDF (served from /public) ───
const resumePDF = '/Christopher-Resume.pdf';

export const DATA: ResumeData = {
  // ═══════════════════════════════════════
  // Personal
  // ═══════════════════════════════════════
  name: 'Christopher O. Castro',
  title: 'Full Stack Developer',
  bio: "Welcome to my portfolio! Dive in to explore my creations and discover the unique vision I bring to every project. Let's collaborate and achieve greatness together!",
  resumeFile: resumePDF,

  // ═══════════════════════════════════════
  // Social Links
  // ═══════════════════════════════════════
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/ChristopherCastro69',
      icon: 'uil uil-github',
      showInHome: true,
      showInFooter: true,
      footerIcon: 'bx bxl-github',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@christophercastro690',
      icon: 'uil uil-medium-m',
      showInHome: true,
      showInFooter: false,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christopher-c-083561124',
      icon: 'uil uil-linkedin-alt',
      showInHome: true,
      showInFooter: true,
      footerIcon: 'bx bxl-linkedin',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/topitops05?mibextid=ZbWKwL',
      icon: '',
      showInHome: false,
      showInFooter: true,
      footerIcon: 'bx bxl-facebook',
    },
  ],

  // ═══════════════════════════════════════
  // Navbar
  // ═══════════════════════════════════════
  navbar: [
    { name: 'Home', icon: 'uil uil-estate', href: '#home' },
    { name: 'About', icon: 'uil uil-user', href: '#about' },
    { name: 'Skills', icon: 'uil uil-file-alt', href: '#skills' },
    { name: 'Services', icon: 'uil uil-briefcase-alt', href: '#services' },
    { name: 'Projects', icon: 'uil uil-scenery', href: '#projects' },
    { name: 'Qualifications', icon: 'uil uil-scenery', href: '#qualifications' },
    { name: 'Contact', icon: 'uil uil-message', href: '#contact' },
  ],

  // ═══════════════════════════════════════
  // About
  // ═══════════════════════════════════════
  about: {
    images: [CumLaude, Bohol, rs, img7, img6, Bohol, gdg],
    imageRotationInterval: 3000,
    sectionRotationInterval: 5000,
    sections: [
      {
        id: 1,
        title: 'Best Research Paper & Best Research Oral Presenter',
        subtitle: '— CIT 14th Research Congress (April 30, 2025)',
        points: [
          'Led a cross-functional team in developing RetinAI, a mobile AI app for early diabetic retinopathy detection using a 3D-printed retinal imaging device and AI classification models.',
          'Developed a mobile AI app for early diabetic retinopathy detection using a 3D-printed retinal imaging device and AI classification models.',
        ],
      },
      {
        id: 2,
        title: 'AI and Machine Learning Advocate',
        subtitle: '— AI Pilipinas Cebu (Aug 2024 - Jan 2025)',
        points: [
          'Published AI/ML blogs that garnered 171+ views and 94+ reads, covering real-world applications in healthcare and business, showcasing deep technical expertise and industry relevance.',
          'Developed and deployed AI-powered web applications, demonstrating practical AI impact in solving real-world challenges, particularly in medical research and predictive analytics.',
        ],
      },
      {
        id: 3,
        title: 'Best Research Paper (1st Place)',
        subtitle: '—Central Visayas Health Research and Innovation Congress (May 31, 2025)',
        points: [
          'Led a cross-functional team in developing RetinAI, a mobile AI app for early diabetic retinopathy detection using a 3D-printed retinal imaging device and AI classification models.',
          'Competed against 100+ participants from different prominent universities across Central Visayas and institutions from renowned tertiary hospitals in Cebu.',
        ],
      },
      {
        id: 4,
        title: 'Software Engineer Intern',
        subtitle: 'Symph (Jul 2024 - Nov 2024)',
        points: [
          'Developed frontend and database solutions, collaborating with clients to deliver high-quality, production-ready software.',
          'Worked in an Agile Scrum environment, completing weekly sprints and participating in stand-ups and client reviews to ensure timely delivery.',
        ],
      },
      {
        id: 5,
        title: 'Programs and Speakers Director',
        subtitle: '— Google Developer Group Cebu (Sept 2024 - Present)',
        points: [
          'Led event execution, managing program flow and speaker coordination to ensure a seamless, high-impact event.',
          'Orchestrated successful events with 300+ attendees, fostering collaboration and knowledge sharing including Google Cloud Platform, AI, and Machine Learning.',
        ],
      },
      {
        id: 6,
        title: 'Best Overall Open Source Contributor',
        subtitle: '— Cebu Hacktoberfest 2024',
        points: [
          'Awarded for improving deployment and user experience in community platforms.',
          'Delivered impactful feature enhancements and bug fixes, showcasing strong problem-solving and collaboration.',
        ],
      },
    ],
    achievements: [
      {
        icon: 'bx bxs-bolt',
        title: 'Adaptable',
        subtitle: 'Learning new tech, adjusting to different projects easily.',
      },
      {
        icon: 'bx bxs-florist',
        title: 'Team player',
        subtitle: 'Working well with teams, talking clearly for success.',
      },
      {
        icon: 'bx bxs-book-reader',
        title: 'Solver',
        subtitle: 'Fixing issues, finding smart solutions accurately.',
      },
    ],
    ctaText: 'Say Hello',
    ctaLink: '#contact',
  },

  // ═══════════════════════════════════════
  // Skills
  // ═══════════════════════════════════════
  skills: {
    categories: [
      {
        id: 'frontend',
        title: 'Frontend Skills',
        icon: 'uil-brackets-curly',
        skills: [
          { name: 'Angular', level: 'Advanced', percentage: 87.5 },
          { name: 'Javascript', level: 'Intermediate', percentage: 78 },
          { name: 'React & Next.js', level: 'Intermediate', percentage: 75 },
          { name: 'Next.js', level: 'Intermediate', percentage: 72 },
          { name: 'Material UI', level: 'Intermediate', percentage: 69 },
          { name: 'Tailwind CSS', level: 'Intermediate', percentage: 65 },
          { name: 'Vue.js', level: 'Basic', percentage: 55 },
          { name: 'Typescript', level: 'Basic', percentage: 50 },
        ],
      },
      {
        id: 'backend',
        title: 'Backend Skills',
        icon: 'uil-server-network',
        skills: [
          { name: 'ASP.NET Core', level: 'Basic', percentage: 50 },
          { name: '.NET', level: 'Intermediate', percentage: 70 },
          { name: 'Nest.js', level: 'Intermediate', percentage: 75 },
          { name: 'PHP', level: 'Intermediate', percentage: 68 },
          { name: 'Java Springboot', level: 'Advanced', percentage: 90 },
          { name: 'Node.js', level: 'Intermediate', percentage: 89 },
          { name: 'Entity Framework Core', level: 'Intermediate', percentage: 70 },
          { name: 'MySQL', level: 'Intermediate', percentage: 70 },
          { name: 'PostgreSQL', level: 'Basic', percentage: 65 },
          { name: 'Django', level: 'Intermediate', percentage: 75 },
        ],
      },
      {
        id: 'data',
        title: 'Data Skills',
        icon: 'uil-database',
        skills: [
          { name: 'Python', level: 'Advanced', percentage: 90 },
          { name: 'Jupyter Notebook', level: 'Advanced', percentage: 85 },
          { name: 'Google Colab', level: 'Advanced', percentage: 76 },
          { name: 'NumPy', level: 'Intermediate', percentage: 70 },
          { name: 'Pandas', level: 'Intermediate', percentage: 70 },
          { name: 'PowerBI', level: 'Basic', percentage: 50 },
          { name: 'Tensorflow', level: 'Basic', percentage: 50 },
          { name: 'Streamlit', level: 'Intermediate', percentage: 70 },
        ],
      },
      {
        id: 'tools',
        title: 'Other Tools and Languages',
        icon: 'uil-wrench',
        skills: [
          { name: 'C#', level: 'Advanced', percentage: 80 },
          { name: 'Java', level: 'Advanced', percentage: 80 },
          { name: 'Android Studio', level: 'Advanced', percentage: 90 },
          { name: 'C/C++', level: 'Advanced', percentage: 80 },
          { name: 'VS Code', level: 'Advanced', percentage: 90 },
          { name: 'Postman', level: 'Advanced', percentage: 90 },
          { name: 'Git', level: 'Advanced', percentage: 80 },
          { name: 'Supabase', level: 'Advanced', percentage: 80 },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════
  // Services
  // ═══════════════════════════════════════
  services: {
    items: [
      {
        id: 1,
        icon: 'uil uil-users-alt',
        titleLine1: 'Project',
        titleLine2: 'Management',
        description:
          "I have been trusted by community tech leaders to help facilitate their programs, events, and conferences, particularly in Cebu's tech ecosystem. Their confidence in me stems from my ability to deliver quality and success in these events\u2014ensuring smooth execution, strong leadership, and clear communication within my team. I've led program planning, coordinated speaker flows, and provided a seamless experience for attendees. Passionate, disciplined, and resilient, I thrive in tech event management, always seeking to refine and elevate the experiences I help create. Whether leading a team of developers, coordinating research efforts, or ensuring smooth execution of an event, I always prioritize clear communication, collaboration, and delivering high-quality results on time.",
      },
      {
        id: 2,
        icon: 'uil uil-arrow-growth',
        titleLine1: 'Data Science',
        titleLine2: '& Automation',
        description:
          "As an active member of AI Pilipinas Cebu, I've contributed to the AI and machine learning community by publishing technical blogs on Medium, showcasing my expertise and commitment to knowledge sharing. I've also deployed AI models that were featured in Hacktoberfest and various tech events, helping others understand model deployment and maximizing AI's potential in modern applications. My goal is to bridge technical concepts with practical applications, making AI more accessible to developers and enthusiasts. You can check out my Medium Blog here: ",
        link: {
          url: 'https://medium.com/@christophercastro690',
          icon: 'uil uil-medium-m',
          label: 'Medium Blog',
        },
      },
      {
        id: 3,
        icon: 'uil uil-window',
        titleLine1: 'Full-Stack',
        titleLine2: 'Development',
        description:
          "Being recognized as the Best Overall Open-Source Contributor at Hacktoberfest 2024 is proof of my ability to contribute meaningfully to online platforms and startup products that enhance user experiences. My contributions go beyond code\u2014I develop solutions that create real impact. One notable project is the certificate generation automation system I implemented for GDG Cebu and PizzaPy Python Community. This tool eliminates tedious manual work, streamlining the process for tech events. Passionate about making a difference in the tech community, I leverage my development skills to solve real problems while continuously learning and growing. Additionally, I contributed as a web developer at Symph, further honing my skills in real-world applications. My work ensures efficiency, quality, and impactful solutions for both communities and businesses.",
      },
    ],
  },

  // ═══════════════════════════════════════
  // Projects
  // ═══════════════════════════════════════
  projects: {
    items: [
      {
        id: 1,
        image: LoanChecker,
        title: 'Loan Checker AI',
        desc: 'AI-Powered Loan Eligibility Prediction with 85% Accuracy',
        lang: 'Python, Pandas, NumPy, Seaborn, Streamlit, Scikit-learn, Colab, Kaggle',
        link: 'https://loan-checker-ai.streamlit.app/',
        repo: 'https://github.com/ChristopherCastro69/Loan-Checker-AI',
        category: 'Projects',
        services: [
          'Designed and implemented an AI-powered loan eligibility prediction system using Python and Gaussian Na\u00efve Bayes, achieving an 85% accuracy rate in financial decision-making.',
          'Developed and deployed a machine learning pipeline, including data preprocessing, feature engineering, and model integration with Streamlit, ensuring a seamless user experience.',
          'Authored a detailed technical blog on AI deployment, providing insights into real-world machine learning applications.',
        ],
      },
      {
        id: 2,
        image: PizzaPy,
        title: 'PizzaPy Cebu Website',
        desc: 'Hacktoberfest 2024 Contribution: UX/UI & Backend Enhancements',
        lang: 'Python, Django, HTML, CSS, JavaScript, Node.js, Cloud Hosting',
        link: 'https://www.pizzapy.ph/',
        repo: 'https://github.com/ChristopherCastro69/pizzapy-website',
        category: 'Contributions',
        services: [
          "Redesigned and enhanced the website's landing page UX/UI, improving navigation, responsiveness, and overall user engagement.",
          'Implemented dynamic image animations and cloud-hosted assets, optimizing website performance and visual appeal.',
          'Collaborated in Hacktoberfest 2024, delivering high-quality contributions in frontend and backend development, reinforcing open-source community engagement.',
        ],
      },
      {
        id: 3,
        image: useClassImg,
        title: 'useClass: Use Case to Class Diagram Converter',
        desc: 'From User Stories to Object-Oriented Design',
        lang: 'Next.js, Express js, TypeScript, Firebase',
        link: 'https://use-class-app-client.onrender.com/home',
        repo: 'https://github.com/ChristopherCastro69/use-class-app',
        category: 'Projects',
        services: [
          'Led frontend development and UX design, resulting in a 95% user satisfaction rating and a 100% task success rate based on usability tests.',
          'Built and integrated an AI-powered chatbot for real-time diagram conversion, reducing manual conversion time by 85%.',
          'Directed project management and team coordination across 3 core contributors, ensuring on-time delivery and feature alignment.',
          'Developed backend CRUD logic and user deployment validation using Express.js and Firebase, enabling a seamless and secure experience.',
          'Achieved 90% recommendation rate from users, with 80% completing tasks in under one minute\u2014proving significant gains in productivity and learning.',
        ],
      },
      {
        id: 4,
        image: tohp,
        title: 'The One Hour Project',
        desc: 'Empowering Communities with Time-Based Volunteering',
        lang: 'Next.js, NestJS, TypeScript, Supabase, Google Cloud, PostgreSQL, Tailwind, ShadCN',
        link: 'https://theonehourproject.app/',
        repo: 'https://github.com/symphco',
        category: 'Contributions',
        services: [
          'Developed and optimized frontend and backend functionalities, ensuring a seamless user experience and system performance.',
          'Engineered key client features using NestJS, Next.js, and Google Cloud, ensuring scalability and high availability for a time-based volunteering platform.',
          'Collaborated closely with stakeholders to align technical execution with business goals, contributing to project management and client communications.',
        ],
      },
      {
        id: 5,
        image: HeartAlert,
        title: 'Heart Disease Prediction',
        desc: 'Predicting Heart Failure Risk: Supervised Learning with 89% Accuracy',
        lang: 'Py, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Streamlit, TF, Keras, Scikit-learn, Jupyter',
        link: 'https://heartpredictiongpt.streamlit.app/',
        repo: 'https://github.com/ChristopherCastro69/HeartAlert',
        category: 'Projects',
        services: [
          'Led a team of developers in the creation of a mobile-first web application using Python, which accurately identifies heart diseases and provides relevant causal information.',
          'Spearheaded the development, training, and deployment of a cutting-edge heart disease prediction model leveraging Sci-Kit Learn, Google Colab, and Streamlit, ensuring seamless integration with the web application.',
          'Achieved a remarkable 90 percent accuracy rate in identifying heart diseases, ensuring seamless integration with the web application.',
        ],
      },
      {
        id: 6,
        image: cebby,
        title: 'Cebby',
        desc: 'Enhancing Community Engagement with Event Scheduling Features',
        lang: 'Next.js, TypeScript, Tailwind CSS, Supabase',
        link: 'https://www.getcebby.com/',
        repo: 'https://github.com/ChristopherCastro69/event-ni',
        category: 'Contributions',
        services: [
          'Implemented a calendar system, streamlining event scheduling and boosting community engagement.',
          'Enhanced the UI/UX design, improving accessibility and user navigation for a seamless experience.',
        ],
      },
      {
        id: 7,
        image: appImg,
        title: 'Unshelf',
        desc: 'The Ultimate Food Saver Ecommerce App for a Sustainable Future',
        lang: 'Java, Kotlin, Android Studio, Maven, Firebase, Jetpack Compose, Google API',
        link: 'https://unshelf-app-website-j6moubam9-christophercastro69s-projects.vercel.app/',
        repo: 'https://github.com/ChristopherCastro69/UnShelf',
        category: 'Projects',
        services: [
          'Contributed to the design and backend implementation of an e-commerce application, focusing on the seller UI and Seller CRUD operations within the Firestore database to facilitate the buying and selling of food waste.',
          'Implemented the seller dashboard, enabling tracking of product sales and customer orders. Improved its functionality by incorporating data visualization tools for clear insights into sales trends and order management.',
          'Created and deployed an app landing webpage to showcase our app, providing users with a platform to download the app and learn about its features.',
        ],
      },
    ],
    categories: [{ name: 'all' }, { name: 'Projects' }, { name: 'Contributions' }],
  },

  // ═══════════════════════════════════════
  // Qualifications
  // ═══════════════════════════════════════
  qualifications: {
    education: [
      {
        id: 1,
        title: 'Computer Science',
        subtitle: 'Cebu Institute of Technology',
        calendar: 'May 2025',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: '',
        type: 'ed',
      },
      {
        id: 2,
        title: 'The Complete 2024 Web Development Bootcamp',
        subtitle: 'Udemy',
        calendar: 'December 18, 2024',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certWeb,
        type: 'ed',
      },
      {
        id: 3,
        title: 'Angular - The Complete Guide (2025) Edition',
        subtitle: 'Udemy',
        calendar: 'February 9, 2025',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certAngular,
        type: 'ed',
      },
      {
        id: 4,
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        subtitle: 'Udemy',
        calendar: 'December 25, 2023',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certJS,
        type: 'ed',
      },
      {
        id: 5,
        title: 'The Complete Python Bootcamp From Zero to Hero in Python',
        subtitle: 'Udemy',
        calendar: 'January 10, 2024',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certPython,
        type: 'ed',
      },
      {
        id: 6,
        title: 'Python for Data Science and Machine Learning Bootcamp',
        subtitle: 'Udemy',
        calendar: 'May 25, 2024',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certDataOff,
        type: 'ed',
      },
      {
        id: 7,
        title: 'The Business Intelligence Analyst Course 2023',
        subtitle: 'Udemy',
        calendar: 'August 1, 2023',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certBI,
        type: 'ed',
      },
      {
        id: 8,
        title: 'Git Complete: The definitive, step-by-step guide to Git',
        subtitle: 'Udemy',
        calendar: 'January 21, 2025',
        services: ['Web Development', 'Algorithms', 'Database Management'],
        image: certBI,
        type: 'ed',
      },
    ],
    experience: [
      {
        id: 1,
        title: 'Software Engineer Intern',
        subtitle: 'Symph',
        calendar: 'July 2024 - November 2024',
        services: [
          'Developed frontend and database solutions for theonehourproject.app, directly collaborating with clients to deliver high-quality, production-ready software in a fast-paced 1-month sprint.',
          'Enhanced AI-driven UX for the GOAB Photobooth Kiosk, implementing prompt engineering to create an interactive face-swap experience used at Geeks on a Beach 2024 and DevFest 2024, impressing investors and developers.',
        ],
        image: certSymph,
        type: 'exp',
      },
      {
        id: 2,
        title: 'AI & Machine Learning Advocate',
        subtitle: 'AI Pilipinas Cebu',
        calendar: 'August 2024 - January 2025',
        services: [
          'Authored AI/ML blogs focusing on real-world applications in healthcare and business, showcasing technical expertise and industry relevance.',
          'Designed and deployed AI-powered web applications, demonstrating the practical impact of AI in solving real-world problems.',
        ],
        image: certAI,
        type: 'exp',
      },
      {
        id: 3,
        title: 'Best Overall Open Source Contributor',
        subtitle: 'Cebu Hacktoberfest 2024',
        calendar: 'October 2024',
        services: [
          'Awarded Best Overall Contributor for significant open-source contributions, improving deployment processes and user experience for tech community platforms, including PizzaPy Cebu and Cebby (JavaScript Cebu Community).',
          'Delivered impactful feature enhancements and bug fixes, showcasing strong problem-solving and collaboration in open-source environments.',
        ],
        image: certHacktoberfest,
        type: 'exp',
      },
      {
        id: 4,
        title: 'Programs & Speakers Lead',
        subtitle: 'Google Developer Group Cebu',
        calendar: 'September 2024 - Present',
        services: [
          'Spearheaded DevFest 2024, leading speaker coordination and program management, ensuring a seamless experience for hundreds of attendees and AI experts.',
          'Developed an automated certificate distribution system, significantly reducing manual work and enhancing participant satisfaction.',
        ],
        image: certGDG,
        type: 'exp',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Contact
  // ═══════════════════════════════════════
  contact: {
    sectionTitle: 'Get in touch',
    formTitle: 'Write me your question',
    cards: [
      {
        id: 1,
        icon: 'bxl-gmail',
        title: 'Email',
        data: 'christopher697@gmail.com',
        link: 'mailto:christophercastro697@gmail.com',
        linkText: 'Email me',
      },
      {
        id: 2,
        icon: 'bxl-messenger',
        title: 'Messenger',
        data: 'Christopher Castro',
        link: 'https://www.facebook.com/messages/t/100004376165597',
        linkText: 'Message me',
      },
      {
        id: 3,
        icon: 'bxs-contact',
        title: 'Contact No.',
        data: '09928944217',
        link: 'https://api.whatsapp.com/send?phone=09928944217&text=Hello, more information!',
        linkText: 'Text me',
      },
    ],
    form: {
      namePlaceholder: 'Insert your name',
      emailPlaceholder: 'Insert your email',
      questionPlaceholder: 'Type your question',
      submitText: 'Submit Question',
    },
  },

  // ═══════════════════════════════════════
  // Testimonials
  // ═══════════════════════════════════════
  testimonials: [
    {
      id: 1,
      image: testimonial1,
      title: 'Jhon Doe',
      description:
        'A really good job, all aspects of the project were followed step by step and with good results.',
    },
    {
      id: 2,
      image: testimonial2,
      title: 'Harry Clinton',
      description:
        'A really good job, all aspects of the project were followed step by step and with good results.',
    },
    {
      id: 3,
      image: testimonial3,
      title: 'Sara Cill',
      description:
        'A really good job, all aspects of the project were followed step by step and with good results.',
    },
  ],

  // ═══════════════════════════════════════
  // Footer
  // ═══════════════════════════════════════
  footer: {
    name: 'Christopher Castro',
    education: 'BS Computer Science at Cebu Institute of Technology',
  },

  // ═══════════════════════════════════════
  // SEO
  // ═══════════════════════════════════════
  seo: {
    title: 'Christopher Castro | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Python, and AI/ML. Portfolio showcasing projects, open-source contributions, and community leadership.',
  },
};
