import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bxs-bolt about_icon"></i>

        <h3 className="about_title">Adaptable</h3>
        <p className="about_subtitle">
          Learning new tech, adjusting to different projects easily.
        </p>
      </div>

      <div className="about_box">
        <i className="bx bxs-florist about_icon"></i>

        <h3 className="about_title">Team player</h3>
        <p className="about_subtitle">
          Working well with teams, talking clearly for success.
        </p>
      </div>

      <div className="about_box">
        <i className="bx bxs-book-reader about_icon"></i>

        <h3 className="about_title">Solver</h3>
        <p className="about_subtitle">
          Fixing issues, finding smart solutions accurately.
        </p>
      </div>
    </div>
  );
};

export default Info;
