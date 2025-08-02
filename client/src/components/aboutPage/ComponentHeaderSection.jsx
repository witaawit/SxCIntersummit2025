import React from "react";

export const ComponentHeaderSection = () => {
  const starImages1 = [
    "/images/aboutpage/star-rate/star-1.svg",   // Path untuk gambar bintang 1
    "/images/about/star-1-2.svg", // Path untuk gambar bintang 2
    "/images/about/star-1-3.svg", // Path untuk gambar bintang 3
    "/images/about/star-1-4.svg", // Path untuk gambar bintang 4
    "/images/about/star-1-5.svg", // Path untuk gambar bintang 5
  ];

  const starImages2 = [
    "/images/star-1.svg",   // Path untuk gambar bintang 6
    "/images/star-1-2.svg",   // Path untuk gambar bintang 7
    "/images/star-1-3.svg",   // Path untuk gambar bintang 8
    "/images/star-1-4.svg",   // Path untuk gambar bintang 9
    "/images/star-1-5.svg",  // Path untuk gambar bintang 10
  ];

  const testimonialData1 = {
    name: "Stacey Prosacco",
    title: "Legacy Tactics Representative",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
  };

  const testimonialData2 = {
    name: "Stacey Prosacco",
    title: "Legacy Tactics Representative",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
    rating: 5,
  };

  return (
    <>
      {/* Komponen Pertama */}
      <section
        className="absolute w-[852px] h-[519px] top-[6628px] left-[623px]"
        role="region"
        aria-label="Customer testimonial"
      >
        <div className="relative w-[975px] h-[850px] top-[-130px]">
          <img
            className="absolute w-[749px] h-[850px] top-0 left-[226px] object-cover"
            alt="Profile photo of Stacey Prosacco"
            src="/images/aboutpage/testimonials/stacey.svg"
          />

          <div className="inline-flex flex-col items-center justify-center gap-1 p-2.5 absolute top-[557px] left-[487px]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-[normal]">
              {testimonialData1.name}
            </h3>

            <p className="relative w-fit [font-family:'Manrope-Bold',Helvetica] font-bold text-[#eaeaea] text-sm tracking-[0] leading-[normal]">
              {testimonialData1.title}
            </p>
          </div>

          <div className="flex flex-col w-[357px] items-center justify-center absolute top-52 left-0">
            <blockquote className="relative w-[325px] mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[33.3px]">
              {testimonialData1.testimonial}
            </blockquote>

            <div
              className="inline-flex items-center px-[26.19px] py-[19.96px] relative flex-[0_0_auto] shadow-[0px_58.62px_124.73px_#15151526]"
              role="img"
              aria-label="5 star rating"
            >
              {starImages1.map((starSrc, index) => (
                <div key={index} className="relative w-[34.92px] h-[34.92px]">
                  <img
                    className="absolute w-7 h-[27px] top-[3px] left-[3px]"
                    alt={`Star ${index + 1} of 5`}
                    src={starSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponen Kedua */}
      <section
        className="absolute w-[838px] h-[519px] top-[7238px] left-[286px]"
        role="region"
        aria-label="Customer testimonial"
      >
        <div className="relative w-[966px] h-[850px] top-[-130px] -left-64">
  <img
    className="absolute w-[754px] h-[850px] top-0 left-10 object-cover"
    alt="Background decoration"
    src="/images/ellipse-11.svg"
  />


          <div className="inline-flex flex-col items-center justify-center gap-1 p-2.5 absolute top-[557px] left-[265px]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-[normal]">
              {testimonialData2.name}
            </h3>

            <p className="relative w-fit [font-family:'Manrope-Bold',Helvetica] font-bold text-[#eaeaea] text-sm tracking-[0] leading-[normal]">
              {testimonialData2.title}
            </p>
          </div>

          <div className="flex flex-col w-[357px] items-center justify-center absolute top-[193px] left-[809px]">
            <blockquote className="relative w-[325px] mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[33.3px]">
              {testimonialData2.testimonial}
            </blockquote>

            <div
              className="inline-flex items-center px-[26.19px] py-[19.96px] relative flex-[0_0_auto] shadow-[0px_58.62px_124.73px_#15151526]"
              role="img"
              aria-label={`${testimonialData2.rating} out of 5 stars`}
            >
              {starImages2.map((starSrc, index) => (
                <div key={index} className="relative w-[34.92px] h-[34.92px]">
                  <img
                    className="absolute w-7 h-[27px] top-[3px] left-[3px]"
                    alt={`Star ${index + 6} of ${testimonialData2.rating + 5}`}
                    src={starSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};