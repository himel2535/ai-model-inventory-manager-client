import React from "react";
import logo from "../assets/idea.png";
import logo1 from "../assets/formakinglogo.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <div className="lg:w-1/2">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1CB5E0] to-[#000851] blur-2xl opacity-20 -m-4"></div>
            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full relative z-10 shadow-xl border-4 border-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold heading-text-dark-aware mb-8 leading-tight text-left">
            Empowering the Next Generation of <span className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">AI Innovation</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            AI Model Inventory Manager is the world's most developer-centric platform for managing, sharing, and optimizing AI models. Founded in 2024, our mission is to make AI accessible and efficient for everyone.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-base-200 px-6 py-3 rounded-2xl">
              <span className="font-bold text-[#000851] block text-2xl">100+</span>
              <span className="text-sm text-gray-500">Global Partners</span>
            </div>
            <div className="bg-base-200 px-6 py-3 rounded-2xl">
              <span className="font-bold text-[#000851] block text-2xl">50k+</span>
              <span className="text-sm text-gray-500">Open Source Models</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-[3rem] blur-3xl opacity-10"></div>
          <div className="card bg-base-100 shadow-2xl rounded-[2.5rem] overflow-hidden relative z-10 border border-gray-100">
            <img 
              src={logo1} 
              alt="AI Technology" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-base-200 rounded-[3rem] p-12 lg:p-20 text-center">
        <h2 className="text-3xl font-bold mb-12 heading-text-dark-aware">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="text-xl font-bold heading-text-dark-aware">Trust & Security</h4>
            <p className="text-gray-500">We prioritize your data privacy and model security above all else.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-bold heading-text-dark-aware">Efficiency</h4>
            <p className="text-gray-500">Optimized workflows to help you deploy and scale models faster than ever.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h4 className="text-xl font-bold heading-text-dark-aware">Accessibility</h4>
            <p className="text-gray-500">Breaking down barriers to AI adoption through community-driven resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
