import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../assets/logo/gala.png";
import toast from "react-hot-toast";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display an error if the email is not provided
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    // Create an object with the form data
    const templateParams = {
      from_name: email,
      subject: subject,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_g1insga", // Replace with your EmailJS service ID
        "template_e7ou4th", // Replace with your EmailJS template ID
        templateParams,
        "0qmj3B4kXlx14_9iv" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          toast.success("Your message has been sent! 😊");

          // Reset the form fields
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mt-5 underline">
        Contact Us
      </h2>
      <div className="mt-10 p-5 flex flex-col md:flex-row max-w-5xl mx-auto text-black">
        <div className="md:w-1/2">
          <img src={logo} alt="Dream Craft" className="w-32" />
          <h2 className="text-2xl font-semibold mb-3">Reach Us At</h2>
          <hr className="w-32" />
          <h2 className="text-2xl font-semibold">+1 234 567 8900</h2>
          <p className="text-base mb-3">Book online or call us</p>
          <h2 className="text-2xl font-semibold">contact@winngoogala.com</h2>
          <div className="flex items-center">
            <p className="text-base mb-3">
              Send us an email or use the contact form
            </p>
            <AiOutlineArrowRight className="text-xl ml-2" />
          </div>
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="text-base mb-3">
            123 Gala Street <br /> Gala City, GC 12345
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-20">
          <h2 className="text-2xl font-semibold">SEND US A MESSAGE</h2>
          <hr className="w-52" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 outline-none border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@dreamcraft.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block p-3 w-full text-sm outline-none bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm outline-none bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a message..."></textarea>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center text-white w-auto mx-auto mt-2 p-2 bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 lg:w-auto hover:bg-red-600 focus:ring-4 focus:ring-opacity-50 rounded-lg px-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
