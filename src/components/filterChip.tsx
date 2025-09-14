import React from 'react';

interface FilterChipProps {
  icon: React.ElementType;
  text: string;
  color?: string;
  onClick?: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  icon: Icon,
  text,
  color = 'text-gray-200',
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 px-4 py-2 rounded-full
        bg-white/10 border border-white/30 backdrop-blur-md
        shadow-[inset_0_1px_0px_rgba(255,255,255,0.4),0_0_6px_rgba(0,0,0,0.15)]
        hover:bg-white/15 hover:border-white/40
        transition-all duration-300
        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none
        after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/20 after:via-transparent after:to-transparent after:opacity-40 after:pointer-events-none
        relative
      "
    >
      <Icon className={`${color}`} size={16} />
      <span className="text-gray-200">{text}</span>
    </button>
  );
};

export default FilterChip;
