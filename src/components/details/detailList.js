import React from "react";
import { initialState } from "../../data/dummy/data";
import mpMap from "../../assets/images/map-madhya-pradesh.jpg";
import DetailCard from "./detailCard";

const DetailList = () => {
  console.log(initialState);
  return (
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
            stateName={item.label}
            stateCode={item.value}
            stateImage={item.image}
          />
        );
      })}
    </div>
  );
};

export default DetailList;
