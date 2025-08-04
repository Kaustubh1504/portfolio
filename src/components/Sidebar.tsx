"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [keepExpanded, setKeepExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isSidebarOpen = keepExpanded || isHovered;

  const toggleSidebar = () => setKeepExpanded(!keepExpanded);

  const recentChats = [
    { label: "Gemini-Inspired Navbar De...", href: "#" },
    { label: "Building Gemini-like Portfoli...", href: "#" },
    { label: "Deploying LLM for Portfolio ...", href: "#" },
    { label: "Fixing Git Push Error: `src re...", href: "#" },
    { label: "Sample Price and Problem S...", href: "#" },
    { label: "Language Skills Quiz Answers", href: "#" },
    { label: "Transform this image into a ...", href: "#" },
    { label: "turn this image in studio ghi...", href: "#" },
    { label: "Extra's Multiple Meanings E...", href: "#" },
    { label: "Leighton Meester's Identity ...", href: "#" },
    { label: "\"Nahin but\" in Hindi", href: "#" },
    { label: "शौचालय की जानकारी", href: "#" },
    { label: "About the Goddess Baglam...", href: "#" },
    { label: "India Information", href: "#" },
    { label: "New Nagpuri Songs", href: "#" },
    { label: "Open-Source React Admin ...", href: "#" },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 h-screen bg-[#1E1F21] text-gray-300 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex flex-col p-4 space-y-8">
        <button
          onClick={toggleSidebar}
          // The 'group relative' classes are key for the tooltip
          className="group relative flex items-center justify-center w-8 h-8 rounded hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-2xl">☰</span>
          
          {/* The tooltip element */}
          <div className="absolute left-full ml-4 w-max px-3 py-1.5 rounded-lg text-sm text-white bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            {keepExpanded ? "Collapse menu" : "Keep menu expanded"}
          </div>
        </button>

        <Link
          href="#"
          className="flex items-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a5.25 5.25 0 11-7.424 7.424L10.5 13.5l-2.91-2.91a2.122 2.122 0 00-3 3l5.05 5.05a5.25 5.25 0 007.424-7.424l-3.536-3.536z"
              />
            </svg>
          </span>
          <span
            className={`ml-4 whitespace-nowrap transition-opacity duration-300 delay-100 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            New chat
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto mt-4 px-4 whitespace-nowrap">
        <div
          className={`text-sm font-semibold text-gray-500 mb-2 transition-opacity duration-300 delay-100 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Recent
        </div>

        <nav>
          <ul>
            {recentChats.map((chat, index) => (
              <li key={index} className="mb-1">
                <Link
                  href={chat.href}
                  className={`flex items-center py-2 px-3 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200 ${
                    index === 0 ? "bg-[#313235] text-white" : ""
                  }`}
                >
                  <span
                    className={`transition-opacity duration-300 delay-150 ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {chat.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 mt-auto">
        <Link
          href="#"
          className="flex items-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.227.842 3.513.842zm0 0l-1.22 1.22a4.5 4.5 0 106.364-6.364L14.675 1.5"
              />
            </svg>
          </span>
          <span
            className={`ml-4 whitespace-nowrap transition-opacity duration-300 delay-100 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Settings and help
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
