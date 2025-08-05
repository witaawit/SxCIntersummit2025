import React from "react";
import SideBarSection from "@/components/dashboard/SideBarSection";
import NotificationCard from "@/components/dashboard/NotificationCard";

const Dashboard = () => {
  return (
    <div className="bg-transparent flex w-full">
      <div
        className="bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] w-full h-[1024px] flex"
      >
        {/* Sidebar */}
        <div className="w-64 p-6">
          <SideBarSection />
        </div>

        {/* Notification Card */}
        <div className="flex-1 bg-transparent p-6">
          <NotificationCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
