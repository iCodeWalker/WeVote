import React from "react";

import mpStateLogo from "../../assets/images/mp-state-logo.jpeg";
import "./StateInfoCard.scss";
import { Link } from "react-router-dom";

const StateInfoCard = () => {
  return (
    <div className="stateinfocard">
      <div className="stateinfocard__container">
        <div className="stateinfocard__image-container">
          <img
            src={mpStateLogo}
            className="stateinfocard--image"
            alt="state__mp"
            height="200px"
            width="200px"
          />
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              margin: 0,
              padding: 0,
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            State Official Logo
          </p>
        </div>
        <div className="stateinfocard__container--detail">
          <p>Capital : Bhopal</p>
          <p>Population : 12123123</p>
          <p>Districts : 50</p>
          <p>
            State Website :{" "}
            <Link to="https://mp.gov.in/" className="link">
              https://mp.gov.in/
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateInfoCard;
