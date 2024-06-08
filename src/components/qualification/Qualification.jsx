import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Knowledge</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          {/* //ToggleActive */}
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          {/* //ToggleActive */}
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          {/* Stage 1 */}

          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            {/* Part 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Cebu Institute of Technology
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  The Complete JavaScript Course 2024: From Zero to Expert!
                </h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2024
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  The Complete Python Bootcamp From Zero to Hero in Python
                </h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Python for Data Science and Machine Learning Bootcamp
                </h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2024
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  The Business Intelligence Analyst Course 2024
                </h3>
                <span className="qualification_subtitle">Udemy</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            {/* Part 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">VIP Escort Volunteer</h3>
                <span className="qualification_subtitle">
                  AWS Community Day - Cebu Roadshow
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  August 26, 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Technical Query Assistant
                </h3>
                <span className="qualification_subtitle">
                  Automated Testing Workshop
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 04,2024
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Technical Volunteer</h3>
                <span className="qualification_subtitle">
                  Django Pizza Py Community Event
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  February 17, 2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
