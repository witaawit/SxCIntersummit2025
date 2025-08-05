import { FooterSection } from "@/components/aboutPage/FooterSection";
import FAQHomePage from "@/components/homePage/FAQHomePage";
import MediaPartner from "@/components/homePage/MediaPartner";
import RecentCard from "@/components/homePage/RecentCard";
import { CircleArrowUp, LockKeyhole, MoveUpRight } from "lucide-react";
import React from "react";
import { Toaster } from "react-hot-toast";

const Landing = () => {
  return (
    <>
      <Toaster />
      <div className="min-h-screen relative flex items-center justify-center flex-col bg-gradient-to-t from-[#97d3eb] to-[#592B83] overflow-hidden">
        {/* Lights */}
        <img
          src="/images/homepage/leftLight.png"
          alt=""
          className="absolute top-0 left-0  max-w-[100vw]"
          style={{ transform: "scale(1.5)" }}
        />
        <img
          src="/images/homepage/rightLight.png"
          className="absolute top-0 right-0  max-w-[100vw]"
          alt=""
          style={{ transform: "scale(1.5)" }}
        />

        {/* Text */}
        {/* <div>
        <p className="font-bold text-[60px]">
          {"StudentxCEOs".split("").map((char, i) => (
            <span
              key={i}
              className="outlined-text"
              style={{
                color: "linear-gradient(to right, #c4ef7b, #79ccea, #8257a9)",
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                display: "inline-block",
                fontFamily: "Rubik",
              }}
            >
              {char}
            </span>
          ))}
        </p>
         <p className="text-center  mt-20 w-[930px] mx-auto  font-[Rubik] ">
          {"Bridge the Future: Leveraging Technology to Accelerate Business Innovation and Growth"
            .split("")
            .map((char, i) => (
              <span
                key={i}
                className="outlined-subText text-white text-3xl border-[#592B82] border-2"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </p>
        <p className="font-[Rubik] font-bold">International Summit 2025 </p>
      </div> */}
        <img
          src="/images/homepage/eclipse.png"
          className="absolute top-50 w-full z-10"
          alt=""
        />

        {/* Text */}
        <div className="z-20 flex mt-70 justify-center items-center flex-col text-center max-md:mx-5">
          <img src="/images/homepage/title.png" alt="" />
          <img className="mt-10" src="/images/homepage/sub-Title.png" alt="" />

          <button className="hover:opacity-80  mt-10 px-8 rounded-full py-3 bg-[#8257A9] text-white text-2xl flex items-center gap-3 cursor-pointer">
            Get Started{" "}
            <MoveUpRight size={40} className="animate-arrowFadeUp" />
          </button>
        </div>

        {/* Calling Section */}
        <div className="z-20  max-w-[1240px] w-full mx-auto  text-center hidden">
          <p
            style={{ fontFamily: "Rubik" }}
            className="text-4xl font-medium mt-30"
          >
            Calling Out High Achieving Students
          </p>

          <div className="my-10  py-8 px-8 bg-gradient-to-r from-[#8257A9] to-[#171717] rounded-2xl">
            <div className="  flex items-center justify-between ">
              <div className="flex items-end">
                <p className="font-bold text-2xl">
                  WIN THE PRIZE IN TOTAL &nbsp;
                </p>
                <p className="font-bold text-3xl">RP.1000</p>
              </div>

              <button className="px-8 rounded-full py-4 bg-[#9E72C6] text-white text-2xl flex items-center gap-3 cursor-pointer">
                Regist Now <CircleArrowUp size={30} rotate={90} />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Competition */}
        <div className="z-20 w-full mt-20 px-10 gap-5">
          <p className="text-start font-semibold text-2xl my-5">
            Recent Competition
          </p>

          <div className="grid grid-cols-3 gap-5 max-md:hidden">
            <RecentCard />
            <RecentCard />
            <RecentCard />
          </div>
          <div className="grid-rows-2 gap-5 hidden max-md:grid">
            <RecentCard />
            <RecentCard />
          </div>
        </div>

        <div className="z-20 w-full mt-20 px-10  ">
          <p className="text-start font-semibold text-2xl my-5">Recent Event</p>

          <div className="grid grid-cols-3 gap-5 max-md:hidden">
            <RecentCard />
            <RecentCard />
            <RecentCard />
          </div>
          <div className="grid-rows-2 gap-5 hidden max-md:grid">
            <RecentCard />
            <RecentCard />
          </div>
        </div>

        <button className="my-10 px-8 rounded-full py-4 bg-gradient-to-bl font-semi from-[#79CCEA] to-[#8257A9] text-white text-2xl flex items-center gap-3 cursor-pointer">
          See All Programs
        </button>

        {/* Timeline */}
        <img src="/images/homepage/Timeline.png" alt="" />
        <img
          src="/images/homepage/mentorSpeakers.png"
          className="hidden"
          alt=""
        />

        {/* FAQ */}
        <FAQHomePage />

        {/* Sponsor */}

        {/* Medpar */}
        <MediaPartner />
      </div>
    </>
  );
};

export default Landing;
