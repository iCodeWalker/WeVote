import React from "react";
import { initialState } from "../../data/dummy/data";

import DetailCard from "./detailCard";
import "./detailList.scss";

const DetailList = () => {
  console.log(initialState);
  return (
    <div className="detailList__container">
      <h2 className="detailList__title">Indian States</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {initialState.states.map((item, index) => {
          return (
            <DetailCard
              key={index}
              stateName={item.name}
              stateLabel={item.label}
              stateCode={item.value}
              stateImage={item.image}
              isState={true}
            />
          );
        })}
      </div>
      <h2 className="detailList__title">Indian Union Territories</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {initialState.unionTerritories.map((item, index) => {
          return (
            <DetailCard
              key={index}
              stateName={item.name}
              statelabel={item.label}
              stateCode={item.value}
              stateImage={item.image}
              isState={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailList;
