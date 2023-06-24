import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./detailCard.scss";

const DetailCard = ({ stateName, stateCode, stateImage, isState }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/state-detail-page/${stateCode}`, { replace: true });
  };
  return (
    <div className="detailcard__container" onClick={handleCardClick}>
      {isState && (
        <div className="detailcard__img">
          <img src={stateImage} alt="state__mp" height="150px" width="200px" />
        </div>
      )}

      <div className="detailcard__title">
        {stateName} ({stateCode})
      </div>
    </div>
  );
};

export default DetailCard;
