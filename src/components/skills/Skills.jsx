import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Data from "./Data";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <Data />
      </div>
    </section>
  );
};

export default Skills;
