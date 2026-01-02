import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import MyModelCard from "../components/MyModelCard";
import MyModelTableRow from "../components/MyModelTableRow";
import LoadingSpinner from "../components/LoadingSpinner";

const MyModels = () => {
  const { user } = useContext(AuthContext);
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
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-10">
      <h1 className="leading-relaxed lg:text-5xl md:text-4xl text-3xl font-extrabold text-center mb-10 heading-text-dark-aware">
        My Uploaded Models
      </h1>

      {/* ---Desktop View — Table--- */}

      <div className="hidden lg:block shadow-xl rounded-2xl   overflow-hidden">
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
