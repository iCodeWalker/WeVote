import React from "react";

import "./homePageDetail.scss";
import homeDetail from "../../assets/images/home-detail.jpeg";

const HomePageDetail = () => {
  return (
    <div className="home-page-detail">
      <div className="home-page-detail__container">
        <div className="home-page-detail__container--header">
          <h1 className="home-page-detail__heading">Our Values</h1>
          <div>
            <p className="home-page-detail__para">
              We are non-profit, non-partisan, independent, non-governmental. We
              are on a mission to ensure meaningful participation in Nigerian
              elections and increase voter turnout to the international average
              of 66% in 2023.
            </p>

            <p className="home-page-detail__para">
              Join the WeVote team. We’ll send you important updates on how you
              can get involved, and join our efforts to get every eligible
              Nigerian to vote on Election Day.
            </p>
          </div>
        </div>
        <button className="home-page-detail__btn">Volunteer</button>
      </div>
      <div className="home-page-detail__image-container">
        <img
          src={homeDetail}
          alt="we-vote"
          className="home-page-detail__image"
        />
      </div>
    </div>
  );
};

export default HomePageDetail;
