import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Container from "../../components/container/Container"; // Adjust the path as necessary
import toast from "react-hot-toast"; // Optional: Remove if not needed
import emailjs from "emailjs-com"; // Import EmailJS

const RequestOrganizer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useEffect to handle side effects
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    console.log("RequestOrganizer component mounted"); // Optional logging

    // Reset the form on mount if needed
    reset();

    // Cleanup function if needed when the component unmounts
    return () => {
      console.log("RequestOrganizer component unmounted"); // Optional logging
    };
  }, []); // Empty dependency array to run on mount/unmount

  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Log form data for debugging

    // Send email using EmailJS
    emailjs
      .send("service_zeepeqs", "template_dzl5f4x", data, "0qmj3B4kXlx14_9iv")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Request submitted!"); // Notify user of successful submission
        reset(); // Reset the form after submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send request. Please try again.");
      });
  };

  return (
    <div className="bg-[#E9F8F3B2] py-16">
      <Container>
        <div className="p-10 bg-white rounded-md">
          <div className="text-center">
            <h2 className="text-3xl text-dark_01 font-medium">
              Request for Organizer
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company Name"
                {...register("company", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.company && (
                <span className="text-red-500">Company name is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-gray-700 font-semibold mb-1">
                Event Organization Experience
              </label>
              <textarea
                {...register("experience", { required: true })}
                placeholder="Event Organization Experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              {errors.experience && (
                <span className="text-red-500">Experience is required</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Event Organization Skills
              </label>
              <textarea
                {...register("skills", { required: true })}
                placeholder="Event Organization Skills"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              {errors.skills && (
                <span className="text-red-500">Skills are required</span>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-primary px-4 py-2 rounded-md text-white uppercase">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default RequestOrganizer;
