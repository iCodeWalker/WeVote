import React from "react";

import "./StateDetailPage.scss";
import { useParams } from "react-router-dom";

const StateDetailPage = () => {
  const { stateID } = useParams();

  console.log(stateID, "stateID");

  return (
    <div>
      <h1>State Detail Page</h1>
    </div>
  );
};

export default StateDetailPage;
