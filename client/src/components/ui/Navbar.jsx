import { useUserStore } from "@/store/userStore";
import { User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { user } = useUserStore();
  const toggleMenu = () => setIsOpen((o) => !o);

  if (["/login", "/signup", "/dashboard"].includes(location.pathname)) {
    return null;
  }
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && y > 50) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`grid grid-cols-3 px-3 py-2 bg-gradient-to-r from-[#C6FF894D] bg-opacity-30 border border-[#abdc57] rounded-full shadow-[0_0_8px_#abdc57] w-full max-w-[90%] mx-auto mt-3 fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md transition-all duration-300 ${
        isVisible ? "top-3" : "-top-20"
      }`}
    >
      <div className="flex items-center">
        <img
          src="/images/logo-intersummit-3.png"
          alt="Logo"
          className="w-15 h-10"
        />
      </div>

      <div className="hidden md:flex justify-center items-center space-x-4">
        <Link
          to="/"
          className="text-white hover:text-[#6A7337] text-xs font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-[#6A7337] text-xs font-medium"
        >
          About
        </Link>

        <div className="relative group">
          <Link
            to="/program"
            className="text-white hover:text-[#abdc57] text-xs font-medium flex items-center py-2"
          >
            Program <span className="ml-1 text-xs">▾</span>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 bg-black/70 border border-[#abdc57] rounded-lg shadow-lg w-50 z-50 hidden group-hover:block transition duration-500">
            <div className="py-1">
              <Link
                to="/program/bmc"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b]"
              >
                Business Model Canvas
              </Link>
              <Link
                to="/program/bcl"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b]"
              >
                Business Competition Launchpad
              </Link>
              <span className="block px-4 py-2 text-sm text-white/50 cursor-not-allowed">
                International Business Case Competition
              </span>
              <span className="block px-4 py-2 text-sm text-white/50 cursor-not-allowed">
                International Business Plan Competition
              </span>
              <span className="block px-4 py-2 text-sm text-white/50 cursor-not-allowed">
                Chambers
              </span>
              <span className="block px-4 py-2 text-sm text-white/50 cursor-not-allowed">
                Company Visit
              </span>
              <span className="block px-4 py-2 text-sm text-white/50 cursor-not-allowed">
                International Conference
              </span>
            </div>
          </div>
        </div>
        <a
          href="https://linktr.ee/mnf.summit25"
          className="text-white hover:text-[#abdc57] text-xs font-medium"
        >
          Merchandise
        </a>
      </div>

      <div className="hidden md:flex items-center justify-end space-x-2">
        {!user ? (
          <>
            <Link to="/login">
              <button className="cursor-pointer text-xs px-3 py-1 border border-[#AEE67F] font-bold text-[#AEE67F] rounded-lg hover:bg-[#42582b]">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-xs px-3 py-1 bg-[#AEE67F] font-semibold text-black rounded-lg hover:opacity-90">
                Sign up
              </button>
            </Link>{" "}
          </>
        ) : (
          <Link to="/profile">
            <div className="cursor-pointer flex items-center space-x-2 text-white">
              <User />
              <p>{user?.name}</p>
            </div>
          </Link>
        )}
      </div>

      <button
        className="md:hidden absolute right-4 top-3 text-white"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link to="/" onClick={toggleMenu} className="text-white text-base">
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-white text-base"
            >
              About
            </Link>
            <Link
              to="/program/bmc"
              onClick={toggleMenu}
              className="text-white text-base"
            >
              Program
            </Link>
            <a
              href="https://linktr.ee/mnf.summit25"
              onClick={toggleMenu}
              className="text-white text-base"
            >
              Merchandise
            </a>
            <div className="flex space-x-4 mt-4">
              {!user ? (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <button className="text-xs px-4 py-1 bg-[#2e3e15] text-white rounded-lg hover:bg-[#42582b]">
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <button className="text-xs px-4 py-1 bg-[#abdc57] text-black rounded-lg hover:opacity-90">
                      Sign up
                    </button>
                  </Link>
                </>
              ) : (
                <Link to="/profile" onClick={toggleMenu}>
                  <div className="text-xs px-4 py-1 bg-[#abdc57] text-black rounded-lg hover:opacity-90">
                    <User />
                    <p>{user?.name}</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;