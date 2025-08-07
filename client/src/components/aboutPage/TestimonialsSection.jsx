// TestimonialsSection.jsx
import * as React from "react"; // Ensure that React is imported if needed.

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Drake",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/mike.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      name: "Ravi Arman",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/rick.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 3,
      name: "Devon Miles",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/devon.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <section className="py-5 px-4 bg-gradient-purple min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-glass-card backdrop-blur-sm border border-glass-border rounded-3xl p-8 h-full flex flex-col">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-white text-sm leading-relaxed mb-8 flex-grow">
                {testimonial.text}
              </p>
              
              {/* Name and Title */}
              <div className="text-center">
                <h3 className="text-accent font-bold text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-white/80 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;  // Ensure you're using default export
