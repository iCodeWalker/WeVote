import React from "react";

import mpStateLogo from "../../assets/images/mp-state-logo.jpeg";
import jabalpurImage from "../../assets/images/jabalpur.jpeg";
import "./DistrictCard.scss";

const DistrictCard = ({ districtName }) => {
  return (
    <div className="districtcard">
      <div className="districtcard__container">
        <div className="districtcard__image">
          <img src={jabalpurImage} alt="state__mp" height="120%" width="120%" />
        </div>

        <div className="districtcard__text">{districtName}</div>
      </div>
    </div>
  );
};

export default DistrictCard;
