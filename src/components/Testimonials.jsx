import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Researcher at AI Lab",
      text: "This inventory manager has transformed how we track and share our internal models. The UI is exceptionally intuitive.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Mark Tuan",
      role: "Full Stack Developer",
      text: "The diversity of frameworks supported here is impressive. Found exactly what I needed for my edge computing project.",
      avatar: "https://i.pravatar.cc/150?u=mark"
    },
    {
      name: "Aisha Chen",
      role: "Open Source Contributor",
      text: "A beautiful platform that actually cares about the developer experience. High-quality models and great performance.",
      avatar: "https://i.pravatar.cc/150?u=aisha"
    }
  ];

  return (
    <section className="py-20 px-4 bg-base-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold heading-text-dark-aware mb-4">Loved by Innovators</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join thousands of researchers and developers who are building the future with our tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 text-yellow-500 mb-6 text-sm">
                {[1,2,3,4,5].map(s => <FaStar key={s} />)}
              </div>
              <FaQuoteLeft className="text-blue-500/20 text-4xl mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold heading-text-dark-aware">{rev.name}</h4>
                  <p className="text-xs text-blue-500 font-medium uppercase tracking-wider">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
