import React from "react";
import './style.scss';

const NegativeNumber = () => {

  return (
    <div className="error-wrapper">
      <div className="error-header">
        <p>Invalid Input</p>
      </div>
      <div className="error-body">
        <p>please enter a valid age - age must be more than 0</p>
      </div>
    </div>
  );
};
export default NegativeNumber;