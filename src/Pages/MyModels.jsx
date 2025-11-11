import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import MyModelCard from "../components/MyModelCard";
import MyModelTableRow from "../components/MyModelTableRow";

const MyModels = () => {
  const { user, setLoading, loading } = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-models?email=${user.email}`, {
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
    return <div>wait...</div>;
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
