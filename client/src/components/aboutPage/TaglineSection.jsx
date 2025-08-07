import React from "react";

const TaglineSection = () => {
  const visionData = {
    title: "Visi",
    description:
      "Empowering businesses to thrive through responsible use of technology by driving innovation, resilience, and sustainable impact in the digital era.",
  };

  const missionData = {
    title: "Misi",
    description:
      "",
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto mb-[30px] p-10">
      {/* Tagline Text */}
      <div className="text-center text-xl text-[18.8px] relative z-10">
        TAGLINE
      </div>

      {/* Blockquote Section */}
      <blockquote className="text-center text-white relative z-10">
        <span className="font-bold text-[64px]">&quot;</span>
        <span className="[font-family:'Rubik-BoldItalic',Helvetica] font-bold italic text-[45px]">
          Lead the Change,
          <br />
          Shape the Future&quot;
        </span>
      </blockquote>

      {/* Vision and Mission Sections */}
      <div className="flex flex-col lg:flex-row justify-center p-[20px] mt-10 gap-4 relative z-10">
        {/* Vision Section */}
        <div className="w-full lg:w-[45%] p-6 rounded-[38.868px] border-2 border-solid border-[rgba(255,255,255,0.77)] bg-[rgba(89,43,130,0.13)] backdrop-blur-[9.254px] shadow-lg transform translate-y-[-50px]">
          <h2 className="font-[Rubik] text-white text-[24px] text-center"></h2>
          <img 
            src="/images/aboutpage/Vision.png" // Ganti dengan gambar yang sesuai
            alt="Icon"
            className="max-md:h-[7vh] w-auto object-contain"
          />
          <p className="font-[Plus_Jakarta_Sans] text-white text-[24px] mt-4 text-justify">
            {visionData.description}
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full lg:w-[45%] p-6 rounded-[38.868px] gap-4 border-2 border-solid border-[rgba(255,255,255,0.77)] bg-[rgba(89,43,130,0.13)] backdrop-blur-[9.254px] shadow-lg transform translate-y-[75px]">
          <h2 className="font-[Rubik] text-white text-[45px] text-center tracking-[-0.80px] leading-[62px]">
            <img 
              src="/images/aboutpage/Mission.png" // Ganti dengan gambar yang sesuai
              alt="Icon"
              className="max-md:h-[7vh] w-auto object-contain"
            />
          </h2>
          <ul className="font-[Plus_Jakarta_Sans] font-normal text-white text-[24px] mt-4 list-disc pl-6">
            {missionData.description}
            <li>Digital transformation drive.</li>
            <li>Tech-powered innovation spotlight</li>
            <li>Collaborative ecosystem.</li>
            <li>Changemaker development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
