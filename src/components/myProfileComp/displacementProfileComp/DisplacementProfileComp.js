import React, { useState } from "react";
import AppliedJobComp from "../appliedJobComp/AppliedJobComp";
import NotifComp from "../notifComp/NotifComp";
import MyProfileContainer from "../myProfileContainer/MyProfileContainer";
import "./DisplacementProfileComp.css";
import SavedJobsComp from "../savedJobsComp/SavedJobsComp";

function DisplacementProfileComp() {
  const [profile, setProfile] = useState(true);
  const [apply, setApply] = useState(false);
  const [notif, setNotif] = useState(false);
  const [saved, setSaved] = useState(false);

  const profileHandler = (e) => {
    e.preventDefault();
    setProfile(true);
    setApply(false);
    setNotif(false);
    setSaved(false);
  };

  const applyHandler = (e) => {
    e.preventDefault();
    setProfile(false);
    setApply(true);
    setNotif(false);
    setSaved(false);
  };

  const notifHandler = (e) => {
    e.preventDefault();
    setProfile(false);
    setApply(false);
    setNotif(true);
    setSaved(false);
  };

  const savedHandler = (e) => {
    e.preventDefault();
    setProfile(false);
    setApply(false);
    setNotif(false);
    setSaved(true);
  };

  return (
    <div className="displacement-parent-container">
      <div className="displacement-container">
        <div className="container-displaceMp">
          <div className="displaceMp">
            <button onClick={profileHandler}>
              <img
                src="https://i.ibb.co/6s6YcS2/myprofile-black.png"
                alt="myprofile-black"
              />
              My Profile
            </button>

            <button onClick={applyHandler}>
              <img
                src="https://i.ibb.co/3k94SgS/Appliedjobs-black.png"
                alt="Appliedjobs-black"
              />
              Applied jobs
            </button>
            <button onClick={notifHandler}>
              <img
                src="https://i.ibb.co/99xJ95N/Notifications-black.png"
                alt="Notifications-black"
              />
              Notifications
            </button>
            <button onClick={savedHandler}>
              <img
                src="https://i.ibb.co/ZBdwRsS/Savedjobs-black.png"
                alt="Savedjobs-black"
              />
              Saved jobs
            </button>
          </div>
        </div>
        {profile ? <MyProfileContainer /> : null}
        {apply ? <AppliedJobComp /> : null}
        {notif ? <NotifComp /> : null}
        {saved ? <SavedJobsComp /> : null}
      </div>
    </div>
  );
}

export default DisplacementProfileComp;
