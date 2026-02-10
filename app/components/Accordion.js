"use client";
import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#5a0a1a] text-white px-8 py-6 rounded-3xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-lg md:text-xl font-semibold pr-4">
            {question}
          </span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-[#78001650]">
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
