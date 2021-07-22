import React from "react";
import DetailJobComp from "../components/detailJobComp/DetailJobComp";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function JobDetailPage() {
  return (
    <div>
      <HeaderComp />
      <DetailJobComp />
      <FooterLightComp />
    </div>
  );
}

export default JobDetailPage;
