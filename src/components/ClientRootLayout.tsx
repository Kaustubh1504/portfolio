"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded ? "ml-64" : "ml-16"
        }`}
      >
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
