import React from "react";
import { Link } from "react-router";

const PurchaseModelCard = ({ model }) => {
  const { _id, name, framework, useCase, createdBy, purchasedBy, image } =
    model;

  return (
    <div className="border border-gray-200 bg-white rounded-2xl shadow-md p-4">
      <div className="flex flex-col gap-4 mb-3">
        <div className="flex items-center justify-center ">
          <img
            src={image}
            alt={name}
            className="w-3/4 flex items-center justify-center h-30 object-cover rounded-lg shadow-sm"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center text-gray-800">
            {name}
          </h2>
        </div>
      </div>

      <div>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Framework:</span> {framework}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Use Case:</span> {useCase}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Created By:</span> {createdBy}
        </p>
        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Purchased By:</span> {purchasedBy}
        </p>
      </div>

      <div className="flex justify-end">
        <Link
          to={`/models/${_id}`}
          className="btn w-full btn-sm text-white bg-gradient-to-r from-[#1CB5E0] to-[#000851] border-none hover:scale-105 transition-transform"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PurchaseModelCard;
