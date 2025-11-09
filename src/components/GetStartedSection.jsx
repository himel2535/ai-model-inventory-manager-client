// src/components/GetStartedSection.jsx
import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

const GetStartedSection = () => {
  // const handleLogin=()=>{

  // }
  return (
    <section className="mb-6 mt-0 mb:mb-8 lg:mb-10 p-8 md:p-10 bg-white  text-center">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 text-center">Get Started</h2>
      <p className="text-lg mb-6 leading-relaxed">
        Ready to manage AI models? Register or log in now to start organizing,
        tracking, and exploring AI models in one place.
      </p>
      <div className="space-x-4">
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
