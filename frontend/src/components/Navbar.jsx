import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Sembunyikan navbar di halaman login dan signup
  if (['/login', '/signup', '/about'].includes(location.pathname)) {
    return null;
  }

  /* 
    🔥 TIDAK ADA PERUBAHAN STYLE DI BAWAH INI 
    Semua kode styling dipertahankan 100% sama persis
  */
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#B1EA51] bg-opacity-30 border border-[#abdc57] rounded-full shadow-[0_0_8px_#abdc57] w-full max-w-[90%] mx-auto mt-6">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <img src="images/logo-sxc-putih-2-2.png" alt="Logo" className="w-9 h-9" />
        <span className="text-white font-semibold text-sm"></span>
      </div>

      {/* Center - Menu */}
      <div className="hidden md:flex space-x-8 ml-10">
        <Link to="/" className="text-white hover:text-[#abdc57] text-sm font-medium">Home</Link>
        <Link to="/about" className="text-white hover:text-[#abdc57] text-sm font-medium">About</Link>
        <div className="relative group">
          <button className="text-white hover:text-[#abdc57] text-sm font-medium flex items-center">
            Program <span className="ml-1">▾</span>
          </button>
        </div>
        <a href="#merch" className="text-white hover:text-[#abdc57] text-sm font-medium">Merchandise</a>
      </div>

      {/* Right - Buttons */}
      <div className="hidden md:flex items-center space-x-2 ml-10">
        <Link to="/login">
          <button className="text-sm px-4 py-1 bg-[#2e3e15] text-white rounded-lg hover:bg-[#42582b]">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="text-sm px-4 py-1 bg-[#abdc57] text-black rounded-lg hover:opacity-90">Sign up</button>
        </Link>
      </div>

      {/* Mobile Menu Hamburger */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-10 md:hidden`}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-white text-lg">Home</Link>
          <Link to="/about" className="text-white text-lg">About</Link>
          <a href="#program" className="text-white text-lg">Program</a>
          <a href="#merch" className="text-white text-lg">Merchandise</a>
          <Link to="/login">
            <button className="text-sm px-4 py-1 bg-[#2e3e15] text-white rounded-lg hover:bg-[#42582b]">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="text-sm px-4 py-1 bg-[#abdc57] text-black rounded-lg hover:opacity-90">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;