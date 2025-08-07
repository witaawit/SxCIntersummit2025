import { Megaphone } from "lucide-react";
import React from "react";

const ProfileHome = () => {
  return (
    <div className="mx-auto px-6 py-6">
      {" "}
      <img src="/images/profile/bmc.png" alt="" />
      {/* Announcement */}
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-3xl font-bold my-5">Announcement</h2>{" "}
      </div>
      <div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
        <div className="flex items-center justify-center h gap-3">
          {/* Content */}
          <Megaphone size={30} />
          <p className="font-semibold text-xl">
            You currently have no announcements.
          </p>
        </div>
      </div>
      {/* Register Team */}
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-3xl font-bold my-5">Tasks</h2>{" "}
      </div>
      <div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
        <div className="flex items-center justify-between ">
          <p className="text-xl font-bold">Proof of Promotion</p>
          <p className="text-xl font-bold">Due: 21th July 2025, 23:59 WIB</p>
        </div>

        <p className="text-xl font-semibold opacity-70 max-w-[400px] my-2">
          For further information please check your email for the given task.
        </p>
      </div>
      {/* Register team */}
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-3xl font-bold my-5">
          Register your team
        </h2>{" "}
      </div>
      <div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
        <div className="flex items-start flex-col justify-start  gap-3">
          {/* Content */}
          <h2 className="text-white  text-3xl font-bold my-2">
            Select Registration Type
          </h2>{" "}
          <form
            className="flex flex-col items-start space-y-4 w-full"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.name === "registrationType") {
                console.log(target.value);
                // You can set state here if needed
              }
            }}
          >
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="registrationType"
                value="individual"
                className="form-radio"
                defaultChecked
                style={{ width: "1.2em", height: "1.2em" }}
              />
              <span className="text-white text-lg font-semibold">
                As Individual
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="registrationType"
                value="group"
                className="form-radio"
                style={{ width: "1.2em", height: "1.2em" }}
              />
              <span className="text-white text-lg font-semibold">
                As Group / Team
              </span>
            </label>

            <button
              type="submit"
              className="font-bold text-white bg-[#5EC7ED] cursor-pointer rounded-lg py-2 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200"
            >
              Confirm Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
