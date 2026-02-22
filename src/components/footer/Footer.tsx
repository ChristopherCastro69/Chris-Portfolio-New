import React from "react";
import { DATA } from "../../data/resume";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">{DATA.footer.name}</h1>

        <div className="footer_education">
          <h3 className="footer_education-title">Education</h3>
          <p className="footer_education-text">{DATA.footer.education}</p>
        </div>

        <div className="footer_social">
          {DATA.socialLinks
            .filter((s) => s.showInFooter)
            .map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="footer_social-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className={s.footerIcon}></i>
              </a>
            ))}
        </div>

        <span className="footer_copy">
          &#169; {DATA.footer.name}. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
