import React from "react";
import JobList from "./jobList/JobList";
import "./FindJobComp.css";
import SearchAndFilter from "./searchAndFilter/SearchAndFilter";

function FindJobComp() {
  return (
    <div className="content-detail-job">
      <SearchAndFilter />
      <JobList />
    </div>
  );
}

export default FindJobComp;
