import React from "react";

export const AmbassadorsSection = () => {
  const ambassadorImages = [
    { id: 1, src: "/images/ellipse-232.png", alt: "Ambassador 1" },
    { id: 2, src: "/images/ellipse-238.png", alt: "Ambassador 2" },
    { id: 3, src: "/images/ellipse-239.png", alt: "Ambassador 3" },
<<<<<<< HEAD:frontend/src/components/AmbassadorsSection.jsx
    { id: 4, src: "/images/ellipse-240.png", alt: "Ambassador 4" },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 pt-10 pb-10">
      <h2 className="font-[Rubik-Medium] text-white text-4xl mb-8">Ambassadors</h2>
      
      <div className="flex justify-center space-x-10">
        {ambassadorImages.map((ambassador) => (
          <div key={ambassador.id} className="relative w-64 h-64">
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-green-400"
=======
    { id: 4, src: "/images/ellipse-239.png", alt: "Ambassador 4" },
  ];

  return (
    <div className="flex flex-col overflow-hidden items-center mt-8 px-4 sm:px-8 md:px-16"> {/* Responsive padding */}
      <h2 className="font-[Rubik-Medium] text-rubik text-4xl mb-8">Ambassadors</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {ambassadorImages.map((ambassador) => (
          <div key={ambassador.id} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"> {/* Adjusted sizes */}
            <img 
              className="w-full h-full object-cover rounded-full border-4 border-green-400"
>>>>>>> About-Mike:client/src/components/aboutPage/AmbassadorsSection.jsx
              alt={ambassador.alt}
              src={ambassador.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
