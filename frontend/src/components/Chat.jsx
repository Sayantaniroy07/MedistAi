import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiPlus,
  FiSend,
  FiMic,
} from "react-icons/fi";

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const firstMessage = location.state?.firstMessage || "";

  const [chatHistory, setChatHistory] = useState([]);

  const [messages, setMessages] = useState(
    firstMessage
      ? [
          {
            role: "user",
            content: firstMessage,
          },
          {
            role: "assistant",
            content: "Hello! How can I help you today?",
          },
        ]
      : [
          {
            role: "assistant",
            content: "Hello! How can I help you today?",
          },
        ]
  );

  const [prompt, setPrompt] = useState("");

  // Load chat history
  useEffect(() => {
    const savedChats =
      JSON.parse(localStorage.getItem("chatHistory")) || [];

    setChatHistory(savedChats);
  }, []);

  // Save first prompt when page opens
  useEffect(() => {
    if (!firstMessage) return;

    const savedChats =
      JSON.parse(localStorage.getItem("chatHistory")) || [];

    const exists = savedChats.some(
      (chat) => chat.title === firstMessage
    );

    if (!exists) {
      const updatedChats = [
        {
          id: Date.now(),
          title: firstMessage,
        },
        ...savedChats,
      ];

      setChatHistory(updatedChats);

      localStorage.setItem(
        "chatHistory",
        JSON.stringify(updatedChats)
      );
    }
  }, [firstMessage]);

  const sendMessage = () => {
    if (!prompt.trim()) return;

    const userPrompt = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userPrompt,
      },
      {
        role: "assistant",
        content: `You asked: ${userPrompt}`,
      },
    ]);

    if (
      !chatHistory.some(
        (chat) => chat.title === userPrompt
      )
    ) {
      const updatedChats = [
        {
          id: Date.now(),
          title: userPrompt,
        },
        ...chatHistory,
      ];

      setChatHistory(updatedChats);

      localStorage.setItem(
        "chatHistory",
        JSON.stringify(updatedChats)
      );
    }

    setPrompt("");
  };

  return (
    <div className="h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-72 bg-[#171717] border-r border-gray-800 p-4 flex flex-col">
        <button
          onClick={() => navigate("/ui")}
          className="mb-6 bg-[#232323] p-3 rounded-xl hover:bg-[#2d2d2d]"
        >
          ← New Chat
        </button>

        <h3 className="text-gray-400 text-sm mb-4">
          Recents
        </h3>

        <div className="space-y-2 overflow-y-auto">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className="bg-[#232323] hover:bg-[#2d2d2d] rounded-xl p-3 cursor-pointer truncate"
            >
              {chat.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <button
            onClick={() => navigate("/ui")}
            className="bg-[#1d1d1d] p-3 rounded-lg hover:bg-[#2a2a2a]"
          >
            <FiArrowLeft size={20} />
          </button>

          <h1 className="ml-4 text-lg font-semibold">
            agency.ai Chat
          </h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-3xl max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-blue-600"
                      : "bg-[#242424]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-800 p-5">
          <div className="max-w-4xl mx-auto bg-[#1d1d1d] rounded-full px-6 py-4 flex items-center gap-4">
            <FiPlus className="text-xl" />

            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Ask agency.ai"
              className="flex-1 bg-transparent outline-none text-white"
            />

            <FiMic className="text-xl" />

            <button
              onClick={sendMessage}
              className="text-blue-500 hover:text-blue-400"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;