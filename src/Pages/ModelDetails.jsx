import React from "react";
import { Link, useLoaderData } from "react-router";

const ModelDetails = () => {
  const data = useLoaderData();
  console.log(data.name);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mt-12 md:mt-14 mb-4">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={data.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="md:text-3xl text-2xl lg:text-4xl font-bold">
                {data.name}
              </h1>

              <div className="badge badge-outline text-white font-xs bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
                {data.framework}
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">UseCase : </span>{" "}
              {data.useCase}
            </p>
            <p className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-700">Dataset : </span>{" "}
              {data.dataset}
            </p>

            <p className="text-gray-500 leading-relaxed ">
              <span className="font-semibold text-gray-700">Description: </span>
              {data.description}
            </p>

            <p className="text-gray-500 leading-relaxed">
              {" "}
              <span className="font-semibold text-gray-700">
                Purchased :{" "}
              </span>{" "}
              {data.purchased}
            </p>

            <div className="flex gap-3 mt-6">
              <Link to={`/update-model/${data._id}`} className="btn ">
                Update Model
              </Link>
              <button className="btn ">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
