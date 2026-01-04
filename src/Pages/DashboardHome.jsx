import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";
import { 
  FcCollaboration, 
  FcDatabase, 
  FcPositiveDynamic,
  FcTemplate,
  FcStatistics,
  FcApproval,
  FcLineChart,
  FcAddDatabase,
  FcParallelTasks,
  FcPaid
} from "react-icons/fc";
import LoadingSpinner from "../components/LoadingSpinner";

const AdminDashboard = ({ stats }) => {
  const adminCards = [
    { name: "Total Users", value: stats?.totalUsers || 0, icon: <FcCollaboration />, gradient: "from-blue-500 to-indigo-600", desc: "Registered users" },
    { name: "Approved Models", value: stats?.totalModels || 0, icon: <FcDatabase />, gradient: "from-purple-500 to-pink-600", desc: "Live models" },
    { name: "Pending Models", value: stats?.pendingModels || 0, icon: <FcApproval />, gradient: "from-orange-400 to-red-500", desc: "Awaiting approval" },
    { name: "Total Purchases", value: stats?.totalPurchases || 0, icon: <FcLineChart />, gradient: "from-cyan-500 to-blue-500", desc: "Platform sales" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black heading-text-dark-aware tracking-tight">
            Admin Dashboard
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Platform analytics and management overview
          </p>
        </div>
        <div className="flex gap-3">
          <div className="px-5 py-2.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Live</span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminCards.map((card, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-105"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-[5rem]`}></div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-4xl shadow-lg`}>
                {card.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{card.name}</p>
                <h3 className="text-5xl font-black heading-text-dark-aware mt-1">{card.value.toLocaleString()}</h3>
                <p className="text-xs text-gray-400 mt-1">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/dashboard/pending-models"
          className="group bg-gradient-to-br from-orange-400 to-red-500 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcApproval className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Pending Models</h3>
            <p className="text-white/90 text-sm">Review and approve models</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              View All <span>→</span>
            </div>
          </div>
        </Link>

        <Link 
          to="/dashboard/all-users"
          className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcCollaboration className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Manage Users</h3>
            <p className="text-white/90 text-sm">View all registered users</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              View All <span>→</span>
            </div>
          </div>
        </Link>

        <Link 
          to="/dashboard/all-models"
          className="group bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcDatabase className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">All Models</h3>
            <p className="text-white/90 text-sm">Browse all AI models</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              View All <span>→</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Platform Stats */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
        <h3 className="text-2xl font-bold heading-text-dark-aware mb-6">Platform Reach</h3>
        <div className="flex items-center gap-6">
          <FcPositiveDynamic className="text-7xl" />
          <div>
            <p className="text-6xl font-black heading-text-dark-aware">{(stats?.totalReach || 0).toLocaleString()}</p>
            <p className="text-gray-500 mt-2">Total model downloads across platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = ({ stats, user }) => {
  const userCards = [
    { name: "My Models", value: stats?.myModelsCount || 0, icon: <FcTemplate />, gradient: "from-green-400 to-emerald-600", link: "/dashboard/my-models" },
    { name: "My Purchases", value: stats?.myPurchasesCount || 0, icon: <FcStatistics />, gradient: "from-blue-400 to-cyan-500", link: "/dashboard/model-purchase-page" },
    { name: "Total Reach", value: stats?.myReach || 0, icon: <FcPositiveDynamic />, gradient: "from-indigo-400 to-purple-600", link: null },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black heading-text-dark-aware tracking-tight">
            Welcome Back, {user?.displayName?.split(" ")[0]}! 👋
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Here's your model performance overview
          </p>
        </div>
        <div className="flex gap-3">
          <div className="px-5 py-2.5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Active</span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCards.map((card, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-105"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-[5rem]`}></div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-4xl shadow-lg`}>
                {card.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{card.name}</p>
                <h3 className="text-5xl font-black heading-text-dark-aware mt-1">{card.value.toLocaleString()}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/dashboard/add-model"
          className="group bg-gradient-to-br from-[#1CB5E0] to-[#000851] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcAddDatabase className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Add New Model</h3>
            <p className="text-white/90 text-sm">Share your AI model with the community</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              Create Now <span>→</span>
            </div>
          </div>
        </Link>

        <Link 
          to="/dashboard/my-models"
          className="group bg-gradient-to-br from-green-400 to-emerald-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcParallelTasks className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">My Models</h3>
            <p className="text-white/90 text-sm">Manage your created models</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              View All <span>→</span>
            </div>
          </div>
        </Link>

        <Link 
          to="/dashboard/model-purchase-page"
          className="group bg-gradient-to-br from-blue-400 to-cyan-500 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="relative z-10">
            <FcPaid className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">My Purchases</h3>
            <p className="text-white/90 text-sm">View purchased models</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
              View All <span>→</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const { user, isAdmin } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) return;
      try {
        const token = await user.getIdToken();
        const endpoint = isAdmin 
          ? `${import.meta.env.VITE_API_URL}/admin-stats` 
          : `${import.meta.env.VITE_API_URL}/user-stats/${user.email}`;
        
        const res = await fetch(endpoint, {
          headers: { authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Stats Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user, isAdmin]);

  if (loading) return <LoadingSpinner fullScreen={false} />;

  if (isAdmin) {
    return <AdminDashboard stats={stats} />;
  }

  return <UserDashboard stats={stats} user={user} />;
};

export default DashboardHome;
