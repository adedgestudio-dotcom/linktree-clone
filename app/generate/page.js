"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

function GenerateContent() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  //   const [linktext, setlinktext] = useState("");
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");
  const [description, setDescription] = useState("");

  const linkInputRef = useRef(null);
  const linktextInputRef = useRef(null);
  const picInputRef = useRef(null);

  // Show login prompt if not authenticated
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#d5a334] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#d5a334] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md text-center">
          <h1 className="text-3xl font-bold text-[#d5a334] mb-4">
            Sign In Required
          </h1>
          <p className="text-gray-700 mb-6">
            You need to sign in with Google to create your linktree and manage
            your links.
          </p>
          <button
            onClick={() => signIn("google")}
            className="bg-[#d5a334] hover:bg-[#c6941f] text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const deleteLink = (index) => {
    // Don't allow deleting if only one link remains
    if (links.length === 1) {
      toast.warning("You must have at least one link!");
      return;
    }
    setLinks(links.filter((_, i) => i !== index));
  };

  const submitLinks = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        links: links,
        handle: handle,
        pic: pic,
        description: description,
        userEmail: session?.user?.email || null, // Save user email to track ownership
      });

      console.log("Submitting data:", raw);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const r = await fetch("/api/add", requestOptions);
      const result = await r.json();

      if (result.success) {
        toast.success(result.message || "Links created successfully!");
        // Wait a bit longer for MongoDB to finish saving
        setTimeout(() => {
          window.location.href = `/${encodeURIComponent(handle)}`;
        }, 2000);
      } else {
        toast.error(result.message || "Failed to create links");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating links: " + error.message);
    }
  };

  return (
    <div className="bg-[#d5a334] grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="form flex justify-center items-center flex-col px-6 sm:px-8 lg:px-14 py-8 lg:py-0 mt-[22vh] ">
        <div className="w-full max-w-2xl space-y-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Create your Links!
            </h1>
            <p className="text-white/80 text-sm sm:text-base">
              Build your personalized link collection
            </p>
          </div>

          <style jsx global>{`
            .Toastify__toast--success {
              background-color: white !important;
              color: #d5a334 !important;
            }
            .Toastify__toast--error {
              background-color: white !important;
              color: #c4841f !important;
            }
            .Toastify__toast--info {
              background-color: white !important;
              color: #d5a334 !important;
            }
            .Toastify__progress-bar--success {
              background-color: #d5a334 !important;
            }
            .Toastify__progress-bar--error {
              background-color: #c4841f !important;
            }
            .Toastify__progress-bar--info {
              background-color: #d5a334 !important;
            }
          `}</style>

          {/* Step 1: Claim your Handle */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 1: Claim your Handle
            </h2>
            <input
              value={handle || ""}
              onChange={(e) => {
                // Remove spaces and special characters, convert to lowercase
                const sanitized = e.target.value
                  .toLowerCase()
                  .replace(/\s+/g, "-") // Replace spaces with hyphens
                  .replace(/[^a-z0-9-_]/g, ""); // Only allow letters, numbers, hyphens, underscores
                sethandle(sanitized);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  linkInputRef.current?.focus();
                }
              }}
              type="text"
              placeholder="choose handle (e.g., sarah-profile)"
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
            />
            <textarea
              value={description || ""}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Add a short bio or description"
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Step 2: Add Links */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 2: Add Links
            </h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-3 items-start"
                  >
                    <input
                      ref={linktextInputRef}
                      value={item.linktext || ""}
                      onChange={(e) => {
                        handleChange(index, item.link, e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          linkInputRef.current?.focus();
                        }
                      }}
                      type="text"
                      placeholder="Enter link text"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
                    />
                    <input
                      ref={linkInputRef}
                      value={item.link || ""}
                      onChange={(e) => {
                        handleChange(index, e.target.value, item.linktext);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addLink(item.linktext, item.link, handle);
                        }
                      }}
                      type="text"
                      placeholder="Enter link"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
                    />
                    {links.length > 1 && (
                      <button
                        onClick={() => deleteLink(index)}
                        className="p-3 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg transition-all duration-200"
                        title="Delete this link"
                      >
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                );
              })}

            <button
              onClick={() => addLink()}
              className="w-fit px-6 py-3 mt-4 bg-white text-[#d5a334] font-bold text-base sm:text-lg rounded-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-2xl hover:shadow-xl tracking-wide cursor-pointer"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3: Add Picture and Finalize */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 3: Add Picture and Finalize
            </h2>
            <input
              ref={picInputRef}
              value={pic || ""}
              onChange={(e) => {
                setpic(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Add your create link function here
                  toast.info("Create Link functionality coming soon!");
                }
              }}
              type="text"
              placeholder="Enter link to your Picture"
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
            />
            <button
              disabled={pic == "" || handle == "" || links[0].linktext == ""}
              onClick={() => {
                submitLinks();
              }}
              className="disabled:bg-white/40 disabled:text-[#d5a334] disabled:cursor-not-allowed disabled:hover:scale-100 w-fit px-6 py-3 mt-4 bg-white text-[#d5a334] font-bold text-base sm:text-lg rounded-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-2xl hover:shadow-xl tracking-wide cursor-pointer"
            >
              Create your Link
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full h-screen items-center justify-center overflow-hidden  ">
        <img
          className="h-[130%] w-[130%] object-contain mt-[15vh] "
          src="https://linktr.ee/universal-login/assets/banner-signup-desktop-Dq7usIXX.webp"
          alt="generate"
        />
      </div>
      <ToastContainer />
    </div>
  );
}
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </div>
  );
}

export default function Generate() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#d5a334] flex items-center justify-center">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      }
    >
      <GenerateContent />
    </Suspense>
  );
}
