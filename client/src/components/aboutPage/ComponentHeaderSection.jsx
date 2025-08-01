import React from "react";

export const ComponentHeaderSection = () => {
  const starImages = [
    "/images/star-1.svg",   // Path untuk gambar bintang 1
    "/images/star-1-2.svg", // Path untuk gambar bintang 2
    "/images/star-1-3.svg", // Path untuk gambar bintang 3
    "/images/star-1-4.svg", // Path untuk gambar bintang 4
    "/images/star-1-5.svg", // Path untuk gambar bintang 5
  ];

  const testimonialData = {
    name: "Stacey Prosacco",
    title: "Legacy Tactics Representative",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
  };

  return (
    <section
      className="absolute w-[852px] h-[519px] top-[6628px] left-[623px]"
      role="region"
      aria-label="Customer testimonial"
    >
      <div className="relative w-[975px] h-[850px] top-[-130px]">
        <img
          className="absolute w-[749px] h-[850px] top-0 left-[226px] object-cover"
          alt="Profile photo of Stacey Prosacco"
          src="/images/ellipse-11.svg" // Gambar dari folder public/images
        />

        <div className="inline-flex flex-col items-center justify-center gap-1 p-2.5 absolute top-[557px] left-[487px]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-[normal]">
            {testimonialData.name}
          </h3>

          <p className="relative w-fit [font-family:'Manrope-Bold',Helvetica] font-bold text-[#eaeaea] text-sm tracking-[0] leading-[normal]">
            {testimonialData.title}
          </p>
        </div>

        <div className="flex flex-col w-[357px] items-center justify-center absolute top-52 left-0">
          <blockquote className="relative w-[325px] mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[33.3px]">
            {testimonialData.testimonial}
          </blockquote>

          <div
            className="inline-flex items-center px-[26.19px] py-[19.96px] relative flex-[0_0_auto] shadow-[0px_58.62px_124.73px_#15151526]"
            role="img"
            aria-label="5 star rating"
          >
            {starImages.map((starSrc, index) => (
              <div key={index} className="relative w-[34.92px] h-[34.92px]">
                <img
                  className="absolute w-7 h-[27px] top-[3px] left-[3px]"
                  alt={`Star ${index + 1} of 5`}
                  src={starSrc} // Path relatif untuk gambar bintang
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
