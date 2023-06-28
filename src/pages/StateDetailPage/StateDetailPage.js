import React from "react";

import "./StateDetailPage.scss";
import { useParams } from "react-router-dom";
import StateInfoCard from "../../components/statepagedetail/StateInfoCard";
import DistrictCard from "../../components/statepagedetail/DistrictCard";
import AboutState from "../../components/statepagedetail/AboutState";

const districts = [
  {
    name: "Agar Malwa",
  },
  {
    name: "Alirajpur",
  },
  {
    name: "Anuppur",
  },
  {
    name: "Ashok Nagar",
  },
  {
    name: "Balaghat",
  },
  {
    name: "Barwani",
  },
  {
    name: "Betul",
  },
  {
    name: "Bhind",
  },
  {
    name: "Bhopal",
  },
  {
    name: "Burhanpur",
  },
  {
    name: "Chhatarpur",
  },
  {
    name: "Chhindwara",
  },
  {
    name: "Damoh",
  },
  {
    name: "Datia",
  },
  {
    name: "Dewas",
  },
  {
    name: "Dhar",
  },
  {
    name: "Dindori",
  },
  {
    name: "Guna",
  },
  {
    name: "Gwalior",
  },
  {
    name: "Harda",
  },
  {
    name: "Indore",
  },
  {
    name: "Jabalpur",
  },
  {
    name: "Jhabua",
  },
  {
    name: "Katni",
  },
  {
    name: "Khandwa",
  },
  {
    name: "Khargone",
  },
  {
    name: "Mandla",
  },
  {
    name: "Mandsaur",
  },
  {
    name: "Morena",
  },
  {
    name: "Narmadapuram",
  },
  {
    name: "Narsinghpur",
  },
  {
    name: "Neemuch",
  },
  {
    name: "Niwari",
  },
  {
    name: "Panna",
  },
  {
    name: "Raisen",
  },
  {
    name: "Rajgarh",
  },
  {
    name: "Ratlam",
  },
  {
    name: "Rewa",
  },
  {
    name: "Sagar",
  },
  {
    name: "Satna",
  },
  {
    name: "Sehore",
  },
  {
    name: "Seoni",
  },
  {
    name: "Shahdol",
  },
  {
    name: "Shajapur",
  },
  {
    name: "Sheopur",
  },
  {
    name: "Shivpuri",
  },
  {
    name: "Sidhi",
  },
  {
    name: "Singrouli",
  },
  {
    name: "Tikamgarh",
  },
  {
    name: "Ujjain",
  },
  {
    name: "Umaria",
  },
  {
    name: "Vidisha",
  },
];

const StateDetailPage = () => {
  const { stateID } = useParams();

  console.log(stateID, "stateID");

  return (
    <div className="statedetailpage">
      <div style={{ display: "flex" }}>
        <StateInfoCard />
        <AboutState />
      </div>
      <h1 className="statedetailpage__title">Districts &gt;&gt;</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {districts.map((item, index) => {
          return <DistrictCard districtName={item.name} />;
        })}
      </div>
    </div>
  );
};

export default StateDetailPage;
