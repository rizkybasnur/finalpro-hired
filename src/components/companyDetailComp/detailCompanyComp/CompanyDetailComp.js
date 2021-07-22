import "./CompanyDetailComp.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";

function CompanyDetailComp({ jobData, getCompanyByID }) {
  const [indexAkhir, setIndexAkhir] = useState(3);
  const list = jobData.slice(0, indexAkhir);

  // const history = useHistory();

  // const jobTitleClick = (e) => {
  //   e.preventDefault();
  //   history.push("/jobdetailpage");
  // };

  // const companyLogoClick = (e) => {
  //   e.preventDefault();
  //   history.push("/companydetailpage");
  // };

  return (
    <>
      {getCompanyByID && (
        <div className="container-for-job-detail-description">
          <div className="router">
            <h6>
              Companies / Search Result /
              <span>{getCompanyByID.company_name}</span>
            </h6>
          </div>
          <div className="jobdesc-jobs">
            <h5>About Company</h5>
            <p>{getCompanyByID.company_about}</p>
          </div>
          <div className="straight-jobdesc-jobs"></div>
          <div className="container-related-jobs">
            <h3>3 jobs at {getCompanyByID.company_name}</h3>
            <h4>20200 jobs live</h4>
          </div>
          <JoblistCard data={list} />
        </div>
      )}
    </>
  );
}

export default CompanyDetailComp;
