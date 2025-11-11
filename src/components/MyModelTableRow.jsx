import React from "react";
import { Link } from "react-router";

const MyModelTableRow = ({ model, index }) => {
  const { _id, name, framework, useCase, createdBy, image } = model;

  return (
    <tr className="hover:bg-gray-50 transition-all duration-300 border-b">
      <td className="py-3 px-4 text-gray-500">{index + 1}</td>
      <td className="py-3 px-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-md shadow-sm"
        />
      </td>
      <td className="py-3 px-4 font-semibold text-gray-800">{name}</td>
      <td className="py-3 px-4 text-gray-600">{framework}</td>
      <td className="py-3 px-4 text-gray-600">{useCase}</td>
      <td className="py-3 px-4 text-gray-600">{createdBy}</td>
      <td className="py-3 px-4 text-center">
          <Link
            to={`/model-details/${_id}`}
            className="btn text-white w-full btn-sm"
          >
            View Details
          </Link>
      </td>
    </tr>
  );
};

export default MyModelTableRow;
