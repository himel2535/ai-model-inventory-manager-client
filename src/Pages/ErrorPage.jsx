import React from "react";

import Lottie from "lottie-react";

import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white text-center px-4">


      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! This AI model doesn’t exist.
      </h2>
      <p className="text-gray-200 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="bg-white text-[#000851] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
