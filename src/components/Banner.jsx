import React from "react";
// import bannerLogo from "../assets/AI_model.webp"
import MotionSlider from "./MotionSlider/MotionSlider";

const Banner = () => {
  return (
    <div className="relative overflow-hidden group">
      <MotionSlider></MotionSlider>
      
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 pt-16 md:pt-28 bg-black/40 pointer-events-none z-20">
        <h1 className="font-extrabold lg:text-5xl md:text-3xl text-2xl mb-4 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-white flex flex-wrap justify-center gap-x-3 transition-opacity duration-300">
          Talk to Tomorrow’s Technology
        </h1>
        <p className="leading-relaxed text-white/90 md:text-xl max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] font-medium mb-8">
          Experience the future of seamless communication with AI
        </p>
        <div className="pointer-events-auto">
          <button 
            onClick={() => document.getElementById('latest-models-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-lg bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white border-none rounded-full px-10 hover:scale-105 transition-transform"
          >
            Explore Models
          </button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
