import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PurchaseModelTableRow from "../components/PurchaseModelTableRow";
import PurchaseModelCard from "../components/PurchaseModelCard";

const ModelPurchase = () => {
  const { user, setLoading, loading } = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/model-purchase-page?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setModels(data);
          setLoading(false);
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user, setLoading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 p-4">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-transparent bg-clip-text">
        Purchased Models
      </h2>

      {/* ---Desktop / Tablet View — Table--- */}
      <div className="hidden md:block bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <table className="table w-full border-collapse">
          <thead className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white text-left">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Framework</th>
              <th className="py-3 px-4">Use Case</th>
              <th className="py-3 px-4">Created By</th>
              <th className="py-3 px-4">Purchased By</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {models.map((model, index) => (
              <PurchaseModelTableRow
                key={model._id}
                model={model}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ----Mobile View — Card Layout--- */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {models.map((model, index) => (
          <PurchaseModelCard key={model._id} model={model} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ModelPurchase;
