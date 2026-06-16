import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmergency } from "react-icons/md";

const Features = () => {
  const features = [
    {
      icon: <FaUserDoctor size={35} />,
      title: "Qualified Doctors",
      description:
        "Connect instantly with experienced and verified healthcare professionals.",
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      icon: <FiPhoneCall size={35} />,
      title: "24 Hours Service",
      description:
        "Get medical assistance anytime with round-the-clock AI and doctor support.",
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      icon: <MdEmergency size={35} />,
      title: "Need Emergency",
      description:
        "Receive quick guidance and emergency assistance when every second matters.",
      bg: "bg-red-100",
      color: "text-red-500",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              border
              border-gray-200
              dark:border-gray-700
              rounded-2xl
              p-10
              text-center
              bg-white
              dark:bg-[#111]
              hover:-translate-y-4
              hover:shadow-[0_20px_50px_rgba(80,68,229,0.25)]
              hover:border-[#5044E5]
              transition-all
              duration-500
              cursor-pointer
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                from-[#5044E5]/10
                via-transparent
                to-[#4d8cea]/10
              "
            />

            {/* Icon */}
            <div
              className={`
                relative
                z-10
                w-24
                h-24
                mx-auto
                rounded-full
                flex
                items-center
                justify-center
                ${item.bg}
                group-hover:scale-110
                group-hover:rotate-6
                transition-all
                duration-500
              `}
            >
              <span className={item.color}>{item.icon}</span>
            </div>

            {/* Title */}
            <h3
              className="
                relative
                z-10
                mt-6
                text-2xl
                font-semibold
                dark:text-white
                group-hover:text-[#5044E5]
                transition-all
                duration-300
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                relative
                z-10
                mt-4
                text-gray-500
                dark:text-gray-400
                leading-relaxed
              "
            >
              {item.description}
            </p>

            {/* Bottom Line Animation */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                bg-gradient-to-r
                from-[#5044E5]
                to-[#4d8cea]
                group-hover:w-full
                transition-all
                duration-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;