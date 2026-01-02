import React from "react";
import { NavLink } from "react-router";
import { 
  FcPieChart, 
  FcParallelTasks, 
  FcPaid, 
  FcAddDatabase, 
  FcHome,
  FcManager
} from "react-icons/fc";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard Home", path: "/dashboard", icon: <FcPieChart /> },
    { name: "My Profile", path: "/dashboard/profile", icon: <FcManager /> },
    { name: "My Models", path: "/dashboard/my-models", icon: <FcParallelTasks /> },
    { name: "My Purchases", path: "/dashboard/model-purchase-page", icon: <FcPaid /> },
    { name: "Add Model", path: "/dashboard/add-model", icon: <FcAddDatabase /> },
    { name: "Back to Home", path: "/", icon: <FcHome /> },
  ];

  return (
    <div className="h-full bg-base-100 border-r border-gray-200 dark:border-gray-700 w-64 flex flex-col pt-5">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
          DASHBOARD
        </h2>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
