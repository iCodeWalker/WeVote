import React from "react";

import "./DistrictDetailPage.scss";
import { useParams } from "react-router-dom";

const DistrictDetailPage = () => {
  const { districtName } = useParams();
  return (
    <div className="districtdetailpage">
      <h1>District Detail Page</h1>
      <h2>{districtName}</h2>
    </div>
  );
};

export default DistrictDetailPage;
