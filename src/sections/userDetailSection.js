import React from "react";
import UserPageCard from "../components/userpage/userPageCard";
import "./userDetailSection.scss";

const UserDetailSection = () => {
  return (
    <div className="user-detail-section">
      <h1 className="user-detail-section__para">
        We're changing the voting culture of Indian youths. Here's how you can
        help.
      </h1>
      <div className="user-detail-section__card-section">
        <UserPageCard
          title="Join us"
          description=" Join our community of volunteers to make sure every eligible voter is
          registered to vote."
        />
        <UserPageCard
          title="Partner"
          description="Partner with us to ensure every eligible voter is registered to vote"
        />
      </div>
    </div>
  );
};

export default UserDetailSection;
