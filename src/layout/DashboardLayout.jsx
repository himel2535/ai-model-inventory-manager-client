import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { HiMenuAlt2 } from "react-icons/hi";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black/40 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-50`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Dashboard Top Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <HiMenuAlt2 className="text-2xl" />
            </button>
            <h1 className="text-xl font-bold dark:text-gray-100 hidden md:block">
              Control Panel
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="btn btn-ghost btn-sm hidden md:flex">Visit Site</Link>
            {/* The individual Profile/Logout are handled in the main Navbar if needed, 
                but for simplicity and to follow requirements, the user can use the visit site link 
                to get back to the main navbar or we can stick the profile part here.
                Let's reuse parts of Navbar logic or keep it clean. */}
          </div>
        </header>

        {/* Dashboard Pages Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
