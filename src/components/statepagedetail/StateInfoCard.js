import React from "react";

import mpStateLogo from "../../assets/images/mp-state-logo.jpeg";
import "./StateInfoCard.scss";

const StateInfoCard = () => {
  return (
    <div className="stateinfocard">
      <div className="stateinfocard__container">
        <div className="stateinfocard__image-container">
          <img
            src={mpStateLogo}
            className="stateinfocard--image"
            alt="state__mp"
            height="150px"
            width="150px"
          />
        </div>
        <div className="stateinfocard__container--detail">
          <p>Capital : Bhopal</p>
          <p>Population : 12123123</p>
          <p>Districts : 50</p>
        </div>
      </div>
    </div>
  );
};

export default StateInfoCard;
