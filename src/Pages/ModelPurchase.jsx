import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PurchaseModelTableRow from "../components/PurchaseModelTableRow";
import PurchaseModelCard from "../components/PurchaseModelCard";
import LoadingSpinner from "../components/LoadingSpinner";

const ModelPurchase = () => {
  const { user } = use(AuthContext);

  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchPurchasedModels = async () => {
      setLoading(true);
      try {
        const token = await user.getIdToken();
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/model-purchase-page?email=${user.email}`,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setModels(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedModels();
  }, [user]);

  if (loading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="max-w-6xl mx-auto  ">
      <h1 className="mt-12 lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-10 leading-relaxed heading-text-dark-aware">
        Purchased Models
      </h1>

      {/* ---Desktop / Tablet View — Table--- */}
      <div className="hidden lg:block  shadow-xl rounded-2xl overflow-hidden mb-10">
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
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2  gap-4 mb-10">
        {models.map((model, index) => (
          <PurchaseModelCard key={model._id} model={model} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ModelPurchase;
