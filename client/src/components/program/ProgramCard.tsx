import React from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  onClick?: () => void; // This prop is already here and will be used
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  image,
  category,
  level,
  onClick,
}) => (
  <div
    className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg p-6 mb-8 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick} // The onClick handler is already correctly attached here
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-60 h-40 rounded-2xl object-cover mb-4 md:mb-0 md:mr-8"
    />
    <div className="w-full md:h-40 flex flex-col justify-start">
      <h2 className="text-2xl font-bold text-[#6c2eb7]">{title}</h2>
      <div className="flex gap-2 text-xs mt-2 mb-2">
        <span className="bg-[#a16ae8] text-white px-2 py-1 rounded-full">{category}</span>
        <span className="bg-[#abdc57] text-black px-2 py-1 rounded-full">{level}</span>
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
    </div>
  </div>
);

export default ProgramCard;