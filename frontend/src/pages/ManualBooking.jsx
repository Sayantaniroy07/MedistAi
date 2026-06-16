import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManualBooking = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [formData, setFormData] = useState({
  fullName: "",
  age: "",
  gender: "",
  phone: "",
  countryCode: "+91",
  email: "",
  location: "",
  specialty: "",
});

  const specialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
    "Psychiatrist",
    "ENT Specialist",
    "Gynecologist",
    "Dentist",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleContinue = async () => {
  try {
    if (!file) {
      alert("Please upload a prescription");
      return;
    }

    const [lat, lng] = formData.location
      .split(",")
      .map((v) => v.trim());

    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("lat", lat);
    uploadData.append("lng", lng);

    const response = await fetch(
      "http://localhost:5000/api/upload/prescription",
      {
        method: "POST",
        body: uploadData,
      }
    );

    const data = await response.json();
    console.log("AI RESPONSE:", data);

    navigate("/appointment/analysis", {
      state: data,
    });

  } catch (error) {
    console.error(error);
    alert("Analysis failed");
  }
};
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setFormData((prev) => ({
          ...prev,
          location: `${latitude}, ${longitude}`,
        }));

        setLoadingLocation(false);
      },
      () => {
        alert("Unable to fetch location");
        setLoadingLocation(false);
      }
    );
  };

  return (
    <>

      <section className="min-h-screen bg-[#F4F8FF] dark:bg-black py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold dark:text-white">
              Manual Appointment Booking
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Upload your prescription and our AI will recommend the most
              relevant doctors.
            </p>
          </div>

          {/* Progress */}
          <div className="flex justify-center mb-16 overflow-x-auto">
            {["Location", "Details", "Doctors", "Slot", "Payment"].map(
              (step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                      index === 0 ? "bg-[#5044E5]" : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span className="mx-3 dark:text-white">{step}</span>

                  {index !== 4 && (
                    <div className="w-10 h-[2px] bg-gray-300"></div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Side */}
            <div className="lg:col-span-2">

              <div className="bg-white dark:bg-[#111] rounded-[32px] p-8 border border-gray-200 dark:border-[#2A2A2A]">

                <h2 className="text-3xl font-bold dark:text-white mb-8">
                  Patient Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="p-4 rounded-xl border dark:bg-[#1a1a1a] dark:text-white"
                  />

                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="p-4 rounded-xl border dark:bg-[#1a1a1a] dark:text-white"
                  />

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="p-4 rounded-xl border dark:bg-[#1a1a1a] dark:text-white"
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
<div className="flex gap-3">
  <select
    name="countryCode"
    className="
      px-4
      rounded-xl
      border
      dark:bg-[#1a1a1a]
      dark:text-white
      min-w-[110px]
    "
  >
    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+61">🇦🇺 +61</option>
    <option value="+971">🇦🇪 +971</option>
    <option value="+880">🇧🇩 +880</option>
    <option value="+977">🇳🇵 +977</option>
    <option value="+94">🇱🇰 +94</option>
  </select>

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="
      flex-1
      p-4
      rounded-xl
      border
      dark:bg-[#1a1a1a]
      dark:text-white
    "
  />
</div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 rounded-xl border md:col-span-2 dark:bg-[#1a1a1a] dark:text-white"
                  />
                </div>

                {/* Location */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold dark:text-white mb-4">
                    Choose Location
                  </h3>

                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={handleChange}
                      className="flex-1 p-4 rounded-xl border dark:bg-[#1a1a1a] dark:text-white"
                    />

                    <button
                      onClick={getLocation}
                      className="px-6 py-4 rounded-xl bg-[#5044E5] text-white hover:scale-105 transition-all"
                    >
                      {loadingLocation
                        ? "Fetching..."
                        : "Use My Location"}
                    </button>
                  </div>

                  {/* Map Preview */}
                  {formData.location && (
                    <div className="mt-6 rounded-2xl overflow-hidden border">
                      <iframe
                        title="map"
                        width="100%"
                        height="300"
                        loading="lazy"
                        src={`https://maps.google.com/maps?q=${formData.location}&z=15&output=embed`}
                      />
                    </div>
                  )}
                </div>

                {/* Specialty */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold dark:text-white mb-4">
                    Select Specialty
                  </h3>

                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border dark:bg-[#1a1a1a] dark:text-white"
                  >
                    <option value="">Choose Specialty</option>

                    {specialties.map((specialty, index) => (
                      <option key={index}>{specialty}</option>
                    ))}
                  </select>
                </div>

                {/* Upload */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold dark:text-white mb-4">
                    Upload Prescription
                  </h3>

                  <label
                    className="
                    block
                    border-2
                    border-dashed
                    border-[#5044E5]
                    rounded-3xl
                    p-12
                    text-center
                    cursor-pointer
                    hover:bg-[#EEF2FF]
                    dark:hover:bg-[#181818]
                    transition-all
                  "
                  >
                    <div className="text-6xl mb-4">☁️</div>

                    <p className="text-xl dark:text-white">
                      Click to Upload
                    </p>

                    <p className="text-gray-500 mt-2">
                      PDF, JPG, PNG Supported
                    </p>

                    <input
                      type="file"
                      hidden
                      onChange={handleFileUpload}
                    />
                  </label>

                  {file && (
                    <div className="mt-5 flex items-center justify-between bg-green-50 dark:bg-[#1a1a1a] p-4 rounded-xl border">
                      <div>
                        <p className="font-semibold text-green-600">
                          Uploaded Successfully
                        </p>

                        <p className="dark:text-white">
                          {file.name}
                        </p>
                      </div>

                      <button
                        onClick={() => setFile(null)}
                        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
                      >
                        Discard
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>

              <div className="sticky top-24 bg-white dark:bg-[#111] rounded-[32px] p-8 border border-gray-200 dark:border-[#2A2A2A]">

                <h2 className="text-2xl font-bold dark:text-white mb-6">
                  Appointment Summary
                </h2>

                <div className="space-y-6">

                  <div>
                    <p className="text-gray-500">Location</p>

                    <p className="font-semibold dark:text-white">
                      {formData.location || "Not Selected"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Specialty</p>

                    <p className="font-semibold dark:text-white">
                      {formData.specialty || "Not Selected"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Prescription</p>

                    <p className="font-semibold dark:text-white">
                      {file ? file.name : "Not Uploaded"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">
                      AI Recommendation
                    </p>

                    <p className="font-semibold text-[#5044E5]">
                      Generated After Submission
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  className="
                  w-full
                  mt-10
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#5044E5]
                  to-[#4d8cea]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                "
                >
                  Continue →
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ManualBooking;