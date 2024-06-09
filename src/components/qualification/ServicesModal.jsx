import React from "react";
import "./services.css";

const ServicesModal = ({ activeState, item, activeTab }) => {
  // Check if item type is "ed", if so, render the modal
  if (item.type === "exp") {
    return (
      <div
        className={
          activeState === item.id
            ? "services_modal active-modal"
            : "services_modal"
        }
      >
        <div className="services_modal-content">
          <i
            onClick={() => activeTab(0)}
            className="uil uil-times services_modal-close"
          ></i>
          <h3 className="services_modal-title">{item.title}</h3>
          <p className="services_modal-description">{item.subtitle}</p>

          <ul className="services_modal-services grid">
            {item.services.map((service, index) => (
              <li key={index} className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal_info">{service}</p>
              </li>
            ))}
          </ul>
          <img src={item.image} alt="" className="services_modal_image"></img>
        </div>
      </div>
    );
  } else {
    // If item type is not "ed", return null (don't render anything)
    return null;
  }
};

export default ServicesModal;
