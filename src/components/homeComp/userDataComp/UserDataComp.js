import React from "react";
import "./UserDataComp.css";
const UserDataComp = () => {
  return (
    <div className="user-global">
      <div className="user ">
        <div className="usertitle2">
          <p className="usertitle">Got a question?</p>
          <p className="usertitle1">
            W’re here to help. You can shoot us an email or cal us at (62) 2534
            7763
          </p>
        </div>
        <div className="useremail">
          <button className="btn-user">
            <h3>Email us</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataComp;
