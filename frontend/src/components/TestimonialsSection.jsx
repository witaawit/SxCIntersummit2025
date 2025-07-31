import React from "react";

export const TestimonialsSection = () => {
  const testimonialData = {
    avatar: "/images/ellipse-6.svg",  // Update to point to the public/images folder
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Mike Torello",
    title: "Executive Engineer",
  };

  return (
    <section
      className="absolute w-[543px] h-[318px] top-[6186px] left-0"
      role="region"
      aria-label="Customer testimonials"
    >
      <article className="relative w-[537px] h-[318px]">
        <div className="absolute w-[537px] h-[282px] top-9 left-0 bg-[#ffffff21] rounded-[38.87px] border-[none] backdrop-blur-[9.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.25px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-[2.78px] before:rounded-[38.87px] before:[background:linear-gradient(105deg,rgba(255,255,255,0.77)_0%,rgba(255,255,255,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

        <div
          className="absolute w-[67px] h-[63px] top-[33px] left-[234px] bg-[#00000040] rounded-[33.32px/31.46px] blur-[15.73px]"
          aria-hidden="true"
        />

        {/* Use the public path for the image */}
        <img
          className="absolute w-[81px] h-[81px] top-0 left-[222px] object-cover"
          alt={`Profile picture of ${testimonialData.name}`}
          src={testimonialData.avatar}
        />

        <blockquote className="absolute w-[413px] top-[113px] left-14 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[24.2px]">
          {testimonialData.quote}
        </blockquote>

        <cite className="absolute top-[251px] left-[196px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-[#e1ab1f] text-[24.4px] text-center tracking-[0] leading-[24.2px] whitespace-nowrap not-italic">
          {testimonialData.name}
        </cite>

        <div className="left-[206px] absolute top-[274px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[11.4px] text-center tracking-[0] leading-[24.2px] whitespace-nowrap">
          {testimonialData.title}
        </div>
      </article>
    </section>
  );
};
