import React from 'react'
import "./scrollUp.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        //when the sdroll is higher than 560 viewposrt height, add the show-scroll class to a tag 
        //with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

  return (  
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp