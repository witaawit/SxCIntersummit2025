import React from "react";

export const FocusSection = () => {
  const focusData = [
    {
      id: 1,
      title: "Lorem",
      description:
        "Providing career knowledge, networking and transformation opportunities",
      image: "/images/aboutpage/assetabout/handshake.svg",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Offering guidance for career transition and upskilling",
      image: "/images/aboutpage/assetabout/book.svg",
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Enhancing both soft and hard skill in alignment with technological advancements",
      image: "/images/aboutpage/assetabout/mental.svg",
    },
    {
      id: 4,
      title: "Lorem",
      description:
        "Cultivating an innovative mindset and personal growth for future leaders",
      image: "/images/aboutpage/assetabout/sprout.svg",
    },
  ];

  return (
    <section className="w-full py-8 px-10 lg:px-10">
      <div className="text-center mb-8">
        <h2 className="flex justify-center items-center">
          <img 
            src="/images/aboutpage/Focus.png" // Ganti dengan gambar yang sesuai
            alt="Focus Icon"
            className="max-md:h-[7vh] w-auto object-contain"
          />
        </h2>
      </div>

      {/* Flex Container to make items in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12  p-10 ">
        {focusData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] text-white rounded-[38.868px] p-6"
          >
            {/* Circle */}
            <div className="w-24 h-24 flex justify-center items-center">
              <img
                src={item.image} // Dynamically use the image from the focusData array
                alt={item.title} // Use the title for alt text
                className="w-15 h-15 object-cover"
              />
            </div>
            {/* Description */}
            <p className="text-[#ffffff] text-sm text-center mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
