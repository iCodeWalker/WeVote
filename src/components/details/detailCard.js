import React from "react";

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
