import { ChevronRight, LockKeyhole, LockKeyholeOpen } from "lucide-react";
import React, { useState } from "react";

const RecentCard = () => {
  const [locked, setLocked] = useState(true);
  return (
    <div className="bg-[#3c1360] p-4  rounded-xl cursor-pointer">
      <img
        src="/images/homepage/placeholder.png"
        className="rounded-md w-full h-[300px] object-cover"
        alt=""
      />

      <div className="flex justify-between items-center mt-2">
        <p className="bg-[#0E051B] px-2 py-1 rounded-md w-fit">
          Capture The Flag
        </p>
        {locked ? <LockKeyhole /> : <LockKeyholeOpen />}
      </div>

      <p className="text-purple-200 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      <p className="text-purple-500 gap-5 flex items-center">
        Read More <ChevronRight />
      </p>
    </div>
  );
};

export default RecentCard;
