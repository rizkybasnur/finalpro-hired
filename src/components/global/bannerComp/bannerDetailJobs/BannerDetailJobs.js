import { useHistory } from "react-router-dom";
import "./BannerDetailJobs.css";

function BannerDetailJobs() {
  const history = useHistory();

  const companyLogoClick = (e) => {
    e.preventDefault();
    history.push("/companydetailpage");
  };

  // const containerClick = (e) => {
  //   e.preventDefault();
  //   history.push("/jobdetailpage");
  // };

  return (
    <div className="parent-container-banner-detail-job">
      <div className="container-for-banner-detail-jobs-page">
        <div className="content-for-banner-job-details">
          <img
            className="banner-logo-detail-page"
            src="https://i.ibb.co/0GZbf24/tokped-logo.png"
            alt="tokped-logo"
            onClick={companyLogoClick}
          />
          <div className="container-for-h-banner">
            <h5>Senior Product Designer</h5>
            <div className="job-detail-banner">
              <img
                className="company-banner"
                src="https://i.ibb.co/hCCZXFc/bag-icon.png"
                alt=""
              />
              <h6 className="joblist-detail">InVision</h6>
              <img
                className="location-banner"
                src="https://i.ibb.co/WV3zyZV/location-icon.png"
                alt=""
              />
              <h6 className="job-detail-banner">London, UK</h6>
              <img
                className="salary-banner"
                src="https://i.ibb.co/0K9LCBG/money-icon.png"
                alt=""
              />
              <h6 className="job-detail-banner">Rp7.500.000 - Rp9.500.000</h6>
            </div>
            <p>Full Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerDetailJobs;
