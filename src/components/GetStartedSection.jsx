// src/components/GetStartedSection.jsx
import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

const GetStartedSection = () => {
  // const handleLogin=()=>{

  // }
  return (
    <section className="pb-8 mt-0 mb:mb-8 md:mx-8 lg:mx-10 mx-4">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 text-gray-700 text-center leading-relaxed ">Get Started</h1>
      <p className="text-lg mb-6 text-gray-500 leading-relaxed">
        Ready to manage AI models? Register or log in now to start organizing,
        tracking, and exploring AI models in one place.
      </p>
      <div className="space-x-4 text-center">
        <Link
          to="/register"
          className="px-6 btn font-semibold"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 btn font-semibold"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;
