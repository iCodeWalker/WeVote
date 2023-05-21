import React from "react";

import mpMap from "../../assets/images/map-madhya-pradesh.jpg";

import "./detailCard.scss";

const DetailCard = () => {
  return (
    <div className="detailcard__container">
      <div className="detailcard__img">
        <img src={mpMap} alt="state image" height="150px" width="200px" />
      </div>
      <div className="detailcard__title">Madhya Pradesh</div>
    </div>
  );
};

export default DetailCard;
