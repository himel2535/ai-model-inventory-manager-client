import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import MyModelCard from "../components/MyModelCard";
import MyModelTableRow from "../components/MyModelTableRow";
import LoadingSpinner from "../components/LoadingSpinner";

const MyModels = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchMyModels = async () => {
      setLoading(true);
      if (!user?.email) return;

      setLoading(true);
      try {
        const token = await user.getIdToken();
        const res = await fetch(
          `https://ai-model-inventory-manager-server.vercel.app/my-models?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setModels(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyModels();
  }, [user, setLoading]);

  if (loading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  return (
    <div className="max-w-6xl mx-auto  px-4">
      <h1 className=" mt-12 leading-relaxed lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-10 text-gray-700">
        My Uploaded Models
      </h1>

      {/* ---Desktop View — Table--- */}

      <div className="hidden lg:block bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
        <table className="table w-full border-collapse">
          <thead className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white text-left">
            <tr>
              <th className="py-3 px-4">No:</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Framework</th>
              <th className="py-3 px-4">Use Case</th>
              <th className="py-3 px-4">Created By</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => (
              <MyModelTableRow key={model._id} model={model} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      {/*----Mobile View  Card--- */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {models.map((model, index) => (
          <MyModelCard key={model._id} model={model} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MyModels;
