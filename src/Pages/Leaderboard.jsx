import React, { useEffect, useState } from "react";
import { FaTrophy, FaStar, FaDownload, FaUserAlt, FaCrown, FaMedal } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const [topModels, setTopModels] = useState([]);
  const [topContributors, setTopContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/models`);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 mb-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-indigo-200"
            style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to bottom right, #ffffff, #c7d2fe)' }}
          >
            Leaderboard
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Recognizing the pioneers and popular innovations shaping our AI ecosystem.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Top Models Column */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-500 rounded-2xl shadow-lg shadow-yellow-500/30">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Trending Models</h2>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {topModels.map((model, idx) => (
                <motion.div 
                  key={model._id} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 overflow-hidden
                    ${idx === 0 ? "ring-4 ring-yellow-400/30" : ""}
                  `}
                >
                  {/* Rank Badge */}
                  <div className={`
                    absolute -left-4 -top-4 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg z-10
                    ${idx === 0 ? "bg-gradient-to-br from-yellow-400 to-orange-500" : 
                      idx === 1 ? "bg-gradient-to-br from-gray-300 to-gray-500" :
                      idx === 2 ? "bg-gradient-to-br from-orange-300 to-red-400" : "bg-blue-500 translate-x-2 translate-y-2 w-10 h-10 text-sm"}
                  `}>
                    {idx < 3 ? <FaCrown /> : `#${idx + 1}`}
                  </div>

                  <div className={`ml-8 flex-1 min-w-0 ${idx > 2 ? 'ml-2' : ''}`}>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 truncate">{model.name}</h3>
                    <p className="text-sm text-gray-500 truncate">by {model.createdBy}</p>
                    <div className="flex gap-2 mt-2">
                       <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300 font-medium">{model.framework}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-xl">
                      <FaDownload className="text-blue-600 dark:text-blue-400 mb-1" />
                      <span className="font-bold text-blue-700 dark:text-blue-300">{model.purchased || 0}</span>
                      <span className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">Sales</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Top Contributors Column */}
          <section>
             <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500 rounded-2xl shadow-lg shadow-purple-500/30">
                <FaUserAlt className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Top Creators</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {topContributors.map((user, idx) => (
                <motion.div 
                  key={user.email} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg mr-4">
                    {idx + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{user.email.split("@")[0]}</h3>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(user.contributions * 10, 100)}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-indigo-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="ml-4 text-center min-w-[60px]">
                    <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">{user.contributions}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Models</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
