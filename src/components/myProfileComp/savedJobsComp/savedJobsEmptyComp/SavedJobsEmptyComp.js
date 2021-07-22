import React from "react";
import "./SavedJobsEmptyComp.css";

function SavedJobsEmptyComp() {
  return (
    <div className="container-SavedJobsEmptyComp">
      <h3>Saved Jobs</h3>
      <div className="child-SavedJobsEmptyComp">
        <img src="https://i.ibb.co/Pr1v21c/New-file.png" alt="New-file" />
        <h4>See all your saved jobs here</h4>
        <h5>Don’t forget to check it once in a while</h5>
        <button>Find jobs</button>
      </div>
    </div>
  );
}

export default SavedJobsEmptyComp;
