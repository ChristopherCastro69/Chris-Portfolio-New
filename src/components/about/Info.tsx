import React from "react";
import { DATA } from "../../data/resume";

const Info = () => {
  return (
    <div className="about_info grid">
      {DATA.about.achievements.map((a, i) => (
        <div className="about_box" key={i}>
          <i className={`${a.icon} about_icon`}></i>
          <h3 className="about_title">{a.title}</h3>
          <p className="about_subtitle">{a.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
