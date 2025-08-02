import { MoveUpRight } from "lucide-react";
import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-t from-[#97D3EBCC] to-[#592B83] relative overflow-x-hidden">
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
      {/* <div>
        <p className="font-bold text-[60px]">
          {"StudentxCEOs".split("").map((char, i) => (
            <span
              key={i}
              className="outlined-text"
              style={{
                color: "linear-gradient(to right, #c4ef7b, #79ccea, #8257a9)",
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                display: "inline-block",
                fontFamily: "Rubik",
              }}
            >
              {char}
            </span>
          ))}
        </p>
         <p className="text-center  mt-20 w-[930px] mx-auto  font-[Rubik] ">
          {"Bridge the Future: Leveraging Technology to Accelerate Business Innovation and Growth"
            .split("")
            .map((char, i) => (
              <span
                key={i}
                className="outlined-subText text-white text-3xl border-[#592B82] border-2"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </p>
        <p className="font-[Rubik] font-bold">International Summit 2025 </p>
      </div> */}
      <img
        src="/images/homepage/eclipse.png"
        className="absolute top-50 w-full"
        alt=""
      />

      {/* Text */}
      <div className="flex justify-center items-center flex-col text-center">
        <img src="/images/homepage/title.png" alt="" />
        <img className="mt-10" src="/images/homepage/sub-Title.png" alt="" />

        <button className="mt-10 px-8 rounded-full py-3 bg-[#8257A9] text-white text-2xl flex items-center gap-3 cursor-pointer">
          Get Started <MoveUpRight size={40} className="animate-arrowFadeUp" />
        </button>
      </div>

      <div>
        <p
          style={{ fontFamily: "Rubik" }}
          className="text-4xl font-medium mt-30"
        >
          Calling Out High Achieving Students
        </p>
      </div>
    </div>
  );
};

export default Landing;
