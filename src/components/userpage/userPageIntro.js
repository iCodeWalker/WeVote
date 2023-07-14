import React from "react";

import "./userPageIntro.scss";

const UserPageIntro = () => {
  return (
    <div className="user-page-intro">
      <div className="user-page-intro__container">
        <div className="user-page-intro__container--header">
          <h1 className="user-page-intro__heading">
            Register. Vote.{" "}
            <span className="user-page-intro__initial">Impact</span>
          </h1>
          <div className="user-page-intro__para-container">
            <p className="user-page-intro__para">
              Join WeVote to make sure every eligible voter is registered and
              ready to vote in every election.
            </p>
            <button className="user-page-intro__btn">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageIntro;
