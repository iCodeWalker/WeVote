import React from "react";

import "./button.scss";

const Button = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="button__container">
      <p className="button__title">{title}</p>
    </div>
  );
};

export default Button;
