import { Users, Target } from "lucide-react";

const Participants = () => {
  // Organization logos data
  const organizationLogos = [
    { name: "Organization 1", src: "/images/aboutpage/logouniv/itb.png" }, // Path to logo
    { name: "Organization 2", src: "/images/aboutpage/logouniv/itb.png" }, // Example logo path
    { name: "Organization 3", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 4", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 5", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 6", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 7", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 8", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 9", src: "/images/aboutpage/logouniv/itb.png" },
  ];

  return (
    <section className="min-h-screen p-12 flex flex-col items-center justify-center relative">
      {/* Title for Milestone */}
      <h1 className="text-4xl font-bold text-center mb-16 text-[#FFFF]">
        Our Milestone
      </h1>

      {/* Main Container with increased width and height */}
      <div className="w-full max-w-7xl mx-auto bg-[#3C1360] rounded-3xl relative z-10 p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          Participants
        </h1>

        {/* Stats Card */}
        <div className="bg-[#BA9CFF] rounded-3xl p-8 mb-16 shadow-2xl z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Future Leaders */}
            <div className="flex items-center gap-4">
              <div className="bg-participants-green rounded-full p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold ">2000+</div>
                <div className="text-lg opacity-80">Future Leaders</div>
              </div>
            </div>

            {/* Lorem 1 */}
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold ">Lorem</div>
                <div className="text-lg opacity-80">Lorem Ipsums</div>
              </div>
            </div>

            {/* Lorem 2 */}
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold ">Lorem</div>
                <div className="text-lg opacity-80">Lorem Ipsums</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Logos */}
        <div className="flex flex-wrap justify-center gap-8 z-30">
          {organizationLogos.map((org, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Displaying logos */}
              <img
                src={org.src}
                alt={org.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participants;
