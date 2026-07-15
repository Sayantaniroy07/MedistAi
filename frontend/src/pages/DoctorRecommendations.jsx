import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DoctorRecommendations = () => {
  const navigate = useNavigate();
const [profileDoctor, setProfileDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState("");
const location = useLocation();

console.log("========== LOCATION STATE ==========");
console.log(location.state);

const analysis = {
  disease:
    location.state?.disease ||
    location.state?.analysis?.disease ||
    "Unknown",

  specialist:
    location.state?.specialty ||
    location.state?.analysis?.specialty ||
    "General Physician",

  confidence:
    location.state?.confidence ||
    location.state?.analysis?.confidence ||
    "N/A",
};
const doctors =
  location.state?.doctors || [];
console.log("========== LOCATION STATE ==========");
console.log(location.state);
  const dates = [
    "Today",
    "Tomorrow",
    "19 July",
    "20 July",
    "21 July",
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
{/* AI Detailed Report */}

<div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2A2A2A] mb-12">

  {/* Symptoms */}

  <h2 className="text-2xl font-bold dark:text-white mb-5">
    Symptoms
  </h2>

  <div className="flex flex-wrap gap-3 mb-8">
    {(location.state?.symptoms || []).map((symptom, index) => (
      <span
        key={index}
        className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium"
      >
        {symptom}
      </span>
    ))}
  </div>

  {/* Medicines */}

  <details className="rounded-xl border border-gray-200 dark:border-[#2A2A2A] p-5">

    <summary className="cursor-pointer text-xl font-semibold dark:text-white">
      Medicines Prescribed
    </summary>

    <ul className="mt-5 space-y-3">

      {(location.state?.medicines || []).map((medicine, index) => (

        <li
          key={index}
          className="flex items-center gap-3 dark:text-white"
        >
          💊 {medicine}
        </li>

      ))}

    </ul>

  </details>

</div>
        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {doctors.map((doctor) => (
  <div
    key={doctor.id}
    className={`rounded-3xl border p-6 bg-white dark:bg-[#111]
    transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
    ${
      selectedDoctor?.id === doctor.id
        ? "border-[#5044E5] ring-2 ring-[#5044E5]"
        : "border-gray-200 dark:border-[#2A2A2A]"
    }`}
  >
    {/* Doctor Header */}

    <div className="flex gap-5 items-center">

      <div className="w-20 h-20 rounded-full bg-[#EEF2FF]
      flex items-center justify-center text-4xl">
        👨‍⚕️
      </div>

      <div className="flex-1">

        <h2 className="text-2xl font-bold dark:text-white">
          {doctor.name}
        </h2>

        

        <p className="text-gray-500 text-sm mt-1">
          Siliguri, West Bengal
        </p>

      </div>

    </div>

    {/* Doctor Info */}

    <div className="grid grid-cols-2 gap-4 mt-6 text-sm dark:text-white">

      <div>
  ⭐ <strong>{doctor.rating}</strong>
</div>

<div>
  🩺 {doctor.specialty}

</div>

<div>
  📞 {doctor.contact}
</div>

<div className="col-span-2">
  📍 {doctor.location}
</div>




    </div>

    {/* Availability */}

    <div className="mt-5">

      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

        🟢 Available

      </span>

    </div>

    {/* Buttons */}

    <div className="mt-8 flex gap-3">

      <button
  onClick={() => setProfileDoctor(doctor)}
  className="flex-1 py-3 rounded-xl border border-[#5044E5]
  text-[#5044E5] hover:bg-[#EEF2FF] transition"
>
  View Profile
</button>

      <button
        onClick={() => {
          setSelectedDoctor(doctor);
          setSelectedSlot("");
        }}
        className="flex-1 py-3 rounded-xl
        bg-[#5044E5] text-white hover:scale-105 transition"
      >
        Select
      </button>

    </div>

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
<span>📍 {selectedDoctor.location}</span>
<span>📞 {selectedDoctor.contact}</span>                </div>

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
  onClick={() =>
    navigate("/appointment/payment", {
      state: {
        patient: location.state?.patient,
        analysis,
        doctor: selectedDoctor,
        date: selectedDate,
        time: selectedSlot,
      },
    })
  }
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
      {profileDoctor && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

   <div className="relative bg-white dark:bg-[#111] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border border-gray-200 dark:border-[#2A2A2A] shadow-2xl">

      <button
  onClick={() => setProfileDoctor(null)}
  className="sticky top-0 float-right text-2xl w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#222] dark:text-white transition"
>
  ✕
</button>

      <div className="flex gap-6 items-center mt-4">

  <div className="w-24 h-24 rounded-full bg-[#EEF2FF] flex items-center justify-center text-5xl">
    👨‍⚕️
  </div>

  <div className="flex-1">

    <h2 className="text-3xl font-bold dark:text-white">
      {profileDoctor.name}
    </h2>

    <p className="text-[#5044E5] font-semibold mt-1">
      {profileDoctor.specialty}
    </p>

    

    <p className="text-gray-500 dark:text-gray-300">
      💼 {profileDoctor.experience}
    </p>

  </div>

</div>

      <div className="grid grid-cols-2 gap-5 mt-8 text-sm dark:text-white">

  <div className="bg-gray-100 dark:bg-[#1b1b1b] rounded-xl p-4">
    ⭐ <strong>{profileDoctor.rating}</strong>
  </div>

  <div className="bg-gray-100 dark:bg-[#1b1b1b] rounded-xl p-4">
    📞 {profileDoctor.contact}
  </div>
<div  className="bg-gray-100 dark:bg-[#1b1b1b] rounded-xl p-4 col-span-2">
      <span className="text-[#5044E5]">Qualifications:</span>   {profileDoctor.qualifications}
    </div>
  <div className="bg-gray-100 dark:bg-[#1b1b1b] rounded-xl p-4 col-span-2">
    <span className="text-[#5044E5]">Location:</span> {profileDoctor.location}
  </div>

  <div className="bg-gray-100 dark:bg-[#1b1b1b] rounded-xl p-4">
    <span className="text-[#5044E5]">Fees:</span> ₹700 - ₹800
  </div>

</div>

      <div className="mt-8">

  <h3 className="font-bold text-xl dark:text-white mb-2">
    Languages
  </h3>

  <div className="flex flex-wrap gap-2">

    <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#5044E5]">
      English
    </span>

    <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#5044E5]">
      Hindi
    </span>

    <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#5044E5]">
      Bengali
    </span>

  </div>

</div>

      <div className="mt-8">

        <h3 className="font-bold text-xl dark:text-white">
          About Doctor
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
           {profileDoctor.about}
          
        </p>

      </div>

      <div className="mt-10 flex gap-4">

        <button
          onClick={() => setProfileDoctor(null)}
          className="flex-1 py-3 rounded-xl border border-[#5044E5]
  text-[#5044E5] hover:bg-[#EEF2FF] transition"
        >
          Close
        </button>

        <button
          onClick={() => {
            setSelectedDoctor(profileDoctor);
            setProfileDoctor(null);
          }}
          className="flex-1 py-3 rounded-xl bg-[#5044E5] text-white"
        >
          Select Doctor
        </button>

      </div>

    </div>

  </div>
)}
    </section>
  );
};

export default DoctorRecommendations;