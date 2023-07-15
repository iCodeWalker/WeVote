import React from "react";

import "./UserDetailPage.scss";
import UserPageIntro from "../../components/userpage/userPageIntro";
import UserDetailSection from "../../sections/userDetailSection";

const UserDetailPage = () => {
  return (
    <div>
      <UserPageIntro />
      <UserDetailSection />
    </div>
  );
};

export default UserDetailPage;
