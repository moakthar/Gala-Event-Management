import React from "react";
import { useState } from "react";
import Container from "../../../components/container/Container";

const WinngooGalaFAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const faqs = [
    {
      title: "What types of events do you specialize in?",
      color: "green",
      description:
        "At Winngoo Gala, we specialize in a variety of events, including elegant weddings, vibrant birthday parties, corporate gatherings, and grand galas, ensuring a unique experience for every occasion.",
    },
    {
      title: "Can you assist with event design and decor?",
      color: "sky",
      description:
        "Absolutely! Our team offers comprehensive event design and decor services to transform your venue into a breathtaking space, tailored to your vision and event theme.",
    },
    {
      title: "What sets your event services apart from others?",
      color: "purple",
      description:
        "Our commitment to personalized service, attention to detail, and innovative approaches set us apart. We focus on creating memorable and customized experiences for each client.",
    },
    {
      title: "Do you provide catering services for events?",
      color: "amber",
      description:
        "Yes! We offer full catering services, including a diverse menu that can be customized to fit your guests' tastes and dietary needs, ensuring a delightful culinary experience.",
    },
    {
      title: "Are audiovisual services available for events?",
      color: "red",
      description:
        "Definitely! We provide state-of-the-art audiovisual services to enhance your event, including sound systems and lighting setups that create an engaging atmosphere.",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 lg:flex my-20">
        <div className="lg:w-[40%] flex justify-center items-center">
          <h2 className="text-4xl mb-4 md:mb-0 md:mr-8 text-center md:text-left font-medium text-slate-600">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 p-2 md:p-6 lg:w-[60%]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              {/* Header / Title */}
              <div
                onClick={() => handleToggle(idx)}
                className={`px-4 md:px-8 py-6 ${
                  idx === 0
                    ? "bg-green-50 border-green-500"
                    : idx === 1
                    ? "bg-sky-50 border-sky-500"
                    : idx === 2
                    ? "bg-purple-50 border-purple-500"
                    : idx === 3
                    ? "bg-amber-50 border-amber-500"
                    : idx === 4
                    ? "bg-red-50 border-red-500"
                    : "bg-orange-50 border-orange-500"
                } border-l-[3px] cursor-pointer`}>
                <div className="flex items-center">
                  <span>
                    <svg
                      className={`mr-4 ${
                        idx === 0
                          ? "fill-green-900"
                          : idx === 1
                          ? "fill-sky-900"
                          : idx === 2
                          ? "fill-purple-900"
                          : idx === 3
                          ? "fill-amber-900"
                          : idx === 4
                          ? "fill-red-900"
                          : "fill-orange-900"
                      } shrink-0`}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                  <h4
                    className={`${
                      idx === 0
                        ? "text-green-900"
                        : idx === 1
                        ? "text-sky-900"
                        : idx === 2
                        ? "text-purple-900"
                        : idx === 3
                        ? "text-amber-900"
                        : idx === 4
                        ? "text-red-900"
                        : "text-orange-900"
                    } text-xl`}>
                    {faq.title}
                  </h4>
                </div>
              </div>
              {/* Body / Content */}
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                  <div
                    className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm ${
                      idx === 0
                        ? "text-green-900 bg-green-50 border-green-500"
                        : idx === 1
                        ? "text-sky-900 bg-sky-50 border-sky-500"
                        : idx === 2
                        ? "text-purple-900 bg-purple-50 border-purple-500"
                        : idx === 3
                        ? "text-amber-900 bg-amber-50 border-amber-500"
                        : idx === 4
                        ? "text-red-900 bg-red-50 border-red-500"
                        : "text-orange-900 bg-orange-50 border-orange-500"
                    }`}>
                    {faq.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WinngooGalaFAQ;
