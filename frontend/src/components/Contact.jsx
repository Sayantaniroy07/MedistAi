import React from "react";

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="py-28 px-6 sm:px-12 lg:px-24 bg-[#F8F7FF] dark:bg-black"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold dark:text-white">
          Reach Out To Us
        </h2>

        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-16 h-[2px] bg-[#5044E5]" />
          <div className="w-3 h-3 rounded-full bg-[#5044E5]" />
          <div className="w-16 h-[2px] bg-[#5044E5]" />
        </div>

        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-8">
          Have questions about our AI chatbot platform? We'd love to hear
          from you and help you build intelligent conversational experiences.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto mt-16">
        <form className="space-y-6">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-[#111]
                  dark:text-white
                  focus:outline-none
                  focus:border-[#5044E5]
                  focus:ring-4
                  focus:ring-[#5044E5]/10
                  transition-all
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium dark:text-white">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-[#111]
                  dark:text-white
                  focus:outline-none
                  focus:border-[#5044E5]
                  focus:ring-4
                  focus:ring-[#5044E5]/10
                  transition-all
                "
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium dark:text-white">
                Subject
              </label>

              <input
                type="text"
                placeholder="Write subject"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-[#111]
                  dark:text-white
                  focus:outline-none
                  focus:border-[#5044E5]
                  focus:ring-4
                  focus:ring-[#5044E5]/10
                  transition-all
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium dark:text-white">
                Phone
              </label>

              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="
                  w-full
                  px-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  dark:border-gray-700
                  bg-white
                  dark:bg-[#111]
                  dark:text-white
                  focus:outline-none
                  focus:border-[#5044E5]
                  focus:ring-4
                  focus:ring-[#5044E5]/10
                  transition-all
                "
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium dark:text-white">
              Your Message
            </label>

            <textarea
  rows="7"
  placeholder="Write something here..."
  className="
    w-full
    px-4
    py-4
    rounded-xl
    border
    border-gray-300
    dark:border-gray-700
    bg-white
    dark:bg-[#111]
    text-gray-800
    dark:text-white
    placeholder:text-gray-400
    dark:placeholder:text-gray-500
    resize-none
    focus:outline-none
    focus:border-[#5044E5]
    focus:ring-4
    focus:ring-[#5044E5]/10
    transition-all
  "
/>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="
                px-10
                py-4
                rounded-full
                bg-gradient-to-r
                from-[#5044E5]
                to-[#4d8cea]
                text-white 
                font-semibold
                shadow-lg
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(80,68,229,0.35)]
                transition-all
                duration-300
              "
            >
              Send Message 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;