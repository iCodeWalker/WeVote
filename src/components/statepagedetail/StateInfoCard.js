import React from "react";

import "./StateInfoCard.scss";
import { Link } from "react-router-dom";

const StateInfoCard = ({
  stateLogo,
  stateWebLink,
  stateCapital,
  districtCount,
}) => {
  return (
    <div className="stateinfocard">
      <div className="stateinfocard__container">
        <div className="stateinfocard__image-container">
          <img
            src={stateLogo}
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
          <p className="stateinfocard__container--para-1"> {stateCapital}</p>
          <p className="stateinfocard__container--para-2"> 12123123</p>
          <p className="stateinfocard__container--para-3"> {districtCount}</p>
          <p>
            State Website :{" "}
            <Link to={stateWebLink} className="link" target="_blank">
              Official Website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateInfoCard;
