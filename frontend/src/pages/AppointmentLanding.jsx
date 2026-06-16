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
          </div>

          {/* Booking Cards */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Manual Booking */}
            <div
              className="
              group
              bg-white
              dark:bg-[#111]
              border
              border-gray-200
              dark:border-[#2A2A2A]
              rounded-[32px]
              p-10
              hover:border-[#5044E5]
              hover:-translate-y-2
              transition-all
              duration-500
              hover:shadow-[0_20px_60px_rgba(80,68,229,0.15)]
            "
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] dark:bg-[#1a1a1a] flex items-center justify-center text-3xl">
                📍
              </div>

              <h2 className="mt-8 text-3xl font-bold dark:text-white">
                Manual Booking
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Search doctors yourself and choose your preferred appointment slot.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Choose your location",
                  "Select specialization",
                  "Browse doctors nearby",
                  "Pick date & time",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5044E5]" />
                    <span className="dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/appointment/manual")}
                className="
                mt-10
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
                Continue Manually →
              </button>
            </div>

            {/* AI Assistant */}
            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              p-10
              bg-gradient-to-br
              from-[#5044E5]
              to-[#4d8cea]
              text-white
              hover:-translate-y-2
              transition-all
              duration-500
              shadow-[0_20px_60px_rgba(80,68,229,0.35)]
            "
            >
              <span
                className="
                absolute
                top-5
                right-5
                px-4
                py-1
                rounded-full
                bg-white/20
                text-sm
              "
              >
                Recommended
              </span>

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                🤖
              </div>

              <h2 className="mt-8 text-3xl font-bold">
                AI Health Assistant
              </h2>

              <p className="mt-4 text-white/90">
                Describe your symptoms naturally and let AI find the right doctor.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Describe symptoms naturally",
                  "AI recommends specialist",
                  "Find nearby doctors",
                  "Book available slots instantly",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span>✨</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/appointment/ai")}
                className="
                mt-10
                px-8
                py-4
                rounded-full
                bg-white
                text-[#5044E5]
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
              >
                Start AI Consultation →
              </button>
            </div>
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

          {/* CTA */}
          <div className="text-center mt-24">
            <button
              onClick={() => navigate("/appointment/ai")}
              className="
              px-10
              py-5
              rounded-full
              bg-gradient-to-r
              from-[#5044E5]
              to-[#4d8cea]
              text-white
              font-semibold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
            >
              Start Booking →
            </button>
          </div>

        </div>
      </section>
    
  );
};

export default AppointmentLanding;