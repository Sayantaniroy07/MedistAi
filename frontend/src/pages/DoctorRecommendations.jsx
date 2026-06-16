import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DoctorRecommendations = () => {
  const navigate = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState("");

const location = useLocation();

const analysis = {
  disease:
    location.state?.disease || "Unknown",

  specialist:
    location.state?.specialization ||
    "General Physician",
};

const doctors =
  location.state?.doctors || [];

  const dates = [
    "Today",
    "Tomorrow",
    "24 Jun",
    "25 Jun",
    "26 Jun",
  ];

  const slots = {
    Morning: [
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
    ],
    Afternoon: [
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "03:00 PM",
    ],
    Evening: [
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "07:00 PM",
    ],
  };

  return (
    <section className="min-h-screen bg-[#F4F8FF] dark:bg-black py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold dark:text-white">
            Recommended Doctors
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            AI found the best specialists based on your prescription.
          </p>
        </div>

        {/* AI Summary */}
        <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2A2A2A] mb-12">

          <div className="flex flex-wrap gap-10">

            <div>
              <p className="text-sm text-gray-500">
                Disease
              </p>

              <h3 className="text-xl font-bold dark:text-white">
                {analysis.disease}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Specialist
              </p>

              <h3 className="text-xl font-bold text-[#5044E5]">
                {analysis.specialist}
              </h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Confidence
              </p>

              <h3 className="text-xl font-bold text-green-600">
                {analysis.confidence}
              </h3>
            </div>

          </div>

        </div>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="
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
              duration-300
            "
            >
              <div className="w-20 h-20 rounded-full bg-[#EEF2FF] flex items-center justify-center text-4xl">
                👨‍⚕️
              </div>

              <h2 className="mt-6 text-2xl font-bold dark:text-white">
                {doctor.name}
              </h2>

              <p className="text-[#5044E5] font-medium mt-2">
                {doctor.specialty}
              </p>

              <div className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <div>⭐ {doctor.rating}</div>
                <div>📍 {doctor.distance}</div>
                <div>💼 {doctor.experience}</div>

                <div>
                  {doctor.available
                    ? "🟢 Available Today"
                    : "🔴 Fully Booked"}
                </div>
              </div>

              <button
                disabled={!doctor.available}
                onClick={() => {
                  setSelectedDoctor(doctor);
                  setSelectedSlot("");
                }}
                className={`
                  mt-8
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  ${
                    doctor.available
                      ? "bg-[#5044E5] text-white hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Select Doctor
              </button>
            </div>
          ))}

        </div>

        {/* Slot Selection */}
        {selectedDoctor && (
          <div className="mt-20">

            <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2A2A2A]">

              <h2 className="text-3xl font-bold dark:text-white">
                Select Appointment Slot
              </h2>

              {/* Doctor Info */}
              <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFF] dark:bg-[#1a1a1a]">

                <h3 className="text-2xl font-bold dark:text-white">
                  {selectedDoctor.name}
                </h3>

                <p className="text-[#5044E5] mt-2">
                  {selectedDoctor.specialty}
                </p>

                <div className="mt-4 flex flex-wrap gap-5 text-gray-600 dark:text-gray-400">
                  <span>⭐ {selectedDoctor.rating}</span>
                  <span>📍 {selectedDoctor.distance}</span>
                  <span>💼 {selectedDoctor.experience}</span>
                </div>

              </div>

              {/* Date Selection */}
              <div className="mt-10">

                <h3 className="text-xl font-semibold dark:text-white mb-4">
                  Choose Date
                </h3>

                <div className="flex flex-wrap gap-3">

                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-5 py-3 rounded-xl border transition-all
                        ${
                          selectedDate === date
                            ? "bg-[#5044E5] text-white border-[#5044E5]"
                            : "border-gray-300 dark:border-[#2A2A2A] dark:text-white"
                        }`}
                    >
                      {date}
                    </button>
                  ))}

                </div>

              </div>

              {/* Slots */}
              {Object.entries(slots).map(([period, times]) => (
                <div key={period} className="mt-10">

                  <h3 className="text-xl font-semibold dark:text-white mb-4">
                    {period}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedSlot(time)}
                        className={`px-5 py-3 rounded-xl border transition-all
                          ${
                            selectedSlot === time
                              ? "bg-[#5044E5] text-white border-[#5044E5]"
                              : "border-gray-300 dark:border-[#2A2A2A] dark:text-white"
                          }`}
                      >
                        {time}
                      </button>
                    ))}

                  </div>

                </div>
              ))}

              {/* Summary */}
              {selectedSlot && (
                <div className="mt-12 p-8 rounded-3xl bg-[#EEF2FF] dark:bg-[#1a1a1a]">

                  <h3 className="text-2xl font-bold dark:text-white mb-5">
                    Appointment Summary
                  </h3>

                  <p className="dark:text-white">
                    <strong>Doctor:</strong> {selectedDoctor.name}
                  </p>

                  <p className="mt-3 dark:text-white">
                    <strong>Date:</strong> {selectedDate}
                  </p>

                  <p className="mt-3 dark:text-white">
                    <strong>Time:</strong> {selectedSlot}
                  </p>

                  <button
                    onClick={() => navigate("/appointment/payment")}
                    className="
                    mt-8
                    px-8
                    py-4
                    rounded-full
                    bg-gradient-to-r
                    from-[#5044E5]
                    to-[#4d8cea]
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                  >
                    Continue To Payment →
                  </button>

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default DoctorRecommendations;