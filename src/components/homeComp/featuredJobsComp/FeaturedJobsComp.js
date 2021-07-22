import React, { useEffect } from "react";
import "./FeaturedJobsComp.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMini from "../../global/cardMini/CardMini";
import { useDispatch, useSelector } from "react-redux";
import { featureJobAsync } from "../../../redux/actions/homePageAct";

function FeaturedJobsComp() {
  const dispatch = useDispatch();
  const { companyData } = useSelector((state) => state.homepagered);

  const slice = companyData.slice(0, 8);
  const CardMiniView = slice.map((data1, index) => (
    <CardMini key={index} data={data1} />
  ));
  console.log("companyData", companyData);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    dispatch(featureJobAsync());
  }, [dispatch]);

  return (
    <div className="container-featur-global">
      <div className="featur-global">
        <div className="jusulfeatur">
          <h6>Featured Jobs</h6>
        </div>
        <p className="titlefeatur">
          Know your worth and find the job that qualify your life
        </p>
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
          {CardMiniView}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedJobsComp;
