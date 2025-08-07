import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection";

const BMCRegister = () => {
  const [registrationType, setRegistrationType] = useState("individual");

  return (
    <div className="w-full mx-auto p-5 space-y-6 mt-15">
      <div className="flex flex-row mr-5">
        {/* Sidebar */}
        <div className="w-1/4 ml-7">
          <SideBarSection /> {/* Sidebar positioned on the left */}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <h2 className="flex justify-start items-center">
            <img
              src="/images/profile/BMC/businessmodel.png" // Ganti dengan gambar yang sesuai
              alt="BMC Icon"
              className="max-md:h-[5vh] w-auto object-contain"
            />
          </h2>
          <div className="rounded-[19.6px] bg-[#8257A9] mt-3 p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="/images/profile/BMC/speaker.png"
                alt="BMC Icon"
                className="w-5 h-5"
              />
              <p className="text-[12px]">You currently have no announcements.</p>
            </div>
          </div>

          {/* Tasks Section */}
          <h2 className="text-white text-xl font-semibold mt-5">Register Your Team</h2>
          <div className="rounded-lg overflow-hidden">
            <div className="space-y-4">
              <div className="p-6 bg-white/10 rounded-lg border border-white/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-[20px] font-semibold text-white">
                    Select Registration Type
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                  <div className="space-y-2">
                    <label className="text-white text-lg flex items-center">
                      <input
                        type="radio"
                        name="registration-type"
                        value="individual"
                        checked={registrationType === "individual"}
                        onChange={() => setRegistrationType("individual")}
                        className="mr-2"
                      />
                      As Individual
                    </label>
                    <label className="text-white text-lg flex items-center">
                      <input
                        type="radio"
                        name="registration-type"
                        value="group"
                        checked={registrationType === "group"}
                        onChange={() => setRegistrationType("group")}
                        className="mr-2"
                      />
                      As Group / Team
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start mt-6">
                  <button className="bg-[#5EC7ED] text-white py-1 px-4 rounded-md text-lg hover:bg-blue-600 transition">
                    Confirm Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMCRegister;
