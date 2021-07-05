import "./JobList.css";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Collapse from "react-bootstrap/Collapse";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";

function JobList() {
  const [open, setOpen] = useState(false);
  const { select } = useSelector((state) => state.selectred);

  return (
    <div className="joblist-list-title-box">
      {/* DETAIL JUMLAH JOBS TERDISPLAY */}
      <div className="joblist-list-title">
        <h6>Showing 1-6 of 12 jobs</h6>
        <div className="container-for-selected-items">
          {select.map((tes) => (
            <h6 className="container-for-selected-h6">{tes || []}</h6>
          ))}
        </div>

        <select className="filter-by-time-dropdown">
          <option>New Jobs</option>
          <option>Last 7 days</option>
          <option>Last month</option>
        </select>
      </div>

      {/* DISPLAY JOBLIST */}
      <JoblistCard />
      <JoblistCard />
      <JoblistCard />
      <JoblistCard />
      <JoblistCard />
      <JoblistCard />
      <Collapse in={open}>
        <div id="example-collapse-text">
          <JoblistCard />
          <JoblistCard />
          <JoblistCard />
          <JoblistCard />
          <JoblistCard />
          <JoblistCard />
        </div>
      </Collapse>

      {/* EXPANDING BUTTON */}
      <div className="show-more-button-joblist">
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

export default JobList;
