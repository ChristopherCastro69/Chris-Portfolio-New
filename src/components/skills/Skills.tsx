import React from "react";
import { DATA } from "../../data/resume";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        {DATA.skills.categories.map((category, index) => (
          <SkillsSection
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
