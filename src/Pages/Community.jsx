import React from "react";
import { FaUsers, FaComments, FaHandshake, FaLightbulb } from "react-icons/fa";

const Community = () => {
  const initiatives = [
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Forum Discussions",
      description: "Join thousands of developers in discussing the latest AI trends and model optimizations.",
    },
    {
      icon: <FaComments className="text-4xl text-purple-500" />,
      title: "Active Support",
      description: "Get help from the community and our dedicated team of AI experts within minutes.",
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Collaborations",
      description: "Find partners for your next big AI project and share resources seamlessly.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovation Hub",
      description: "Share your unique model use cases and inspire others with your creative implementations.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent mb-6">
          Our Growing Community
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg">
          Connecting AI enthusiasts, developers, and innovators from across the globe to build the future together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initiatives.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 text-center border border-gray-100 rounded-3xl">
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4 heading-text-dark-aware">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-[2rem] p-12 text-center text-white shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            Be part of the most vibrant AI community. Start sharing, learning, and collaborating today.
          </p>
          <button className="btn btn-lg bg-white text-[#000851] border-none hover:bg-gray-100 rounded-full px-12">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
