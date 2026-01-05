import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 leading-relaxed">Stay Ahead of AI</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get the latest open-source models and AI research delivered straight to your inbox every week.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button className="px-8 py-4 rounded-full bg-white text-[#000851] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Subscribe <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
