import React from "react";

import "./introSection.scss";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-section__container">
        <div className="intro-section__container--header">
          <h1 className="intro-section__heading">About Us Page</h1>
          <div>
            <p className="intro-section__para intro-section__para--head">
              We educate, enable & support smart voters!
            </p>
            <p className="intro-section__para">
              WeVote is an independent, non-partisan movement of changemakers
              working to encourage meaningful voter participation in elections,
              advocate for electoral reforms, and educate voters about elections
              and their voting rights. We’re working in a coordinated manner
              through partnerships across socioeconomic and development sectors,
              from grassroots to national level, to ensure a cohesive strategy
              for returning citizen participation to democracy and promoting
              good governance through voting.
            </p>

            <p className="intro-section__para">
              We are on a mission to ensure meaningful participation in Nigerian
              elections and increase voter turnout to the international average
              of 66% in 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
