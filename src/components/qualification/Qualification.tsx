import React, { useState } from "react";
import { DATA } from "../../data/resume";
import QualificationItem from "./QualificationItem";

const Qualification: React.FC = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Knowledge</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {DATA.qualifications.education.map((item, index) => (
              <QualificationItem data={item} index={index} key={index} />
            ))}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {DATA.qualifications.experience.map((item, index) => (
              <QualificationItem data={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
