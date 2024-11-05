import React, { useEffect } from "react";
import { LuDollarSign } from "react-icons/lu";
import {
  MdOutlineCardMembership,
  MdOutlineContacts,
  MdOutlineCurrencyRupee,
  MdOutlineThumbUpAlt,
} from "react-icons/md";
import Container from "../../components/container/Container";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Description = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Set to false to trigger animations again when scrolled back
    });
  }, []);

  const goToEvents = () => {
    navigate("/events");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <Container>
      <div className="bg-[#F4F4F4] rounded-md py-10 px-20 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div data-aos="fade-up">
            <MdOutlineContacts className="text-4xl text-primary" />
            <h4 className="mt-6 text-2xl font-semibold">Contact Us</h4>
            <p className="mt-2 text-xl font-medium text-primary">
              Get in touch with our team to start planning your event.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <MdOutlineCurrencyRupee className="text-4xl text-primary" />
            <h4 className="mt-6 text-2xl font-semibold">Select & Pay</h4>
            <p className="mt-2 text-xl font-medium text-primary">
              Choose the event package that fits your needs and budget.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <MdOutlineCardMembership className="text-4xl text-primary" />
            <h4 className="mt-6 text-2xl font-semibold">Invite Your Friends</h4>
            <p className="mt-2 text-xl font-medium text-primary">
              Send out invitations to your guests for the big day.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="700">
            <MdOutlineThumbUpAlt className="text-4xl text-primary" />
            <h4 className="mt-6 text-2xl font-semibold">
              Enjoy Your Celebration
            </h4>
            <p className="mt-2 text-xl font-medium text-primary">
              Relax and enjoy while we manage your event seamlessly.
            </p>
            <motion.button
              onClick={goToEvents}
              type="button"
              initial={{ y: 0 }}
              whileHover={{ y: -5 }} // Move the button up when hovered
              whileTap={{ scale: 0.95 }} // Slightly shrink when clicked
              className="text-white bg-gradient-to-br from-violet-500 to-violet-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center me-2 mb-2 mt-2">
              <span className="flex gap-2">
                <span>Go to Events</span>
                <span className="mt-1">
                  <FaArrowTrendUp />
                </span>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Description;
