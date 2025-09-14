import React from 'react';

interface QuickLinkChipProps {
  icon: React.ElementType;
  text: string;
  color?: string;
  onClick?: () => void;
}

const QuickLinkChip: React.FC<QuickLinkChipProps> = ({
  icon: Icon,
  text,
  color = 'text-gray-700',
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="
        relative flex items-center gap-2 px-4 py-2 rounded-full
        bg-white/40 border border-gray-300/60 backdrop-blur-md
        shadow-[inset_0_1px_0px_rgba(255,255,255,0.7),0_0_6px_rgba(0,0,0,0.08)]
        hover:bg-white/50 hover:border-gray-300
        transition-all duration-300
        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none
        after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/40 after:via-transparent after:to-transparent after:opacity-30 after:pointer-events-none
      "
    >
      <Icon className={`${color}`} size={16} />
      <span className="text-gray-800">{text}</span>
    </button>
  );
};

export default QuickLinkChip;
