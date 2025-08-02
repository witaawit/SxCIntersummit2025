import React from "react";

export const VisionSection = () => {
  const visionData = {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  };

  return (
    <section
      className="absolute w-[561px] h-[523px] top-[1720px] left-[220px]"
      role="region"
      aria-labelledby="vision-title"
    >
      <h2
        id="vision-title"
        className="absolute w-[413px] top-0 left-[69px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[54px] text-center tracking-[-1.08px] leading-[62px]"
      >
        {visionData.title}
      </h2>

      <p className="absolute w-[557px] top-[151px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-white text-[40px] tracking-[-0.80px] leading-[62px]">
        {visionData.description}
      </p>
    </section>
  );
};