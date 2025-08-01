import React from "react";

export const OurMissionsSection = () => {
  const missionItems = [
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  return (
    <section
      className="absolute w-[1275px] h-[304px] top-[3789px] left-[241px]"
      aria-label="Our Missions"
    >
      <div className="absolute w-[404px] h-[304px] top-0 left-0">
        <div
          className="absolute w-[98px] h-[98px] top-0 left-0 bg-[#b9fd50] rounded-[49px]"
          role="presentation"
        />

        <h3 className="absolute w-[400px] top-[141px] left-0 [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal]">
          {missionItems[0].title}
        </h3>

        <p className="absolute w-[299px] top-[198px] left-0 [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]">
          {missionItems[0].description}
        </p>
      </div>

      <div className="absolute w-[317px] h-[277px] top-px left-[461px]">
        <div
          className="absolute w-[98px] h-[98px] top-0 left-0 bg-[#b9fd50] rounded-[49px]"
          role="presentation"
        />

        <h3 className="absolute w-[313px] top-[140px] left-0 [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal]">
          {missionItems[1].title}
        </h3>

        <p className="absolute w-[299px] top-[197px] left-0 [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]">
          {missionItems[1].description}
        </p>
      </div>

      <div className="absolute w-[356px] h-[249px] top-0.5 left-[923px]">
        <div
          className="absolute w-[98px] h-[98px] top-0 left-0 bg-[#b9fd50] rounded-[49px]"
          role="presentation"
        />

        <h3 className="absolute w-[352px] top-[139px] left-0 [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal]">
          {missionItems[2].title}
        </h3>

        <p className="absolute w-[298px] top-[196px] left-0 [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]">
          {missionItems[2].description}
        </p>
      </div>
    </section>
  );
};
