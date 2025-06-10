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
            <i class="uil uil-users-alt services_icon"></i>

            <h3 className="services_title">
              Project <br /> Management
            </h3>
          </div>

          <span className="services_button">
            I have been trusted by community tech leaders to help facilitate
            their programs, events, and conferences, particularly in Cebu's tech
            ecosystem. Their confidence in me stems from my ability to deliver
            quality and success in these events—ensuring smooth execution,
            strong leadership, and clear communication within my team. I've led
            program planning, coordinated speaker flows, and provided a seamless
            experience for attendees. Passionate, disciplined, and resilient, I
            thrive in tech event management, always seeking to refine and
            elevate the experiences I help create. Whether leading a team of
            developers, coordinating research efforts, or ensuring smooth
            execution of an event, I always prioritize clear communication,
            collaboration, and delivering high-quality results on time.
          </span>
        </div>

        {/* Part 2 */}
        <div className="services_content">
          <div>
            {/* logo */}
            <i className="uil uil-arrow-growth services_icon"></i>
            <h3 className="services_title">
              Data Science <br />& Automation
            </h3>
          </div>

          <span className="services_button">
            As an active member of AI Pilipinas Cebu, I've contributed to the AI
            and machine learning community by publishing technical blogs on
            Medium, showcasing my expertise and commitment to knowledge sharing.
            I've also deployed AI models that were featured in Hacktoberfest and
            various tech events, helping others understand model deployment and
            maximizing AI's potential in modern applications. My goal is to
            bridge technical concepts with practical applications, making AI
            more accessible to developers and enthusiasts. You can check out my
            Medium Blog here:{" "}
          </span>
          <a
            href="https://medium.com/@christophercastro690"
            className="home_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-medium-m"></i>
          </a>
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
            Being recognized as the Best Overall Open-Source Contributor at
            Hacktoberfest 2024 is proof of my ability to contribute meaningfully
            to online platforms and startup products that enhance user
            experiences. My contributions go beyond code—I develop solutions
            that create real impact. One notable project is the certificate
            generation automation system I implemented for GDG Cebu and PizzaPy
            Python Community. This tool eliminates tedious manual work,
            streamlining the process for tech events. Passionate about making a
            difference in the tech community, I leverage my development skills
            to solve real problems while continuously learning and growing.
            Additionally, I contributed as a web developer at Symph, further
            honing my skills in real-world applications. My work ensures
            efficiency, quality, and impactful solutions for both communities
            and businesses.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
