import React from "react";

export const HeaderSection = () => {
  return (
    <header className="relative w-full justify-center min-h-screen overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/orang-kantor-1.png)`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        {/* Gradient Text Heading with Shadow */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            StudentxCEOs <br />
            International Summit 2025
          </span>
        </h1>

        {/* Description with Text Color */}
        <p className="text-white [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] md:text-2xl font-bold max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </header>
  );
};
