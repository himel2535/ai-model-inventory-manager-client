import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

const MyModelCard = ({ model }) => {
  const { _id, name, framework, useCase, createdBy, image } = model;

  return (
    <div className="border border-gray-200 bg-white rounded-2xl shadow-md p-4">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg shadow-sm"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
      </div>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Framework:</span> {framework}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Use Case:</span> {useCase}
      </p>
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Created By:</span> {createdBy}
      </p>

      <div className="flex justify-end">
        <Link
          to={`/model-details/${_id}`}
          className="btn text-white w-full btn-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MyModelCard;
