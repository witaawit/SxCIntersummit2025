import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#97D3EBCC] to-[#592B83] relative overflow-x-hidden">
      {/* Lights */}
      <img
        src="/images/homepage/leftLight.png"
        alt=""
        className="absolute top-0 left-0  max-w-[100vw]"
        style={{ transform: "scale(1.5)" }}
      />
      <img
        src="/images/homepage/rightLight.png"
        className="absolute top-0 right-0  max-w-[100vw]"
        alt=""
        style={{ transform: "scale(1.5)" }}
      />

      {/* Text */}
      <div>
        <p className="font-[Rubik] font-bold text-[60px] ">StudentxCEOs </p>
        <p className="font-[Rubik] font-bold">International Summit 2025 </p>
      </div>
    </div>
  );
};

export default Landing;
