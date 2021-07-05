import React from "react";
import "./SuccessSubmitComp.css";

function SuccessSubmitComp() {
  return (
    <div className="parent-container-for-success-submit">
      <div className="container-for-success-submit">
        <img
          src="https://i.ibb.co/MBr12ph/checklist-image.png"
          alt="checklist-image"
        />
        <h4>Application Submitted</h4>
        <h5>
          Your application for Senior Product Designer at Momo Wallet has been
          submitted. Just sit back and wait for the next steps!
        </h5>
        <button>View my applications</button>
      </div>
    </div>
  );
}

export default SuccessSubmitComp;
