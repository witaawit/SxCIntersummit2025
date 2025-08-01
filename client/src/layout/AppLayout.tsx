import Navbar from "@/components/ui/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
