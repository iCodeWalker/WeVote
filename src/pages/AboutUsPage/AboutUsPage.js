import React from "react";
import "./AboutUsPage.scss";

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <h1 className="about-us__heading">About Us Page</h1>
        <div>
          <p className="about-us__para about-us__para--head ">
            We educate, enable & support smart voters!
          </p>
          <p className="about-us__para">
            WeVote is an independent, non-partisan movement of changemakers
            working to encourage meaningful voter participation in elections,
            advocate for electoral reforms, and educate voters about elections
            and their voting rights. We’re working in a coordinated manner
            through partnerships across socioeconomic and development sectors,
            from grassroots to national level, to ensure a cohesive strategy for
            returning citizen participation to democracy and promoting good
            governance through voting.
          </p>

          <p className="about-us__para">
            We are on a mission to ensure meaningful participation in Nigerian
            elections and increase voter turnout to the international average of
            66% in 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
