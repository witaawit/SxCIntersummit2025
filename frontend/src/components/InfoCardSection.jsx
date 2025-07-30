import React from "react";

export const InfoCardSection = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage: "/images/image.svg", // Gambar diambil dari folder public/images
      ellipseImage: "/images/ellipse-9-2.svg", // Gambar diambil dari folder public/images
      logo: "/images/logo-sxc-putih-2.png", // Gambar diambil dari folder public/images
      logoAlt: "Logo sxc putih",
      logoWidth: "147px",
      logoHeight: "87px",
      logoTop: "39px",
      logoLeft: "242px",
      title: "StudentcCEOs Jakarta",
      titleLeft: "170px",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      containerHeight: "618px",
      containerTop: "0",
      buttonTop: "526px",
    },
    {
      id: 2,
      backgroundImage: "/images/vector-1.svg", // Gambar diambil dari folder public/images
      ellipseImage: "/images/ellipse-9.svg", // Gambar diambil dari folder public/images
      logo: "/images/logo-intersummit-5.png", // Gambar diambil dari folder public/images
      logoAlt: "Logo intersummit",
      logoWidth: "209px",
      logoHeight: "100px",
      logoTop: "40px",
      logoLeft: "211px",
      title: "SxC International Summit 2025",
      titleLeft: "117px",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      containerHeight: "615px",
      containerTop: "3px",
      buttonTop: "526px",
    },
  ];

  return (
    <section className="absolute w-[1308px] h-[618px] top-[323px] left-56">
      <div className="absolute w-[1308px] h-[618px] top-[-119px] left-0">
        {cardData.map((card, index) => (
          <article
            key={card.id}
            className={`absolute w-[632px] h-[${card.containerHeight}] top-[${card.containerTop}] ${index === 0 ? "left-0" : "left-[676px]"} bg-purple-800 rounded-[20px] overflow-hidden`}
          >
            <div className={`relative h-[${card.containerHeight}]`}>
              <img
                className="absolute w-[632px] h-[264px] top-0 left-0"
                alt="Background vector"
                src={card.backgroundImage} // Path gambar yang diambil dari public/images
              />

              <img
                className={`absolute w-[632px] h-[${card.containerHeight}] top-0 left-0`}
                alt="Background ellipse"
                src={card.ellipseImage} // Path gambar yang diambil dari public/images
              />

              <img
                className={`absolute w-[${card.logoWidth}] h-[${card.logoHeight}] top-[${card.logoTop}] left-[${card.logoLeft}]`}
                alt={card.logoAlt}
                src={card.logo} // Path gambar yang diambil dari public/images
              />

              <h3
                className={`absolute top-[172px] left-[${card.titleLeft}] [font-family:'Rubik-Bold',Helvetica] font-bold text-white text-[26px] text-center tracking-[-0.42px] leading-[normal] whitespace-nowrap`}
              >
                {card.title}
              </h3>

              <p className="absolute w-[523px] top-[243px] left-[54px] [font-family:'Plus_Jakarta_Sans-Medium',Helvetica] font-medium text-white text-xl text-justify tracking-[-0.32px] leading-[normal]">
                {card.description}
              </p>

              <div
                className={`absolute top-[${card.buttonTop}] left-[109px] w-[413px] flex flex-col items-center gap-10`}
              >
                <button
                  className="inline-flex h-10 items-center justify-center gap-1 px-5 py-3 rounded-lg border border-solid border-[#b266ff] shadow-[inset_0px_4px_4px_#ffffff29,0px_4px_13px_#9c39ff40,1px_2px_12px_#00000012,inset_0px_-4px_4px_#0000000d] bg-[linear-gradient(180deg,rgba(176,57,255,1)_0%,rgba(156,57,255,1)_100%)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-opacity"
                  aria-label={`Read more about ${card.title}`}
                >
                  <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#fbfbfb] text-lg text-center tracking-[-0.29px] leading-[normal]">
                    Read More
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="absolute w-[771px] top-[-250px] left-[268px] [font-family:'Rubik-Bold',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-[normal]">
        Part of StudentxCEOs Jakarta
      </h2>
    </section>
  );
};
