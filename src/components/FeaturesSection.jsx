import React from "react";
import { FaShieldAlt, FaBolt, FaSync, FaLayerGroup, FaRocket, FaDatabase, FaUsers, FaDownload } from "react-icons/fa";

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: "Secure Infrastructure",
            description: "Your AI models are protected with industry-leading security protocols and encrypted storage.",
            bg: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400"
        },
        {
            icon: <FaBolt />,
            title: "Lightning Fast",
            description: "Instant access and deployment of AI models with our optimized content delivery network.",
            bg: "bg-cyan-50 dark:bg-cyan-900/20",
            iconColor: "text-cyan-600 dark:text-cyan-400"
        },
        {
            icon: <FaSync />,
            title: "Seamless Sync",
            description: "Automatically sync your model versions and datasets across all your development environments.",
            bg: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400"
        },
        {
            icon: <FaLayerGroup />,
            title: "Advanced Inventory",
            description: "Experience total control over your AI assets with powerful categorization and search tools.",
            bg: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            icon: <FaRocket />,
            title: "Global Scalability",
            description: "Scale your AI applications globally with our distributed infrastructure and load balancing.",
            bg: "bg-red-50 dark:bg-red-900/20",
            iconColor: "text-red-600 dark:text-red-400"
        },
        {
            icon: <FaDatabase />,
            title: "Data Persistence",
            description: "Automated backups and redundant storage to ensure your models are always available.",
            bg: "bg-green-50 dark:bg-green-900/20",
            iconColor: "text-green-600 dark:text-green-400"
        },
        {
            icon: <FaUsers />,
            title: "Team Collaboration",
            description: "Built-in tools for teams to share, review, and collaborate on AI model development.",
            bg: "bg-yellow-50 dark:bg-yellow-900/20",
            iconColor: "text-yellow-600 dark:text-yellow-400"
        },
        {
            icon: <FaDownload />,
            title: "Offline Ready",
            description: "Download models for offline local testing and edge device deployment flexibility.",
            bg: "bg-pink-50 dark:bg-pink-900/20",
            iconColor: "text-pink-600 dark:text-pink-400"
        }
    ];

    return (
        <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <h2 className="lg:text-4xl md:text-3xl text-2xl text-center heading-text-dark-aware font-bold mb-14">
                Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb5e0] to-[#000851] rounded-2xl blur opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition duration-300"></div>
                        <div className="relative p-8 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.iconColor} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold heading-text-dark-aware mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
