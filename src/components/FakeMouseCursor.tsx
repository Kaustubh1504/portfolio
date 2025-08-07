// components/FakeMouseCursor.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FakeMouseCursor = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Delay to simulate "on page load" effect
    const timer = setTimeout(() => setStart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ x: "100vw", y: "40vh", opacity: 1 }}
      animate={start ? { x: "10vw", y: "60vh" } : {}}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      className="w-4 h-4 rounded-full fixed z-50 pointer-events-none"
    />
  );
};

export default FakeMouseCursor;
