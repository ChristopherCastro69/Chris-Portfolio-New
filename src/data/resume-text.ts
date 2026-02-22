/**
 * Text-only resume data for the chat API system prompt.
 *
 * IMPORTANT: Keep this file in sync with resume.tsx.
 * When you update resume.tsx, also update the corresponding text here.
 *
 * This file exists separately because resume.tsx imports StaticImageData
 * (Next.js image imports) which cannot be used in server-side API routes
 * that only need text content.
 */

interface ResumeText {
  name: string;
  title: string;
  bio: string;
  education: string;
  experience: { title: string; org: string; period: string }[];
  leadership: { title: string; org: string }[];
  achievements: string[];
  skills: { category: string; items: string[] }[];
  projects: { name: string; desc: string; tech: string }[];
  services: string[];
  contact: { type: string; value: string }[];
  socialLinks: { name: string; url: string }[];
}

const RESUME: ResumeText = {
  name: 'Christopher O. Castro',
  title: 'Full Stack Developer',
  bio: 'Welcome to my portfolio! Dive in to explore my creations and discover the unique vision I bring to every project.',
  education: 'BS Computer Science, Cebu Institute of Technology (May 2025)',

  experience: [
    {
      title: 'Software Engineer Intern',
      org: 'Symph',
      period: 'July 2024 - November 2024',
    },
    {
      title: 'AI & Machine Learning Advocate',
      org: 'AI Pilipinas Cebu',
      period: 'August 2024 - January 2025',
    },
    {
      title: 'Best Overall Open Source Contributor',
      org: 'Cebu Hacktoberfest 2024',
      period: 'October 2024',
    },
    {
      title: 'Programs & Speakers Lead',
      org: 'Google Developer Group Cebu',
      period: 'September 2024 - Present',
    },
  ],

  leadership: [
    { title: 'Programs and Speakers Director', org: 'Google Developer Group Cebu' },
    { title: 'AI and Machine Learning Advocate', org: 'AI Pilipinas Cebu' },
  ],

  achievements: [
    'Best Research Paper & Best Research Oral Presenter — CIT 14th Research Congress (April 30, 2025)',
    'Best Research Paper (1st Place) — Central Visayas Health Research and Innovation Congress (May 31, 2025)',
    'Best Overall Open Source Contributor — Cebu Hacktoberfest 2024',
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['Angular', 'JavaScript', 'React & Next.js', 'Next.js', 'Material UI', 'Tailwind CSS', 'Vue.js', 'TypeScript'],
    },
    {
      category: 'Backend',
      items: ['ASP.NET Core', '.NET', 'Nest.js', 'PHP', 'Java Springboot', 'Node.js', 'Entity Framework Core', 'MySQL', 'PostgreSQL', 'Django'],
    },
    {
      category: 'Data',
      items: ['Python', 'Jupyter Notebook', 'Google Colab', 'NumPy', 'Pandas', 'PowerBI', 'Tensorflow', 'Streamlit'],
    },
    {
      category: 'Other Tools',
      items: ['C#', 'Java', 'Android Studio', 'C/C++', 'VS Code', 'Postman', 'Git', 'Supabase'],
    },
  ],

  projects: [
    {
      name: 'Loan Checker AI',
      desc: 'AI-Powered Loan Eligibility Prediction with 85% Accuracy',
      tech: 'Python, Pandas, NumPy, Seaborn, Streamlit, Scikit-learn',
    },
    {
      name: 'PizzaPy Cebu Website',
      desc: 'Hacktoberfest 2024 Contribution: UX/UI & Backend Enhancements',
      tech: 'Python, Django, HTML, CSS, JavaScript, Node.js',
    },
    {
      name: 'useClass: Use Case to Class Diagram Converter',
      desc: 'From User Stories to Object-Oriented Design',
      tech: 'Next.js, Express.js, TypeScript, Firebase',
    },
    {
      name: 'The One Hour Project',
      desc: 'Empowering Communities with Time-Based Volunteering',
      tech: 'Next.js, NestJS, TypeScript, Supabase, Google Cloud, PostgreSQL, Tailwind',
    },
    {
      name: 'Heart Disease Prediction',
      desc: 'Predicting Heart Failure Risk: Supervised Learning with 89% Accuracy',
      tech: 'Python, Pandas, NumPy, Streamlit, TensorFlow, Keras, Scikit-learn',
    },
    {
      name: 'Cebby',
      desc: 'Enhancing Community Engagement with Event Scheduling Features',
      tech: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    },
    {
      name: 'Unshelf',
      desc: 'The Ultimate Food Saver Ecommerce App for a Sustainable Future',
      tech: 'Java, Kotlin, Android Studio, Firebase, Jetpack Compose, Google API',
    },
  ],

  services: [
    'Project Management',
    'Data Science & Automation',
    'Full-Stack Development',
  ],

  contact: [
    { type: 'Email', value: 'christopher697@gmail.com' },
    { type: 'Messenger', value: 'Christopher Castro' },
    { type: 'Contact No.', value: '09928944217' },
  ],

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/ChristopherCastro69' },
    { name: 'Medium', url: 'https://medium.com/@christophercastro690' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/christopher-c-083561124' },
  ],
};

export function buildSystemPrompt(): string {
  const lines: string[] = [];

  // Role instruction
  lines.push(
    `You are ${RESUME.name}'s portfolio assistant. Answer questions about Christopher's background, projects, skills, and experience. ` +
    `Respond in first person as if you are Christopher. Keep responses under 150 words, professional yet friendly. ` +
    `Only answer questions related to the portfolio — politely redirect off-topic questions.`
  );
  lines.push('');

  // Personal info
  lines.push('## Personal Info');
  lines.push(`- Name: ${RESUME.name}`);
  lines.push(`- Title: ${RESUME.title}`);
  lines.push(`- Education: ${RESUME.education}`);
  lines.push('');

  // Experience
  lines.push('## Experience');
  for (const exp of RESUME.experience) {
    lines.push(`- ${exp.title} at ${exp.org} (${exp.period})`);
  }
  lines.push('');

  // Leadership
  lines.push('## Leadership');
  for (const role of RESUME.leadership) {
    lines.push(`- ${role.title}, ${role.org}`);
  }
  lines.push('');

  // Achievements
  lines.push('## Achievements');
  for (const a of RESUME.achievements) {
    lines.push(`- ${a}`);
  }
  lines.push('');

  // Skills
  lines.push('## Skills');
  for (const cat of RESUME.skills) {
    lines.push(`- ${cat.category}: ${cat.items.join(', ')}`);
  }
  lines.push('');

  // Projects
  lines.push('## Projects');
  for (const p of RESUME.projects) {
    lines.push(`- ${p.name}: ${p.desc} (${p.tech})`);
  }
  lines.push('');

  // Services
  lines.push('## Services');
  for (const s of RESUME.services) {
    lines.push(`- ${s}`);
  }
  lines.push('');

  // Contact
  lines.push('## Contact');
  for (const c of RESUME.contact) {
    lines.push(`- ${c.type}: ${c.value}`);
  }
  lines.push('');

  // Social Links
  lines.push('## Social Links');
  for (const link of RESUME.socialLinks) {
    lines.push(`- ${link.name}: ${link.url}`);
  }

  return lines.join('\n');
}
