import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center heading-text-dark-aware font-bold mb-14">
        Get In Touch
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb5e0] to-[#000851] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold heading-text-dark-aware mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <FaEnvelope className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email us at</p>
                    <p className="text-lg font-medium heading-text-dark-aware">support@aimodelmgr.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                    <FaPhone className="text-cyan-600 dark:text-cyan-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="text-lg font-medium heading-text-dark-aware">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="text-lg font-medium heading-text-dark-aware">123 AI Boulevard, Tech City, TC 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-semibold text-center lg:text-left">Follow Us</p>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-2xl">
                    <FaGithub />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-2xl">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb5e0] to-[#000851] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold heading-text-dark-aware mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 btn font-bold text-lg rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-shadow transition-transform hover:-translate-y-1 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
