import React from "react";

const LoadingLine = ({ fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed top-0 left-0 object-cover w-full h-screen flex items-center justify-center bg-white/80 z-50"
          : "w-full"
      }`}
    >
      <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-[progress_1.5s_linear_infinite]"></div>
      </div>

      {/* animation style */}
      <style>
        {`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        `}
      </style>
    </div>
  );
};

export default LoadingLine;
