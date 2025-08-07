import React, { useState } from "react";
import ProgramCard from "../../components/program/ProgramCard";
import ProgramFilter from "../../components/program/ProgramFilter";
import { useNavigate } from "react-router-dom";

// Define the shape of a single program object
interface Program {
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  route?: string; // route is an optional string property
}

// Now, use the Program interface to type your array
const programs: Program[] = [
  {
    title: "Business Model Canvas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/BCL-businesscompetitionlaunchpad.png",
    category: "competition",
    level: "university",
    route: "./programBMC",
  },
  {
    title: "Business Competition Launchpad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/BCL-businesscompetitionlaunchpad.png",
    category: "competition",
    level: "high-school",
    route: "./programBCL",
  },
  {
    title: "International Business Case Competition",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/IBCC-internationalbusinesscasecompetition.png",
    category: "competition",
    level: "university",
    route: "./program/Program",
  },
  {
    title: "International Business Plan Competition",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/IBPC-internationalbusinessplancompetition.png",
    category: "competition",
    level: "high-school",
    route: "./program/Program",
  },
  {
    title: "Chambers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/CHAMBERS.png",
    category: "competition",
    level: "high-school",
    route: "./program/Program",
  },
  {
    title: "Company Visit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/COMPANYVISIT.png",
    category: "competition",
    level: "high-school",
    route: "./program/Program",
  },
  {
    title: "International Conference",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
    image: "images/allprograms/INTERNATIONALCONFERENCE.png",
    category: "competition",
    level: "high-school",
    route: "./program/Program",
  },
];

const categories = ["all", "competition", "event"];
const levels = ["all", "high-school", "university"];

const AllPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const navigate = useNavigate();

  const filteredPrograms = programs.filter(
    (p) =>
      (selectedCategory === "all" || p.category === selectedCategory) &&
      (selectedLevel === "all" || p.level === selectedLevel)
  );

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b7e0e0] to-[#b7b7e0] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <ProgramFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          levels={levels}
        />
        {/*
          Change the gap-8 class to a smaller value like gap-4 or gap-6.
          I've changed it to gap-4 here.
        */}
        <div className="flex flex-col gap-0">
          {filteredPrograms.map((program, idx) => {
            const isClickable = program.route !== undefined;
            return (
              <ProgramCard
                key={idx}
                {...program}
                onClick={isClickable ? () => handleCardClick(program.route!) : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPrograms;