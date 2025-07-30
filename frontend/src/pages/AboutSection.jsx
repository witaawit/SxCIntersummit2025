import React from "react";
import { CardInfoSection } from "../components/CardInfoSection";
import { ChallengesSection } from "../components/ChallengesSection";
import { ComponentHeaderSection } from "../components/ComponentHeaderSection";
import { ComponentNodeSection } from "../components/ComponentNodeSection";
import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { InfoCardSection } from "../components/InfoCardSection";
import { MissionDetailsSection } from "../components/MissionDetailsSection";
import { MissionSection } from '../components/MissionSection';
import { OurMissionsSection } from "../components/OurMissionsSection";
import { ParticipantSection } from "../components/ParticipantSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { VisionSection } from "../components/VisionSection";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Program", href: "#program", hasDropdown: true },
  { label: "Merchandise", href: "#merchandise" },
];

const focusItems = [
  {
    id: 1,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    vector: "/images/vector-292.svg",
  },
  {
    id: 2,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    vector: "/images/vector-293.svg",
  },
  {
    id: 3,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

const milestoneItems = [
  {
    id: 1,
    count: "2000+",
    title: "Future Leaders",
    icon: "/images/mask-group.png",
  },
  {
    id: 2,
    count: "Lorem",
    title: "Lorem Ipsums",
    icon: "/images/image.png",
  },
  {
    id: 3,
    count: "Lorem",
    title: "Lorem Ipsums",
    icon: "/images/mask-group-2.png",
  },
];

const ambassadorImages = [
  { id: 1, src: "/images/ellipse-232.png", alt: "Ambassador 1" },
  { id: 2, src: "/images/ellipse-238.png", alt: "Ambassador 2" },
  { id: 3, src: "/images/ellipse-239.png", alt: "Ambassador 3" },
  { id: 4, src: "/images/ellipse-240.png", alt: "Ambassador 4" },
];

export const AboutSection = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-[1440px] h-[10240px] relative">
        <div className="absolute w-[1725px] h-[8697px] top-[1020px] left-[-158px]">
          <div className="absolute w-[1440px] h-[2536px] top-0 left-[158px] bg-[linear-gradient(180deg,rgba(169,223,245,0.8)_0%,rgba(94,24,157,1)_100%)]" />

          <div className="absolute w-[607px] h-[482px] top-[1819px] left-[193px] bg-[#592b82] rounded-[20px]" />

          <div className="absolute w-[607px] h-[482px] top-[1819px] left-[956px] bg-[#592b82] rounded-[20px]" />

          <div className="absolute w-[1440px] h-[2536px] top-[2969px] left-[159px] bg-[linear-gradient(180deg,rgba(151,211,235,0.8)_0%,rgba(119,56,177,1)_100%)]" />

          <div className="absolute w-[1440px] h-[2845px] top-[5852px] left-[158px] bg-[linear-gradient(180deg,rgba(135,105,178,1)_4%,rgba(161,222,244,1)_32%,rgba(119,56,177,1)_100%)]" />

          <MissionSection />
          <img
            className="absolute w-[1436px] h-1.5 top-0 left-40"
            alt="Line"
            src="/images/line-2.svg"
          />

          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[4404px] left-[793px]">
            <h2 className="relative w-fit mt-[-1.00px] font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] whitespace-nowrap [font-style:var(--h1-font-style)]">
              Focus
            </h2>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[3228px] left-[729px]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[54px] tracking-[-1.08px] leading-[62px] whitespace-nowrap">
              Challenges
            </h2>
          </div>

          <div className="absolute w-[392px] h-[82px] top-[5076px] left-[682px]">
            <div className="relative w-[372px] h-[62px] top-2.5 left-2.5">
              <h2 className="absolute -top-px left-0 text-white text-[54px] tracking-[-1.08px] leading-[62px] whitespace-nowrap [font-family:'Rubik-Medium',Helvetica] font-medium">
                Our Milestones
              </h2>
            </div>
          </div>

          <div className="absolute w-[413px] top-[6073px] left-[290px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[54px] tracking-[-1.08px] leading-[62px]">
            <h2>Testimonials</h2>
          </div>

          <div className="absolute w-[413px] top-[7847px] left-[274px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[54px] tracking-[-1.08px] leading-[62px]">
            <h2>Ambassadors</h2>
          </div>

          {ambassadorImages.map((ambassador, index) => (
            <img
              key={ambassador.id}
              className={`absolute w-[${index === 3 ? "227px" : index === 0 ? "302px" : "303px"}] h-[302px] top-[7992px] left-[${287 + index * 361}px] object-cover`}
              alt={ambassador.alt}
              src={ambassador.src}
            />
          ))}

          <InfoCardSection />
          <img
            className="absolute w-[1440px] h-3.5 top-[1025px] left-[158px]"
            alt="Line section"
            src="/images/line-section.svg"
          />

          {focusItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-[98px] h-[98px] top-[4546px] left-[${209 + index * (index === 1 ? 493 : 462)}px] bg-[#b9fd50] rounded-[49px]`}
            />
          ))}

          <ChallengesSection />
          <OurMissionsSection />
          <div className="absolute w-[1440px] h-[694px] top-[5185px] left-[158px] bg-[#3c1360]" />

          <img
            className="absolute w-[1383px] h-[100px] top-[5736px] left-[215px]"
            alt="Logo univ"
            src="/images/logo-univ.png"
          />

          <div className="absolute w-[1225px] h-[177px] top-[5403px] left-[265px] bg-[#ba9cff] rounded-[60px]" />

          {milestoneItems.map((milestone, index) => (
            <React.Fragment key={milestone.id}>
              <div
                className={`absolute w-[163px] top-[${5442 + (index === 1 ? 1 : index === 2 ? -1 : 0)}px] left-[${424 + index * 423}px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-5xl tracking-[-0.96px] leading-[62px]`}
              >
                {milestone.count}
              </div>
              <div
                className={`absolute top-[${5510 + (index === 1 ? 1 : index === 2 ? -1 : 0)}px] left-[${424 + index * 423}px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[-0.24px] leading-[normal]`}
              >
                {milestone.title}
              </div>
              <img
                className={`absolute w-[100px] h-[100px] top-[${5442 + (index === 2 ? -2 : 0)}px] left-[${301 + index * 422}px]`}
                alt="Milestone icon"
                src={milestone.icon}
              />
            </React.Fragment>
          ))}

          <CardInfoSection />
          <ParticipantSection />
          <TestimonialsSection />
          <ComponentHeaderSection />
          <ComponentNodeSection />
          <blockquote className="absolute top-[1446px] left-[550px] [font-family:'Rubik-Bold',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[27.0px]">
            <span className="font-bold">&quot;</span>
            <span className="[font-family:'Rubik-BoldItalic',Helvetica] font-bold italic">
              Lead the Change,
              <br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp; Shape the Future&quot;
            </span>
          </blockquote>

          <div className="absolute top-[1388px] left-[824px] [font-family:'Rubik-Light',Helvetica] font-light text-white text-[21.8px] tracking-[0] leading-[9.2px] whitespace-nowrap">
            TAGLINE
          </div>

          <MissionDetailsSection />
          <VisionSection />

          {focusItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <p
                className={`absolute w-[${index === 2 ? "298px" : "299px"}] top-[4743px] left-[${242 + index * (index === 1 ? 461 : 462)}px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]`}
              >
                {item.description}
              </p>
              <div
                className={`absolute w-[${index === 0 ? "400px" : index === 1 ? "313px" : "352px"}] top-[4686px] left-[${242 + index * (index === 1 ? 461 : 462)}px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal]`}
              >
                {item.title}
              </div>
              {item.vector && (
                <img
                  className={`absolute w-[${index === 0 ? "348px" : "315px"}] h-[15px] top-[${4589 + (index === 1 ? -1 : 0)}px] left-[${327 + index * 489}px]`}
                  alt="Vector"
                  src={item.vector}
                />
              )}
            </React.Fragment>
          ))}

          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[5315px] left-[713px]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-5xl tracking-[-0.96px] leading-[62px] whitespace-nowrap">
              Participants
            </h2>
          </div>

          <img
            className="absolute w-[1386px] h-[117px] top-[5727px] left-[212px]"
            alt="Logo universitas"
            src="/images/logo-universitas.png"
          />
        </div>

        <header className="absolute w-[1520px] h-[1020px] top-0 -left-10">
          <div className="absolute w-[1440px] h-[1020px] top-0 left-10 bg-[linear-gradient(0deg,rgba(16,15,13,1)_0%,rgba(16,15,13,1)_100%)]" />

          <HeaderSection />
          <nav
            className="absolute w-[1258px] h-[62px] top-[29px] left-[120px] bg-[#c6ff894c] rounded-[23.18px] overflow-hidden border border-solid border-[#b1ea51] shadow-[0px_0px_10px_-2px_#7cce24]"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="absolute w-[153px] h-[33px] top-[15px] left-[1082px]">
              <button
                className="inline-flex items-center justify-center gap-[6.18px] px-[12.36px] py-[9.27px] absolute top-0 left-0 rounded-[6.18px] border-[1.16px] border-solid border-[#aee67f]"
                type="button"
              >
                <span className="relative w-fit mt-[-1.16px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#aee67f] text-[13.9px] tracking-[0] leading-[13.9px] whitespace-nowrap">
                  Log in
                </span>
              </button>

              <button
                className="inline-flex items-center justify-center gap-[6.18px] px-[12.36px] py-[9.27px] absolute top-0 left-[78px] bg-[#aee67f] rounded-[6.18px]"
                type="button"
              >
                <span className="relative w-fit mt-[-0.77px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#1d3108] text-[13.9px] tracking-[0] leading-[13.9px] whitespace-nowrap">
                  Sign up
                </span>
              </button>
            </div>

            <ul className="absolute w-[373px] h-3.5 top-6 left-[442px]">
              <li className="inline-flex items-center gap-[42px] relative">
                {navigationItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.hasDropdown ? (
                      <div className="relative w-[78.4px] h-3.5">
                        <a
                          href={item.href}
                          className="absolute w-[59px] h-3.5 top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[13.9px]"
                        >
                          {item.label}
                        </a>
                        <div 
  className="absolute w-2.5 h-1.5 top-[5px] left-[66px] bg-cover"
  style={{ 
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/vector-4-stroke.svg)` 
  }}
/>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`w-fit mt-[-0.77px] [font-family:'Inter-Bold',Helvetica] text-white text-[13.9px] leading-[13.9px] whitespace-nowrap ${index === 0 ? "relative" : "relative"} font-bold tracking-[0]`}
                      >
                        {item.label}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </li>
            </ul>

            <div 
  className="absolute w-[82px] h-[49px] top-1 left-[17px] bg-cover"
  style={{ 
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo-sxc-putih-2-2.png)` 
  }}
/>
          </nav>
        </header>

        <FooterSection />
      </div>
    </div>
  );
};
