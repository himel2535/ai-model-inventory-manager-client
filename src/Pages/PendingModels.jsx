import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaCheck, FaTimes, FaEye, FaInfoCircle } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";

const PendingModels = () => {
  const { user } = useContext(AuthContext);
  const [pendingModels, setPendingModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const fetchPendingModels = async () => {
    if (!user?.email) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/models/pending`, {
        headers: { authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setPendingModels(data);
    } catch (err) {
      console.error("Error fetching pending models:", err);
      toast.error("Failed to load pending models");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingModels();
  }, [user]);

  const handleApprove = async (modelId) => {
    if (!confirm("Are you sure you want to approve this model?")) return;
    
    setActionLoading(modelId);
    try {
      const token = await user.getIdToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/models/${modelId}/approve`, {
        method: "PATCH",
        headers: { authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        toast.success("Model approved successfully!");
        setPendingModels(prev => prev.filter(m => m._id !== modelId));
      } else {
        toast.error("Failed to approve model");
      }
    } catch (err) {
      console.error("Error approving model:", err);
      toast.error("Failed to approve model");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (modelId) => {
    if (!confirm("Are you sure you want to reject and delete this model? This action cannot be undone.")) return;
    
    setActionLoading(modelId);
    try {
      const token = await user.getIdToken();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/models/${modelId}/reject`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        toast.success("Model rejected and deleted");
        setPendingModels(prev => prev.filter(m => m._id !== modelId));
      } else {
        toast.error("Failed to reject model");
      }
    } catch (err) {
      console.error("Error rejecting model:", err);
      toast.error("Failed to reject model");
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) return <LoadingSpinner fullScreen={false} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black heading-text-dark-aware tracking-tight">
            Pending Models
          </h2>
          <p className="text-gray-500 mt-2">
            Review and approve AI models submitted by users
          </p>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 rounded-2xl text-white shadow-lg">
          <span className="text-3xl font-black">{pendingModels.length}</span>
          <span className="ml-2 text-sm font-bold">Pending</span>
        </div>
      </div>

      {pendingModels.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-20 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold heading-text-dark-aware mb-2">All Caught Up!</h3>
          <p className="text-gray-500">No pending models to review at the moment</p>
        </div>
      ) : (
        <div className="space-y-6">
          {pendingModels.map((model) => (
            <div
              key={model._id}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Model Image */}
                  <div className="lg:w-64 shrink-0">
                    <img
                      src={model.image || "https://via.placeholder.com/400x300"}
                      alt={model.name}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Model Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black heading-text-dark-aware mb-2">
                        {model.name}
                      </h3>
                      <p className="text-gray-500 line-clamp-2">
                        {model.description || "No description provided"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Framework</p>
                        <p className="font-bold heading-text-dark-aware">{model.framework || "N/A"}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Category</p>
                        <p className="font-bold heading-text-dark-aware">{model.category || "N/A"}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Price</p>
                        <p className="font-bold heading-text-dark-aware">${model.price || 0}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Creator</p>
                        <p className="font-bold heading-text-dark-aware truncate">{model.createdBy || "Unknown"}</p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-bold">
                        <FaInfoCircle /> Awaiting Approval
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => handleApprove(model._id)}
                        disabled={actionLoading === model._id}
                        className="btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none rounded-xl px-6 disabled:opacity-50"
                      >
                        <FaCheck /> {actionLoading === model._id ? "Processing..." : "Approve"}
                      </button>
                      <button
                        onClick={() => handleReject(model._id)}
                        disabled={actionLoading === model._id}
                        className="btn bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white border-none rounded-xl px-6 disabled:opacity-50"
                      >
                        <FaTimes /> Reject
                      </button>
                      {model.demoVideoUrl && (
                        <a
                          href={model.demoVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-gray-200 dark:bg-gray-800 border-none rounded-xl px-6"
                        >
                          <FaEye /> View Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingModels;
