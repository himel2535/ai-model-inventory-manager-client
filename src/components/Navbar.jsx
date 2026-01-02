import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/idea.png";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import fakeDP from "../assets/face.jpg";
import {
  FcHome,
  FcMultipleInputs,
  FcViewDetails,
  FcPlus,
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
      .then((result) => {
        console.log(result);
        // toast("Logout successfully")
      })
      .catch((error) => {
        console.log(error.massage);
        toast(error.massage);
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

  // ________________

  return (
    <div className="navbar py-1 lg:px-8 md:px-6 px-4 min-h-0 z-1 shadow-sm glass-card max-w-7xl">
      <div className="navbar-start ">
        {/* // Mobile Menu Button */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center 
                       cursor-pointer 
                       bg-gradient-to-r from-[#1CB5E0] to-[#000851] 
                       hover:scale-105 transition-transform duration-300 
                       shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* ----Route (Mobile)---- */}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <div className="flex items-center gap-2">
                  <FcHome /> <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/models"}>
                <div className="flex items-center gap-2">
                  <FcViewDetails /> <span>Models</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leaderboard"}>
                <div className="flex items-center gap-2">
                  <FcRating /> <span>Leaderboard</span>
                </div>
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={"/dashboard"}>
                  <div className="flex items-center gap-2">
                    <FcPieChart /> <span>Dashboard</span>
                  </div>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to={"/community"}>
                <div className="flex items-center gap-2">
                  <FcConferenceCall /> <span>Community</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>
                <div className="flex items-center gap-2">
                  <FcAbout /> <span>About Us</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* // Logo Link */}
        <Link
          to={"/"}
          className="flex items-center gap-2 font-bold ml-3 md:ml-0"
        >
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
          <h2 className="flex gap-1 md:gap-2 text-gray-800 dark:text-gray-100">
            <span>MODELS</span>
            <span>INVENTORY</span>
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 ">
          {/* Home */}
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? "active" : ""}`
              }
            >
              <FcHome /><span>Home</span>
            </NavLink>
          </li>

          {/* View Models */}
          <li>
            <NavLink
              to={"/models"}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? "active" : ""}`
              }
            >
              <FcViewDetails /><span>Models</span>
            </NavLink>
          </li>

          {/* Leaderboard */}
          <li>
            <NavLink
              to={"/leaderboard"}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? "active" : ""}`
              }
            >
              <FcRating /> <span>Leaderboard</span>
            </NavLink>
          </li>

          {/* Dashboard */}
          {user && (
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "active" : ""}`
                }
              >
                <FcPieChart /> <span>Dashboard</span>
              </NavLink>
            </li>
          )}

          {/* Community */}
          <li>
            <NavLink
              to={"/community"}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? "active" : ""}`
              }
            >
              <FcConferenceCall /><span>Community</span>
            </NavLink>
          </li>

          {/* About Us */}
          <li>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                `flex items-center gap-2 ${isActive ? "active" : ""}`
              }
            >
              <FcAbout /><span>About Us</span>
            </NavLink>
          </li>

        </ul>
      </div>

      {/* ---Ending Part--- */}
      <div className="navbar-end gap-3">
        <button
          onClick={toggleTheme}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center 
            cursor-pointer transition-transform duration-300 
          `}
          aria-label="Toggle theme"
        >
          <span className="text-xl transition-transform duration-300 hover:scale-110">
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </button>

        {/* ---End of theme toggle--- */}

        {/* ----Profile--- */}
        <div>
          {" "}
          {user ? (
            <div className="dropdown dropdown-end z-50">
              {/* ... (Dropdown trigger code) ... */}
              <div
                tabIndex={0}
                role="button"
                className="hover cursor-pointer !rounded-full btn-ghost btn-circle avatar"
              >
                <div className="w-10 h-10 p-[2px] rounded-full bg-gradient-to-r from-[#1CB5E0] to-[#000851] hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full rounded-full"
                    alt="User Avatar"
                    src={user?.photoURL || fakeDP}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {/* ... (Dropdown menu items) ... */}
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="mt-3">
                  <Link to={"/dashboard"}>Dashboard Home</Link>
                </li>
                <li>
                  <Link to={"/dashboard/model-purchase-page"}>My Purchases</Link>
                </li>
                <li>
                  <Link to={"/dashboard/my-models"}>My Uploaded Models</Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-xs text-left mt-2 text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn font-semibold  text-white">
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
