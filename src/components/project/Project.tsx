import React from "react";
import Works from "./Works";

const Project = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most recent works</span>

      <Works />
    </section>
  );
};

export default Project;
