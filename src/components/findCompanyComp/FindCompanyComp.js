import React from "react";
import SearchCard from "./searchCard/SearchCard";
import "./FindCompanyComp.css";
import CompanyContainer from "./companyContainer/CompanyContainer";

function FindCompanyComp() {
  return (
    <div className="content-company-search-and-container">
      <SearchCard />
      <CompanyContainer />
    </div>
  );
}

export default FindCompanyComp;
