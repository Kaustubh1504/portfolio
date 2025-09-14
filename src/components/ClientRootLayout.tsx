"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [keepExpanded, setKeepExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // The sidebar is open if the "keep expanded" button is clicked OR the user is hovering
    const isSidebarOpen = keepExpanded || isHovered;

    const toggleKeepExpanded = () => setKeepExpanded(false);

    return (
        <ThemeProvider>
            <div className="flex min-h-screen">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleKeepExpanded={toggleKeepExpanded}
                    onMouseEnter={() => setIsHovered(false)}
                    onMouseLeave={() => setIsHovered(false)}
                />

                <div className={`flex-1 transition-all duration-300 ease-in-out bg-white ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
                    <Navbar />
                    <main className="flex-1 min-h-0 flex flex-col p-6 overflow-hidden">
                        {children}
                    </main>
                </div>
            </div>

        </ThemeProvider>

    );
}