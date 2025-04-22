import App from "../../assets/app.png";
import HeartAlert from "../../assets/projects/HeartAlert.png";
import LoanChecker from "../../assets/projects/LoanChecker.png";
import PizzaPy from "../../assets/projects/PizzaPy.png";
import AutoCert from "../../assets/projects/AutoCert.png";
import TOHP from "../../assets/projects/tohp.png";
import Cebby from "../../assets/projects/cebby.png";
import useClass from "../../assets/projects/useClass.png";

//========== PORTFOLIO DATA ==========
export const projectsData = [
  {
    id: 1,
    image: LoanChecker,
    title: "Loan Checker AI",
    desc: "AI-Powered Loan Eligibility Prediction with 85% Accuracy",
    lang: "Python, Pandas, NumPy, Seaborn, Streamlit, Scikit-learn, Colab, Kaggle",
    link: "https://loan-checker-ai.streamlit.app/",
    repo: "https://github.com/ChristopherCastro69/Loan-Checker-AI",
    category: "Projects",
    services: [
      "Designed and implemented an AI-powered loan eligibility prediction system using Python and Gaussian Naïve Bayes, achieving an 85% accuracy rate in financial decision-making.",

      "Developed and deployed a machine learning pipeline, including data preprocessing, feature engineering, and model integration with Streamlit, ensuring a seamless user experience.",

      "Authored a detailed technical blog on AI deployment, providing insights into real-world machine learning applications.",
    ],
  },
  {
    id: 2,
    image: PizzaPy,
    title: "PizzaPy Cebu Website",
    desc: "Hacktoberfest 2024 Contribution: UX/UI & Backend Enhancements",
    lang: "Python, Django, HTML, CSS, JavaScript, Node.js, Cloud Hosting ",
    link: "https://www.pizzapy.ph/",
    repo: "https://github.com/ChristopherCastro69/pizzapy-website",
    category: "Contributions",
    services: [
      "Redesigned and enhanced the website’s landing page UX/UI, improving navigation, responsiveness, and overall user engagement.",

      "Implemented dynamic image animations and cloud-hosted assets, optimizing website performance and visual appeal.",

      "Collaborated in Hacktoberfest 2024, delivering high-quality contributions in frontend and backend development, reinforcing open-source community engagement.",
    ],
  },
  {
    id: 3,
    image: useClass,
    title: "useClass: Use Case to Class Diagram Converter",
    desc: "From User Stories to Object-Oriented Design",
    lang: "Next.js, Express js, TypeScript, Firebase, ",
    link: "https://use-class-app-client.onrender.com/home",
    repo: "https://github.com/ChristopherCastro69/use-class-app",
    category: "Projects",
    services: [
      "Led frontend development and UX design, resulting in a 95% user satisfaction rating and a 100% task success rate based on usability tests.",
      "Built and integrated an AI-powered chatbot for real-time diagram conversion, reducing manual conversion time by 85%.",
      "Directed project management and team coordination across 3 core contributors, ensuring on-time delivery and feature alignment.",
      "Developed backend CRUD logic and user deployment validation using Express.js and Firebase, enabling a seamless and secure experience.",
      "Achieved 90% recommendation rate from users, with 80% completing tasks in under one minute—proving significant gains in productivity and learning.",
    ],
  },
  // {
  //   id: 3,
  //   image: AutoCert,
  //   title: "AutoCert: Certificate Automation",
  //   desc: "Automated Certificate Generation & Delivery for Tech Events",
  //   lang: "Next.js, TypeScript, Supabase",
  //   link: "https://autocert.vercel.app/",
  //   repo: "https://github.com/ChristopherCastro69/autocert",
  //   category: "Projects",
  //   services: [
  //     "Developed a scalable automation system that streamlined certificate generation and delivery, eliminating manual work and reducing processing time by 80%.",

  //     "Successfully deployed in GDG Cebu DevFest 2024 and PizzaPy Cebu’s Accenture Python ML 2025, automating certificate distribution for hundreds of participants.",

  //     "Integrated Next.js, TypeScript, and Supabase to ensure seamless, real-time processing with cloud storage for efficient document management.",
  //   ],
  // },

  {
    id: 4,
    image: TOHP,
    title: "The One Hour Project",
    desc: "Empowering Communities with Time-Based Volunteering",
    lang: "Next.js, NestJS, TypeScript, Supabase, Google Cloud, PostgreSQL, Tailwind, ShadCN",
    link: "https://theonehourproject.app/",
    repo: "https://github.com/symphco",
    category: "Contributions",
    services: [
      "Developed and optimized frontend and backend functionalities, ensuring a seamless user experience and system performance.",

      "Engineered key client features using NestJS, Next.js, and Google Cloud, ensuring scalability and high availability for a time-based volunteering platform.",

      "Collaborated closely with stakeholders to align technical execution with business goals, contributing to project management and client communications.",
    ],
  },

  {
    id: 5,
    image: HeartAlert,
    title: "Heart Disease Prediction",
    desc: "Predicting Heart Failure Risk: Supervised Learning with 89% Accuracy",
    lang: "Py, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Streamlit, TF, Keras, Scikit-learn, Jupyter",
    link: "https://heartpredictiongpt.streamlit.app/",
    repo: "https://github.com/ChristopherCastro69/HeartAlert",
    category: "Projects",
    services: [
      "Led a team of developers in the creation of a mobile-first web application using Python, which accurately identifies heart diseases and provides relevant causal information.",

      "Spearheaded the development, training, and deployment of a cutting-edge heart disease prediction model leveraging Sci-Kit Learn, Google Colab, and Streamlit, ensuring seamless integration with the web application.",

      "Achieved a remarkable 90 percent accuracy rate in identifying heart diseases, ensuring seamless integration with the web application.",
    ],
  },
  {
    id: 6,
    image: Cebby,
    title: "Cebby",
    desc: "Enhancing Community Engagement with Event Scheduling Features",
    lang: "Next.js, TypeScript, Tailwind CSS, Supabase",
    link: "https://www.getcebby.com/",
    repo: "https://github.com/ChristopherCastro69/event-ni",
    category: "Contributions",
    services: [
      "Implemented a calendar system, streamlining event scheduling and boosting community engagement.",

      "Enhanced the UI/UX design, improving accessibility and user navigation for a seamless experience.",
    ],
  },
  {
    id: 7,
    image: App,
    title: "Unshelf",
    desc: "The Ultimate Food Saver Ecommerce App for a Sustainable Future",
    lang: "Java, Kotlin, Android Studio, Maven, Firebase, Jetpack Compose, Google API",
    link: "https://unshelf-app-website-j6moubam9-christophercastro69s-projects.vercel.app/",
    repo: "https://github.com/ChristopherCastro69/UnShelf",
    category: "Projects",
    services: [
      "Contributed to the design and backend implementation of an e-commerce application, focusing on the seller UI and Seller CRUD operations within the Firestore database to facilitate the buying and selling of food waste.",

      "Implemented the seller dashboard, enabling tracking of product sales and customer orders. Improved its functionality by incorporating data visualization tools for clear insights into sales trends and order management.",

      "Created and deployed an app landing webpage to showcase our app, providing users with a platform to download the app and learn about its features.",
    ],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Projects",
  },
  {
    name: "Contributions",
  },
];
