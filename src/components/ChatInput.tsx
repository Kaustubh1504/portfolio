import React from "react";
import { FiMic, FiArrowUp } from "react-icons/fi";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend }) => {
  return (
    <div className="relative w-full max-w-xl group">
      <div
        className="absolute -inset-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition duration-500 bg-[length:200%_auto] animate-gradient"
      ></div>
      <div className="relative w-full flex items-center gap-4 bg-[#1d1e26] border border-gray-700/60 rounded-4xl px-4 py-3 shadow-lg">
        <div className="text-[#1d1e26] hover:text-white transition-colors">
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
          className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 animated-caret-google"
        />
        <button className="text-gray-400 hover:text-white transition-colors">
          <FiMic size={20} />
        </button>
        <button
          onClick={onSend}
          className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!value.trim()}
        >
          <FiArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
