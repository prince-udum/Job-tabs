import React from "react";

const BtnContainer = ({ jobs, currentItem, setIsCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
            onClick={() => setIsCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
