import React from "react";
import "./style.scss";

// for rendering the data
const User = (props) => {
  let { name, age, id } = props;
  return (
    <div className="user-info" key={id}>
      <p className="user-name">{name}</p>
      <p className="user-age">( {age} years old )</p>
    </div>
  );
};

export default User;