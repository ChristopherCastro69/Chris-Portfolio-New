// Skills.jsx
import React from "react";
import "./skills.css";
import skillsData from "./SkillsData";

const SkillsSection = ({ title, skills }) => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">{title}</h3>
      <div className="skills_box">
        <div className="skills_group">
          {skills.map((skill, index) => (
            <div className="skills_data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">{skill.name}</h3>
                {/* <div className="skills_bar">
                  <div
                    className="skills_percentage"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div> */}
                {/* <span className="skills_level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        {Object.values(skillsData).map((section, index) => (
          <SkillsSection
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
