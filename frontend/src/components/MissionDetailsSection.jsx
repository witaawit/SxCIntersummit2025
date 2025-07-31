import React from "react";

export const MissionDetailsSection = () => {
  const missionData = {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim",
  };

  return (
    <section
      className="absolute w-[568px] h-[461px] top-[1720px] left-[974px]"
      role="region"
      aria-labelledby="mission-title"
    >
      <h2
        id="mission-title"
        className="absolute w-[413px] top-0 left-[75px] [font-family:'Rubik-SemiBold',Helvetica] font-semibold text-white text-[54px] text-center tracking-[-1.08px] leading-[62px]"
      >
        {missionData.title}
      </h2>

      <p className="absolute w-[564px] top-[151px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[40px] tracking-[-0.80px] leading-[62px]">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit, <br />
        sed do eiusmod tempor
        <br />
        incididunt ut labore et <br />
        aliqua. Ut enim ad minim
      </p>
    </section>
  );
};
