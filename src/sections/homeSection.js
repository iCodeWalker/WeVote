import React from "react";
import "./homeSection.scss";
import Button from "../components/button";

const HomeSection = () => {
  return (
    <div className="homesection__container">
      <h1 className="homesection__container--heading">data for future</h1>
      <div className="paragraph__container">
        <p className="paragraph">
          Using power of our right to vote we all should vote and be a part in
          the process of selected of our representatives in the democracy.
        </p>
        {/* <p className="paragraph">
          Using data for predictions and results is the main soul of our
          organisation.
        </p> */}
        <p className="paragraph">
          For making the process of selecting a right candidate being easy we
          came up with a solution collecting valuable feedbacks from all our
          citizens making all them a part of our journey.
        </p>
        <p className="paragraph">
          Reviewing all details of all elected and participated representatives
          of peoples of India.
          <ul>
            <li>How they have worked.</li>
            <li>On what they have worked.</li>
            <li>Which sector developed most.</li>
            <li>Promises fulfilled</li>
          </ul>
        </p>
      </div>
      <div style={{ height: "100px" }}>
        <Button
          title="For More Details"
          onClick={() => console.log("Clicked")}
        />
      </div>
    </div>
  );
};

export default HomeSection;
