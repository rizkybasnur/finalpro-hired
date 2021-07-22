import React from "react";
import "./FindCompanyComp.css";
import CompanyContainer from "./companyContainer/CompanyContainer";
import SearchCard from "./searchCard/SearchCard";

function FindCompanyComp() {
  return (
    <div className="content-company-search-and-container">
      <SearchCard />
      <CompanyContainer />
    </div>
  );
}

export default FindCompanyComp;
