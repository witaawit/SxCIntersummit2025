import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">


      {/* Konten Hero Section */}
      <div className="relative z-10 text-center text-white">
        
        <h1 className="text-5xl font-bold mb-4">
          StudentxCEOs International Summit 2025
        </h1>
        <p className="text-xl mb-8">
          Bridge the Future: Leveraging Technology to Accelerate Business Innovation and Growth
        </p>
        <button className="px-6 py-3 bg-[#abdc57] text-black rounded-full hover:bg-[#96b84a] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
