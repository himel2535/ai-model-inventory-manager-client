import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/idea.png";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import fakeDP from "../assets/face.jpg";
import {
  FcHome,
  FcMultipleInputs,
  FcViewDetails,
  FcConferenceCall,
  FcAbout,
  FcRating,
  FcPieChart,
} from "react-icons/fc";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // ----Theme Toggle---
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <FcHome /> },
    { to: "/models", label: "Models", icon: <FcViewDetails /> },
    { to: "/leaderboard", label: "Leaderboard", icon: <FcRating /> },
    { to: "/community", label: "Community", icon: <FcConferenceCall /> },
    { to: "/about-us", label: "About Us", icon: <FcAbout /> },
  ];

  if (user) {
    navLinks.splice(3, 0, { to: "/dashboard", label: "Dashboard", icon: <FcPieChart /> });
  }

  return (
    <div className="sticky top-0 z-50 flex justify-center  px-4 w-full bg-opacity-0 pointer-events-none">
      <div className="navbar pointer-events-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-full px-6 py-2 shadow-2xl max-w-7xl w-full transition-all duration-300 hover:shadow-cyan-500/10 dark:hover:shadow-blue-900/20">
        
        {/* --- START: Logo --- */}
        <div className="navbar-start w-auto mr-auto">
          <Link to={"/"} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1CB5E0] to-[#000851] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <img className="relative w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CB5E0] via-blue-600 to-[#000851] group-hover:to-cyan-500 transition-all duration-500">
                Models<span className="font-light text-gray-800 dark:text-white">Inventory</span>
              </span>
            </div>
          </Link>
        </div>

        {/* --- CENTER: Desktop Links --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1 p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group
                    ${isActive 
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 shadow-sm" 
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                >
                  <span className="text-lg opacity-80 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span>{link.label}</span>
                  {/* Animated Underline for non-active */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1CB5E0] to-[#000851] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* --- END: Actions --- */}
        <div className="navbar-end w-auto ml-auto flex items-center gap-3">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group shadow-inner"
            aria-label="Toggle theme"
          >
             <span className="text-xl group-hover:rotate-180 transition-transform duration-500">
              {theme === "light" ? "☀️" : "🌙"}
            </span>
          </button>

          {/* Profile Dropdown */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="group">
                <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-r from-[#1CB5E0] to-[#000851] shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                   <img
                    className="w-full h-full rounded-full border-2 border-white dark:border-gray-900 object-cover"
                    alt="Usr"
                    src={user?.photoURL || fakeDP}
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl z-[100] mt-4 w-60 p-4 shadow-2xl border border-gray-100 dark:border-gray-700 transform origin-top-right transition-all duration-200"
              >
                <div className="flex flex-col items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-[#1CB5E0] to-[#000851] mb-2">
                    <img src={user?.photoURL || fakeDP} alt="Profile" className="w-full h-full rounded-full border-2 border-white dark:border-gray-900" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">{user.displayName}</h3>
                  <p className="text-xs text-gray-500 font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full mt-1">{user.email}</p>
                </div>

                <li><Link to="/dashboard" className="py-3 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 rounded-xl mb-1">📊 Dashboard</Link></li>
                <li>
                  <button onClick={handleSignOut} className="py-3 font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100 rounded-xl mt-1">
                    🚪 Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
              Login
            </Link>
          )}

           {/* Mobile Menu Button */}
           <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {navLinks.map(link => (
                 <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
               ))}
               {!user && <li><Link to="/login">Login</Link></li>}
            </ul>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
