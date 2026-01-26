import React from 'react';
import { useScrollPosition } from '../../hooks';
import "./scrollUp.css";

const ScrollUp: React.FC = () => {
  // Use custom hook instead of direct event listener to prevent memory leaks
  const { isPastThreshold: showScroll } = useScrollPosition(560);

  return (
    <a href="#home" className={`scrollup ${showScroll ? "show-scroll" : ""}`}>
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;
