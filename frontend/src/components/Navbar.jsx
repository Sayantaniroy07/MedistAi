
import React, { useState } from "react";
import assets from "../assets/asset";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const navItem =
    "relative transition-all duration-300 hover:text-[#5044E5] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5044E5] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-[#0F172A]/80 border-b border-gray-200/30 dark:border-white/10">
      <div className="max-w-[1500px] mx-auto h-24 px-6 lg:px-14 xl:px-20 flex items-center">

        {/* LOGO */}
        <div className="flex-1">
          <img
            src={theme === "dark" ? assets.navlogo : assets.navlogo_light}
            alt="MedistAI"
            className="w-44 lg:w-48 cursor-pointer object-contain"
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <div
          className={`flex-1 flex justify-center items-center
          gap-10 lg:gap-12
          text-[17px] font-medium text-gray-700 dark:text-white
          ${
            !sidebarOpen
              ? "max-sm:translate-x-full"
              : "max-sm:translate-x-0"
          }
          max-sm:fixed
          max-sm:inset-0
          max-sm:w-screen
          max-sm:h-screen
          max-sm:bg-primary
          max-sm:flex-col
          max-sm:justify-center
          max-sm:items-center
          max-sm:text-white
          transition-transform duration-300`}
        >
          <img
            src={assets.close_icon}
            alt=""
            className="w-7 absolute right-8 top-8 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />

          <a href="#" className={navItem} onClick={() => setSidebarOpen(false)}>
            Home
          </a>

          <a
            href="#about"
            className={navItem}
            onClick={() => setSidebarOpen(false)}
          >
            About
          </a>

          <a
            href="#services"
            className={navItem}
            onClick={() => setSidebarOpen(false)}
          >
            Services
          </a>

          <a
            href="#appointment"
            className={navItem}
            onClick={() => setSidebarOpen(false)}
          >
            Appointment
          </a>

          <a
            href="#contact-us"
            className={navItem}
            onClick={() => setSidebarOpen(false)}
          >
            ContactUs
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-end items-center gap-4">

          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            className="w-8 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />

          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="hidden sm:flex items-center gap-2 px-7 py-3 rounded-full text-white text-[16px] font-medium bg-gradient-to-r from-[#5044E5] to-[#4d8cea] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Create Account
              <img src={assets.arrow_icon} width={15} alt="" />
            </button>
          ) : (
            <>
              <span className="hidden lg:block text-[16px] text-gray-700 dark:text-white">
                Welcome, {user?.given_name || user?.name?.split("@")[0]}
              </span>

              <button
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
                className="hidden sm:flex items-center px-7 py-3 rounded-full text-white text-[16px] font-medium bg-gradient-to-r from-[#5044E5] to-[#4d8cea] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
