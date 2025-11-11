import React from "react";
import { useNavigate } from "react-router";


const PurchaseModelTableRow = ({ model }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b hover:bg-gray-50 transition duration-300">
      <td className="py-3 px-4">
        <img
          src={model.image}
          alt={model.name}
          className="w-20 h-14 object-cover rounded-lg border"
        />
      </td>
      <td className="py-3 px-4 font-medium text-gray-800">{model.name}</td>
      <td className="py-3 px-4 text-gray-700">{model.framework}</td>
      <td className="py-3 px-4 text-gray-700">{model.useCase}</td>
      <td className="py-3 px-4 text-gray-700">{model.createdBy}</td>
      <td className="py-3 px-4 text-gray-700">{model.purchasedBy}</td>
      <td className="py-3 px-4 text-center">
        <button
          onClick={() => navigate(`/models/${model._id}`)}
          className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white px-4 py-2 rounded-lg hover:opacity-90 btn transition-all"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default PurchaseModelTableRow;
