import React from "react";
import { Link } from "react-router";

const PurchaseModelCard = ({ model }) => {
  const { _id, name, framework, useCase, createdBy, purchasedBy, image } =
    model;

  return (
<div className="border mx-6 border-gray-200 bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between h-full">

  <div className="flex flex-col gap-4 mb-3">
    <div className="flex items-center justify-center ">
      <img
        src={image}
        alt={name}
        className="w-3/4 h-30 object-cover rounded-lg shadow-sm"
      />
    </div>
    <h2 className="text-xl font-semibold text-center text-gray-800">
      {name}
    </h2>
  </div>

  <div className="flex flex-col justify-between flex-1 mt-2">
    <p className="text-gray-600 mb-1">
      <span className="font-semibold inline-block w-24">Framework:</span> {framework}
    </p>
    <p className="text-gray-600 mb-1">
      <span className="font-semibold inline-block w-24">Use Case:</span> {useCase}
    </p>
    <p className="text-gray-600 mb-1">
      <span className="font-semibold inline-block w-24">Created By:</span> {createdBy}
    </p>
    <p className="text-gray-600 mb-3">
      <span className="font-semibold inline-block w-24">Purchased By:</span> {purchasedBy}
    </p>
  </div>

 
  <div className="mt-auto">
    <Link
     to={`/model-details/${model.modelId}`}
      className="btn w-full btn-sm text-white bg-gradient-to-r from-[#1CB5E0] to-[#000851] border-none hover:scale-105 transition-transform"
    >
      View Details
    </Link>
  </div>
</div>

  );
};

export default PurchaseModelCard;
