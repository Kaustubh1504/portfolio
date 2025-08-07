import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import FilterChip from "./FilterChip";

import { FiUser, FiBriefcase, FiFolder, FiAward, FiBookOpen, FiSmile, FiMail } from "react-icons/fi";
import { AiOutlineBulb, AiOutlineStar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";

interface QuickPromptListProps {
  onPromptClick: (text: string) => void;
}

const chipData = [
  {
    icon: FiUser,
    text: "Me",
    color: "text-blue-500",
  },
  {
    icon: FiBriefcase,
    text: "Experience",
    color: "text-green-500",
  },
  {
    icon: FiFolder,
    text: "Projects",
    color: "text-purple-500",
  },
  {
    icon: AiOutlineBulb,
    text: "Skills",
    color: "text-orange-500",
  },
  {
    icon: FiBookOpen,
    text: "Publication",
    color: "text-cyan-500",
  },
  {
    icon: FiAward,
    text: "Awards and Achievements",
    color: "text-pink-500",
  },
  {
    icon: FaGraduationCap,
    text: "Education",
    color: "text-yellow-500",
  },
  {
    icon: AiOutlineStar,
    text: "Recommendations",
    color: "text-rose-500",
  },
  {
    icon: FiSmile,
    text: "Hobbies",
    color: "text-indigo-500",
  },
  {
    icon: FiMail,
    text: "Contact",
    color: "text-lime-500",
  },
];


const QuickPromptList: React.FC<QuickPromptListProps> = ({ onPromptClick }) =>  {
  const [showMore, setShowMore] = useState(false);

  const visibleChips = chipData.slice(0, 4);
  const moreChips = chipData.slice(4);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap gap-2 w-[780px] justify-center p-2">
      {[...visibleChips, ...(showMore ? moreChips : [])].map((chip, index) => (
        <FilterChip
          key={index}
          icon={chip.icon}
          text={chip.text}
          color={chip.color}
          onClick={() => onPromptClick(chip.text)}
        />
      ))}

      <FilterChip
        icon={showMore ? FiChevronUp : FiChevronDown}
        text={showMore ? "Less" : "More"}
        color="text-gray-500"
        onClick={() => setShowMore(!showMore)}
      />
    </div>
    </div>
  );
};

export default QuickPromptList;
