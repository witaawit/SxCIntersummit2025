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
<<<<<<< HEAD:frontend/src/components/ValueSection.jsx
    <section className="flex flex-col w-[1440px] items-center gap-20 px-[120px] py-[100px] absolute top-[2357px] left-[158px] bg-variable-collection-rpurple-800">
      <header className="flex flex-col w-[846px] items-center gap-8 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 px-4 py-1 relative flex-[0_0_auto] bg-variable-collection-rpurple-700 rounded border-[0.5px] border-solid border-[#f3ecfe1a]">
          <span className="relative w-fit mt-[-0.50px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#f3ecfe] text-xs tracking-[1.20px] leading-[26px] whitespace-nowrap">
=======
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
>>>>>>> About-Mike:client/src/components/aboutPage/ValueSection.jsx
            VALUE
          </span>
        </div>

<<<<<<< HEAD:frontend/src/components/ValueSection.jsx
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] text-purple-200 text-[42px] text-center tracking-[-0.84px] leading-[56px] [font-family:'Rubik-Medium',Helvetica] font-medium">
            Our Values
          </h2>

          <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-variable-collection-purple200-70 text-lg text-center tracking-[-0.22px] leading-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>

      <div
        className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]"
        role="list"
      >
        {valuesData.map((value, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-6 px-10 py-8 relative flex-1 grow bg-variable-collection-rpurple-700 rounded-[20px]"
            role="listitem"
          >
            {/* Gambar bulat untuk setiap value */}
            <div
              className="relative w-20 h-20 bg-primary-button rounded-[100px]"
              aria-hidden="true"
            >
              {/* Menambahkan gambar latar belakang bulat */}
              <img
                src="/images/your-image.png" // Gambar dari folder public/images
=======
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
>>>>>>> About-Mike:client/src/components/aboutPage/ValueSection.jsx
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

<<<<<<< HEAD:frontend/src/components/ValueSection.jsx
            <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik-SemiBold',Helvetica] font-semibold text-variable-collection-text text-2xl text-center tracking-[-0.48px] leading-[46px]">
                {value.title}
              </h3>

              <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-variable-collection-purple200-70 text-base text-center tracking-[0] leading-6">
                {value.description}
              </p>
            </div>
=======
            {/* Title */}
            <h3 className="text-white text-2xl font-semibold">{value.title}</h3>

            {/* Description */}
            <p className="text-[#D1B3FF] text-base text-center mt-4">
              {value.description}
            </p>
>>>>>>> About-Mike:client/src/components/aboutPage/ValueSection.jsx
          </article>
        ))}
      </div>
    </section>
  );
};
