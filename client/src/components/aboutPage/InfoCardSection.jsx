import React from "react";

export const InfoCardSection = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage: "/images/vector-1.svg",
      ellipseImage: "/images/ellipse-9.svg",
      logo: "/images/logo-sxc-putih-2-2.png",
      logoAlt: "Logo sxc putih",
      title: "StudentxCEOs Jakarta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      backgroundImage: "/images/vector-1.svg",
      ellipseImage: "/images/ellipse-9.svg",
      logo: "/images/logo-intersummit-5.png",
      logoAlt: "Logo intersummit",
      title: "SxC International Summit 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="relative w-full px-4 md:px-6 lg:max-w-[1308px] mx-auto mt-[50px] md:mt-[100px] lg:mt-[160px]"> {/* Reduced margin-top */}
      <h2 className="text-center text-white text-[32px] md:text-[40px] lg:text-[50px] font-bold mb-6 md:mb-8 lg:mb-10">
        Part of StudentxCEOs Jakarta
      </h2>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
        {cardData.map((card) => (
          <article
            key={card.id}
            className="relative w-full lg:w-[calc(50%-16px)] max-w-[632px] h-[500px] md:h-[550px] lg:h-[618px] bg-[#160F22] rounded-[20px] overflow-hidden"
          >
            <img
              className="absolute w-full h-[200px] md:h-[230px] lg:h-[264px] top-0 left-0 object-cover"
              alt="Background vector"
              src={card.backgroundImage}
            />
            <img
              className="absolute w-full h-full top-0 left-0 object-cover"
              alt="Background ellipse"
              src={card.ellipseImage}
            />
            
            {/* Centered Logo */}
            <div className="absolute top-[30px] md:top-[40px] left-0 right-0 flex justify-center">
              <img
                className="w-[120px] md:w-[147px] lg:w-[209px] h-auto max-h-[80px] md:max-h-[100px] object-contain"
                alt={card.logoAlt}
                src={card.logo}
              />
            </div>

            <h3 className="absolute top-[140px] md:top-[160px] lg:top-[172px] left-0 right-0 text-center font-bold text-white text-[20px] md:text-[24px] lg:text-[26px] px-4">
              {card.title}
            </h3>
            
            <p className="absolute w-[calc(100%-48px)] md:w-[523px] top-[190px] md:top-[220px] lg:top-[243px] left-1/2 transform -translate-x-1/2 font-medium text-white text-[16px] md:text-[18px] lg:text-xl text-justify px-4 md:px-0">
              {card.description}
            </p>
            
            <div className="absolute w-full bottom-[40px] md:bottom-[60px] flex justify-center">
              <button
                className="inline-flex h-10 items-center justify-center gap-1 px-5 py-3 rounded-lg border border-solid border-[#b266ff] shadow-lg bg-gradient-to-b from-[#b037ff] to-[#9c39ff] hover:opacity-90 transition-opacity"
                aria-label={`Read more about ${card.title}`}
              >
                <span className="font-medium text-[#fbfbfb] text-[16px] md:text-lg">
                  Read More
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
