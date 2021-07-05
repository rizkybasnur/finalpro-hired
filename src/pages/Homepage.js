import React from "react";
import HeaderComp from "../components/global/headerComp/HeaderComp";
import SearchComp from "../components/global/searchComp/SearchComp";
import FooterDarkComp from "../components/global/footerDarkComp/FooterDarkComp";

function Homepage() {
  return (
    <div>
      <HeaderComp />
      <SearchComp />
      <FooterDarkComp />
    </div>
  );
}

export default Homepage;
