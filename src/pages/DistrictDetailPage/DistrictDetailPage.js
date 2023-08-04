import React from "react";

import "./DistrictDetailPage.scss";
import { useParams } from "react-router-dom";

import jabalpurImage from "../../assets/images/jabalpur.jpeg";

const DistrictDetailPage = () => {
  const { districtName } = useParams();
  return (
    <div className="districtdetailpage">
      <h1 className="districtdetailpage__title" style={{ display: "block" }}>
        District Detail Page
      </h1>

      <div style={{ display: "flex" }}>
        <div className="districtdetailpage__container">
          <div className="districtdetailpage__container-image">
            <img src={jabalpurImage} alt="we-vote" width="330px" />
          </div>
          <div className="districtdetailpage__container-text">
            <h2>{districtName}</h2>
          </div>
        </div>

        <div
          className="districtdetailpage__container--text"
          style={{ alignSelf: "center" }}
        >
          <h2
            style={{
              fontSize: "20px",
              textAlign: "left",
              margin: "50px",
              color: "green",
              marginTop: "0px",
            }}
          >
            {districtName}
          </h2>
          <p
            className="districtdetailpage__container-text"
            style={{
              fontSize: "16px",
              textAlign: "left",
              margin: "50px",
              marginTop: "0px",
            }}
          >
            Madhya Pradesh is a cluster of innumerable districts and varied
            topographic and climatic characteristics. Housing the magnificent
            Vindhyachal mountain range, river valleys and plateau Madhya Pradesh
            is famous for its wonderful art, craft, music and dance. Rich in
            geographical varieties, the state also has a good number of
            important mines that has a good influence on the economy of the
            country. Engaged mostly in agricultural activities, the state is the
            homeland of many tribal races. Madhya Pradesh lies in the middle of
            the India, sharing its border with six neighboring states. The
            northern border of the state has two neighbor states namely the
            state of Rajasthan and Uttar Pradesh. The western border of the
            state is shared by a part of Rajasthan and a part of Maharashtra
            with Gujarat in between. On the southern part of the state of Madhya
            Pradesh lie the states Maharashtra and Andhra Pradesh. The entire
            eastern border of the state is bounded by the states of Chattisgarh
            and Jharkhand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistrictDetailPage;
