import React, { useState } from "react";
import { useScrollPosition } from "../../hooks";
import { DATA } from "../../data/resume";

const Header: React.FC = () => {
  const { isPastThreshold: isScrolled } = useScrollPosition(80);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className={`header ${isScrolled ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Christopher
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {DATA.navbar.map((item) => (
              <li className="nav_item" key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={
                    activeNav === item.href
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className={`${item.icon} nav_icon`}></i> {item.name}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
