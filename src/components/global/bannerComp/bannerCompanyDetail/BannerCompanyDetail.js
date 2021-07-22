import React from "react";
import "./BannerCompanyDetail.css";

function BannerCompanyDetail({ getCompanyByID }) {
  return (
    <>
      {getCompanyByID && (
        <div className="container-for-banner-company-detail-page">
          <img
            className="banner-jobs"
            src={getCompanyByID.company_logo}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default BannerCompanyDetail;
