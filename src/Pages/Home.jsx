import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import GetStartedSection from "../components/GetStartedSection";
import { useLoaderData } from "react-router";
import { ModelCard } from "../components/ModelCard";
// import Hero from "../components/Hero";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Banner></Banner>
      <div className="px-8">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-12 md:mt-14 mb-10 leading-relaxed">Latest Models</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:gap-5 ">
          {data.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
      <AboutSection></AboutSection>
      <GetStartedSection></GetStartedSection>
    </div>
  );
};

export default Home;
