import React from 'react';

const MilestoneSection = () => {
  return (
    <section className="bg-[#3c1360] p-8 text-center">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-5xl font-medium text-white">Our Milestones</h1>
      </div>

      {/* Subtitle */}
      <div className="mb-6">
        <h2 className="text-3xl font-medium text-white">Participants</h2>
      </div>

      {/* Milestone Cards */}
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-[#ba9cff] text-white p-6 rounded-[60px] flex items-center justify-center max-w-xs w-full">
          <div>
            <h3 className="text-xl">2000+</h3>
            <p>Future Leaders</p>
          </div>
        </div>
        <div className="bg-[#ba9cff] text-white p-6 rounded-[60px] flex items-center justify-center max-w-xs w-full">
          <div>
            <h3 className="text-xl">Lorem</h3>
            <p>LoremIpsums</p>
          </div>
        </div>
        <div className="bg-[#ba9cff] text-white p-6 rounded-[60px] flex items-center justify-center max-w-xs w-full">
          <div>
            <h3 className="text-xl">Lorem</h3>
            <p>LoremIpsums</p>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        <img src="/images/logo1.png" alt="Logo 1" className="w-16 h-16"/>
        <img src="/images/logo2.png" alt="Logo 2" className="w-16 h-16"/>
        <img src="/images/logo3.png" alt="Logo 3" className="w-16 h-16"/>
        <img src="/images/logo4.png" alt="Logo 4" className="w-16 h-16"/>
        <img src="/images/logo5.png" alt="Logo 5" className="w-16 h-16"/>
        <img src="/images/logo6.png" alt="Logo 6" className="w-16 h-16"/>
        <img src="/images/logo7.png" alt="Logo 7" className="w-16 h-16"/>
        <img src="/images/logo8.png" alt="Logo 8" className="w-16 h-16"/>
      </div>
    </section>
  );
};

export default MilestoneSection;
