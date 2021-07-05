import React from "react";
import FindCompanyComp from "../components/findCompanyComp/FindCompanyComp";
import BannerFindCompany from "../components/global/bannerComp/bannerFindCompany/BannerFindCompany";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function CompanySearchPage() {
  return (
    <div>
      <HeaderComp />
      <BannerFindCompany />
      <FindCompanyComp />
      <FooterLightComp />
    </div>
  );
}

export default CompanySearchPage;
