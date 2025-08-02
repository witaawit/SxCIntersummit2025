import React from "react";

export const ValueSection = () => {
  const valuesData = [
    {
      title: "Passion",
      description: "Lorem Ipsum dolor sit amet.",
    },
    {
      title: "Synergy",
      description: "Lorem Ipsum dolor sit amet.",
    },
    {
      title: "Excellence",
      description: "Lorem Ipsum dolor sit amet.",
    },
  ];

  return (
    <section
      className="w-full mx-auto mt-[100px] mb-[100px] px-[120px] py-[100px] flex flex-col items-center gap-[80px] justify-center"
      style={{
        background: "var(--RPurple-800, #3C1360)",
        position: "relative",
        zIndex: 10, // Bringing section content in front of the background
      }}
    >
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#3E2C7B] rounded border-[0.5px] border-solid border-[#f3ecfe1a]">
          <span className="font-normal text-[#f3ecfe] text-xs tracking-[1.20px] leading-[26px]">
            VALUE
          </span>
        </div>

        <h2 className="text-white text-[42px] font-medium mt-4">Our Values</h2>

        <p className="text-[#D1B3FF] text-lg mt-2 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuesData.map((value, index) => (
          <article
            key={index}
            className="bg-[#592B82] rounded-[20px] p-6 flex flex-col items-center"
          >
            {/* Circle Image */}
            <div className="w-20 h-20 bg-[#B9FD50] rounded-full mb-4 flex justify-center items-center">
              <img
                src="/images/your-image.png" // Ganti dengan gambar yang sesuai
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl font-semibold">{value.title}</h3>

            {/* Description */}
            <p className="text-[#D1B3FF] text-base text-center mt-4">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
