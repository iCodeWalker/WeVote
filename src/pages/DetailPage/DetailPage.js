import React from "react";
import "./DetailPage.scss";
import DetailList from "../../components/details/detailList";
import Header from "../../components/header";

const DetailPage = () => {
  return (
    <div>
      <Header />
      <DetailList />
    </div>
  );
};

export default DetailPage;
