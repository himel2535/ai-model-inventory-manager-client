import React from "react";

const ModelCardSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-xl"></div>
      <div className="p-4 flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
        </div>
        <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-8 w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ModelCardSkeleton;
