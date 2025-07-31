import React from "react";

export const ChallengesSection = () => {
  const challengesData = [
    {
      id: 1,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      width: "404px",
      height: "304px",
      titleWidth: "400px",
      descriptionWidth: "299px",
      left: "0",
      image: "/images/challenge1.jpg", // Gambar untuk challenge 1
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      width: "317px",
      height: "277px",
      titleWidth: "313px",
      descriptionWidth: "299px",
      left: "461px",
      image: "/images/challenge2.jpg", // Gambar untuk challenge 2
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      width: "356px",
      height: "249px",
      titleWidth: "352px",
      descriptionWidth: "298px",
      left: "923px",
      image: "/images/challenge3.jpg", // Gambar untuk challenge 3
    },
  ];

  return (
    <section
      className="absolute w-[1275px] h-[304px] top-[3402px] left-[241px]"
      role="region"
      aria-label="Challenges Section"
    >
      {challengesData.map((challenge, index) => (
        <article
          key={challenge.id}
          className="absolute top-0 left-0"
          style={{
            width: challenge.width,
            height: challenge.height,
            left: challenge.left,
            top: index === 1 ? "1px" : index === 2 ? "2px" : "0",
          }}
        >
          <img
            className="absolute w-full h-full top-0 left-0 object-cover rounded-[20px]" // Gambar di background
            src={challenge.image}
            alt={`Challenge ${challenge.id}`}
          />
          
          <p
            className="absolute top-[198px] left-0 [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]"
            style={{
              width: challenge.descriptionWidth,
              top: index === 1 ? "197px" : index === 2 ? "196px" : "198px",
            }}
          >
            {challenge.description}
          </p>

          <h3
            className="absolute left-0 [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal]"
            style={{
              width: challenge.titleWidth,
              top: index === 1 ? "140px" : index === 2 ? "139px" : "141px",
            }}
          >
            {challenge.title}
          </h3>

          <div className="absolute w-[98px] h-[98px] top-0 left-0 bg-[#b9fd50] rounded-[49px]" />
        </article>
      ))}
    </section>
  );
};
