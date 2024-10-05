import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="text-xl text-gray-700">Loading...</span>
      </div>
    </div>
  );
}
