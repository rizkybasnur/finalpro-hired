import React from "react";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";
import "./SavedJobsComp.css";

function SavedJobsComp() {
  return (
    <div className="parent-container-saved">
      <h4>Saved Jobs</h4>
      <div className="box-saved">
        <JoblistCard />
        <JoblistCard />
        <JoblistCard />
        <JoblistCard />
        <JoblistCard />
      </div>
    </div>
  );
}

export default SavedJobsComp;
