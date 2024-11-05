import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
import organizer from "../../../assets/Organizer/organizer.jpg";
import customimg from "../../home/magicBanner/image/img3.png";
import hostimg from "../../home/magicBanner/image/img5.png";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const AllServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations to trigger every time they come into view
    });

    // Refresh AOS when scrolling back to top
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <h3 className="mt-8 mb-5 text-center uppercase text-secondary font-extrabold text-xl  md:text-3xl">
        ミ★ 𝕎𝕚𝕟𝕟𝕘𝕠𝕠 𝔾𝕒𝕝𝕒 𝔼𝕧𝕖𝕟𝕥𝕤 ★彡
      </h3>
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 m-3 lg:m-12">
        {/* Card 1 */}
        <div
          className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100"
          data-aos="fade-right">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden">
            <img
              src={customimg}
              alt="Personal Celebrations"
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              <AiOutlineFieldTime /> Plan Now
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaCalendarAlt className="text-primary text-base" />
                Set your Date
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <CiLocationOn className="text-primary text-lg font-bold" />
                At Your Desired Location
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Personal Celebrations
            </h2>
            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Celebrate birthdays, weddings, anniversaries, and festivals with
              personalized event management that brings your vision to life.
            </p>
            <div className="flex justify-center">
              <Link to="/create-your-event">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2">
                  Plan Personal Celebration
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 1 End */}

        {/* Card 2 */}
        <div
          className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100"
          data-aos="fade-up">
          <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden">
            <img
              src={organizer}
              alt="Business Celebrations"
              className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
              <IoTicket /> Get Started
            </div>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-between">
              <p className="text-sm text-secondary font-medium flex gap-2">
                <FaCalendarAlt className="text-primary text-base" />
                Schedule Your Event
              </p>
              <p className="text-sm text-secondary font-medium flex gap-1">
                <CiLocationOn className="text-primary text-lg font-bold" />
                In Your Office or Venue
              </p>
            </div>
            <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
              Business Celebrations
            </h2>
            <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
              Host successful business events, from product launches to
              seminars, with professional planning and execution that impresses
              every attendee.
            </p>
            <div className="flex justify-center">
              <Link to="/request-organizer">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2">
                  Plan Business Celebration
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 End */}

        {/* Card 3 */}
        <div className="flex justify-center sm:col-span-2">
          <div
            className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100"
            data-aos="fade-up">
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden">
              <img
                src={hostimg}
                alt="Festivals and Other Celebrations"
                className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3">
                <FaPeopleGroup /> Celebrate Now
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="flex justify-between">
                <p className="text-sm text-secondary font-medium flex gap-2">
                  <FaPeopleLine className="text-primary text-base" />
                  Pick Your Festival
                </p>
                <p className="text-sm text-secondary font-medium flex gap-1">
                  <CiLocationOn className="text-primary text-lg font-bold" />
                  At Your Desired Location
                </p>
              </div>
              <h2 className="p-1 text-center text-2xl mt-2 font-semibold text-secondary capitalize">
                Festival and General Celebrations
              </h2>
              <p className="my-3 text-center text-sm text-secondary font-medium gap-2">
                Celebrate cultural festivals or create unique community events
                with our all-inclusive services to bring joy and connection.
              </p>
              <div className="flex justify-center">
                <Link to="/request-organizer">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2">
                    Plan Your Festival
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 End */}
      </div>
    </Container>
  );
};

export default AllServices;
