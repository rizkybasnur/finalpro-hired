import React from "react";
import "./DisplacementProfileComp.css";

function DisplacementProfileComp() {
  return (
    <div className="container-displaceMp">
      <div className="displaceMp">
        <button>
          <img
            src="https://i.ibb.co/6s6YcS2/myprofile-black.png"
            alt="myprofile-black"
          />
          My Profile
        </button>
        <button>
          <img
            src="https://i.ibb.co/3k94SgS/Appliedjobs-black.png"
            alt="Appliedjobs-black"
          />
          Applied jobs
        </button>
        <button>
          <img
            src="https://i.ibb.co/99xJ95N/Notifications-black.png"
            alt="Notifications-black"
          />
          Notifications
        </button>
        <button>
          <img
            src="https://i.ibb.co/ZBdwRsS/Savedjobs-black.png"
            alt="Savedjobs-black"
          />
          Saved jobs
        </button>
      </div>
    </div>
  );
}

export default DisplacementProfileComp;
