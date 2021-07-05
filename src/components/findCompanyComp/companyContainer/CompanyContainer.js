import React, { useState } from "react";
import CompanyCard from "../../global/cardComp/companyCard/CompanyCard";
import "./CompanyContainer.css";
import Collapse from "react-bootstrap/Collapse";

function CompanyContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-for-company-list">
      <div className="joblist-list-title">
        <h6>Showing 41-60 of 12,364 jobs</h6>
        <select className="filter-by-time-dropdown">
          <option>New Jobs</option>
          <option>Last 7 days</option>
          <option>Last month</option>
        </select>
      </div>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />

      <Collapse in={open}>
        <div id="example-collapse-text">
          <CompanyCard />
          <CompanyCard />
        </div>
      </Collapse>
      <div className="show-more-button-company-list">
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default CompanyContainer;
