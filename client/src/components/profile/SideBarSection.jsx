import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen = true, className = "" }) {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const { user } = useUserStore();

  const goToHomePage = () => {
    navigate("/");
  };
  const goToFAQPage = () => {
    navigate("/profile/faq");
  };
  const goToProfilePage = () => {
    navigate("/profile/");
  };

  // Define goToEventsPage function
  const goToEventsPage = () => {
    navigate("/profile/events"); // Ganti dengan path yang sesuai untuk halaman Events
  };

  return (
    <aside
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
              {user.name}
            </h3>
            <p className="text-white/60 text-[10px]">{user.email}</p>
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
              action: goToProfilePage,
            },
            {
              icon: "bell-icon.svg",
              label: "Notifications",
              active: true,
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
      {/* Action Buttons - lebih kecil */}
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
    </aside>
  );
}

export default Sidebar;
