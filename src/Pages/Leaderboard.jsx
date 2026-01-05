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

  // Podium Component Helper
  const PodiumItem = ({ model, position, delay }) => {
    if (!model) return null;
    const isFirst = position === 1;
    const isSecond = position === 2;
    
    // Aesthetic Configs
    const heightClass = isFirst ? "h-80" : "h-64";
    const orderClass = isFirst ? "order-2 z-20" : isSecond ? "order-1 z-10" : "order-3 z-10";
    
    // Gradient Borders
    const borderGradient = isFirst 
      ? "from-yellow-300 via-yellow-500 to-yellow-600" 
      : isSecond 
        ? "from-gray-300 via-gray-400 to-gray-500" 
        : "from-orange-300 via-orange-400 to-orange-500";
        
    const shadowColor = isFirst ? "shadow-yellow-500/50" : isSecond ? "shadow-gray-400/50" : "shadow-orange-500/50";

    return (
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay, type: "spring", stiffness: 120, damping: 20 }}
        className={`flex flex-col items-center ${orderClass} w-full sm:w-1/3 relative group perspective-1000`}
      >
        {/* Floating Crown for 1st Place */}
        {isFirst && (
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-4"
          >
             <FaCrown className="text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
          </motion.div>
        )}
        
        {/* Rank Badge for 2nd/3rd */}
        {!isFirst && (
            <div className={`mb-4 text-4xl font-black drop-shadow-md
                ${isSecond ? "text-gray-300" : "text-orange-400"}
            `}>
                {position === 2 ? "2nd" : "3rd"}
            </div>
        )}

        {/* The Card */}
        <div className={`
           relative w-full max-w-[280px] bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl 
           rounded-[2rem] border-2 border-transparent bg-clip-padding
           flex flex-col items-center p-6 
           shadow-2xl ${shadowColor}
           transform transition-all duration-500 hover:-translate-y-2 hover:scale-105
           overflow-hidden
        `}> 
           {/* Gradient Border Trick */}
           <div className={`absolute inset-0 rounded-[2rem] p-[2px] -z-10 bg-gradient-to-b ${borderGradient} opacity-50`}></div>
           
           {/* Inner Glow for 1st */}
           {isFirst && <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-500/20 to-transparent blur-2xl"></div>}

           {/* User Avatar */}
           <div className="relative w-24 h-24 mb-4">
               <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${borderGradient} animate-spin-slow opacity-70`}></div>
               <div className="absolute inset-1 rounded-full bg-gray-900 border-2 border-white/20 overflow-hidden">
                   <img src={model.image || `https://ui-avatars.com/api/?name=${model.name}&background=random`} alt={model.name} className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-white/20">
                   {model.purchased} Sales
               </div>
           </div>

           <h3 className="font-bold text-lg text-center text-gray-800 dark:text-white line-clamp-1 mb-1">{model.name}</h3>
           <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 font-medium">by <span className="text-blue-500">{model.createdBy?.split("@")[0]}</span></p>

           {/* Podium Base Visual */}
           <div className={`w-full mt-auto h-2 rounded-full bg-gradient-to-r ${borderGradient} opacity-50`}></div>
        </div>
        
        {/* Reflection/Shadow under card */}
        <div className={`w-32 h-4 rounded-[100%] bg-black/20 blur-lg mt-4 transform scale-x-150 transition-all duration-500 group-hover:scale-x-125 group-hover:bg-black/10`}></div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] pb-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-48 px-4 text-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-400/20 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
             <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent z-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto">
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-cyan-400 font-semibold text-sm mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/20">
                    🏆 Hall of Fame
                </div>
             </motion.div>
             
             <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-black mb-6 tracking-tighter"
             >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1CB5E0] via-blue-500 to-[#000851] drop-shadow-sm">
                    Leaderboard
                </span>
             </motion.h1>

             <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
             >
                Discover the <span className="text-blue-500 font-bold">top-tier models</span> and the <span className="text-cyan-500 font-bold">visionary creators</span> pushing the boundaries of AI.
             </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-30 -mt-32">
        
        {/* --- PODIUM SECTION --- */}
        {topModels.length > 0 && (
          <div className="flex flex-col sm:flex-row items-end justify-center gap-6 sm:gap-2 mb-32 min-h-[450px]">
             {/* 2nd Place */}
             <PodiumItem model={topModels[1]} position={2} delay={0.4} />
             {/* 1st Place */}
             <PodiumItem model={topModels[0]} position={1} delay={0.2} />
             {/* 3rd Place */}
             <PodiumItem model={topModels[2]} position={3} delay={0.6} />
          </div>
        )}

        {/* --- LIST SECTIONS --- */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Models List (Rank 4+) */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white text-xl">
                 <FaStar />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-gray-400">
                  Rising Stars
              </h2>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {topModels.slice(3, 10).map((model, idx) => (
                <motion.div 
                  key={model._id} 
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="group flex items-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center font-bold text-gray-500 text-lg group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    #{model.rank}
                  </div>
                  
                  <div className="ml-5 flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg truncate group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {model.name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">by {model.createdBy}</p>
                  </div>
                  
                  <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-xl text-sm font-bold flex items-center gap-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                    <FaDownload className="text-xs" /> {model.purchased}
                  </div>
                </motion.div>
              ))}
              {topModels.length === 0 && <p className="text-gray-500">No data available.</p>}
            </motion.div>
          </section>

          {/* Top Contributors */}
          <section>
             <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30 text-white text-xl">
                 <FaUserAlt />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-gray-400">
                  Top Creators
              </h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {topContributors.map((user, idx) => (
                <motion.div 
                  key={user.email} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden flex items-center p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mr-5 shadow-inner
                    ${idx === 0 ? "bg-yellow-100 text-yellow-600 ring-2 ring-yellow-400/30" : 
                      idx === 1 ? "bg-gray-100 text-gray-600" : 
                      idx === 2 ? "bg-orange-100 text-orange-600" : "bg-indigo-50 text-indigo-500"}
                  `}>
                    {idx + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{user.email.split("@")[0]}</h3>
                    <div className="mt-2 h-2 w-full bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(user.contributions * 10, 100)}%` }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="ml-6 text-right">
                    <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 leading-none">{user.contributions}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Models</div>
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
