import React, { useEffect, useState } from "react";
import { FaTrophy, FaStar, FaDownload, FaUserAlt } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";

const Leaderboard = () => {
  const [topModels, setTopModels] = useState([]);
  const [topContributors, setTopContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ai-model-inventory-manager-server.vercel.app/models");
        const data = await res.json();
        
        // Derive Top Models (sorted by purchased)
        const sortedModels = [...data]
          .sort((a, b) => (b.purchased || 0) - (a.purchased || 0))
          .slice(0, 5)
          .map((m, i) => ({ ...m, rank: i + 1 }));
        setTopModels(sortedModels);

        // Derive Top Contributors (count models per user)
        const userMap = {};
        data.forEach(m => {
          if (m.createdBy) {
            userMap[m.createdBy] = (userMap[m.createdBy] || 0) + 1;
          }
        });
        
        const sortedUsers = Object.entries(userMap)
          .map(([email, count]) => ({ email, contributions: count }))
          .sort((a, b) => b.contributions - a.contributions)
          .slice(0, 5)
          .map((u, i) => ({ ...u, rank: i + 1 }));
        setTopContributors(sortedUsers);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold heading-text-dark-aware mb-4">
          Community Leaderboard
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Celebrating the most popular models and top contributors across our global AI community.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Top Models */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FaTrophy className="text-yellow-500 text-3xl" />
            <h2 className="text-2xl font-bold heading-text-dark-aware">Top Models</h2>
          </div>
          <div className="space-y-4">
            {topModels.map((model) => (
              <div key={model._id} className="flex items-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl mr-3 md:mr-6 shrink-0 ${
                  model.rank === 1 ? "bg-yellow-100 text-yellow-600" :
                  model.rank === 2 ? "bg-gray-100 text-gray-600" :
                  model.rank === 3 ? "bg-orange-100 text-orange-600" : "bg-blue-50 text-blue-500"
                }`}>
                  {model.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg heading-text-dark-aware truncate">{model.name}</h3>
                  <p className="text-[10px] md:text-sm text-gray-400 truncate">by {model.createdBy}</p>
                </div>
                <div className="text-right flex gap-3 md:gap-6 shrink-0 ml-2">
                  <div className="flex flex-col items-center">
                    <FaDownload className="text-blue-500 mb-1 text-sm md:text-base" />
                    <span className="text-[10px] md:text-xs font-bold text-gray-500">{model.purchased || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Contributors */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FaUserAlt className="text-blue-500 text-2xl" />
            <h2 className="text-2xl font-bold heading-text-dark-aware">Top Contributors</h2>
          </div>
          <div className="space-y-4">
            {topContributors.map((user) => (
              <div key={user.email} className="flex items-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-3 md:mr-6 shadow-indigo-200 shrink-0">
                  {user.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-lg heading-text-dark-aware truncate">{user.email.split("@")[0]}</h3>
                  <p className="text-[10px] md:text-sm text-gray-400">Contributor</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-lg md:text-xl font-extrabold text-blue-600 dark:text-blue-400">{user.contributions}</span>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400">Models</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
};

export default Leaderboard;
