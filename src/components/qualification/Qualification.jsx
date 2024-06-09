import React, { useState } from "react";
import { educationData, experienceData } from "./Data";
import "./qualification.css";
import QualificationItem from "./QualificationItem";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderQualification = (data, index) => (
    <div className="qualification_data" key={index}>
      {index % 2 === 0 ? (
        <>
          <div>
            <h1>{data.id}</h1>
            <h3 className="qualification_title">{data.title}</h3>
            <span className="qualification_subtitle">{data.subtitle}</span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i>
              {data.calendar}
            </div>
          </div>
          <div>
            <span className="qualification_rounder"></span>
            <div className="qualification_line"></div>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
          <div>
            <h1>{data.id}</h1>
            <h3 className="qualification_title">{data.title}</h3>
            <span className="qualification_subtitle">{data.subtitle}</span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i>
              {data.calendar}
            </div>
          </div>
        </>
      )}
    </div>
  );

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
            {educationData.map((item, index) => (
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
            {experienceData.map((item, index) => (
              <QualificationItem data={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
