import React from "react";
import DisplacementProfileComp from "../displacementProfileComp/DisplacementProfileComp";
import AddUserMyprofileComp from "../addUserMyprofileComp/AddUserMyprofileComp";
import AddAnotherComp from "../addAnotherComp/AddAnotherComp";
import AddEducationComp from "../addEducationComp/AddEducationComp";
import AddResumeComp from "../addResumeComp/AddResumeComp";
import AddSalaryComp from "../addSalaryComp/AddSalaryComp";
import AddSkillsComp from "../addSkillsComp/AddSkillsComp";
import AddWorkComp from "../addWorkComp/AddWorkComp";
import "./MyProfileContainer.css";

function MyProfileContainer() {
  return (
    <div className="card-my-profile">
      <div className="my-profile-container">
        <div>
          <DisplacementProfileComp />
        </div>
        <div>
          <AddUserMyprofileComp />
          <AddSalaryComp />
          <AddWorkComp />
          <AddEducationComp />
          <AddSkillsComp />
          <AddResumeComp />
          <AddAnotherComp />
        </div>
      </div>
    </div>
  );
}

export default MyProfileContainer;
