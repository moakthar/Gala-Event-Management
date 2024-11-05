import React from "react";
import Banner from "./Banner";
import Description from "./Description";
import ImageGallery from "./ImageGallery";
import AllServices from "./allServices/AllServices";

const Booking = () => {
  return (
    <>
      <ImageGallery />
      {/* <AllServices /> */}
      <Banner />
      <Description />
    </>
  );
};

export default Booking;
