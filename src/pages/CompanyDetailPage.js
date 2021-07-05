import React from "react";
import DetailCompanyComp from "../components/companyDetailComp/DetailCompanyComp";
import BannerCompanyDetail from "../components/global/bannerComp/bannerCompanyDetail/BannerCompanyDetail";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function CompanyDetailPage() {
  return (
    <div>
      <HeaderComp />
      <BannerCompanyDetail />
      <DetailCompanyComp />
      <FooterLightComp />
    </div>
  );
}

export default CompanyDetailPage;
