import React, { useEffect } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";

const Profile = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/unauthorized");
    }
  }, [user, navigate]);
  return (
    <div className="bg-transparent flex w-full  ">
      <div className="pt-20 bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] w-full  flex">
        {/* Sidebar */}
        <div className="w-64 p-6 max-md:hidden">
          <SideBarSection />
        </div>

        {/* Notification Card */}
        <div className="flex-1 bg-transparent p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
