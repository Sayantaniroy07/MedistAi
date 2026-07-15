import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
const { patient, analysis, doctor, date, time } = location.state || {};
  const [selectedMethod, setSelectedMethod] = useState("UPI");

  const consultationFee = 700;
  const platformFee = 49;
  const gst = 27;

  const total = consultationFee + platformFee + gst;


  return (
    <section className="min-h-screen bg-[#F4F8FF] dark:bg-black py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold dark:text-white">
            Secure Payment
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Complete your appointment booking securely.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Appointment Summary */}
          <div className="lg:col-span-1">

            <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2A2A2A] sticky top-8">

              <h2 className="text-2xl font-bold dark:text-white mb-6">
                Appointment Summary
              </h2>

              <div className="space-y-5">
                <div>
  <p className="text-gray-500 text-sm">Patient Name</p>
  <h3 className="font-semibold dark:text-white">
    {patient?.fullName}
  </h3>
</div>

<div>
  <p className="text-gray-500 text-sm">Age</p>
  <h3 className="font-semibold dark:text-white">
    {patient?.age}
  </h3>
</div>

<div>
  <p className="text-gray-500 text-sm">Gender</p>
  <h3 className="font-semibold dark:text-white">
    {patient?.gender}
  </h3>
</div>

<div>
  <p className="text-gray-500 text-sm">Phone Number</p>
  <h3 className="font-semibold dark:text-white">
    {patient?.phone}
  </h3>
</div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Doctor
                  </p>

                  <h3 className="font-semibold text-lg dark:text-white">
                    {doctor?.name} 
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
    Specialist
  </p>

  <h3 className="font-semibold dark:text-white">
    {doctor?.specialty}
  </h3>

                  <div className="mt-6">
  <p className="text-gray-500 text-sm">
    Disease Detected
  </p>

 <h3 className="font-semibold text-lg text-red-500">
  {analysis?.disease}
</h3>
</div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Appointment Date
                  </p>

                  <h3 className="font-semibold dark:text-white">
                    {date}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Appointment Time
                  </p>

                  <h3 className="font-semibold dark:text-white">
                    {time}
                  </h3>
                </div>

              </div>

              <div className="border-t border-gray-200 dark:border-[#2A2A2A] my-8"></div>

              <div className="space-y-4">

                <div className="flex justify-between dark:text-white">
                  <span>Consultation Fee</span>
                  <span>₹{consultationFee}</span>
                </div>

                <div className="flex justify-between dark:text-white">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>

                <div className="flex justify-between dark:text-white">
                  <span>GST</span>
                  <span>₹{gst}</span>
                </div>

                <div className="border-t border-gray-200 dark:border-[#2A2A2A] pt-4 flex justify-between text-xl font-bold dark:text-white">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

            </div>

          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-2">

            <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-[#2A2A2A]">

              <h2 className="text-2xl font-bold dark:text-white mb-8">
  UPI Payment
</h2>

<div className="bg-[#F8FAFF] dark:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-200 dark:border-[#2A2A2A]">

  <div className="flex items-center gap-4 mb-6">

    <div className="w-14 h-14 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-3xl">
      📱
    </div>

    <div>
      <h3 className="text-xl font-semibold dark:text-white">
        Pay Using UPI
      </h3>

      <p className="text-gray-500 dark:text-gray-400">
        Google Pay, PhonePe, Paytm, BHIM & other UPI apps
      </p>
    </div>

  </div>

  <input
    type="text"
    placeholder="Enter your UPI ID (example@upi)"
    className="w-full p-4 rounded-xl border border-gray-300 dark:border-[#2A2A2A] bg-white dark:bg-black dark:text-white outline-none"
  />

  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
    After clicking <strong>Pay ₹{total}</strong>, you'll be redirected to your preferred UPI app to complete the payment securely.
  </p>

</div>

              {/* <h2 className="text-2xl font-bold dark:text-white mb-8">
                Select Payment Method
              </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-5">

                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`
                      cursor-pointer
                      rounded-2xl
                      p-6
                      border
                      transition-all
                      duration-300
                      ${
                        selectedMethod === method.id
                          ? "border-[#5044E5] bg-[#EEF2FF] dark:bg-[#1a1a1a]"
                          : "border-gray-200 dark:border-[#2A2A2A]"
                      }
                    `}
                  >
                    <div className="text-4xl">
                      {method.icon}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold dark:text-white">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {method.desc}
                    </p>
                  </div>
                ))}

              </div> */}

              {/* Demo Payment Form */}
              {/* <div className="mt-10">

                <div className="bg-[#F8FAFF] dark:bg-[#1a1a1a] rounded-2xl p-6">

                   <h3 className="text-lg font-semibold dark:text-white mb-5">
    UPI Payment
  </h3>

  <input
    type="text"
    placeholder="Enter UPI ID (e.g. username@upi)"
    className="w-full p-4 rounded-xl border border-gray-300 dark:border-[#2A2A2A] bg-white dark:bg-black dark:text-white outline-none"
  />

  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
    You will be redirected to your preferred UPI app to complete the payment.
  </p>
                </div>

              </div> */}

              {/* Security */}
              {/* <div className="mt-8 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-5">
                <p className="text-green-700 dark:text-green-400">
                  🔒 Your payment is encrypted and secured.
                </p>
              </div> */}

              {/* CTA */}
              <button
                onClick={() => navigate("/appointment/success")}
                className="
                  mt-10
                  w-full
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#5044E5]
                  to-[#4d8cea]
                  text-white
                  text-lg
                  font-semibold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Pay ₹{total}
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Payment;