import React from "react";

// import mpStateLogo from "../../assets/images/mp-state-logo.jpeg";
import jabalpurImage from "../../assets/images/jabalpur.jpeg";
import "./DistrictCard.scss";
import { useNavigate } from "react-router-dom";

const DistrictCard = ({ districtName, stateName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/state-detail/${stateName}/district/${districtName}`);
  };

  return (
    <div className="districtcard" onClick={handleClick}>
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
