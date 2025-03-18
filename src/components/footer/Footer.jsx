import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Christopher Castro</h1>

        <div className="footer_education">
          <h3 className="footer_education-title">Education</h3>
          <p className="footer_education-text">
            BS Computer Science at Cebu Institute of Technology
          </p>
        </div>

        <div className="footer_social">
          <a
            href="https://github.com/Topitops69"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.facebook.com/topitops05?mibextid=ZbWKwL"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/christopher-c-083561124"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Christopher Castro. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
