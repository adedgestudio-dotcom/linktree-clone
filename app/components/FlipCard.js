"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FlipCard({
  imageSrc,
  alt,
  bgColor,
  textColor,
  borderRadius = "1.5rem",
}) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;

    if (!card || !inner) return;

    let timeoutId = null;

    // Check if screen is medium or larger (768px+)
    const checkScreenSize = () => {
      return window.innerWidth >= 768;
    };

    // Hover handlers for desktop (md+)
    const handleMouseEnter = () => {
      if (checkScreenSize()) {
        inner.style.transform = "rotateY(180deg)";
      }
    };

    const handleMouseLeave = () => {
      if (checkScreenSize()) {
        inner.style.transform = "rotateY(0deg)";
      }
    };

    // Click handler for mobile
    const handleClick = () => {
      if (!checkScreenSize()) {
        // Flip the card
        inner.style.transform = "rotateY(180deg)";

        // Clear any existing timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        // Flip back after 1 second
        timeoutId = setTimeout(() => {
          inner.style.transform = "rotateY(0deg)";
        }, 1000);
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("click", handleClick);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("click", handleClick);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flip-card-container w-[250px] h-[250px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={innerRef}
        className="flip-card-inner w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease-in-out",
          willChange: "transform",
        }}
      >
        <div
          className="flip-card-front absolute w-full h-full overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg) translateZ(1px)",
            borderRadius,
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={250}
            height={250}
            className="w-full h-full object-cover"
            quality={100}
          />
        </div>

        <div
          className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center gap-3 p-6 overflow-hidden"
          style={{
            backgroundColor: bgColor,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
            borderRadius,
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          <a
            href="/"
            className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/favicon.ico"
              alt="Linktree"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="font-bold text-xl" style={{ color: textColor }}>
              Linktree
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
