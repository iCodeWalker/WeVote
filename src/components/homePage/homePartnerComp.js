import React from "react";
import { useNavigate } from "react-router-dom";

import "./homePartnerComp.scss";
import inkingImage from "../../assets/images/wevote-inking.jpeg";

const HomePartnerComp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/partner-with-us");
  };
  return (
    <div className="home-partner__container">
      <div className="home-partner__image-container">
        <img className="home-partner__image" src={inkingImage} alt="wevote" />
      </div>
      <div className="home-partner__text-container">
        <h1 className="home-partner__heading">Volunteer or Partner</h1>
        <p className="home-partner__para">
          Your work can make all the difference. Take the next step with WeVote
          by volunteering or partnering to start a voter education program in
          your community/organization.
        </p>
        <button className="home-partner__btn" onClick={handleClick}>
          Take Action NOW
        </button>
      </div>
    </div>
  );
};

export default HomePartnerComp;
