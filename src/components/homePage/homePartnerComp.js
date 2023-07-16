import React from "react";

import "./homePartnerComp.scss";

const HomePartnerComp = () => {
  return (
    <div className="home-partner">
      <div className="home-partner__container">
        <div className="home-partner__image-container">
          <img className="home-partner__image" />
        </div>
        <div className="home-partner___text-container">
          <h1 className="home-partner___heading">Volunteer or Partner</h1>
          <p className="home-partner__para">
            Your work can make all the difference. Take the next step with
            WeVote by volunteering or partnering to start a voter education
            program in your community/organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePartnerComp;
