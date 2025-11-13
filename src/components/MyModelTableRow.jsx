import React from "react";
import { Link } from "react-router";

const MyModelTableRow = ({ model, index }) => {
  const { _id, name, framework, useCase, createdBy, image } = model;

  return (
    <tr className=" transition-all duration-300 border-b">
      <td className="py-3 px-4 heading-text-dark-aware">{index + 1}</td>
      <td className="py-3 px-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-md shadow-sm"
        />
      </td>
      <td className="py-3 px-4 font-semibold heading-text-dark-aware">{name}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{framework}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{useCase}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{createdBy}</td>
      <td className="py-3 px-4 text-center">
        <Link
          to={`/model-details/${_id}`}
          className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white px-4 py-2 rounded-lg hover:opacity-90 btn transition-all"
        >
          View 
        </Link>
      </td>
    </tr>
  );
};

export default MyModelTableRow;
