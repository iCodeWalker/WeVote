import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./detailCard.scss";

const DetailCard = ({
  stateLabel,
  stateCode,
  stateImage,
  isState,
  stateName,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/state-detail/${stateName}`, { replace: true });
  };
  return (
    <div className="detailcard__container" onClick={handleCardClick}>
      {isState && (
        <div className="detailcard__img">
          <img src={stateImage} alt="state__mp" height="150px" width="200px" />
        </div>
      )}

      <div className="detailcard__title">
        {stateLabel} ({stateCode})
      </div>
    </div>
  );
};

export default DetailCard;
