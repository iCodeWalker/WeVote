import React from "react";
import HomeSection from "../sections/homeSection";

import "./homePage.scss";
import Header from "../components/header";
import DetailList from "../components/details/detailList";
import CheckBoxWithSelectAll from "./checkboxPage";

const HomePage = () => {
  return (
    <div className="homepage__container">
      <HomeSection />
      <DetailList />
      <CheckBoxWithSelectAll />
    </div>
  );
};

export default HomePage;
