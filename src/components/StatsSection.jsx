import React from "react";
import { FaDatabase, FaUsers, FaDownload, FaRocket } from "react-icons/fa";

const StatsSection = () => {
    const stats = [
        { icon: <FaDatabase />, label: "Models Hosted", value: "2,500+", color: "text-blue-500" },
        { icon: <FaUsers />, label: "Active Users", value: "15k+", color: "text-cyan-500" },
        { icon: <FaDownload />, label: "Daily Downloads", value: "1.2k+", color: "text-indigo-500" },
        { icon: <FaRocket />, label: "Models Launched", value: "85k+", color: "text-purple-500" },
    ];

    return (
        <section className="py-12 bg-gradient-to-b from-transparent to-base-200/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`text-4xl mb-4 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-extrabold heading-text-dark-aware mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
