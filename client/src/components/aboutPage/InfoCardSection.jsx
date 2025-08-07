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
        "Founded in 2010, StudentsxCEOs Jakarta is a youth-led, student-run platform that accelerates leadership development for future business leaders in Indonesia. With four major chapters, over 150 core members, more than 1,000 top students from 30+ universities, and 100+ corporate partners, we bridge student leaders with industry through internships, CEO meetings, summits, and collaboration programs. We cultivate real-world leadership experience by simulating corporate structures and responsibilities within our internal operations.",
    },
    {
      id: 2,
      backgroundImage: "/images/vector-1.svg",
      ellipseImage: "/images/ellipse-9.svg",
      logo: "/images/logo-intersummit-5.png",
      logoAlt: "Logo intersummit",
      title: "SxC International Summit 2025",
      description:
        "StudentsxCEOs International Summit is a grand event organized by StudentsxCEOs Jakarta with the grand theme “Bridge the Future: Leveraging Technology to Accelerate Business Innovation and Growth”. Its objective is to act as a catalyst for students worldwide, helping them prepare for the workforce, and differentiate themselves from their peers. The summit aspires to equip participants with essential skills for excelling in the professional realm by hosting impactful events and featuring insightful speakers.",
    },
  ];

  return (
    <section className="relative w-full px-4 p-20">
      <h2 className="flex justify-center items-center">
        <img 
          src="/images/aboutpage/part-of.png" // Ganti dengan gambar yang sesuai
          alt="Icon"
          className="max-md:h-[7vh] w-auto object-contain"
        />
      </h2>

      {/* Grid for responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 p-20">
        {cardData.map((card) => (
          <article
            key={card.id}
            className="relative w-full h-[400px] md:h-[550px] lg:h-[550px] bg-[#160F22] rounded-[20px] overflow-hidden"
          >
            {/* Background Images */}
            <div className="w-full h-[150px] md:h-[230px] lg:h-[264px] bg-cover bg-center" style={{ backgroundImage: `url(${card.backgroundImage})` }}></div>
            <div className="w-full h-full absolute top-0 left-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.ellipseImage})` }}></div>

            {/* Logo */}
            <div className="absolute top-[30px] md:top-[40px] left-0 right-0 flex justify-center z-10">
              <img
                className="w-[120px] md:w-[147px] lg:w-[209px] h-auto max-h-[80px] md:max-h-[100px] object-contain"
                alt={card.logoAlt}
                src={card.logo}
              />
            </div>

            {/* Title and Description (positioned below the logo and above the background) */}
            <div className="absolute top-[120px] md:top-[160px] lg:top-[180px] left-0 right-0 text-center z-10 px-4">
              <h3 className="font-bold text-white text-[20px] md:text-[24px] lg:text-[26px] mb-4">
                {card.title}
              </h3>
              <p className="font-[Plus_Jakarta_Sans] text-white text-md p-5 text-justify">
                {card.description}
              </p>
            </div>

            {/* Button */}
          </article>
        ))}
      </div>
    </section>
  );
};
