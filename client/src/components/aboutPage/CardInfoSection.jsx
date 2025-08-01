import React from "react";

export const CardInfoSection = () => {
  const testimonialData = {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Devon Miles",
    title: "Executive Engineer",
    avatar: "/images/ellipse-4.png", // Gambar avatar dari public/images
  };

  return (
    <section
      className="absolute w-[548px] h-[322px] top-[6186px] left-[1177px]"
      role="region"
      aria-label="Customer testimonial"
    >
      <article className="relative w-[479px] h-[322px]">
        <img
          className="absolute w-[421px] h-[286px] top-9 left-0"
          alt="Testimonial card background"
          src="/images/rectangle-1.svg" // Gambar background dari public/images
          role="presentation"
        />

        <div
          className="absolute w-[67px] h-[63px] top-[33px] left-[245px] bg-[#00000040] rounded-[33.32px/31.46px] blur-[15.73px] "
          role="presentation"
          aria-hidden="true"
        />

        <blockquote className="absolute w-[413px] top-[113px] left-[67px] [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[24.2px]">
          {testimonialData.quote}
        </blockquote>

        <cite className="absolute top-[251px] left-[205px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-[#e1ab1f] text-[24.4px] text-center tracking-[0] leading-[24.2px] whitespace-nowrap not-italic">
          {testimonialData.name}
        </cite>

        <div className="absolute top-[274px] left-[217px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[11.4px] text-center tracking-[0] leading-[24.2px] whitespace-nowrap">
          {testimonialData.title}
        </div>

        <img
          className="absolute w-[81px] h-[81px] top-0 left-[232px] object-cover rounded-full"
          alt={`${testimonialData.name}, ${testimonialData.title}`}
          src={testimonialData.avatar} // Menggunakan path relatif untuk avatar
        />
      </article>
    </section>
  );
};
