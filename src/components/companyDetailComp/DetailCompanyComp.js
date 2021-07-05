import React from "react";
import "./DetailCompanyComp.css";
import CompanyDetailComp from "./detailCompanyComp/CompanyDetailComp";
import CompanyOverviewComp from "./companyOverviewComp/CompanyOverviewComp";

function DetailCompanyComp() {
  return (
    <div className="container-for-job-detail-and-card">
      <CompanyDetailComp />
      <CompanyOverviewComp />
    </div>
  );
}

export default DetailCompanyComp;
