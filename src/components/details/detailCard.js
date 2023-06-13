import React from "react";

import mpMap from "../../assets/images/map-madhya-pradesh.jpg";
import mpMap2 from "../../assets/images/map-madhya-pradesh-2.avif";

import "./detailCard.scss";

const DetailCard = ({ stateName, stateCode, stateImage }) => {
  return (
    <div className="detailcard__container">
      <div className="detailcard__img">
        <img src={stateImage} alt="state__mp" height="150px" width="200px" />
      </div>
      <div className="detailcard__title">
        {stateName} ({stateCode})
      </div>
    </div>
  );
};

export default DetailCard;
