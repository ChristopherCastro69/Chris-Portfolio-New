import React from "react";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Skills</h3>
      <div className="skills_box">
        <div className="skills_group">
          {/* 1st */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">HTML/CSS</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          {/* 2nd */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* 3rd */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* 4th */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Material UI</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* 6th */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Tailwind</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* 5th */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Vue.js</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* 7th */}
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Typescript</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
