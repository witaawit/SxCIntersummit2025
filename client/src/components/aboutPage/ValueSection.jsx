import React from "react";

export const ValueSection = () => {
  const valuesData = [
    {
      title: "Empowerment",
      description: "Providing tools and knowledge to create change.",
      image: "/images/aboutpage/assetabout/Empowerment.svg",
    },
    {
      title: "Inclusivity",
      description: "Embracing diverse voices in every initiative.",
      image: "/images/aboutpage/assetabout/Inclusivity.svg",
    },
    {
      title: "Ethics",
      description: "Practicing fairness, responsibility, and integrity.",
      image: "/images/aboutpage/assetabout/Ethics.svg",
    },
  ];

  return (
    <section className="w-full mx-auto justify-center p-15">
      <header className="text-center mb-10">
        <h2 className="flex justify-center items-center">
          <img
            src="/images/aboutpage/OurValues.png" // Ganti dengan gambar yang sesuai
            alt="Icon"
            className="max-md:h-[7vh] w-auto object-contain"
          />
        </h2>
        <p className="text-[#ffffff] text-lg mt-2 max-w-[700px] mx-auto">
          They define who we are, influence how we operate, and help us stay aligned with our future goals.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuesData.map((value, index) => (
          <article
            key={index}
            className="bg-[rgba(89,43,130,0.13)] border-2 border-solid border-[rgba(255,255,255,0.77)] rounded-[38.868px] p-6 flex flex-col items-center backdrop-blur-[9.254px] shadow-lg"
          >
            {/* Circle Image */}
            <div className="w-20 h-20 mb-4 flex justify-center items-center">
              <img
                src={value.image} // Dynamically use the image from the value object
                alt={value.title}
                className="w-20 h-20 object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl font-semibold">{value.title}</h3>

            {/* Description */}
            <p className="text-[#ffffff] text-base text-center mt-4">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
