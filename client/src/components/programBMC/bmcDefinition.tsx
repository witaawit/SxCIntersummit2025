import React from 'react';

const BmcDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex flex-col gap-y-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2 inline-block">
                  What is Business Model Canvas?
                </h2>
                <p className="text-white-700 leading-relaxed mt-4">
                  Business Model Canvas is a competition exclusively for high school students, to showcase their entrepreneurial skills and business acumen. Students are challenged to present their innovative business idea, that can solve the problems around them
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Who can Participate?
                </h2>
                <p className="text-white-700 leading-relaxed">
                  This competition is open to all high school students from Year 10 to Year 12. You may join the competition either as an individual or as part of a team.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-200/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
               <p className="text-lg font-semibold mb-4">Icon / Image</p>
               <img src="/images/image_ffe12a.png"  alt="Business Model Canvas competition card" className="rounded-xl shadow-lg w-full max-w-sm"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmcDefinition;