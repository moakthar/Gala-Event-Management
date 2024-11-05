import React from "react";
import Gallery from "./gallery/Gallery";
import Banner from "./portfolio_banner/PortfolioBanner";
import VideoComponent from "./videoDocuments/VideoComponent";
import Faqac from "../portfolio/faq/Faqac";

const Portfolio = () => {
  return (
    <div className="mt-2">
      <Banner />
      <VideoComponent />
      {/* <Faq/> */}
      <Faqac />
    </div>
  );
};

export default Portfolio;
