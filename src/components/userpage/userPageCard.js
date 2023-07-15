import React from "react";

import "./userPageCard.scss";

const UserPageCard = ({ title, description }) => {
  return (
    <div className="user-page-card">
      <div className="user-page-card__container">
        <h1 className="user-page-card__heading">{title}</h1>
        <p className="user-page-card__para">{description}</p>
      </div>
    </div>
  );
};

export default UserPageCard;
