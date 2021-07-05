import React from "react";
import BookmarkExpiredComp from "../components/bookmarkExpiredComp/BookmarkExpiredComp";
import FooterLightComp from "../components/global/footerLightComp/FooterLightComp";
import HeaderComp from "../components/global/headerComp/HeaderComp";

function BookmarkExpiredPage() {
  return (
    <div>
      <HeaderComp />
      <BookmarkExpiredComp />
      <FooterLightComp />
    </div>
  );
}

export default BookmarkExpiredPage;
