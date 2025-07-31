import React from "react";

const TaglineSection = () => {
  const visionData = {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  };

  const missionData = {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim",
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto mt-[100px] mb-[100px] ">
      <blockquote className="text-center text-white mt-10">
        <span className="font-bold text-[64px]">&quot;</span>
        <span className="[font-family:'Rubik-BoldItalic',Helvetica] font-bold italic text-[64px]">
          Lead the Change,
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp; Shape the Future&quot;
        </span>
      </blockquote>

      <div className="text-center text-white text-[21.8px] mt-4">
        TAGLINE
      </div>

      <div className="flex justify-around mt-10">
        {/* Vision Section */}
        <div className="w-1/2 p-4 bg-[#592B82] rounded-[20px]">
        
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center">{visionData.title}</h2>
          <p className="font-normal text-white text-[40px] mt-4">
            {visionData.description}
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-1/2 p-4 bg-[#592B82] rounded-[20px]">
          <h2 className="absolute w-[557px] top-[151px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[40px] tracking-[-0.80px] leading-[62px]">{missionData.title}</h2>
          <p className="font-normal text-white text-[40px] mt-4">
            <ul>
              <li>{missionData.description}</li>
              <li>Incididunt ut labore et</li>
              <li>Aliqua. Ut enim ad minim</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
