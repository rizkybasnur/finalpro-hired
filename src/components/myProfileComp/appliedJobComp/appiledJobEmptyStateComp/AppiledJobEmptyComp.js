import React from "react";
import "./AppiledJobEmptyComp.css";

function AppiledJobEmptyComp() {
  return (
    <div className="container-EmptyState">
      <h3>Applied Jobs</h3>
      <div className="child-EmptyState">
        <img src="https://i.ibb.co/mSf3vzj/Empty-State.png" alt="Empty-State" />
        <h4>See all your applied jobs here</h4>
        <h5>Explore new opportunities, maybe?</h5>
        <button>Find jobs</button>
      </div>
    </div>
  );
}

export default AppiledJobEmptyComp;
