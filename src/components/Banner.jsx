import React from "react";
// import bannerLogo from "../assets/AI_model.webp"
import MotionSlider from "./MotionSlider/MotionSlider";

const Banner = () => {
  return (
    <div>
      {/* <img className='w-full mx-auto ' src={bannerLogo} alt="" /> */}
      <div className="text-center px-8 flex flex-col mt-12  leading-relaxed">
        <h1 className=" text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-3 leading-relaxed">
          Talk to Tomorrow’s Technology
        </h1>
        <p className="leading-relaxed mb-12">
          Experience the future of seamless communication with AI{" "}
        </p>
      </div>
      <MotionSlider></MotionSlider>
    </div>
  );
};

export default Banner;
