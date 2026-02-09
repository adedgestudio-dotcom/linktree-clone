"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotatingText({ text, duration = 2000, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % text.length);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span className="inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={text[index]}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {text[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
