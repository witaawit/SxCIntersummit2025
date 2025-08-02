import React from "react";

export const ChallengesSection = () => {
  const challengesData = [
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
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 4,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 5,
      title: "Lorem",
      description:
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 6,
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  return (
    <section className="w-full py-8 relative z-10 px-4 sm:px-8 lg:px-16" role="region" aria-label="Challenges Section">
      <div className="text-center mb-8">
        <h2 className="font-medium text-white text-[54px] leading-[62px]">
          Challenges
        </h2>
      </div>

      {/* Flex Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap between cards */}
        {challengesData.map((challenge) => (
          <article
            key={challenge.id}
            className="flex flex-col items-center rounded-[15px] p-6 mx-auto" // Added mx-auto to center the cards
          >
            {/* Green Circle on Top */}
            <div className="w-16 h-16 bg-[#b9fd50] rounded-full mb-4 flex justify-center items-center">
              <img
                src="/images/your-image.png" // Ganti dengan gambar yang sesuai
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold text-center">{challenge.title}</h3>

            {/* Description */}
            <p className="text-[#D1B3FF] text-sm text-center mt-4">
              {challenge.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
