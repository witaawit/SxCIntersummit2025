import React from "react";

export const MissionSection = () => {
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
    <section className="flex flex-col w-[1440px] items-center gap-20 px-[120px] py-[100px] absolute top-[2357px] left-[158px] bg-variable-collection-rpurple-800">
      <header className="flex flex-col w-[846px] items-center gap-8 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 px-4 py-1 relative flex-[0_0_auto] bg-variable-collection-rpurple-700 rounded border-[0.5px] border-solid border-[#f3ecfe1a]">
          <span className="relative w-fit mt-[-0.50px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#f3ecfe] text-xs tracking-[1.20px] leading-[26px] whitespace-nowrap">
            VALUE
          </span>
        </div>

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
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Rubik-SemiBold',Helvetica] font-semibold text-variable-collection-text text-2xl text-center tracking-[-0.48px] leading-[46px]">
                {value.title}
              </h3>

              <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-variable-collection-purple200-70 text-base text-center tracking-[0] leading-6">
                {value.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
