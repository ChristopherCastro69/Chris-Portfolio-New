import React from "react";
import { DATA } from "../../data/resume";

const Social = () => {
  return (
    <div className="home_social">
      {DATA.socialLinks
        .filter((s) => s.showInHome)
        .map((s) => (
          <a
            key={s.name}
            href={s.url}
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className={s.icon}></i>
          </a>
        ))}
    </div>
  );
};

export default Social;
