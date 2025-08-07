import React from "react";

const TaglineSection = () => {
  const visionData = {
    title: "Visi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  };

  const missionData = {
    title: "Misi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto mt-[100px] mb-[100px] px-4">
      {/* Tagline Text */}
      <div className="text-center text-white text-[21.8px] mt-4 relative z-10">
        TAGLINE
      </div>

      {/* Blockquote Section */}
      <blockquote className="text-center text-white mt-10 relative z-10">
        <span className="font-bold text-[64px]">&quot;</span>
        <span className="[font-family:'Rubik-BoldItalic',Helvetica] font-bold italic text-[64px]">
          Lead the Change,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Shape the Future&quot;
        </span>
      </blockquote>

      {/* Vision and Mission Sections */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 relative z-10">
        {/* Vision Section */}
        <div className="w-full lg:w-[48%] p-6 bg-[#592B82] rounded-[20px] shadow-lg">
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center">
            {visionData.title}
          </h2>
          <p className="font-normal text-white text-[40px] mt-4 text-center">
            {visionData.description}
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full lg:w-[48%] p-6 bg-[#592B82] rounded-[20px] shadow-lg">
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center tracking-[-0.80px] leading-[62px]">
            {missionData.title}
          </h2>
<ul className="font-normal text-white text-[40px] mt-4 list-disc pl-6">
  <li>{missionData.description}</li>
  <li>Incididunt ut labore et</li>
  <li>Aliqua. Ut enim ad minim</li>
</ul>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
