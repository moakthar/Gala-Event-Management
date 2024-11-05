import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import ReviewInput from "./ReviewInput";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";

const Reviews = () => {
  // Static review data (replace with your actual data)
  const reviews = [
    {
      _id: "1",
      name: "John Doe",
      time: "2 hours ago",
      rating: 5,
      text: "Winngoo Gala Celebration made our event unforgettable! Everything was perfect.",
    },
    {
      _id: "2",
      name: "Jane Smith",
      time: "1 day ago",
      rating: 4,
      text: "Great organization and ambiance, but the catering could be improved.",
    },
    {
      _id: "3",
      name: "Mike Johnson",
      time: "3 days ago",
      rating: 5,
      text: "Had an amazing time! The team was professional and attentive.",
    },
    {
      _id: "4",
      name: "Emily Davis",
      time: "1 week ago",
      rating: 3,
      text: "It was a nice event, but I expected more activities and entertainment.",
    },
  ];

  return (
    <div className="flex flex-col gap-5 my-20 lg:px-10 px-2">
      <div className="w-full">
        <h2 className="text-primary text-3xl mb-10 text-center font-semibold">
          Testimonials
        </h2>
        <h3 className="text-3xl text-center font-semibold mb-10 text-gray-800 uppercase">
          What Our Clients Say About Winngoo Gala Celebration
        </h3>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
          className="mySwiper h-60 text-center">
          {reviews.map((data) => (
            <SwiperSlide
              key={data._id}
              className="p-2 rounded-lg mb-5 bg-slate-100">
              <div className="flex gap-7 bg-slate-300 p-2 rounded-t-lg justify-center">
                <img
                  src="https://i.ibb.co/s6CHS24/profile3.png"
                  className="w-10 h-10 rounded-full"
                  alt="person"
                />
                <div className="flex flex-col">
                  <h2 className="uppercase text-primary font-semibold">
                    {data.name}
                  </h2>
                  <p className="text-sm">{data.time}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 justify-center">
                <p className="font-semibold">{data.rating}</p>
                <Rating style={{ maxWidth: 80 }} value={data.rating} readOnly />
              </div>

              <p className="mt-2 px-7 py-1">{data.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full ">
        <ReviewInput />
      </div>
    </div>
  );
};

export default Reviews;
