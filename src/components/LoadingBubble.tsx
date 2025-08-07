import React from "react";

const LoadingBubble = () => {
  return (
    <div className="w-full p-4 flex justify-center">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2">
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingBubble;
