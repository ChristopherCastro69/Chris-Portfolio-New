import React from "react";
import "./services.css";

const Services = () => {
  // const [toggleState, setToggleState] = useState(0);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
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
            I love creating mobile apps that blend creativity and technical
            skills to solve real-world problems. Making technology accessible
            and impactful for users is incredibly fulfilling and drives my
            passion for development.
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
            I enjoy exploring numbers and uncovering patterns. Data science lets
            me make a difference for individuals and businesses by transforming
            complex data into valuable insights that inform decisions.
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
            I love combining my artistic side with technical expertise to create
            seamless, user-friendly digital experiences. Full-stack development
            allows me to ensure everything runs smoothly and looks great.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
