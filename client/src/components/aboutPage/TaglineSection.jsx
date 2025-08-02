import React from "react";

const TaglineSection = () => {
  const visionData = {
<<<<<<< HEAD:frontend/src/components/TaglineSection.jsx
    title: "Lorem",
=======
    title: "Visi",
>>>>>>> About-Mike:client/src/components/aboutPage/TaglineSection.jsx
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  };

  const missionData = {
<<<<<<< HEAD:frontend/src/components/TaglineSection.jsx
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
=======
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
>>>>>>> About-Mike:client/src/components/aboutPage/TaglineSection.jsx
          &nbsp;&nbsp;&nbsp;&nbsp; Shape the Future&quot;
        </span>
      </blockquote>

<<<<<<< HEAD:frontend/src/components/TaglineSection.jsx
      <div className="text-center text-white text-[21.8px] mt-4">
        TAGLINE
      </div>

      <div className="flex justify-around mt-10">
        {/* Vision Section */}
        <div className="w-1/2 p-4 bg-[#592B82] rounded-[20px]">
        
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center">{visionData.title}</h2>
          <p className="font-normal text-white text-[40px] mt-4">
=======
      {/* Vision and Mission Sections */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 relative z-10">
        {/* Vision Section */}
        <div className="w-full lg:w-[48%] p-6 bg-[#592B82] rounded-[20px] shadow-lg">
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center">
            {visionData.title}
          </h2>
          <p className="font-normal text-white text-[40px] mt-4 text-center">
>>>>>>> About-Mike:client/src/components/aboutPage/TaglineSection.jsx
            {visionData.description}
          </p>
        </div>

        {/* Mission Section */}
<<<<<<< HEAD:frontend/src/components/TaglineSection.jsx
        <div className="w-1/2 p-4 bg-[#592B82] rounded-[20px]">
          <h2 className="absolute w-[557px] top-[151px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[40px] tracking-[-0.80px] leading-[62px]">{missionData.title}</h2>
          <p className="font-normal text-white text-[40px] mt-4">
            <ul>
              <li>{missionData.description}</li>
              <li>Incididunt ut labore et</li>
              <li>Aliqua. Ut enim ad minim</li>
            </ul>
          </p>
=======
        <div className="w-full lg:w-[48%] p-6 bg-[#592B82] rounded-[20px] shadow-lg">
          <h2 className="[font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[54px] text-center tracking-[-0.80px] leading-[62px]">
            {missionData.title}
          </h2>
<ul className="font-normal text-white text-[40px] mt-4 list-disc pl-6">
  <li>{missionData.description}</li>
  <li>Incididunt ut labore et</li>
  <li>Aliqua. Ut enim ad minim</li>
</ul>
>>>>>>> About-Mike:client/src/components/aboutPage/TaglineSection.jsx
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
