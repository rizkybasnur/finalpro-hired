import { useHistory } from "react-router-dom";
import "./BannerDetailJobs.css";

function BannerDetailJobs({ getDataByID }) {
  const history = useHistory();

  const companyLogoClick = (e) => {
    e.preventDefault();
    history.push("/jobdetailpage/:id/submitted");
  };

  return (
    <>
      {getDataByID && (
        <div className="parent-container-banner-detail-job">
          <div className="container-for-banner-detail-jobs-page">
            <div className="content-for-banner-job-details">
              <img
                className="banner-logo-detail-page"
                src={getDataByID?.company_id?.company_logo}
                alt="tokped-logo"
                onClick={companyLogoClick}
              />
              <div className="container-for-h-banner">
                <h5>{getDataByID?.job_title}</h5>
                <div className="job-detail-banner">
                  <img
                    className="company-banner"
                    src="https://i.ibb.co/hCCZXFc/bag-icon.png"
                    alt=""
                  />
                  <h6 className="joblist-detail">
                    {getDataByID?.company_id?.company_name}
                  </h6>
                  <img
                    className="location-banner"
                    src="https://i.ibb.co/WV3zyZV/location-icon.png"
                    alt=""
                  />
                  <h6 className="job-detail-banner">
                    {getDataByID?.company_id?.location}
                  </h6>
                  <img
                    className="salary-banner"
                    src="https://i.ibb.co/0K9LCBG/money-icon.png"
                    alt=""
                  />
                  <h6 className="job-detail-banner">
                    {getDataByID?.salary_range &&
                      getDataByID?.salary_range[0].description}
                  </h6>
                </div>
                <p>
                  {getDataByID?.job_types &&
                    getDataByID?.job_types[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BannerDetailJobs;
