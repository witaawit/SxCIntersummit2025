import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen = true, className = "" }) {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const { user } = useUserStore();

  // useEffect(() => {
  //   if (user === null) {
  //     navigate("/unauthorized");
  //   }
  // }, [user]);

  const goToHomePage = () => {
    navigate("/");
  };
  const goToFAQPage = () => {
    navigate("/profile/faq");
  };
  const goToProfilePage = () => {
    navigate("/profile/home");
  };

  const goToEditProfilePage = () => {
    navigate("/profile/");
  };

  // Define goToEventsPage function
  const goToEventsPage = () => {
    navigate("/profile/events"); // Ganti dengan path yang sesuai untuk halaman Events
  };

  return (
    <div className="hidden lg:block">
    <div
      className={`w-56 bg-white/10 rounded-xl backdrop-blur-sm border-r border-white/20 p-4 min-h-[80vh] my-4 ml-4 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 ${className}`}
    >
      {/* User Profile - lebih kompak */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center space-x-2 max-w-full">
          <div className="w-8 h-8 bg-purple-300/80 rounded-full flex items-center justify-center">
            <img
              src="/images/profile/profile-icon.svg"
              alt="Profile"
              className="w-4 h-4"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-white text-sm font-medium truncate">
              {user?.name || ""}
            </h3>
            <p className="text-white/60 text-[10px]">{user?.email || ""}</p>
          </div>
        </div>
      </div>
      {/* Main Menu - lebih rapat */}
      <div className="mb-4">
        <h4 className="text-white/60 text-xs font-medium mb-2 tracking-wider">
          Main Menu
        </h4>
        <nav className="space-y-1">
          {[
            {
              icon: "home-icon.svg",
              label: "Home",
              action: goToProfilePage,
            },
            {
              icon: "mini-profile.svg",
              label: "Profile",
              action: goToEditProfilePage,
            },
            {
              icon: "bell-icon.svg",
              label: "Notifications",
              action: () => navigate("/profile/notifications"),
            },
            {
              icon: "event-icon.svg",
              label: "Events",
              action: goToEventsPage, // <-- Add action here
            },
            {
              icon: "question-icon.svg",
              label: "FAQs",
              action: goToFAQPage,
            },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action || undefined} // Add the onClick event
              className={`cursor-pointer w-full flex items-center text-sm text-white hover:bg-white/10 p-1.5 rounded ${
                item.active ? "bg-white/20" : ""
              }`}
            >
              <img
                src={`/images/profile/${item.icon}`}
                alt={item.label}
                className="w-3.5 h-3.5 mr-2"
              />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="space-y-1.5 mt-6">
        <button
          onClick={goToHomePage}
          className="cursor-pointer w-full bg-green-500/90 hover:bg-green-500 text-white py-1.5 text-sm rounded flex items-center justify-center"
        >
          <img
            src="/images/profile/home-icon.svg"
            alt="Home"
            className="w-4 h-4 mr-1.5"
          />
          Back to Home
        </button>
        <button
          onClick={() => logout()}
          className="cursor-pointer w-full bg-red-500/80 hover:bg-red-500 text-white py-1.5 text-sm rounded flex items-center justify-center"
        >
          <img
            src="/images/profile/logout-icon.svg"
            alt="Logout"
            className="w-4 h-4 mr-1.5"
          />
          Logout
        </button>
      </div>
    </div>
    
      {/* Display images only for /profile/bmc route */}
     {/* Display timeline for /profile/bmc and /profile/bmc/individual only */}
{(location.pathname === "/profile/bmc/team" || location.pathname === "/profile/bmc/individual") && (
  <>
      <h2 className="text-white text-xl font-semibold mt-6 ml-10">Need help or have any questions? <br/> Reach us!</h2>
        <div className="w-56  p-4 border border-white/20 rounded-[19.6px] bg-[#8257A9] text-white mx-auto ml-10">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/images/profile/BMC/profile.png" 
              alt="BMC Icon"
              className="w-5 h-5 mb-2"  // Adds some space between the image and the text
            />
            <p className="text-sm font-medium">Annisa Fauziyah</p>
            <p className="text-sm mt-2">087845099825 (WA)</p>
          </div>
        </div>
    <h2 className="flex mt-2 justify-center items-center">
      <img 
        src="/images/profile/BMC/wa-group.png" // Ganti dengan gambar yang sesuai
        alt="Icon"
        className="w-40 h-40 object-contain"
      />
    </h2>
    <h2 className="flex justify-center items-center">
      <img 
        src="/images/profile/BMC/bmc-timeline.png" // Ganti dengan gambar yang sesuai
        alt="Icon"
        className="w-150 h-150 object-contain"
      />
    </h2>
  </>
)}
    </div>


  );
}

export default Sidebar;
