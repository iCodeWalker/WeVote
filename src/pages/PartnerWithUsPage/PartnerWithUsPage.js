import React from "react";

import "./PartnerWithUsPage.scss";
import PartnerWithUsIntro from "../../components/partnerwithuspage/partnerWithUsIntro";
import Volunteer from "../../components/volunteer/volunteer";
import MiddleSection from "../../components/partnerwithuspage/middleSection";

const PartnerWithUsPage = () => {
  return (
    <>
      <PartnerWithUsIntro />
      <MiddleSection />
      <Volunteer />
    </>
  );
};

export default PartnerWithUsPage;
