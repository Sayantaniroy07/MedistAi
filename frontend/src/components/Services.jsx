import React from "react";
import {
  FiFileText,
  FiGlobe,
  FiMessageSquare,
  FiSearch,
  FiHeadphones,
  FiBriefcase,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiFileText size={30} />,
      title: "PDF Chat",
      desc: "Upload documents and chat with your PDFs using AI-powered retrieval.",
    },
    {
      icon: <FiGlobe size={30} />,
      title: "Website Training",
      desc: "Train your chatbot using website content and online knowledge bases.",
    },
    {
      icon: <FiMessageSquare size={30} />,
      title: "Custom Chatbots",
      desc: "Create fully branded AI assistants tailored to your business.",
    },
    {
      icon: <FiSearch size={30} />,
      title: "Semantic Search",
      desc: "Retrieve the most relevant information with vector search technology.",
    },
    {
      icon: <FiHeadphones size={30} />,
      title: "Customer Support",
      desc: "Provide instant support with accurate, context-aware AI responses.",
    },
    {
      icon: <FiBriefcase size={30} />,
      title: "Knowledge Assistant",
      desc: "Help teams access company information instantly and efficiently.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 px-6 sm:px-12 lg:px-24 bg-[#F4F8FF] dark:bg-black"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold dark:text-white">
          Our Services
        </h2>

        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-16 h-[2px] bg-[#5044E5]" />
          <div className="w-3 h-3 rounded-full bg-[#5044E5]" />
          <div className="w-16 h-[2px] bg-[#5044E5]" />
        </div>

        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to build intelligent AI chatbots powered by your own data.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group
              p-8
              rounded-3xl
              border
              border-gray-200
              dark:border-gray-700
              bg-white
              dark:bg-[#111]
              hover:-translate-y-2
              hover:border-[#5044E5]
              hover:shadow-[0_20px_50px_rgba(80,68,229,0.2)]
              transition-all
              duration-500
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-[#5044E5]
                to-[#4d8cea]
                flex
                items-center
                justify-center
                text-white
                mb-6
                group-hover:scale-110
                transition-all
                duration-500
              "
            >
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold dark:text-white mb-4">
              {service.title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;