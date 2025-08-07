export const CallingOut = () => {  
  return (
    <div className="flex flex-col overflow-hidden items-center mt-10 px-4 sm:px-8 md-16"> {/* Responsive padding */}
      <div className="rounded-full p-3 mb-5">
        <p className="text-3xl font-bold sm:text-xl md:text-2xl font-[Plus_Jakarta_Sans] text-white md-10">
         We are still calling for Sponsors & Media Partners!
         </p>
      </div>

      {/* Teks di bawah gambar */}
      <div className="text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-[Plus_Jakarta_Sans] text-white md-10">
          We're looking for passionate sponsors and media partners to support and grow this initiative together. 
          Whether you're a brand, organization, or community, join us in making a greater impact.
        </p>
        </div>
        <div>
          <p className="text-lg sm:text-xl md:text-2xl [Plus_Jakarta_Sans] font-bold text-white mt-10 md-10">
            Want to help make this event a reality? Email us at lorem@gmail.com
          </p>
        </div>
        <div className="md10 mt-10">
          <h2 className="flex justify-center items-center">
            <img
              src="/images/aboutpage/button.png"
              alt="Focus Icon"
              className="max-md:h-[7vh] w-auto object-contain"
            />
          </h2>
          <br/>
        </div>

    </div>
  );
};
