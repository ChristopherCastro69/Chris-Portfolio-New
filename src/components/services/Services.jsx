import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">My Expertise</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">
        {/* Part 1 */}
        <div className="services_content">
          <div>
            {/* //logo  */}
            <i className="uil uil-mobile-android services_icon"></i>

            <h3 className="services_title">
              App <br /> Development
            </h3>
          </div>

          <span className="services_button">
            I focus on app development as it allows me to combine my creativity
            and technical expertise. This unique blend helps me craft digital
            solutions that have a tangible impact on businesses and individuals
            worldwide, making a meaningful difference.
            {/* <i className="uil uil-arrow-right services_button-icon"></i> */}
          </span>
        </div>

        {/* Part 2 */}
        <div className="services_content">
          <div>
            {/* logo */}
            <i className="uil uil-arrow-growth services_icon"></i>
            <h3 className="services_title">
              Data <br />
              Science
            </h3>
          </div>

          <span className="services_button">
            With the growing importance of big data, I pursued data science and
            analytics to drive informed decision-making and address complex
            problems. By uncovering valuable patterns and insights deeply
            embedded in data, I aim to make impactful, data-driven solutions.
          </span>
        </div>

        {/* Part 3 */}
        <div className="services_content">
          <div>
            {/* logo */}
            <i className="uil uil-window services_icon"></i>
            <h3 className="services_title">
              Full-Stack <br /> Development
            </h3>
          </div>

          <span className="services_button">
            I engage in full-stack development to leverage my technical
            expertise, creativity, and problem-solving skills. By working on
            both frontend and backend, I create seamless, efficient, and
            user-friendly digital solutions that make technology more accessible
            and impactful.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
