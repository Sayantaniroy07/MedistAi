import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FiPlus,
  FiSearch,
  FiImage,
  FiBook,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { user, logout } = useAuth0();

  const navigate = useNavigate();
  const location = useLocation();

  const currentChatId =
    location.state?.chatId;

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [chatHistory, setChatHistory] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editingChatId, setEditingChatId] =
    useState(null);

  const [newChatTitle, setNewChatTitle] =
    useState("");

  useEffect(() => {
    const chats =
      JSON.parse(
        localStorage.getItem("chatHistory")
      ) || [];

    setChatHistory(chats);
  }, []);

  const deleteChat = (id) => {
    const updatedChats =
      chatHistory.filter(
        (chat) => chat.id !== id
      );

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(updatedChats)
    );

    setChatHistory(updatedChats);

    if (id === currentChatId) {
      navigate("/ui");
    }
  };

  const saveRename = (id) => {
    if (!newChatTitle.trim()) return;

    const updatedChats =
      chatHistory.map((chat) =>
        chat.id === id
          ? {
              ...chat,
              title: newChatTitle,
            }
          : chat
      );

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(updatedChats)
    );

    setChatHistory(updatedChats);
    setEditingChatId(null);
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() =>
            setSidebarOpen(false)
          }
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
          ${
            sidebarCollapsed
              ? "md:w-20"
              : "md:w-72"
          }
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* TOP */}
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
                  setSidebarCollapsed(
                    !sidebarCollapsed
                  )
                }
                className="hidden md:block"
              >
                <FiMenu />
              </button>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="md:hidden"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* NEW CHAT */}
          <div className="px-4">
            <button
              onClick={() =>
                navigate("/ui")
              }
              className="w-full bg-[#232323] p-3 rounded-xl flex items-center gap-3 hover:bg-[#2d2d2d]"
            >
              <FiPlus />

              {!sidebarCollapsed &&
                "New Chat"}
            </button>
          </div>

          {/* SEARCH */}
          {!sidebarCollapsed && (
            <div className="px-4 mt-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />

                <input
                  placeholder="Search chats..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  className="w-full bg-[#232323] rounded-lg pl-10 pr-3 py-2 outline-none"
                />
              </div>
            </div>
          )}

          {/* CHAT LIST */}
          {!sidebarCollapsed && (
            <div className="mt-4 px-4 space-y-2 overflow-y-auto max-h-[420px]">
              {chatHistory
                .filter((chat) =>
                  chat.title
                    ?.toLowerCase()
                    .includes(
                      searchTerm.toLowerCase()
                    )
                )
                .map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() =>
                      navigate("/chat", {
                        state: {
                          chatId: chat.id,
                        },
                      })
                    }
                    className={`rounded-xl p-3 cursor-pointer ${
                      currentChatId ===
                      chat.id
                        ? "bg-blue-600"
                        : "bg-[#232323] hover:bg-[#2d2d2d]"
                    }`}
                  >
                    {editingChatId ===
                    chat.id ? (
                      <div className="flex gap-2">
                        <input
                          value={
                            newChatTitle
                          }
                          onChange={(e) =>
                            setNewChatTitle(
                              e.target.value
                            )
                          }
                          className="flex-1 bg-black rounded px-2 py-1"
                        />

                        <button
                          onClick={(
                            e
                          ) => {
                            e.stopPropagation();
                            saveRename(
                              chat.id
                            );
                          }}
                          className="text-green-400"
                        >
                          ✓
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <span className="truncate">
                          {chat.title}
                        </span>

                        <div className="flex gap-2">
                          <button
                            onClick={(
                              e
                            ) => {
                              e.stopPropagation();

                              setEditingChatId(
                                chat.id
                              );

                              setNewChatTitle(
                                chat.title
                              );
                            }}
                          >
                            ✏️
                          </button>

                          <button
                            onClick={(
                              e
                            ) => {
                              e.stopPropagation();

                              deleteChat(
                                chat.id
                              );
                            }}
                            className="text-red-400"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}

          {/* EXTRA MENU */}
          {!sidebarCollapsed && (
            <div className="mt-6 px-4 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FiImage />
                Images
              </div>

              <div className="flex items-center gap-3">
                <FiBook />
                Library
              </div>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="border-t border-gray-800 p-4 relative">
          <button
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
            className="flex items-center gap-3 w-full"
          >
            <img
              src={user?.picture}
              alt=""
              className="w-10 h-10 rounded-full"
            />

            {!sidebarCollapsed && (
              <div className="text-left">
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
                      returnTo:
                        window.location
                          .origin,
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


// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import {
//   FiPlus,
//   FiSearch,
//   FiImage,
//   FiBook,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";

// const Sidebar = ({ sidebarOpen, setSidebarOpen ,
//   chatHistory,
//   searchTerm,
//   setSearchTerm,
//   chatId,
//   deleteChat,
//   setEditingChatId,
//   editingChatId,
//   newChatTitle,
//   setNewChatTitle,
//   saveRename,}) => {
//   const { user, logout } = useAuth0();
//   const navigate = useNavigate();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

  
//   return (
//     <>
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

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
//         <div>
//           <div className="flex items-center justify-between p-5">
//             {!sidebarCollapsed && (
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
//                 MedistAi
//               </h1>
//             )}

//             <div className="flex gap-2">
//               <button
//                 onClick={() =>
//                   setSidebarCollapsed(!sidebarCollapsed)
//                 }
//                 className="hidden md:block"
//               >
//                 <FiMenu />
//               </button>

//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="md:hidden"
//               >
//                 <FiX />
//               </button>
//             </div>
//           </div>

//           <div className="px-4">
//             <button
//   onClick={() => navigate("/ui")}
//   className="w-full bg-[#232323] p-3 rounded-xl flex items-center gap-3"
// >
//               <FiPlus />
//               {!sidebarCollapsed && "New Chat"}
//             </button>
//           </div>

//           <div className="mt-6 px-4">

//   {!sidebarCollapsed && (
//     <input
//       type="text"
//       placeholder="Search chats..."
//       value={searchTerm}
//       onChange={(e) =>
//         setSearchTerm(e.target.value)
//       }
//       className="w-full mb-4 bg-[#232323] p-3 rounded-xl outline-none"
//     />
//   )}

//   <div className="space-y-2 overflow-y-auto max-h-[500px]">
//     {(chatHistory || [])
//       .filter((chat) =>
//         chat.title
//           ?.toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       )
//       .map((chat) => (
//         <div
//           key={chat.id}
//           className={`rounded-xl p-3 cursor-pointer ${
//             chat.id === chatId
//               ? "bg-blue-600"
//               : "bg-[#232323]"
//           }`}
//         >
//           <div className="flex justify-between items-center">

//             {editingChatId === chat.id ? (
//               <input
//                 value={newChatTitle}
//                 onChange={(e) =>
//                   setNewChatTitle(e.target.value)
//                 }
//                 className="bg-[#171717] px-2 py-1 rounded w-full mr-2"
//               />
//             ) : (
//               <span className="truncate">
//                 {chat.title}
//               </span>
//             )}

//             <div className="flex gap-2">

//               {editingChatId === chat.id ? (
//                 <button
//                   onClick={() =>
//                     saveRename(chat.id)
//                   }
//                   className="text-green-400"
//                 >
//                   ✓
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     setEditingChatId(chat.id);
//                     setNewChatTitle(chat.title);
//                   }}
//                 >
//                   ✏️
//                 </button>
//               )}

//               <button
//                 onClick={() =>
//                   deleteChat(chat.id)
//                 }
//                 className="text-red-400"
//               >
//                 🗑️
//               </button>

//             </div>

//           </div>
//         </div>
//       ))}
//   </div>

// </div>
//         </div>

//         <div className="border-t border-gray-800 p-4 relative">
//           <button
//             onClick={() => setProfileOpen(!profileOpen)}
//             className="flex items-center gap-3 w-full"
//           >
//             <img
//               src={user?.picture}
//               className="w-10 h-10 rounded-full"
//             />

//             {!sidebarCollapsed && (
//               <div>
//                 <p>{user?.name}</p>
//                 <p className="text-xs text-gray-400">
//                   {user?.email}
//                 </p>
//               </div>
//             )}
//           </button>

//           {profileOpen && (
//             <div className="absolute bottom-20 left-4 right-4 bg-[#242424] rounded-xl p-4">
//               <button
//                 onClick={() =>
//                   logout({
//                     logoutParams: {
//                       returnTo: window.location.origin,
//                     },
//                   })
//                 }
//                 className="w-full bg-red-600 py-2 rounded-lg"
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;