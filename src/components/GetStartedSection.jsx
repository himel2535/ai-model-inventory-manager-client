// src/components/GetStartedSection.jsx
import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

const GetStartedSection = () => {
  // const handleLogin=()=>{

  // }
  return (
    <section className="py-12 lg:mx-8 md:mx-6 mx-4">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-14 leading-relaxed heading-text-dark-aware">
        Get Started
      </h1>
      <p className="text-lg mb-5 text-gray-500 text-center leading-relaxed">
        Ready to manage AI models? Register or log in now to start organizing,
        tracking, and exploring AI models in one place.
      </p>
      <div className="space-x-4 text-center">
        <Link to="/register" className="px-6 btn font-semibold">
          Register
        </Link>
        <Link to="/login" className="px-6 py-3 btn font-semibold">
          Login
        </Link>
      </div>
    </section>
  );
};

export default GetStartedSection;
