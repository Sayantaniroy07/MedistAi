import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentSuccess = () => {
  const navigate = useNavigate();

  const appointment = {
    id: "MEDI-2026-4587",
    doctor: "Dr. Rahul Sharma",
    specialty: "ENT Specialist",
    date: "Tomorrow",
    time: "10:30 AM",
    location: "Apollo Clinic, Siliguri",
  };

  return (
    <section className="min-h-screen bg-[#F4F8FF] dark:bg-black flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">

        <div className="bg-white dark:bg-[#111] rounded-[32px] p-10 border border-gray-200 dark:border-[#2A2A2A] shadow-xl">

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-5xl">
              ✅
            </div>
          </div>

          <div className="text-center mt-8">
            <h1 className="text-5xl font-bold dark:text-white">
              Appointment Confirmed
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your booking has been successfully completed.
            </p>
          </div>

          {/* Appointment Card */}
          <div className="mt-10 bg-[#F8FAFF] dark:bg-[#1a1a1a] rounded-3xl p-8">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-gray-500 text-sm">
                  Appointment ID
                </p>
                <h3 className="font-bold text-lg dark:text-white">
                  {appointment.id}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Doctor
                </p>
                <h3 className="font-bold text-lg dark:text-white">
                  {appointment.doctor}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Specialty
                </p>
                <h3 className="font-bold dark:text-white">
                  {appointment.specialty}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Date & Time
                </p>
                <h3 className="font-bold dark:text-white">
                  {appointment.date} • {appointment.time}
                </h3>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm">
                  Location
                </p>
                <h3 className="font-bold dark:text-white">
                  {appointment.location}
                </h3>
              </div>

            </div>

          </div>

          {/* Reminder Box */}
          <div className="mt-8 bg-[#EEF2FF] dark:bg-[#17172B] rounded-2xl p-6 border border-[#5044E5]/20">
            <h3 className="font-semibold text-[#5044E5]">
              🔔 Reminder Enabled
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We'll notify you before your appointment via email, SMS,
              or app notification.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <button
              className="
                py-4
                rounded-2xl
                border
                border-[#5044E5]
                text-[#5044E5]
                font-semibold
                hover:bg-[#5044E5]
                hover:text-white
                transition-all
              "
            >
              Download Receipt
            </button>

            <button
              onClick={() => navigate("/")}
              className="
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-[#5044E5]
                to-[#4d8cea]
                text-white
                font-semibold
                hover:scale-[1.02]
                transition-all
              "
            >
              Back To Home
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppointmentSuccess;