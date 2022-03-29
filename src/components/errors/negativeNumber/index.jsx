import React from "react";
import './style.scss';

const NegativeNumber = () => {

  return (
    <div className="back-drop">
      <div div className="error-wrapper" >
        <div className="error-header">
          <p>Invalid Input</p>
        </div>
        <div className="error-body">
          <p>please enter a valid age - age must be more than 0</p>
        </div>
        <button>ok</button>
      </div >
    </div>
  );
};
export default NegativeNumber;