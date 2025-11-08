import React from "react";
import Banner from "../components/Banner";
// import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
      {/* <Hero></Hero> */}
      <div className="text-center flex flex-col my-10 md:my-15 lg:my-20">
        <h1 className=" text-center font-bold lg:text-4xl md:text-3xl text-2xl mb-2">
          Talk to Tomorrow’s Technology
        </h1>
        <p>Experience the future of seamless communication with AI </p>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
