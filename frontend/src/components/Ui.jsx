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
    <div className="h-screen bg-black text-white flex overflow-hidden">
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
        <div className="absolute w-[700px] h-[700px] bg-blue-700/20 blur-[180px] rounded-full" />

        {/* Heading */}
        <h1 className="text-5xl mb-10 z-10 text-center">
          The mic is yours,{" "}
          {user?.given_name ||
            user?.name?.split("@")[0]}
        </h1>

        {/* Input Area */}
        <InputBar
  prompt={prompt}
  setPrompt={setPrompt}
  onSend={handleSend}
/>
      </div>
    </div>
  );
};

export default Ui;

// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

// import {
//   FiPlus,
//   FiSend,
//   FiSearch,
//   FiImage,
//   FiMic,
//   FiUpload,
//   FiBook,
//   FiMenu,
//   FiX,
//   FiArrowLeft,
//   FiCamera,
//   FiFolder,
// } from "react-icons/fi";

// const Ui = () => {
//   const { user, logout } = useAuth0();
//   const navigate = useNavigate();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [plusMenuOpen, setPlusMenuOpen] = useState(false);

//   const [prompt, setPrompt] = useState("");
//   const [messages, setMessages] = useState([
//   {
//     role: "assistant",
//     content: "Hi! How can I help you today?",
//   },
// ]);
// const handleSend = () => {
//   if (!prompt.trim()) return;

//   const userMessage = {
//     role: "user",
//     content: prompt,
//   };

//   setMessages((prev) => [...prev, userMessage]);

//   setPrompt("");

//   // temporary AI response
//   setTimeout(() => {
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "assistant",
//         content: `You asked: ${userMessage.content}`,
//       },
//     ]);
//   }, 800);
// };

// const handleKeyDown = (e) => {
//   if (e.key === "Enter") {
//     handleSend();
//   }
// };
//   return (
//     <div className="h-screen bg-black text-white flex overflow-hidden">
//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed md:relative
//           top-0 left-0
//           h-screen
//           bg-[#171717]
//           border-r border-gray-800
//           flex flex-col justify-between
//           z-50
//           transition-all duration-300 ease-in-out
//           ${sidebarCollapsed ? "md:w-20" : "md:w-72"}
//           ${
//             sidebarOpen
//               ? "translate-x-0"
//               : "-translate-x-full md:translate-x-0"
//           }
//         `}
//       >
//         {/* Sidebar Top */}
//         <div>
//           <div className="flex items-center justify-between p-5">
//             {!sidebarCollapsed && (
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
//                 agency.ai
//               </h1>
//             )}

//             <div className="flex items-center gap-2">
//               {/* Desktop Collapse */}
//               <button
//                 onClick={() =>
//                   setSidebarCollapsed(!sidebarCollapsed)
//                 }
//                 className="hidden md:block text-xl hover:text-blue-400 transition"
//               >
//                 <FiMenu />
//               </button>

//               {/* Mobile Close */}
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="md:hidden text-xl"
//               >
//                 <FiX />
//               </button>
//             </div>
//           </div>

//           {/* New Chat */}

//           <div className="bg-[#1d1d1d] border border-gray-800 rounded-full px-6 py-4 flex items-center gap-4">

//   <button
//     onClick={() => setPlusMenuOpen(!plusMenuOpen)}
//     className="hover:text-blue-400"
//   >
//     <FiPlus />
//   </button>

//   <input
//     type="text"
//     value={prompt}
//     onChange={(e) => setPrompt(e.target.value)}
//     onKeyDown={handleKeyDown}
//     placeholder="Ask agency.ai"
//     className="flex-1 bg-transparent outline-none text-white"
//   />

//   <button
//     onClick={handleSend}
//     className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition"
//   >
//     <FiSend />
//   </button>
// </div>

//           {/* Menu Items */}
//           <div className="mt-8 px-4 space-y-6 text-gray-300">
//             <div className="flex items-center gap-3 hover:text-white cursor-pointer transition">
//               <FiSearch />
//               {!sidebarCollapsed && <span>Search Chats</span>}
//             </div>

//             <div className="flex items-center gap-3 hover:text-white cursor-pointer transition">
//               <FiImage />
//               {!sidebarCollapsed && <span>Images</span>}
//             </div>

//             <div className="flex items-center gap-3 hover:text-white cursor-pointer transition">
//               <FiBook />
//               {!sidebarCollapsed && <span>Library</span>}
//             </div>
//           </div>
//         </div>

//         {/* User Section */}
//         <div className="border-t border-gray-800 p-4 relative">
//           <button
//             onClick={() => setProfileOpen(!profileOpen)}
//             className="w-full flex items-center gap-3"
//           >
//             <img
//               src={user?.picture}
//               alt=""
//               className="w-10 h-10 rounded-full"
//             />

//             {!sidebarCollapsed && (
//               <div className="text-left">
//                 <p className="font-medium">
//                   {user?.given_name || user?.name}
//                 </p>

//                 <p className="text-xs text-gray-400 truncate w-40">
//                   {user?.email}
//                 </p>
//               </div>
//             )}
//           </button>

//           {/* Profile Popup */}
//           {profileOpen && (
//             <div className="absolute bottom-20 left-4 right-4 bg-[#242424] border border-gray-700 rounded-2xl p-4 shadow-xl">
//               <div className="flex flex-col items-center">
//                 <img
//                   src={user?.picture}
//                   alt=""
//                   className="w-16 h-16 rounded-full"
//                 />

//                 <h3 className="mt-3 font-semibold">
//                   {user?.given_name || user?.name}
//                 </h3>

//                 <p className="text-xs text-gray-400 text-center break-all">
//                   {user?.email}
//                 </p>
//               </div>

//               <button
//                 className="w-full mt-4 bg-[#1d1d1d] py-2 rounded-xl hover:bg-[#2a2a2a]"
//               >
//                 My Profile
//               </button>

//               <button
//                 onClick={() =>
//                   logout({
//                     logoutParams: {
//                       returnTo: window.location.origin,
//                     },
//                   })
//                 }
//                 className="w-full mt-2 bg-red-600 py-2 rounded-xl hover:bg-red-700"
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 relative flex flex-col items-center justify-center px-6">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate("/")}
//           className="absolute top-5 left-5 md:left-6 bg-[#1d1d1d] p-3 rounded-lg hover:bg-[#2a2a2a] transition z-30"
//         >
//           <FiArrowLeft size={20} />
//         </button>

//         {/* Mobile Menu */}
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="md:hidden absolute top-5 left-20 z-30 text-2xl bg-[#1d1d1d] p-2 rounded-lg"
//         >
//           <FiMenu />
//         </button>

//         {/* Glow Effect */}
//         <div className="absolute w-[700px] h-[700px] bg-blue-700/20 blur-[180px] rounded-full" />

//         {/* Welcome Text */}
//         <h1 className="z-10 text-3xl sm:text-5xl md:text-6xl font-light mb-10 text-center">
//           The mic is yours,{" "}
//           <span className="font-medium">
//            {user?.given_name || user?.name?.split("@")[0]}
//           </span>
//         </h1>
// {/* .............. */}
//         <div className="flex-1 w-full max-w-4xl overflow-y-auto mb-6 px-2">
//   {messages.map((msg, index) => (
//     <div
//       key={index}
//       className={`flex mb-4 ${
//         msg.role === "user"
//           ? "justify-end"
//           : "justify-start"
//       }`}
//     >
//       <div
//         className={`max-w-[80%] px-5 py-3 rounded-2xl ${
//           msg.role === "user"
//             ? "bg-gradient-to-r from-[#5044E5] to-[#4d8cea]"
//             : "bg-[#1d1d1d] border border-gray-800"
//         }`}
//       >
//         {msg.content}
//       </div>
//     </div>
//   ))}
// </div>

//         {/* Prompt Box */}
// <div className="z-10 w-full max-w-4xl relative">

//   {/* Plus Menu */}
//   {plusMenuOpen && (
//     <div className="absolute bottom-20 left-0 w-72 bg-[#242424] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">

//       <button className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#333] transition text-left">
//         <FiCamera />
//         Camera
//       </button>

//       <button className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#333] transition text-left">
//         <FiUpload />
//         Upload Files
//       </button>

//       <button className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#333] transition text-left">
//         <FiFolder />
//         Add From Drive
//       </button>

//       <button className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#333] transition text-left">
//         <FiImage />
//         Create Image
//       </button>
//     </div>
//   )}

//   {/* Input Box */}
//   <div className="bg-[#1d1d1d] border border-gray-800 rounded-full px-6 py-4 flex items-center gap-4">

//     <button
//       onClick={() => setPlusMenuOpen(!plusMenuOpen)}
//       className="hover:text-blue-400 transition"
//     >
//       <FiPlus className="text-xl" />
//     </button>

//     <input
//       type="text"
//       placeholder="Ask agency.ai"
//       className="flex-1 bg-transparent outline-none text-white"
//     />

//     <div className="flex items-center gap-4">
//       <span className="text-blue-400 text-sm hidden sm:block">
//         Flash
//       </span>

//       <button>
//         <FiMic className="text-xl" />
//       </button>
//     </div>
//   </div>
// </div>
// </div>
// </div>
//   );
// };

// export default Ui;