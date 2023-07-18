import React from "react";

import "./partnerWithUsIntro.scss";

const PartnerWithUsIntro = () => {
  return (
    <div className="partner-with-us-intro">
      <div className="partner-with-us-intro__container">
        <div className="partner-with-us-intro__container--header">
          <h1 className="partner-with-us-intro__heading">Partner With Us</h1>
          <div className="partner-with-us-intro__btn-container">
            <button className="partner-with-us-intro__btn">
              Sign Up for partnership opportunities
            </button>
          </div>

          {/* <div>
                <p className="contact-us-page__para contact-us-page__para--head">
                  We educate, enable & support smart voters!
                </p>
                <p className="contact-us-page__para">
                  WeVote is an independent, non-partisan movement of changemakers
                  working to encourage meaningful voter participation in elections,
                  advocate for electoral reforms, and educate voters about elections
                  and their voting rights. We’re working in a coordinated manner
                  through partnerships across socioeconomic and development sectors,
                  from grassroots to national level, to ensure a cohesive strategy
                  for returning citizen participation to democracy and promoting
                  good governance through voting.
                </p>
    
                <p className="contact-us-page__para">
                  We are on a mission to ensure meaningful participation in Nigerian
                  elections and increase voter turnout to the international average
                  of 66% in 2023.
                </p>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsIntro;
