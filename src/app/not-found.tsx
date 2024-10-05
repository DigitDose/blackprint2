import React from "react";

export default function Custom404() {
  return (
    <div className=" h-7 items-center justify-center min-h-screen opacity-80">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <a href="/" className="btn btn-primary">
        Go Back Home
      </a>
    </div>
  );
}
