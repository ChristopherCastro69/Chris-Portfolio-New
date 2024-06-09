// Data.jsx
import javascript from "./../../assets/certificates/JS.png";
import python from "./../../assets/certificates/Python.png";
import BI from "./../../assets/certificates/BI.png";
import data from "./../../assets/certificates/DataOff.png";

import workshop from "../../assets/img.jpg";
import aws2 from "./../../assets/certificates/AWS.png";
import django from "./../../assets/certificates/Django.jpg";
import hacktoberfest from "./../../assets/certificates/hacktoberfest.jpg";
import dohe from "./../../assets/certificates/dohe.jpg";

export const educationData = [
  {
    id: 1,
    title: "Computer Science",
    subtitle: "Cebu Institute of Technology",
    calendar: "2021 - Present",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: "",
    type: "ed",
  },
  {
    id: 2,
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    subtitle: "Udemy",
    calendar: "2022 - 2023",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: javascript,
    type: "ed",
  },
  {
    id: 3,
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    subtitle: "Udemy",
    calendar: "2023 - 2024",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: python,
    type: "ed",
  },
  {
    id: 4,
    title: "Python for Data Science and Machine Learning Bootcamp",
    subtitle: "Udemy",
    calendar: "2022 - 2024",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: data,
    type: "ed",
  },
  {
    id: 5,
    title: "The Business Intelligence Analyst Course 2023",
    subtitle: "Udemy",
    calendar: "2022 - 2023",
    services: ["Web Development", "Algorithms", "Database Management"],
    image: BI,
    type: "ed",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "VIP Escort Volunteer",
    subtitle: "AWS Community Day - Cebu Roadshow",
    calendar: " August 26, 2023",
    services: [
      "Acted as a VIP escort at the AWS Community Day event, providing personalized assistance to high-level technical speakers from the Philippines.",

      "Ensured seamless experiences for VIP speakers through effective communication, resulting in high satisfaction rates.",
    ],
    image: aws2,
    type: "exp",
  },
  {
    id: 2,
    title: "Open-Source Contributor and Volunteer",
    subtitle: "Javascript Cebu’s Hacktoberfest",
    calendar: " October 28, 2023",
    services: [
      "Implemented UI enhancements for React Cebu’s community website, improving layout and user experience.",
      "Resolved issues to prevent redirection when a specific button is clicked, enhancing usability.",
    ],
    image: hacktoberfest,
    type: "exp",
  },
  {
    id: 3,
    title: "Technical and Crowd Control Volunteer",
    subtitle: "PizzaPy Cebu Python Users Group",
    calendar: " February 17, 2024",
    services: [
      "Led a group of volunteers at the Django Pizza Py community event, overseeing technical assistance and support for Python enthusiasts focusing on the Django framework and Python programming.",

      "Played a role in the overall success of the Django Pizza Py community event. Promoting collaboration and knowledge sharing within the Python community",
    ],
    image: django,
    type: "exp",
  },
  {
    id: 4,
    title: "Technical Query Assistant",
    subtitle: "Javascript Cebu's Automated Testing Workshop",
    calendar: " May 04, 2024",
    services: [
      "Guided participants through practical exercises and discussions on effective testing strategies using Javascript, Node, Playwright, TypeScript, Vite, and React.",

      "Directed a team of volunteers, ensuring the success of the Javascript Cebu community event. Fostered collaboration and knowledge sharing within the JavaScript community.",
    ],
    image: workshop,
    type: "exp",
  },
  {
    id: 5,
    title: "Core Operations Volunteer at All Aboard Startup Cebu Mixer",
    subtitle: "DOHE Philippines",
    calendar: " May 21, 2024",
    services: [
      "Facilitated the smooth operation of DOHE's monthly startup events, ensuring seamless transitions and efficient logistics management.",
      "Documented key activities and processes to maintain accurate records and streamline future event planning.",
      "Provided technical support and assistance during the events, contributing to their overall success.",
    ],
    image: dohe,
    type: "exp",
  },
];
