import React, { use, useEffect, useState } from "react";

import { ModelCard } from "../components/ModelCard";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [framework, setFramework] = useState("");
  const { setLoading, loading } = use(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://ai-model-inventory-manager-server.vercel.app/models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const search_text = e.target.search.value;

    fetch(
      `https://ai-model-inventory-manager-server.vercel.app/search?search=${search_text}&framework=${framework}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <h1 className="text-center text-gray-700 lg:text-4xl md:text-3xl text-2xl font-bold mt-12  mb-4 leading-relaxed">
        All Models
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-500 mb-12 px-4 leading-relaxed">
        Explore our complete collection of AI models — from creative generators
        to smart assistants. Each model is designed to push the boundaries of
        innovation and help you achieve more with intelligent automation.
      </p>

      <form
        onSubmit={handleSearch}
        className=" mt-5 mx-8 mb-10 flex flex-wrap gap-2 justify-center"
      >
        {/* -----Search---- */}
        <label className="input rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>

        {/* ---- Framework Dropdown---- */}
        <select
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
          className="select select-bordered rounded-full"
        >
          <option value="">All Frameworks</option>
          <option value="TensorFlow">TensorFlow</option>
          <option value="PyTorch">PyTorch</option>
          <option value="JAX">JAX</option>
          <option value="Computer Vision">Computer Vision</option>
          <option value="Keras">Keras</option>
          <option value="Scikit-learn">Scikit-learn</option>
        </select>

        <button className="btn btn-secondary rounded-full">Search</button>
      </form>

      {/*  Model Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 md:gap-5 py-2 mb-10 px-8">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
