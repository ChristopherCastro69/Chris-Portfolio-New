import React, { useState } from "react";
import ServicesModal from "./ServicesModal";

const QualificationItem = ({ data, index }) => {
  const [activeState, setActiveState] = useState(0);
  const activeTab = (index) => {
    setActiveState(index);
  };
  return (
    <div className="qualification_data" key={index}>
      {index % 2 === 0 ? (
        <>
          <div
            className="qualification_pointer"
            onClick={() => activeTab(data.id)}
          >
            <h3 className="qualification_title">{data.title}</h3>
            <span className="qualification_subtitle">{data.subtitle}</span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i>
              {data.calendar}
            </div>
          </div>
          <div>
            <span className="qualification_rounder"></span>
            <div className="qualification_line"></div>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
          <div
            className="qualification_pointer"
            onClick={() => activeTab(data.id)}
          >
            <h3 className="qualification_title">{data.title}</h3>
            <span className="qualification_subtitle">{data.subtitle}</span>
            <div className="qualification_calendar">
              <i className="uil uil-calendar-alt"></i>
              {data.calendar}
            </div>
          </div>
        </>
      )}

      <ServicesModal
        activeState={activeState}
        item={data}
        activeTab={activeTab}
      />
    </div>
  );
};

export default QualificationItem;
