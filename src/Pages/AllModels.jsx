import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-12 md:mt-14 mb-4 leading-relaxed">
        All Models
      </h2>

      {/* short paragraph */}
      <p className="text-center max-w-2xl mx-auto text-gray-500 mb-12 px-4 leading-relaxed">
        Explore our complete collection of AI models — from creative generators to 
        smart assistants. Each model is designed to push the boundaries of innovation 
        and help you achieve more with intelligent automation.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:gap-5 py-2 mb-10 px-8">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
