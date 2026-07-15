import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppointmentLanding = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📍",
      title: "Live Location",
      desc: "Find doctors and hospitals near your current location.",
    },
    {
      icon: "🤖",
      title: "AI Recommendations",
      desc: "Get specialist recommendations based on your symptoms.",
    },
    {
      icon: "⚡",
      title: "Real-Time Availability",
      desc: "View doctor availability and book instantly.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      desc: "Fast and secure payments.",
    },
  ];

  return (
    

      <section className="min-h-screen bg-[#F4F8FF] dark:bg-black py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold dark:text-white">
              Book Your Appointment
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose your preferred booking method. Search doctors manually or
              let our AI Health Assistant find the best specialist for you.
            </p>
               {/* Workflow */}
            <div className="mt-28">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold dark:text-white">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-5">
              {[
                "Share Location",
                "Choose Doctor / AI",
                "Select Slot",
                "Pay Securely",
                "Appointment Confirmed",
              ].map((step, index) => (
                <div
                  key={index}
                  className="
                  bg-white
                  dark:bg-[#111]
                  border
                  border-gray-200
                  dark:border-[#2A2A2A]
                  rounded-3xl
                  p-6
                  text-center
                "
                >
                  <div className="w-10 h-10 rounded-full bg-[#5044E5] text-white flex items-center justify-center mx-auto">
                    {index + 1}
                  </div>

                  <p className="mt-4 font-medium dark:text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </div>
          
          {/* Booking Cards */}
          <div className="flex justify-center">

            {/* Manual Booking */}
            <div
  className="
    group
    w-full
    max-w-6xl
    mx-auto
    bg-white
    dark:bg-[#111]
    border
    border-gray-200
    dark:border-[#2A2A2A]
    rounded-[32px]
    p-10
    text-center
    hover:border-[#5044E5]
    hover:-translate-y-2
    transition-all
    duration-500
    hover:shadow-[0_20px_60px_rgba(80,68,229,0.15)]
  "
>
  

  {/* Title */}
  <h2 className="mt-8 text-3xl font-bold dark:text-white">
    📍  Manual Booking
  </h2>

  {/* Description */}
  <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
    Search doctors yourself and choose your preferred appointment slot.
  </p>

  {/* Features */}
  <div className="mt-8 flex flex-col items-center gap-5">
    {[
      "Choose your location",
      "Select specialty",
      "Browse doctors nearby",
      "Pick date & time",
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-3 w-fit"
      >
        <div className="w-2 h-2 rounded-full bg-[#5044E5]" />
        <span className="dark:text-gray-300 text-lg">{item}</span>
      </div>
    ))}
  </div>

  {/* Button */}
  <div className="mt-10">
    <button
      onClick={() => navigate("/appointment/manual")}
      className="
        px-8
        py-4
        rounded-full
        border
        border-[#5044E5]
        text-[#5044E5]
        dark:text-white
        hover:bg-[#5044E5]
        hover:text-white
        transition-all
        duration-300
      "
    >
      Continue →
    </button>
  </div>
</div>
           
          <div/>
</div>
          {/* Features */}
          <div className="mt-28">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold dark:text-white">
                Why Choose Our Platform
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="
                  group
                  bg-white
                  dark:bg-[#111]
                  border
                  border-gray-200
                  dark:border-[#2A2A2A]
                  rounded-3xl
                  p-8
                  hover:border-[#5044E5]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_50px_rgba(80,68,229,0.15)]
                "
                >
                  <div className="text-4xl">{feature.icon}</div>

                  <h3 className="mt-6 text-xl font-semibold dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default AppointmentLanding;