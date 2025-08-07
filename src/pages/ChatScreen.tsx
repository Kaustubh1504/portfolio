"use client";
import ChatInput from "@/components/ChatInput";
import FilterChip from "@/components/filterChip";
import WelcomeScreen from "@/components/WelcomeScreen";
import React, { useState } from "react";
import { FiCode, FiStar, FiFileText, FiCamera, FiBarChart2 } from 'react-icons/fi';

const ChatScreen = () => {
    const [started, setStarted] = useState(false);
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            console.log("Message sent:", message);
            setStarted(true); // only sets once
            setMessage(""); // reset input
        }
    };

    return (
        <div className="relative w-full h-[450px] overflow-hidden transition-all duration-700 font-sans">
            {/* <FluidEffect /> */}
            {/* Chat Messages Section */}
            <div
                className={`transition-opacity duration-700 ease-in-out ${started ? "opacity-100" : "opacity-0 pointer-events-none"
                    } absolute top-0 left-0 w-full pt-4 px-4 overflow-y-auto`}
            >
                <div className="justify-center items-center text-center text-gray-500 mt-10">
                    Chat Messages Here
                </div>
            </div>

            {/* Landing Centered Content */}
            <div
                className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full p-4 ${started ? "opacity-0 -translate-y-20 pointer-events-none" : "opacity-100 translate-y-0"
                    }`}
            >
                <WelcomeScreen/>
                <ChatInput
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onSend={handleSend}
                />
                <div className="flex flex-wrap gap-2 p-4 items-center justify-center">
                    <FilterChip icon={FiCode} text="Code" color="text-blue-400" onClick={() => console.log('Code clicked')} />
                    {/* <FilterChip icon={FiLightbulb} text="Make a plan" color="text-yellow-400" onClick={() => console.log('Plan clicked')} /> */}
                    <FilterChip icon={FiStar} text="Surprise me" color="text-cyan-400" onClick={() => console.log('Surprise me clicked')} />
                    <FilterChip icon={FiFileText} text="Summarize text" color="text-orange-400" onClick={() => console.log('Summarize clicked')} />
                    <FilterChip icon={FiCamera} text="Analyze images" color="text-indigo-400" onClick={() => console.log('Analyze clicked')} />
                    <FilterChip icon={FiBarChart2} text="Analyze data" color="text-lime-400" onClick={() => console.log('Data clicked')} />
                </div>
            </div>

            {/* ChatInput Fixed at Bottom */}
            <div
                className={`transition-all duration-700 ease-in-out ${started
                        ? "opacity-100 bottom-4"
                        : "opacity-0 -bottom-20 pointer-events-none"
                    } fixed left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl`}
            >
                <ChatInput value={message} onChange={(e) => setMessage(e.target.value)} onSend={handleSend} />
            </div>
        </div>
    );
};

export default ChatScreen;
