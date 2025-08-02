import React from "react";

export const FocusSection = () => {
  const focusData = [
    {
      id: 1,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  return (
    <section className="w-full py-8 relative z-10" role="region" aria-label="Focus Section">
      <div className="text-center mb-8">
        <h2 className="font-medium text-white text-[54px] leading-[62px]">
          Focus
        </h2>
      </div>

      <div className="flex justify-center items-center gap-12">
        {focusData.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* Circle */}
            <div className="w-24 h-24 bg-[#b9fd50] rounded-full mb-4 flex justify-center items-center">
              <img
                src="/images/your-image.png" // Replace with the correct image if needed
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold text-center">{item.title}</h3>

            {/* Description */}
            <p className="text-[#D1B3FF] text-sm text-center mt-4">
              {item.description}
            </p>

            {/* Arrow (using CSS to create arrow between circles) */}
            {index < focusData.length - 1 && (
              <div className="relative w-16 mt-4">
                <div className="absolute w-16 h-2 bg-transparent">
                  <div className="absolute w-8 h-8 right-0 top-0 rotate-45 bg-[#b9fd50]"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="font-medium text-white text-[54px] leading-[62px]">

        </h2>
      </div>
    </section>
  );
};
