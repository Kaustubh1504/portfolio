import React from "react";
import { FiMic, FiArrowUp } from "react-icons/fi";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend }) => {
  return (
    <div className="relative w-full max-w-4xl group">
      {/* Gradient glow border */}
      {/* <div
        className="absolute -inset-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition duration-500 bg-[length:200%_auto] animate-gradient"
      ></div> */}

      {/* Glassy container */}
      <div
        className="
          relative w-full flex items-center gap-4
          bg-white/10 border border-white/30 backdrop-blur-md
          rounded-4xl px-4 py-3 shadow-[inset_0_1px_0px_rgba(255,255,255,0.4),0_0_9px_rgba(0,0,0,0.15)]
          before:absolute before:inset-0 before:rounded-4xl before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none
          after:absolute after:inset-0 after:rounded-4xl after:bg-gradient-to-tl after:from-white/20 after:via-transparent after:to-transparent after:opacity-40 after:pointer-events-none
        "
      >
        <div className="text-white/30 hover:text-white transition-colors">
          {/* spacing div */}
        </div>

        <input
          type="text"
          placeholder="Ask Me anything ...."
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          className="flex-1 bg-transparent outline-none text-black placeholder-gray-400"
        />

        <button className="text-gray-600 hover:text-white transition-colors">
          <FiMic size={20} />
        </button>

        <button
          onClick={onSend}
          disabled={!value.trim()}
          className="p-2 bg-[#646464] rounded-full text-white hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiArrowUp size={20} color=""/>
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
