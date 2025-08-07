import React from 'react';
import BCL from '/images/programpage/bcl/BCL.png';

const BmcDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What is Business Competition Launchpad?
              </h2>
              <p className="text-lg leading-relaxed">
                Business Competition Launchpad is a free competition class program for college and high school students aiming to excel in business case and plan competitions. This opportunity helps students develop strategic thinking, problem-solving, and business planning skills, preparing them to succeed in competitive business challenges.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who can Participate?
              </h2>
              <p className="text-lg leading-relaxed">
                This competition is open to all high school students from Year 10 to Year 12 and university students. 
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={BCL}
              alt="Business Model Canvas competition card"
              className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmcDefinition;
