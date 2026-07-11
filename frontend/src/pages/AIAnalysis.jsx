import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AIAnalysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
  setProgress((prev) => {
    if (prev >= 100) {
      clearInterval(interval);

      setTimeout(() => {
        navigate("/appointment/recommendations", {
          state: location.state,
        });
      }, 1000);

      return 100;
    }

    return prev + 10;
  });
}, 400);

return () => clearInterval(interval);
}, [navigate, location]);

  return (
    <section className="min-h-screen bg-[#F4F8FF] dark:bg-black flex items-center justify-center px-6">

      <div className="bg-white dark:bg-[#111] p-10 rounded-3xl max-w-2xl w-full border border-gray-200 dark:border-[#2A2A2A]">

        <div className="text-center">

          <div className="text-6xl mb-6">
            🤖
          </div>

          <h1 className="text-4xl font-bold dark:text-white">
            AI Analyzing Prescription
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Extracting disease, symptoms and recommending specialists...
          </p>

        </div>

        <div className="mt-10">

          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-center mt-4 font-semibold dark:text-white">
            {progress}%
          </p>

        </div>

        <div className="mt-10 space-y-4">

          <div className="p-4 rounded-xl bg-[#EEF2FF] dark:bg-[#1a1a1a]">
            ✓ Reading Prescription
          </div>

          <div className="p-4 rounded-xl bg-[#EEF2FF] dark:bg-[#1a1a1a]">
            ✓ Extracting Medical Terms
          </div>

          <div className="p-4 rounded-xl bg-[#EEF2FF] dark:bg-[#1a1a1a]">
            ✓ Finding Best Specialist
          </div>

          <div className="p-4 rounded-xl bg-[#EEF2FF] dark:bg-[#1a1a1a]">
            ✓ Preparing Doctor Recommendations
          </div>

        </div>

      </div>

    </section>
  );
};

export default AIAnalysis; 