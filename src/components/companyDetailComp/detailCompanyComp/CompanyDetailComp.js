import React from "react";
// import { useHistory } from "react-router-dom";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";
import "./CompanyDetailComp.css";

function CompanyDetailComp() {
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
    <div className="container-for-job-detail-description">
      <div className="router">
        <h6>
          Companies / Search Result /<span>Momo Wallet</span>
        </h6>
      </div>
      <div className="jobdesc-jobs">
        <h5>About Company</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit
          justo. Sed luctus, felis in tincidunt tincidunt, nisi odio rutrum
          nunc, ut pharetra tortor leo sed purus. Ut a nunc quam. Vestibulum
          elementum at purus ut feugiat. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Donec non diam ornare,
          commodo nulla at, congue massa. Proin eu metus orci. Sed ut laoreet
          libero.
        </p>
      </div>

      <div className="straight-jobdesc-jobs"></div>
      <div className="container-related-jobs">
        <h3>3 jobs at Momo Wallet</h3>
        <h4>20200 jobs live</h4>
      </div>
      <JoblistCard />
      <JoblistCard />
      <JoblistCard />
    </div>
  );
}

export default CompanyDetailComp;
