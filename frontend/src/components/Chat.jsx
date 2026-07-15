import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import InputBar from "./InputBar";
import Sidebar from "./Sidebar";

import {
  FiArrowLeft,
  FiMenu,
} from "react-icons/fi";

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const chatId = location.state?.chatId;
  const firstMessage =
    location.state?.firstMessage || "";

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] =
    useState(false);

  const messagesEndRef = useRef(null);

  // Load selected chat
  useEffect(() => {
    const savedChats =
      JSON.parse(
        localStorage.getItem("chatHistory")
      ) || [];

    const selectedChat = savedChats.find(
      (chat) => chat.id === chatId
    );

    if (selectedChat?.messages) {
      setMessages(selectedChat.messages);
    }
  }, [chatId]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Create chat on first message
  useEffect(() => {
    if (!chatId || !firstMessage) return;

    const savedChats =
      JSON.parse(
        localStorage.getItem("chatHistory")
      ) || [];

    const exists = savedChats.find(
      (chat) => chat.id === chatId
    );

    if (!exists) {
      const newChat = {
        id: chatId,
        title: firstMessage,
        messages: [
          {
            role: "user",
            content: firstMessage,
          },
        ],
      };

      const updatedChats = [
        newChat,
        ...savedChats,
      ];

      localStorage.setItem(
        "chatHistory",
        JSON.stringify(updatedChats)
      );

      sendFirstMessage(firstMessage);
    }
  }, []);

  const sendFirstMessage = async (
    message
  ) => {
    try {
      setLoading(true);

      setMessages([
        {
          role: "user",
          content: message,
        },
      ]);

      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { message }
      );

      const aiReply = res.data.answer;

      const updatedMessages = [
        {
          role: "user",
          content: message,
        },
        {
          role: "assistant",
          content: aiReply,
        },
      ];

      setMessages(updatedMessages);

      const chats =
        JSON.parse(
          localStorage.getItem("chatHistory")
        ) || [];

      const updatedChats = chats.map(
        (chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: updatedMessages,
              }
            : chat
      );

      localStorage.setItem(
        "chatHistory",
        JSON.stringify(updatedChats)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


const uploadPDF = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/api/upload/chatbot",
      formData
    );

    setMessages((prev) => [
  ...prev,
  {
    role: "user",
    type: "pdf",
    fileName: file.name,
  },
]);

  } catch (error) {
    console.error(error);
  }
};
const analyzeImage = async (file) => {
  console.log("IMAGE GOING TO BACKEND");
setMessages((prev) => [
  ...prev,
  {
    role: "user",
    type: "image",
    imageUrl: URL.createObjectURL(file),
  },
]);
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/vision/analyze",
      formData
    );

    console.log("VISION RESPONSE:", res.data);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: res.data.result,
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};



const sendMessage = async (text, files = []) => {
   console.log("TEXT:", text);
  console.log("FILES:", files);
  console.log("FILES RECEIVED:", files);

  // ---------- FILES ----------
  if (Array.isArray(files) && files.length > 0) {
    const file = files[0];

    if (file?.type?.includes("pdf")) {
        await uploadPDF(file);
        return;
    }

    if (file?.type?.includes("image")) {
        await analyzeImage(file);
        return;
    }
}

  // ---------- TEXT ----------
if (!text.trim()) return;

  const userMessage = {
    role: "user",
    content: prompt,
  };

  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);

  const currentPrompt = text;

  setPrompt("");

  try {
    setLoading(true);

   const res = await axios.post(
  "http://localhost:5000/api/chat",
  {
    message: text,
  }
);
    const aiMessage = {
      role: "assistant",
      content: res.data.answer,
    };

    const finalMessages = [...updatedMessages, aiMessage];

    setMessages(finalMessages);

    const chats =
      JSON.parse(localStorage.getItem("chatHistory")) || [];

    const updatedChats = chats.map((chat) =>
      chat.id === chatId
        ? {
            ...chat,
            messages: finalMessages,
          }
        : chat
    );

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(updatedChats)
    );
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
   <div className="h-screen overflow-hidden bg-gradient-to-br from-[#120F2E] via-[#1B163F] to-[#2B255F] text-white flex">
      {/* Common Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <button
            onClick={() => navigate("/ui")}
            className="bg-[#1d1d1d] p-3 rounded-lg"
          >
            <FiArrowLeft size={20} />
          </button>

          <button
            onClick={() =>
              setSidebarOpen(true)
            }
            className="md:hidden bg-[#1d1d1d] p-3 rounded-lg ml-2"
          >
            <FiMenu />
          </button>

          <h1 className="ml-4 text-lg font-semibold">
            MediStAI Chat
          </h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-8 pb-36">
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
  className={`px-6 py-5 rounded-2xl shadow-lg border ${
    msg.role === "user"
      ? "bg-gradient-to-r from-blue-600 to-blue-500 border-blue-500"
      : "bg-[#20273D]/90 border-white/10 backdrop-blur-md"
  } max-w-4xl`}
>
                 {msg.type === "image" ? (
  <img
    src={msg.imageUrl}
    alt="uploaded"
    className="max-w-xs rounded-xl"
  />
) : msg.type === "pdf" ? (
  <div className="bg-gray-700 p-3 rounded-xl">
    📄 {msg.fileName}
  </div>
) : (
 <div className="prose prose-invert max-w-none prose-p:leading-8 prose-li:leading-8 prose-strong:text-blue-300">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.content}
  </ReactMarkdown>
</div>
)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-5 py-3 rounded-3xl bg-[#242424]">
                  <span className="animate-pulse">
                    Thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-800 bg-black px-6 py-4 shrink-0">
  <div className="max-w-4xl w-full mx-auto">
    <InputBar
  prompt={prompt}
  setPrompt={setPrompt}
  onSend={sendMessage}
  enableUploads={true}
/>
  </div>
</div>
      </div>
    </div>
  );
};

export default Chat;


