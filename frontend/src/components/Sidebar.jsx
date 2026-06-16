import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  FiPlus,
  FiSearch,
  FiImage,
  FiBook,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useAuth0();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:relative
          top-0 left-0
          h-screen
          bg-[#171717]
          border-r border-gray-800
          flex flex-col justify-between
          z-50
          transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "md:w-20" : "md:w-72"}
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <div>
          <div className="flex items-center justify-between p-5">
            {!sidebarCollapsed && (
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
                MedistAi
              </h1>
            )}

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setSidebarCollapsed(!sidebarCollapsed)
                }
                className="hidden md:block"
              >
                <FiMenu />
              </button>

              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden"
              >
                <FiX />
              </button>
            </div>
          </div>

          <div className="px-4">
            <button className="w-full bg-[#232323] p-3 rounded-xl flex items-center gap-3">
              <FiPlus />
              {!sidebarCollapsed && "New Chat"}
            </button>
          </div>

          <div className="mt-8 px-4 space-y-6 text-gray-300">
            <div className="flex items-center gap-3">
              <FiSearch />
              {!sidebarCollapsed && "Search Chats"}
            </div>

            <div className="flex items-center gap-3">
              <FiImage />
              {!sidebarCollapsed && "Images"}
            </div>

            <div className="flex items-center gap-3">
              <FiBook />
              {!sidebarCollapsed && "Library"}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 p-4 relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 w-full"
          >
            <img
              src={user?.picture}
              className="w-10 h-10 rounded-full"
            />

            {!sidebarCollapsed && (
              <div>
                <p>{user?.name}</p>
                <p className="text-xs text-gray-400">
                  {user?.email}
                </p>
              </div>
            )}
          </button>

          {profileOpen && (
            <div className="absolute bottom-20 left-4 right-4 bg-[#242424] rounded-xl p-4">
              <button
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
                className="w-full bg-red-600 py-2 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;