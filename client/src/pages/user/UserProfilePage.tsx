import { updateSMAStudentData } from "@/assets/updateProfileData";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="mx-auto px-6 py-6">
      {" "}
      {/* Reduced padding */}
      {/* Title Outside the Container */}
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-lg font-semibold">My Profile</h2>{" "}
        {/* Reduced font size */}
        <div
          className={`flex items-center bg-[#D9D9D9] gap-2 text-black font-bold  cursor-pointer px-4 rounded-lg py-1 ${
            isEditing ? "opacity-80" : "opacity-100"
          }`}
          onClick={() => setIsEditing(!isEditing)}
        >
          <Pencil size={20} />
          <p className="text-md">Edit Profile</p>
        </div>
      </div>
      {/* Container for Notifications */}
      <div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
        {/* Scrollable area for notifications */}
        <div className=" ">
          {/* Content */}

          <div className="w-full flex flex-col gap-2">
            {updateSMAStudentData.map((i, index) => (
              <React.Fragment key={index}>
                <label
                  htmlFor="name"
                  className="text-md font-medium text-white pl-4"
                >
                  {i.columnName}
                </label>
                <input
                  type={i.type}
                  id={i.schemaName}
                  className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 pl-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
                    !isEditing
                      ? "cursor-not-allowed opacity-70"
                      : "cursor-pointer"
                  }`}
                  placeholder={i.placeHolder}
                  disabled={!isEditing}
                />
              </React.Fragment>
            ))}
          </div>
          <button className="font-bold text-white bg-[#5EC7ED] cursor-pointer rounded-lg py-2 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
