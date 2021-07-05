import React from "react";
import BannerDetailJobs from "../components/global/bannerComp/bannerDetailJobs/BannerDetailJobs";
import DetailJobComp from "../components/detailJobComp/DetailJobComp";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function JobDetailPage() {
  return (
    <div>
      <HeaderComp />
      <BannerDetailJobs />
      <DetailJobComp />
      <FooterLightComp />
    </div>
  );
}

export default JobDetailPage;
