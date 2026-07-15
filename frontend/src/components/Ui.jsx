import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import InputBar from "./InputBar";
import Sidebar from "./Sidebar";

import {
  FiMenu,
  FiArrowLeft
  } from "react-icons/fi";

const Ui = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [plusMenuOpen, setPlusMenuOpen] =
    useState(false);

  const [prompt, setPrompt] =
    useState("");

  const handleSend = () => {
    if (!prompt.trim()) return;

    const newChatId = Date.now();

    navigate("/chat", {
      state: {
        chatId: newChatId,
        firstMessage: prompt,
      },
    });
  };

  return (
    <div className="relative h-screen overflow-hidden flex bg-gradient-to-br from-[#020617] via-[#081229] to-[#0F172A] text-white">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col items-center justify-center px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 bg-[#1d1d1d] p-3 rounded-lg z-30"
        >
          <FiArrowLeft />
        </button>

        {/* Mobile Sidebar Button */}
        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="md:hidden absolute top-5 left-20 bg-[#1d1d1d] p-3 rounded-lg z-30"
        >
          <FiMenu />
        </button>

        {/* Background Glow */}
       <div className="absolute top-[-250px] left-[-150px] w-[550px] h-[550px] rounded-full bg-blue-500/20 blur-[170px]" />

        {/* Heading */}
       <h1 className="z-10 mb-4 text-center font-bold leading-tight">
    <span className="block text-6xl md:text-7xl bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
        Your AI medical assistant is ready.
    </span>

    {/* <span className="block mt-3 text-4xl md:text-5xl text-blue-300">
        {user?.given_name || user?.name?.split("@")[0]}
    </span> */}
</h1>
<p className="z-10 mb-10 text-lg text-gray-400 text-center max-w-xl">
    Ask anything about your health, upload prescriptions,
    analyze reports, or book appointments with AI assistance.
</p>
        {/* Input Area */}
       <div className="z-10 w-full max-w-4xl">
    <InputBar
        prompt={prompt}
        setPrompt={setPrompt}
        onSend={handleSend}
    />
</div>
      </div>
    </div>
  );
};

export default Ui;


