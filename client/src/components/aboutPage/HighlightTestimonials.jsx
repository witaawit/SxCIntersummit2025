import React from "react";

export const HighlightTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Stacey Prosacco",
      title: "Lorem Ipsum Representative",
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
      image: "/images/aboutpage/testimonials/stacey.svg",
      rating: 5
    },
    {
      id: 2,
      name: "Stacey Prosacco", 
      title: "Lorem Ipsum Representative",
      text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
      image: "/images/aboutpage/testimonials/stacey.svg",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 mt-0 relative z-10"> {/* Reduced py-8 to py-4 and mt-2 to mt-0 */}
      <div className="max-w-6xl w-full relative">
        {/* Testimonial 1 with Image on the Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center text-center text-white space-y-6 lg:space-x-6 lg:space-y-0">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              {testimonials[0].text}
            </p>
            {/* Star Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <img
                  key={i}
                  src={`/images/aboutpage/star-rate/star${i + 1}.svg`} 
                  alt={`star ${i + 1}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {testimonials[0].name}
              </h3>
              <p className="text-sm text-white/80">
                {testimonials[0].title}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 with Image on the Left */}
        <div className="flex flex-col lg:flex-row items-center text-center text-white space-y-6 mt-4 lg:space-x-6 lg:space-y-0">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              {testimonials[1].text}
            </p>
            {/* Star Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(testimonials[1].rating)].map((_, i) => (
                <img
                  key={i}
                  src={`/images/aboutpage/star-rate/star${i + 1}.svg`} 
                  alt={`star ${i + 1}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {testimonials[1].name}
              </h3>
              <p className="text-sm text-white/80">
                {testimonials[1].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
