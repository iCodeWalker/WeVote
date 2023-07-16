import React from "react";
import HomeSection from "../../sections/homeSection";

import "./homePage.scss";

import CheckBoxWithSelectAll from "../checkboxPage";
import UserDetailSection from "../../sections/userDetailSection";
import Footer from "../../components/footer";
import HomePageDetail from "../../components/homePage/homePageDetail";
import HomePartnerComp from "../../components/homePage/homePartnerComp";

const HomePage = () => {
  return (
    <div className="homepage__container">
      <HomeSection />
      {/* <CheckBoxWithSelectAll /> */}
      <UserDetailSection />
      <HomePartnerComp />
      <HomePageDetail />
      <Footer />
    </div>
  );
};

export default HomePage;
