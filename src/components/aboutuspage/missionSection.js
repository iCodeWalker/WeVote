import React from "react";

import "./missionSection.scss";
import { Link } from "react-router-dom";
const MissionSection = () => {
  return (
    <div className="mission-section">
      <div className="mission-section__container-1">
        <h1 className="mission-section__heading">Our Mission</h1>
        <p className="mission-section__para">
          We are on a mission to ensure meaningful participation in Nigerian
          elections.
        </p>
        <p className="mission-section__para">Therefore, we work to;</p>

        <ol>
          <li className="mission-section__list-item">
            Lower the barriers to electoral participation
          </li>
          <li className="mission-section__list-item">
            Increase voter education
          </li>
          <li className="mission-section__list-item">
            Increase voter registration
          </li>
          <li className="mission-section__list-item">
            Increase youth and women participation in elections
          </li>
          <li className="mission-section__list-item">
            Increase voter turnout to the international average of 66% in 2023
          </li>
          <li className="mission-section__list-item">
            Drive electoral reforms
          </li>
        </ol>
      </div>

      <div className="mission-section__container-2">
        <h2 className="mission-section__heading">Our Vision</h2>
        <p className="mission-section__para">
          We envision a highly democratic country where good governance thrives
          because of actively engaged citizens.
        </p>

        <h2 className="mission-section__heading">Our Values</h2>
        <p className="mission-section__para">
          We are non-profit, non-partisan, independent, non-governmental.
        </p>
        <Link to="/partner-with-us" className="mission-section__btn">
          Partner With Us
        </Link>
      </div>
    </div>
  );
};

export default MissionSection;
