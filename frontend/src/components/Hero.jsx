import React, { useEffect, useState } from 'react' 
import assets from '../assets/asset'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";



const Hero = () => {
  const doctors = [
  assets.doctor1,
  assets.doctor2,
  assets.doctor3,
]
  const { loginWithRedirect ,isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const [currentDoctor, setCurrentDoctor] = useState(0)

  const handleGetStarted = () => {
  if (isAuthenticated) {
    navigate("/ui");
  } else {
    loginWithRedirect();
  }
};
  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentDoctor((prev) => (prev + 1) % doctors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])


  return (
  <>
    <div
      id="hero"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 xl:px-40 py-16 overflow-hidden"
    >
     <img
    src={assets.bgImage1}
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10 dark:hidden"
  />
         
     
      {/* LEFT SIDE - DOCTOR IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="relative w-[320px] sm:w-[380px] h-[450px]">
          {doctors.map((doctor, index) => (
            <img
              key={index}
              src={doctor}
              alt="doctor"
              className={`absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-1000 ${
                currentDoctor === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </div>
        
      </div>
  
      {/* RIGHT SIDE - CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-gray-700 dark:text-white">
       
          
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-extrabold leading-[0.95] tracking-[-0.03em]">
  <span className="text-white ">
 AI  
  </span>

  <br />

  <span className="bg-gradient-to-r from-[#5044E5] via-[#6D63FF] to-[#4d8cea] bg-clip-text text-transparent">
   HEALTH CARE ASSISTANT
  </span>



  

</h1>
     <br/>     
        

        
       <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
           Experience AI-powered healthcare solutions and connect with
         nearby trusted doctors anytime, anywhere. and seamless appointment booking.
        </p> 
          
        
        <button
  onClick={handleGetStarted}
  className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-medium hover:scale-105 transition"
>
  Start Chat →
</button>
         
          
      </div>
       
     </div>

   </> 
  )
} 
export default Hero 
