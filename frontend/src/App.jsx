import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import AppointmentLanding from "./pages/AppointmentLanding";
import ManualBooking from "./pages/ManualBooking";
import AIAnalysis from "./pages/AIAnalysis";
import DoctorRecommendations from "./pages/DoctorRecommendations";
import Footer from "./components/Footer";
import Payment from "./pages/Payment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import Ui from "./components/Ui";
import Chat from "./components/Chat";


function Home({ theme, setTheme }) {
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
       <Features />
         <About />
         <Services />
         <Contact />
         <Appointment />
         <Footer />

    </div>
  );
}

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  return (
    <Routes>
      <Route
        path="/"
        element={<Home theme={theme} setTheme={setTheme} />}
      />

      <Route path="/Ui" element={<Ui />} />
        <Route path="/chat" element={<Chat />} />

         <Route path="/appointment" element={ <AppointmentLanding  theme={theme} setTheme={setTheme}
    />
    }
/>
<Route
  path="/appointment/manual"
  element={<ManualBooking />}
/>

<Route
  path="/appointment/analysis"
  element={<AIAnalysis />}
/>
<Route
  path="/appointment/recommendations"
  element={<DoctorRecommendations />}
/>
<Route
  path="/appointment/payment"
  element={<Payment />}
/>
<Route
  path="/appointment/success"
  element={<AppointmentSuccess />}
/>
    </Routes>
  );
};

export default App;


