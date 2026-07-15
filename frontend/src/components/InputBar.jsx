import React, { useState, useRef } from "react";
import {
  FiPlus,
  FiSend,
  FiCamera,
  FiUpload,
  FiFolder,
  FiImage,
  FiX,
} from "react-icons/fi";

const InputBar = ({
  prompt,
  setPrompt,
  onSend,
}) => {
  const [plusMenuOpen, setPlusMenuOpen] =
    useState(false);

  const [selectedFiles, setSelectedFiles] =
    useState([]);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  

  // FILE UPLOAD

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    console.log("FILE:", file);

    setSelectedFiles([file]);

    setPlusMenuOpen(false);
  };

  // CAMERA

  const handleCameraCapture = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    console.log("CAMERA:", file);

    setSelectedFiles([file]);

    setPlusMenuOpen(false);
  };

  // REMOVE FILE

  const removeFile = (index) => {
    setSelectedFiles((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // SEND

 const handleSend = () => {
  console.log("INPUTBAR:", prompt, selectedFiles);
  onSend(prompt, selectedFiles);
  setSelectedFiles([]);
};

  return (
    <div className="relative w-full">

      {/* FILE INPUT */}

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf,image/*"
        onChange={handleFileUpload}
      />

      {/* CAMERA INPUT */}

      <input
        ref={cameraInputRef}
        type="file"
        hidden
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
      />

      {/* FILE PREVIEW */}

      {selectedFiles.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {selectedFiles.map(
            (file, index) => (
              <div
                key={index}
                className="bg-[#242424] px-3 py-2 rounded-lg flex items-center gap-2"
              >
                <span>
                  {file.name}
                </span>

                <button
                  onClick={() =>
                    removeFile(index)
                  }
                >
                  <FiX />
                </button>
              </div>
            )
          )}
        </div>
      )}

      {/* PLUS MENU */}

      {plusMenuOpen && (
        <div className="absolute bottom-20 left-0 w-72 bg-[#242424] rounded-xl overflow-hidden shadow-lg z-50">

          {/* CAMERA */}

          <button
            type="button"
            onClick={() =>
              cameraInputRef.current?.click()
            }
            className="w-full p-4 flex gap-3 hover:bg-[#2d2d2d]"
          >
            <FiCamera />
            Upload Image
          </button>

          {/* UPLOAD */}

          <button
            type="button"
            onClick={() =>
              fileInputRef.current?.click()
            }
            className="w-full p-4 flex gap-3 hover:bg-[#2d2d2d]"
          >
            <FiUpload />
            Upload Files
          </button>

          

        

        </div>
      )}

      {/* INPUT BAR */}

      <div className="bg-[#1d1d1d] rounded-full px-6 py-4 flex items-center gap-4">

        <button
          type="button"
          onClick={() =>
            setPlusMenuOpen(
              !plusMenuOpen
            )
          }
        >
          <FiPlus />
        </button>

        <input
          value={prompt}
          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask MediStAI..."
          className="flex-1 bg-transparent outline-none"
        />

       

        <button
          type="button"
          onClick={handleSend}
          className="text-blue-500"
        >
          <FiSend />
        </button>

      </div>
    </div>
  );
};

export default InputBar;