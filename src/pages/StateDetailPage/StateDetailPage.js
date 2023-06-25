import React from "react";

import "./StateDetailPage.scss";
import { useParams } from "react-router-dom";
import StateInfoCard from "../../components/statepagedetail/StateInfoCard";

const StateDetailPage = () => {
  const { stateID } = useParams();

  console.log(stateID, "stateID");

  return (
    <div>
      <StateInfoCard />
    </div>
  );
};

export default StateDetailPage;
