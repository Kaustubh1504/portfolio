import { useState } from "react";
import type { FC } from "react";
import { FiMenu, FiEdit, FiSettings } from "react-icons/fi";
import Link from "next/link";
import { SettingsPopover } from "./SettingsPopover";


// Define the props for the Sidebar component.
interface SidebarProps {
    isSidebarOpen: boolean;
    toggleKeepExpanded: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// The main Sidebar component.
const Sidebar: FC<SidebarProps> = ({
    isSidebarOpen,
    toggleKeepExpanded,
    onMouseEnter,
    onMouseLeave,
}) => {
    // State to control the visibility of the settings popover
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    
    const recentChats = [
        { label: "🏠 Home ...", href: "#" },
        { label: "💼 Experience ...", href: "#" },
        { label: "💻 Projects ...", href: "#" },
        { label: "📄 Publications ...", href: "#" },
        { label: "🏆 Hackathons ...", href: "#" },
        { label: "🤝 Committees ...", href: "#" },
        { label: "✉️ Contact ...", href: "#" }
    ];

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            // Use Tailwind's dark mode classes for responsive styling
            className={`fixed top-0 left-0 h-screen bg-white dark:bg-[#f0f4f9] text-gray-800 dark:text-gray-300 transition-all duration-300 ease-in-out z-50 flex flex-col ${isSidebarOpen ? "w-64" : "w-16"}`}
        >
            {/* Top Section */}
            <div className="flex flex-col gap-6 p-4">
                <button
                    onClick={toggleKeepExpanded}
                    className="group relative flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                    <FiMenu
                        className={`w-5 h-5 transform transition-transform duration-300 text-[#444746] ${isSidebarOpen ? "rotate-90" : ""}`}
                    />
                    <div className="absolute left-full ml-4 w-max px-3 py-1.5 rounded-lg text-sm text-white bg-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        {isSidebarOpen ? "Collapse menu" : "Keep menu expanded"}
                    </div>
                </button>

                <div
                    className={`flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer ${isSidebarOpen ? "justify-start" : "justify-center"}`}
                >
                    <FiEdit className="h-5 w-5 text-amber-200" color="black"/>
                    <span
                        className={`ml-4 whitespace-nowrap transition-opacity duration-300 delay-100 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
                    >
                        New chat
                    </span>
                </div>

                {/* Recent Chats Section */}
                {isSidebarOpen && (
                    <div className="overflow-y-auto max-h-[60vh] mt-4"
                        style={{
                            overflowY: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Recent</p>
                        {recentChats.map((chat, index) => (
                            <Link key={index} href={chat.href}>
                                <div className="flex items-center gap-3 py-2 px-3 rounded-full text-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-800 dark:text-gray-200">
                                    <span className="truncate">{chat.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Section with Settings Popover */}
            {/* The popover is now rendered directly inside its parent div */}
            {/* <div className="mt-auto p-4 flex flex-col gap-3 relative">
                <div 
                    className="flex items-center gap-3 cursor-pointer px-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full relative"
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                >
                    <FiSettings className="h-5 w-5" />
                    {isSidebarOpen && <span className="text-gray-800 dark:text-gray-200">Settings</span>}
                </div>
                {isSettingsOpen && <SettingsPopover onClose={() => setIsSettingsOpen(false)} />}
            </div> */}
        </div>
    );
};

export default Sidebar;
