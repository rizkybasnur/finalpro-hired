import React from "react";
import FindJobComp from "../components/findJobComp/FindJobComp";
import BannerFindJobs from "../components/global/bannerComp/bannerFindJobs/BannerFindJobs";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function FindJobsPage() {
  return (
    <div>
      <HeaderComp />
      <BannerFindJobs />
      <FindJobComp />
      <FooterLightComp />
    </div>
  );
}

export default FindJobsPage;
