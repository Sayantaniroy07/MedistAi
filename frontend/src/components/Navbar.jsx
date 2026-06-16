// user name thik korte hobe scroll ber er end e button of create accout er and get start o thik korte hobe


import React, { useState } from "react";
import assets from "../assets/asset";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user , isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40  py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />

      <div
  className={`text-gray-700 dark:text-white sm:text-sm
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
  max-sm:text-white
  max-sm:flex
  max-sm:flex-col
  max-sm:items-center
  max-sm:justify-center
  flex sm:items-center gap-8
  transition-transform duration-300`}
>
        {/* to close the crossber in phone */}
        <img
          src={assets.close_icon}
          alt=""
          className="w-6 absolute right-10 top-6 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        {/* navbar elements */}
        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#about"
          className="sm:hover:border-b"
        >
          About
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#appointment"
          className="sm:hover:border-b"
        >
          Appointmet
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />{" "}
        {/*menu side for phone only */}
        
  
  <>
  {!isAuthenticated ? (
    <>
      <button className="text-sm max-sm:hidden flex items-center gap-2 bg-primary dark:bg-[#5044E5] to-[#4d8cea] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
                onClick={() => loginWithRedirect()}
                
              >
                Create Account <img src={assets.arrow_icon} width={14} alt="" />
              </button>
              <button
                onClick={() =>
                  loginWithRedirect({
                    authorizationParams: {
                      screen_hint: "signup",
                    },
                  })
                }
                
              >
               
              </button>

              </>
            
          ) : (
            <>
           <span className="text-gray-700 dark:text-white">
  Welcome, {user?.name?.split(" ")[0]}
</span>
              <button  className="text-sm max-sm:hidden flex items-center gap-2 bg-primary dark:bg-[#5044E5] to-[#4d8cea] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
              >
                Logout
              </button>
            </>
          )}
       
      </>
      
      </div>
    </div>
  );
};

export default Navbar;