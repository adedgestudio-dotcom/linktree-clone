"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage({ data, handle }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    // window.location.origin gets the base URL (e.g., "http://localhost:3000")
    // We append the handle to create the full profile URL
    const url = `${window.location.origin}/${handle}`;

    // navigator.clipboard.writeText() copies the URL to the user's clipboard
    // This allows users to paste the link anywhere (social media, messages, etc.)
    navigator.clipboard.writeText(url);

    // Show "Copied!" feedback for 2 seconds
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5a334] via-[#e8b84d] to-[#d5a334] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4">
            {data.pic && (
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={data.pic}
                  alt={data.handle}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                @{data.handle}
              </h1>
              {data.description && (
                <p className="text-white/90 text-base md:text-lg text-center max-w-md px-4">
                  {data.description}
                </p>
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full flex flex-col gap-4 md:gap-5 px-4 md:px-0">
            {data.links &&
              data.links.slice(0, 5).map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-white/90 text-[#d5a334] font-bold text-base md:text-lg py-4 md:py-5 px-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 text-center"
                >
                  {item.linktext}
                </a>
              ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-white/80 text-sm text-center">
            <p>Powered by Linktree Clone</p>
          </div>
        </div>
      </div>

      {/* Floating Copy Button */}
      <button
        onClick={copyLink}
        className="fixed bottom-8 right-8 bg-white text-[#d5a334] px-6 py-3 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-bold flex items-center gap-2"
      >
        {copied ? (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Share Link
          </>
        )}
      </button>
    </div>
  );
}
