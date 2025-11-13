import React from "react";
import { Link } from "react-router";

const PurchaseModelTableRow = ({ model }) => {
  return (
    <tr className="border-b transition duration-300">
      <td className="py-3 px-4">
        <img
          src={model.image}
          alt={model.name}
          className="w-20 h-14 object-cover rounded-lg border"
        />
      </td>
      <td className="py-3 px-4 font-semibold heading-text-dark-aware">{model.name}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{model.framework}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{model.useCase}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{model.createdBy}</td>
      <td className="py-3 px-4 heading-text-dark-aware">{model.purchasedBy}</td>
      <td className="py-3 px-4 text-center">
        <Link
          to={`/model-details/${model.modelId}`}
          className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white px-4 py-2 rounded-lg hover:opacity-90 btn transition-all"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default PurchaseModelTableRow;
