import React, { useEffect, useState } from "react";

import "./StateDetailPage.scss";
import { useParams } from "react-router-dom";
import StateInfoCard from "../../components/statepagedetail/StateInfoCard";
import DistrictCard from "../../components/statepagedetail/DistrictCard";
import AboutState from "../../components/statepagedetail/AboutState";
import { districtData } from "../../data/dummy/data";

const StateDetailPage = () => {
  const { stateName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = districtData.filter((item, index) => {
      if (item.stateName === stateName) {
        return item;
      }
    });

    console.log(data);
    setData(data);
  }, []);

  console.log(stateName, "stateName");

  return (
    <div className="statedetailpage">
      <div style={{ display: "flex" }}>
        <StateInfoCard
          stateLogo={data[0]?.stateLogo}
          stateWebLink={data[0]?.stateWebsiteLink}
          stateCapital={data[0]?.stateCapital}
          districtCount={data[0]?.districts?.length}
        />
        <AboutState name={data[0]?.label} />
      </div>
      <h1 className="statedetailpage__title">Districts &gt;&gt;</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data[0]?.districts?.map((item, index) => {
          return (
            <DistrictCard
              key={index}
              districtName={item}
              stateName={stateName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StateDetailPage;
