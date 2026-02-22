import React from "react";
import { DATA } from "../../data/resume";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section_title">My Expertise</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">
        {DATA.services.items.map((service) => (
          <div className="services_content" key={service.id}>
            <div>
              <i className={`${service.icon} services_icon`}></i>
              <h3 className="services_title">
                {service.titleLine1} <br /> {service.titleLine2}
              </h3>
            </div>
            <span className="services_button">{service.description}</span>
            {service.link && (
              <a
                href={service.link.url}
                className="home_social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className={service.link.icon}></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
