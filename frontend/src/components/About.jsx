import React from "react";
import assets from "../assets/asset";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-12 lg:px-24 bg-gray-50 dark:bg-black">
      
      {/* Section Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold dark:text-white">
          Who We Are
        </h2>

        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-16 h-[2px] bg-[#5044E5]" />
          <div className="w-3 h-3 rounded-full bg-[#5044E5]" />
          <div className="w-16 h-[2px] bg-[#5044E5]" />
        </div>

        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-8">
          Transform your documents, websites, and business knowledge into
          intelligent AI conversations powered by Retrieval-Augmented Generation.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="group">
          <img
            src={assets.doctor1}
            alt="AI Assistant"
            className="
              w-full
              rounded-3xl
              shadow-2xl
              transition-all
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-4xl lg:text-5xl font-bold dark:text-white leading-tight">
            {/* Build AI Chatbots That Understand Your Data */}
            Transforming Healthcare with AI Intelligence.
          </h3>

          <p className="mt-8 text-gray-600 dark:text-gray-400 leading-8">
            MedistAI brings together advanced AI technologies into a single healthcare platform. Our platform leverages Gemini Vision to interpret prescriptions and medical images while a RAG-powered chatbot retrieves relevant medical knowledge to provide accurate, context-aware healthcare assistance.
            
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
            By combining intelligent document analysis, personalized recommendations, and smart appointment scheduling, MedistAI helps patients access the right care with greater confidence and convenience.
          </p>

          {/* Platform Features Card */}
          <div
            className="
              group
              mt-10
              bg-white
              dark:bg-[#111]
              border
              border-gray-200
              dark:border-gray-700
              rounded-3xl
              p-8
              shadow-xl
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(80,68,229,0.25)]
              hover:border-[#5044E5]
              transition-all
              duration-500
            "
          >
            <h4
              className="
                text-2xl
                font-bold
                text-[#5044E5]
                mb-8
                group-hover:tracking-wide
                transition-all
                duration-500
              "
            >
              Platform Features
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>RAG-Based Medical Knowledge</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>Medical Report Understanding</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>Vector Search</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>AI Prescription Analysis</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>Instant Appointment Booking</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                <span className="text-xl">✅</span>
                <span>Personalized Healthcare Assistance</span>
              </div>

            </div>
          </div>

          {/* Bottom Badge */}
          <div className="flex items-center gap-4 mt-8">
            <div
              className="
                w-16
                h-16
                rounded-full
                bg-gradient-to-r
                from-[#5044E5]
                to-[#4d8cea]
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-xl
                shadow-lg
              "
            >
              AI
            </div>

            <div>
              <h4 className="text-xl font-semibold dark:text-white">
                Built for Modern Businesses
              </h4>

              <p className="text-gray-500 dark:text-gray-400">
                Custom RAG Solutions & AI Automation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;