import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FcList, FcPieChart, FcIdea, FcComboChart } from "react-icons/fc";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalModels: 0,
    myModels: 0,
    myPurchases: 0,
    totalDownloads: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) return;
      try {
        const token = await user.getIdToken();
        
        // Fetch all models to get some global context
        const allRes = await fetch("https://ai-model-inventory-manager-server.vercel.app/models");
        const allData = await allRes.json();
        
        // Fetch user's models
        const myRes = await fetch(`https://ai-model-inventory-manager-server.vercel.app/my-models?email=${user.email}`, {
          headers: { authorization: `Bearer ${token}` }
        });
        const myData = await myRes.json();
        
        // Fetch user's purchases
        const purRes = await fetch(`https://ai-model-inventory-manager-server.vercel.app/model-purchase-page?email=${user.email}`);
        const purData = await purRes.json();

        setStats({
          totalModels: allData.length,
          myModels: myData.length,
          myPurchases: purData.length,
          totalDownloads: myData.reduce((acc, curr) => acc + (curr.purchased || 0), 0)
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [user]);

  if (loading) return <div className="animate-pulse space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1,2,3,4].map(i => <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>)}
    </div>
    <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
  </div>;

  const statCards = [
    { name: "Total Community Models", value: stats.totalModels, icon: <FcIdea />, color: "bg-blue-50" },
    { name: "My Created Models", value: stats.myModels, icon: <FcList />, color: "bg-green-50" },
    { name: "Models Purchased", value: stats.myPurchases, icon: <FcPieChart />, color: "bg-purple-50" },
    { name: "Total Reach (Downloads)", value: stats.totalDownloads, icon: <FcComboChart />, color: "bg-orange-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold heading-text-dark-aware">Welcome back, {user?.displayName}!</h2>
        <p className="text-gray-500">Here's what's happening with your AI portfolio today.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className={`p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between`}>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">{card.name}</p>
              <h3 className="text-2xl font-bold heading-text-dark-aware">{card.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${card.color} dark:bg-opacity-10 text-3xl`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Activity Chart (CSS Based) */}
      <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <h3 className="text-lg font-bold mb-8 heading-text-dark-aware">Performance Overview</h3>
        <div className="flex items-end justify-between h-48 gap-4 px-4">
          {[
            { label: "Community", value: stats.totalModels, color: "bg-blue-500" },
            { label: "My Models", value: stats.myModels, color: "bg-indigo-600" },
            { label: "Purchases", value: stats.myPurchases, color: "bg-cyan-500" },
            { label: "Total Reach", value: stats.totalDownloads, color: "bg-blue-800" },
          ].map((bar, i) => {
            const maxValue = Math.max(stats.totalModels, stats.myModels, stats.myPurchases, stats.totalDownloads, 10);
            const height = (bar.value / maxValue) * 100;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full">
                <div className="relative w-full flex items-end justify-center h-full">
                  <div 
                    className={`w-full max-w-[60px] ${bar.color} rounded-t-xl transition-all duration-1000 group-hover:brightness-110 shadow-lg`}
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                      {bar.value} Units
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">{bar.label}</span>
              </div>
            );
          })}
        </div>
      </div>


      {/* Recent Data Table Info */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <h3 className="font-bold heading-text-dark-aware">General Community Status</h3>
        </div>
        <div className="p-6">
           <p className="text-sm text-gray-500">Your models are currently reaching <span className="text-blue-500 font-bold">{stats.totalDownloads}</span> users across the platform. Keep up the great work in innovating modern AI solutions!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
