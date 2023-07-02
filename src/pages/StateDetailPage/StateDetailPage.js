import React, { useEffect, useState } from "react";

import "./StateDetailPage.scss";
import { useParams } from "react-router-dom";
import StateInfoCard from "../../components/statepagedetail/StateInfoCard";
import DistrictCard from "../../components/statepagedetail/DistrictCard";
import AboutState from "../../components/statepagedetail/AboutState";
import { districtData } from "../../data/dummy/data";

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
  const { stateName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = districtData.filter((item, index) => {
      if (item.stateName === stateName) {
        return item;
      }
    });

    console.log(data);
    setData(data);
  }, []);

  console.log(stateName, "stateName");

  return (
    <div className="statedetailpage">
      <div style={{ display: "flex" }}>
        <StateInfoCard stateLogo={data[0]?.stateLogo} />
        <AboutState name={data[0]?.label} />
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
        {data[0]?.districts?.map((item, index) => {
          return <DistrictCard key={index} districtName={item} />;
        })}
      </div>
    </div>
  );
};

export default StateDetailPage;
