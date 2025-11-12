import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-base-100 min-h-screen ">
      <div>
        <Navbar></Navbar>
        <div className="min-h-screen mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer toastClassName="center-toast" autoClose={1000} />
    </div>
  );
};

export default MainLayout;
