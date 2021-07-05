import React from "react";
import JobDetailComp from "./jobDetailComp/JobDetailComp";
import "./DetailJobComp.css";
import JobOverviewComp from "./jobOverviewComp/JobOverviewComp";

function DetailJobComp() {
  return (
    <div className="container-for-job-detail-and-card">
      <JobDetailComp />
      <JobOverviewComp />
    </div>
  );
}

export default DetailJobComp;
