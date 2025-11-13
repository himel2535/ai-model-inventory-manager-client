import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/idea.png";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import fakeDP from "../assets/face.jpg";
import { FcHome, FcMultipleInputs, FcViewDetails } from "react-icons/fc";
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
                <div className="flex items-center  gap-2">
                  <FcHome /> <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/models"}>
                <div className="flex items-center  gap-2">
                  <FcViewDetails /> <span>View Models</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-model"}>
                <div className="flex items-center  gap-2">
                  <FcMultipleInputs /> <span>Add Model</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* // Logo Link */}
        <Link
          to={"/"}
          className="flex items-center gap-2 md:text-xl font-bold ml-3 md:ml-0"
        >
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
          <h2 className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] bg-clip-text text-transparent">
            MODELS INVENTORY
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {/* Home */}
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive ? "active" : ""}`
              }
            >
              <FcHome /> <span>Home</span>
            </NavLink>
          </li>

          {/* View Models */}
          <li>
            <NavLink
              to={"/models"}
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive ? "active" : ""}`
              }
            >
              <FcViewDetails /> <span>View Models</span>
            </NavLink>
          </li>

          {/* Add Model */}
          <li>
            <NavLink
              to={"/add-model"}
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive ? "active" : ""}`
              }
            >
              <FcMultipleInputs /> <span>Add Model</span>
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
                  <Link to={"/model-purchase-page"}>Model Purchase page</Link>
                </li>
                <li>
                  <Link to={"/my-models"}>My Models page</Link>
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
