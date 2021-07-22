import React from "react";
import HeaderComp from "../components/global/headerComp/HeaderComp";
import SearchComp from "../components/global/searchComp/SearchComp";
import FooterDarkComp from "../components/global/footerDarkComp/FooterDarkComp";
// import ModalComp from "../components/global/modalComp/ModalComp";
import FeaturedJobsComp from "../components/homeComp/featuredJobsComp/FeaturedJobsComp";
import HomeannerComp from "../components/homeComp/homeBannerComp/HomeannerComp";
import { PopularJobComp } from "../components/homeComp/popularJobComp/PopularJobComp";
import QuestionComp from "../components/homeComp/questionComp/QuestionComp";
import TopCompanyComp from "../components/homeComp/topCompanyComp/TopCompanyComp";
import UserDataComp from "../components/homeComp/userDataComp/UserDataComp";

function Homepage() {
  return (
    <div>
      <HeaderComp />
      <SearchComp />
      <FeaturedJobsComp />
      <PopularJobComp />
      <HomeannerComp />
      <TopCompanyComp />
      <QuestionComp />
      <UserDataComp />
      <FooterDarkComp />
    </div>
  );
}

export default Homepage;
