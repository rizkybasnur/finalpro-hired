import React, { useState, useEffect } from "react";
import "./TopCompanyComp.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardTop from "../../global/cardTop/CardTop";
import { useDispatch, useSelector } from "react-redux";
import { topCompanyAsync } from "../../../redux/actions/homePageAct";

function TopCompanyComp() {
  const dispatch = useDispatch();
  const { companyData } = useSelector((state) => state.homepagered);

  const cardTopView = companyData.map((data1, index) => (
    <CardTop key={index} data={data1} />
  ));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    dispatch(topCompanyAsync());
  }, [dispatch]);
  return (
    <div className="conten-judul">
      <div className="conten-judul-container">
        <p className="judul-top">Top Company Registered</p>
        <p className="title-top">
          Some of the companies we’re helped recruit excellent applicants over
          the past years
        </p>
        <div className="gelobat-judul">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {cardTopView}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopCompanyComp;
