import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/asset";

const Appointment = () => {
  const navigate = useNavigate();

  const steps = [
  {
    step: "Step 1",
    title: "Share Your Location",
    desc: "Allow location access or search your area manually.",
  },
  {
    step: "Step 2",
    title: "Choose Doctor or AI",
    desc: "Book manually or let AI recommend the right specialist.",
  },
  {
    step: "Step 3",
    title: "Confirm & Consult",
    desc: "Select a slot, pay securely and visit the doctor.",
  },
];

  return (
    <section
      id="appointment"
      className="py-28 px-6 sm:px-12 lg:px-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold dark:text-white">
  Smart Healthcare Booking
</h2>

          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Find nearby doctors, get AI-powered recommendations, and book appointments in just a few clicks.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            {steps.map((item, index) => (
  <div key={index} className="mb-6">

    <div
      className="
        group
        p-8
        rounded-3xl
        border
        border-gray-200
        dark:border-[#2A2A2A]
        bg-[#F8FAFF]
        dark:bg-[#111]
        hover:border-[#5044E5]
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(80,68,229,0.15)]
        dark:hover:shadow-[0_20px_50px_rgba(80,68,229,0.25)]
        transition-all
        duration-500
        cursor-pointer
      "
    >
      {/* Step Badge */}
      <span
        className="
          inline-flex
          px-5
          py-2
          rounded-full
          border
          border-gray-300
          dark:border-gray-600
          text-sm
          font-medium
          dark:text-white
          group-hover:border-[#5044E5]
          group-hover:text-[#5044E5]
          transition-all
        "
      >
        {item.step}
      </span>

      {/* Title */}
      <h3
        className="
          mt-6
          text-4xl
          font-semibold
          dark:text-white
          group-hover:text-[#5044E5]
          transition-all
        "
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          text-lg
          leading-8
          text-gray-600
          dark:text-gray-400
        "
      >
        {item.desc}
      </p>
    </div>

  </div>
))}

            {/* Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => navigate("/appointment")}
                className="
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#5044E5]
                  to-[#4d8cea]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
              Book Appointment →
              </button>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={assets.hero_img}
              alt="AI Chatbot"
              className="
                w-full
                max-w-lg
                rounded-[40px]
                shadow-2xl
                object-cover
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;