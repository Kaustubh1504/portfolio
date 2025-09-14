"use client";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import QuickPromptList from "@/components/QuickPromptList";
import SplashCursor from "@/components/reactbits/SplashCursor";
import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useState } from "react";

const ChatScreen = () => {
  const [started, setStarted] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const handleSend = () => {
    if (inputMessage.trim()) {
      console.log("Message sent:", inputMessage);
      setDisplayMessage(inputMessage);
      setStarted(true);
      setInputMessage("");
    }
  };

  const handlePromptClick = (msg: string) => {
    setDisplayMessage(msg);
    setInputMessage("");
    setStarted(true);
    console.log("Message sent:", msg);
  };

  return (
    <div className="relative w-full h-[680px] overflow-hidden font-sans">
      {!started && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SplashCursor />
        </div>
      )}

      {/* Main chat container that aligns everything */}
      <div
        className={`w-full h-full flex flex-col justify-between p-4 mx-auto transition-all duration-700 ease-in-out ${
          started ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Messages Section */}
        <div className="flex-1 w-[800px] max-w-4xl mx-auto overflow-y-auto">
          <ChatMessages message={displayMessage} />
        </div>
        
        {/* Chat Input Section */}
        <div className="w-[800px] max-w-4xl mx-auto bg-transparent">
          <QuickPromptList onPromptClick={handlePromptClick} />
          <ChatInput
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onSend={handleSend}
          />
        </div>
      </div>

      {/* Landing Centered Content */}
      <div
        className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full p-4 z-10 ${
          started
            ? "opacity-0 -translate-y-20 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <WelcomeScreen />
        <div className="w-[800px] max-w-4xl">
          <ChatInput
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onSend={handleSend}
          />
        </div>
        <QuickPromptList onPromptClick={handlePromptClick} />
      </div>
    </div>
  );
};

export default ChatScreen;