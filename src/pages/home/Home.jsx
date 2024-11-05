import React from "react";
import TeamCards from "../../components/cards/TeamCards";
import Booking from "../bookings/Booking";
import NewsLetter from "../newsLetter/NewsLetter";
import Organizer from "./Organizer/Organizer";
// import Banner from "./Banner";
// import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";
import AllServices from "../bookings/allServices/AllServices";
import Banner from "../bookings/Banner";
import Description from "../bookings/Description";
// import Faqac from "../../pages/portfolio/faq/Faqac"

const Home = () => {
  return (
    <div>
      <MagicBanner />
      {/* <Banner/> */}
      {/* <FeatureEvents/> */}
      <Organizer />
      {/* <PopularEvents /> */}
      <AllServices />
      <Banner />
      <Description />
      {/* <TeamCards /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
