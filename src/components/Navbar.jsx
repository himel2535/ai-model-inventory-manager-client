import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/idea.png";

const Navbar = () => {
  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm glass-card max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/add-model"}>All Models</NavLink>
            </li>
            <li>
              <NavLink to={"/view-models"}>View Models</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          <img className="w-9 h-9 rounded-full" src={logo} alt="" />
          <h2>AI MODELS</h2>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/add-model"}>All Models</NavLink>
          </li>
          <li>
            <NavLink to={"/view-models"}>View Models</NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    {logo}
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/model-purchase-page"}>
                   Model Purchase page
                </Link>
              </li>
              <li>
                <Link to={"/model-models-page"}>
                   Model Models page
                </Link>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left bg-linear-to-r from-green-500 to-blue-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-green-500 to-blue-500 text-white"
          >
            {" "}
            Login
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
