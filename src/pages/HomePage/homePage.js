import React from "react";
import HomeSection from "../../sections/homeSection";

import "./homePage.scss";

import CheckBoxWithSelectAll from "../checkboxPage";

const HomePage = () => {
  return (
    <div className="homepage__container">
      <HomeSection />
      <CheckBoxWithSelectAll />
    </div>
  );
};

export default HomePage;
