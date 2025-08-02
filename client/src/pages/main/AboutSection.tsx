import React from "react";

import { AmbassadorsSection } from "@/components/aboutPage/AmbassadorsSection";
import { ChallengesSection } from "@/components/aboutPage/ChallengesSection";
import { FooterSection } from "@/components/aboutPage/FooterSection";
import { HeaderSection } from "@/components/aboutPage/HeaderSection";
import { InfoCardSection } from "@/components/aboutPage/InfoCardSection";
import { ValueSection } from '@/components/aboutPage/ValueSection';
import TaglineSection from '@/components/aboutPage/TaglineSection';
import { FocusSection } from "@/components/aboutPage/FocusSection";
import MilestoneSection from "@/components/aboutPage/MilestoneSection";
import TestimonialsSection from "@/components/aboutPage/TestimonialsSection";
import { HighlightTestimonials } from "@/components/aboutPage/HighlightTestimonials";

export const AboutSection = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="flex flex-col w-full">
        <HeaderSection />
        
        {/* Gradient Background */}
        <div className="w-full bg-[linear-gradient(180deg,rgba(169,223,245,0.8)_0%,rgba(94,24,157,1)_100%)] min-h-[1656px]">          
          <InfoCardSection />
        
          <TaglineSection />
          <ValueSection />

        </div>
        <div className="w-full bg-[linear-gradient(180deg,rgba(151,211,235,0.8)_0%,rgba(119,56,177,1)_100%)] min-h-[1656px]">
          <ChallengesSection />
          <FocusSection />                    
          <MilestoneSection />        
        </div>


        <div className="w-full bg-[linear-gradient(180deg,rgba(135,105,178,1)_4%,rgba(161,222,244,1)_32%,rgba(119,56,177,1)_100%)] min-h-[2845px]">
          <TestimonialsSection />
          <HighlightTestimonials />
          <AmbassadorsSection />
        </div>
        <FooterSection />
        {/* Content Sections */}
        <div className="flex flex-col">






        </div>

        {/* Header and Footer */}


      </div>
    </div>
  );
};
