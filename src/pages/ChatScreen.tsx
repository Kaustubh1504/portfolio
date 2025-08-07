"use client";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import QuickPromptList from "@/components/QuickPromptList";
import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useState } from "react";

const ChatScreen = () => {
  const [started, setStarted] = useState(false);
  const [inputMessage, setInputMessage] = useState("");     // typing
  const [displayMessage, setDisplayMessage] = useState(""); // sent message

  const handleSend = () => {
    if (inputMessage.trim()) {
      console.log("Message sent:", inputMessage);
      setDisplayMessage(inputMessage);
      setStarted(true);
      setInputMessage(""); // reset input
    }
  };

  const handlePromptClick = (msg: string) => {
    setDisplayMessage(msg);
    setInputMessage(""); // optional: reset input
    setStarted(true);
    console.log("Message sent:", msg);
  };

  return (
    <div className="relative w-full h-[450px] overflow-hidden transition-all duration-700 font-sans">
      {/* Chat Messages Section */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          started ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute top-0 left-0 w-full pt-4 px-4 overflow-y-auto`}
      >
        <div className="justify-center items-center text-center text-red-500 mt-10">
          <ChatMessages message={displayMessage} />
        </div>
      </div>

      {/* Landing Centered Content */}
      <div
        className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full p-4 ${
          started
            ? "opacity-0 -translate-y-20 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <WelcomeScreen />
        <ChatInput
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onSend={handleSend}
        />
        <QuickPromptList onPromptClick={handlePromptClick} />
      </div>

      {/* ChatInput Fixed at Bottom */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          started
            ? "opacity-100 bottom-4"
            : "opacity-0 -bottom-20 pointer-events-none"
        } fixed left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl`}
      >
        <QuickPromptList onPromptClick={handlePromptClick} />
        <ChatInput
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatScreen;
