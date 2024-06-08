import Blog2 from "../../assets/blog3.jpg";
import App from "../../assets/app.png";
import HeartAlert from "../../assets/HeartAlert.png";
import Creds from "../../assets/e-cert.jpg";

//========== PORTFOLIO DATA ==========
export const projectsData = [
  {
    id: 1,
    image: HeartAlert,
    title: "Heart Disease Prediction",
    desc: "Predicting Heart Failure Risk: Supervised Learning with 89% Accuracy",
    lang: "Py, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Streamlit, TF, Keras, Scikit-learn, Jupyter",
    link: "https://heartpredictiongpt.streamlit.app/",
    repo: "https://github.com/ChristopherCastro69/HeartAlert",
    category: "data",
    services: [
      "Led a team of developers in the creation of a mobile-first web application using Python, which accurately identifies heart diseases and provides relevant causal information.",

      "Spearheaded the development, training, and deployment of a cutting-edge heart disease prediction model leveraging Sci-Kit Learn, Google Colab, and Streamlit, ensuring seamless integration with the web application.",

      "Achieved a remarkable 90 percent accuracy rate in identifying heart diseases, ensuring seamless integration with the web application.",
    ],
  },
  {
    id: 2,
    image: Blog2,
    title: "Insights Blog",
    desc: "Daily Insights for Inspiration, Growth and Living Your Best Day Today",
    lang: "HTML/CSS, JS, TS, Node.js, Redux, Vite, Vercel, MUI, Java, Spring, Railway",
    link: "https://insights-app-tawny.vercel.app/",
    repo: "https://github.com/ChristopherCastro69/insights-app",
    category: "web",
    services: [
      "Contributed on both backend and frontend development, utilizing HTML, Material UI (CSS), JavaScript, React framework, and Spring Boot to deliver MVC structured services for the project.",

      "Leveraged Java Spring Boot with REST integrations to allow users to comment on blog posts, improving user interaction and content engagement.",

      "Integrated a new image feature using Cloudinary, efficiently and effectively incorporating image upload and management capabilities into the application",

      "Utilized Railway for backend deployment and Vercel for frontend deployment, ensuring a seamless and efficient deployment process.",
    ],
  },
  {
    id: 3,
    image: Creds,
    title: "Creds",
    desc: "E-Certificate Generator for Javascript Cebu Automated Testing Workshop Participants",
    lang: "HTML/CSS, JS, TS, Node.js, Vercel",
    link: "https://creds-workshop.vercel.app/",
    repo: "https://github.com/ChristopherCastro69/Creds",
    category: "web",
    services: [
      "Guided participants through practical exercises and discussions on effective testing strategies using Javascript, Node, Playwright, TypeScript, Vite, and React.",

      "Directed a team of volunteers, ensuring the success of the Javascript Cebu community event. Fostered collaboration and knowledge sharing within the JavaScript community.",

      "Developed a website to distribute certificates for active participation, enhancing the recognition process and providing a convenient platform for participants.",
    ],
  },
  {
    id: 4,
    image: App,
    title: "Unshelf",
    desc: "The Ultimate Food Saver Ecommerce App for a Sustainable Future",
    lang: "Java, Kotlin, Android Studio, Maven, Firebase, Jetpack Compose, Google API",
    link: "https://unshelf-app-website-j6moubam9-christophercastro69s-projects.vercel.app/",
    repo: "https://github.com/ChristopherCastro69/UnShelf",
    category: "app",
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
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "data",
  },
];
