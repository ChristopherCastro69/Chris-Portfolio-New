import React, { useState } from "react";
import "../services/services.css";

const WorksItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    // console.log(toggleState);
  };
  return (
    <div className="work_card" key={item.id}>
      <div className="work_img-link">
        <img src={item.image} alt={item.title} className="work_img" />
      </div>
      <h3 className="work_title">{item.title}</h3>
      <span className="work_desc">{item.desc}</span>
      <div className="work_buttons">
        <a
          href={item.link}
          className="work_button"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bx-link-external work_button-icon"></i>
        </a>
        <a
          href={item.repo}
          className="work_button"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github work_button-icon"></i>
        </a>
        <button className="work_button" onClick={() => toggleTab(item.id)}>
          <i className="bx bx-extension work_button-icon"> </i>
        </button>
      </div>

      {/* Services Modal */}
      <div
        className={
          toggleState === item.id
            ? "services_modal active-modal"
            : "services_modal"
        }
      >
        <div className="services_modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services_modal-close"
          ></i>
          <h3 className="services_modal-title">{item.title}</h3>
          <p className="services_modal-description">{item.lang}</p>
          <ul className="services_modal-services grid">
            {item.services.map((service, index) => (
              <li key={index} className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal_info">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
