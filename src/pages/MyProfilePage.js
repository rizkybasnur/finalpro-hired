import React from "react";
import UserDropdownComp from "../components/global/userDropdownComp/UserDropdownComp";
import MyProfileContainer from "../components/myProfile/myProfileContainer/MyProfileContainer";

function MyProfilePage() {
  return (
    <div>
      <UserDropdownComp />
      <MyProfileContainer />
    </div>
  );
}

export default MyProfilePage;
