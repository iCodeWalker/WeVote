import React from "react";

import "./middleSection.scss";
import handShake from "../../assets/images/hand-shake.jpeg";

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <div className="middle-section__container">
        <div className="middle-section__container--image">
          <img
            src={handShake}
            alt="we-vote"
            className="middle-section__image"
          />
        </div>
        <div className="middle-section__container--text">
          <h1 className="middle-section__heading">Let's Get to Work!</h1>
          <p className="middle-section__para">
            Here’s how you can be a part of our effort to increase civic
            participation: Help us spread the word about important voting
            deadlines and information to your audience or members, ensure your
            employees and customers are registered to vote, or host voter
            registration or education events and trainings, and mobilize
            volunteers. If you have other creative ways for how you can partner
            with WeVote, let’s talk!
          </p>
          <p className="middle-section__para middle-section__para-caution">
            Please note that WeVote is a nonpartisan organization and will NOT
            coordinate or partner with any partisan organizations.
          </p>

          <button className="middle-section__btn">Take Action NOW</button>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
