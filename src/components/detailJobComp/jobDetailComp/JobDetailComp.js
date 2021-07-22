import React from "react";
import "./JobDetailComp.css";
import { useState } from "react";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";

function JobDetailComp({ jobData, getDataByID }) {
  const [indexAkhir, setIndexAkhir] = useState(3);
  const list = jobData && jobData.slice(0, indexAkhir);

  return (
    <>
      {getDataByID && (
        <div className="container-for-job-detail-description">
          <div className="router">
            <h6>
              Find Jobs / Search Result /{" "}
              <span>
                {getDataByID.company_id && getDataByID.company_id.company_name}/
                {getDataByID.job_title}
              </span>
            </h6>
          </div>
          <div className="jobdesc-jobs">
            <h5>Job Description</h5>
            <p>{getDataByID.description}</p>
          </div>
          <div className="jobdesc-jobs">
            <h5>Key Responsibilities</h5>
            <p>
              <ul>
                <li>{getDataByID.job_responsibilities}</li>
              </ul>
            </p>
          </div>
          <div className="jobdesc-jobs">
            <h5>Requirements</h5>
            <p>
              <ul>
                <li>{getDataByID.job_requirements}</li>
              </ul>
            </p>
          </div>
          <div className="straight-jobdesc-jobs"></div>
          <div className="container-related-jobs">
            <h3>Related Jobs</h3>
            <h4>20200 jobs live</h4>
          </div>

          <JoblistCard data={list} />
        </div>
      )}
    </>
  );
}

export default JobDetailComp;
