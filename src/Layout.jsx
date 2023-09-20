import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-5xl justify-center m-auto  px-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
