import React, { useState, useRef, useEffect } from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CumLaude from "../../assets/CumLaude.jpg";
// import img1 from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img5 from "../../assets/img5.jpg";

import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

import img8 from "../../assets/rs.jpg";

import Info from "./Info";

const About = () => {
  const images = [CumLaude, img8, img5, img7, img6, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalId = useRef(null);
  const sectionIntervalId = useRef(null);

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId.current);
  }, [currentIndex, images.length]);

  useEffect(() => {
    // Handle section transitions
    if (!isPaused) {
      sectionIntervalId.current = setInterval(() => {
        setCurrentSection((prev) => (prev + 1) % 5); // 5 sections total
      }, 5000); // Change section every 5 seconds
    }

    return () => {
      if (sectionIntervalId.current) {
        clearInterval(sectionIntervalId.current);
      }
    };
  }, [isPaused]);

  const handleClick = (index) => {
    clearInterval(intervalId.current);
    changeImage(index);
    intervalId.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 3000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (sectionIntervalId.current) {
      clearInterval(sectionIntervalId.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleSectionClick = () => {
    setCurrentSection((prev) => (prev + 1) % 5);
    // Reset the interval when manually clicking
    if (sectionIntervalId.current) {
      clearInterval(sectionIntervalId.current);
    }
    sectionIntervalId.current = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 5);
    }, 5000);
  };

  const sections = [
    {
      title: "Best Research Paper & Best Research Oral Presenter",
      subtitle: "— CIT 14th Research Congress (August 30, 2025)",
      points: [
        "Led a cross-functional team in developing RetinAI, a mobile AI app for early diabetic retinopathy detection using a 3D-printed retinal imaging device and AI classification models.",
        "Developed a mobile AI app for early diabetic retinopathy detection using a 3D-printed retinal imaging device and AI classification models.",
      ],
    },
    {
      title: "AI and Machine Learning Advocate",
      subtitle: "— AI Pilipinas Cebu (Aug 2024 - Jan 2025)",
      points: [
        "Published AI/ML blogs that garnered 171+ views and 94+ reads, covering real-world applications in healthcare and business, showcasing deep technical expertise and industry relevance.",
        "Developed and deployed AI-powered web applications, demonstrating practical AI impact in solving real-world challenges, particularly in medical research and predictive analytics.",
      ],
    },
    {
      title: "Software Engineer Intern",
      subtitle: "— Symph (Jul 2024 - Nov 2024)",
      points: [
        "Developed frontend and database solutions, collaborating with clients to deliver high-quality, production-ready software.",
        "Optimized AI-driven UX for interactive experiences, impressing investors and developers.",
      ],
    },
    {
      title: "Best Overall Open Source Contributor",
      subtitle: "— Cebu Hacktoberfest 2024",
      points: [
        "Awarded for improving deployment and user experience in community platforms.",
        "Delivered impactful feature enhancements and bug fixes, showcasing strong problem-solving and collaboration.",
      ],
    },
    {
      title: "Programs and Speakers Director",
      subtitle: "— Google Developer Group Cebu (Sept 2024 - Present)",
      points: [
        "Led event execution, managing program flow and speaker coordination to ensure a seamless, high-impact event.",
        "Orchestrated successful events with 100+ attendees, fostering collaboration and knowledge sharing.",
      ],
    },
  ];

  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">Why Choose Me</span>

      <div className="about_container container grid">
        <div className="about_img_container container grid">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt=""
              className={`about_img ${
                index === currentIndex ? "visible" : "hidden"
              }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        <div className="about_data">
          <Info />
          <div
            className="about_description scrollable-box"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleSectionClick}
            style={{ cursor: "pointer" }}
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className={`section-content ${
                  index === currentSection ? "visible" : "hidden"
                }`}
              >
                <strong>{section.title}</strong>{" "}
                <span className="subtitle">{section.subtitle}</span>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
                <br />
                <br />
              </div>
            ))}
          </div>
          <a href="#contact" className="button button--flex">
            Say Hello
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
