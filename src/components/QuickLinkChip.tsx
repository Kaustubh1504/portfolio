import React from 'react';

interface QuickLinkChipProps {
  icon: React.ElementType;
  text: string;
  color?: string;
  onClick?: () => void;
}

const QuickLinkChip: React.FC<QuickLinkChipProps> = ({ icon: Icon, text, color = 'text-gray-400', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b1c1d] text-gray-200 hover:bg-gray-700 transition-colors duration-200 border border-[#9a9b9c]"
    >
      <Icon className={`${color}`} size={16} />
      <span>{text}</span>
    </button>
  );
};

export default QuickLinkChip;