import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();
  const [isVisible, setIsVisible] = useState(true); // Control navbar visibility
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();
  const [show, setShow] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll handling logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        // throttle with rAF
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            // scrolling down
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY.current) {
            // scrolling up
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Sembunyikan navbar di halaman login dan signup
    if (["login", "register", "about"].includes(location.pathname)) {
      setShow(false);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // no dependencies -> adds listener once

  return (
    <nav
      className={`grid grid-cols-3 px-6 py-3 bg-gradient-to-r bg-[#C6FF894D] bg-opacity-30 border border-[#abdc57] rounded-full shadow-[0_0_8px_#abdc57] w-full max-w-[90%] mx-auto mt-6 fixed left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md transition-all duration-800 ${
        isVisible ? "top-0" : "-top-32" // Increased the value of -top-32 for better hide effect
      } ${show ? "block" : "hidden"}`}
    >
      {/* Left - Logo */}
      <Link to="/">
        <div className="flex items-center space-x-2">
          <img
            src="images/logo-sxc-putih-2-2.png"
            alt="Logo"
            className="w-9 h-9"
          />
          <span className="text-white font-semibold text-sm"></span>
        </div>
      </Link>

      {/* Center - Menu */}
      <div className="hidden md:flex justify-center items-center space-x-6">
        <Link
          to="/"
          className="text-white hover:text-[#abdc57] text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-[#abdc57] text-sm font-medium"
        >
          About
        </Link>
        <div className="relative group">
          <button className="text-white hover:text-[#abdc57] text-sm font-medium flex items-center">
            Program <span className="ml-1">▾</span>
          </button>
        </div>
        <a
          href="#merch"
          className="text-white hover:text-[#abdc57] text-sm font-medium"
        >
          Merchandise
        </a>
      </div>

      {/* Right - Buttons */}
      {!user ? (
        <div className="hidden md:flex items-center justify-end space-x-2 ">
          <Link to="/login">
            <button className="cursor-pointer text-sm px-4 py-2 border border-[#AEE67F] font-bold text-[#AEE67F] rounded-lg hover:bg-[#42582b]">
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button className="text-sm px-4 cursor-pointer py-2 bg-[#AEE67F] font-semibold  text-black rounded-lg hover:opacity-90">
              Sign up
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div onClick={logout} className="justify-end space-x-2 flex ">
            <button className="text-sm px-4 cursor-pointer py-2 bg-[#AEE67F] font-semibold  text-black rounded-lg hover:opacity-90">
              Log Out
            </button>
          </div>
          <div
            onClick={() => navigate("/profile/")}
            className="justify-end space-x-2 flex "
          >
            <button className="text-sm px-4 cursor-pointer py-2 bg-[#AEE67F] font-semibold  text-black rounded-lg hover:opacity-90">
              Profile
            </button>
          </div>
        </>
      )}

      {/* Mobile Menu Hamburger */}
      <button
        className="md:hidden absolute right-5 top-4 text-white" // Positioning the hamburger button to the right
        onClick={toggleMenu}
      >
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30  z-10 md:hidden md:col-span-0`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
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
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg">
            About
          </Link>
          <a href="#program" className="text-white text-lg">
            Program
          </a>
          <a href="#merch" className="text-white text-lg">
            Merchandise
          </a>
          <Link to="/login">
            <button className="text-sm px-4 py-1 bg-[#2e3e15] text-white rounded-lg hover:bg-[#42582b]">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-sm px-4 py-1 bg-[#abdc57] text-black rounded-lg hover:opacity-90">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
