import React from "react";

import "./DistrictDetailPage.scss";
import { useParams } from "react-router-dom";

import jabalpurImage from "../../assets/images/jabalpur.jpeg";

const DistrictDetailPage = () => {
  const { districtName } = useParams();
  return (
    <div className="districtdetailpage">
      <h1>District Detail Page</h1>

      <div className="districtdetailpage__container">
        <div className="districtdetailpage__container-image">
          <img src={jabalpurImage} alt="we-vote" width="330px" />
        </div>
        <div className="districtdetailpage__container-text">
          <h2>{districtName}</h2>
        </div>
      </div>
    </div>
  );
};

export default DistrictDetailPage;
