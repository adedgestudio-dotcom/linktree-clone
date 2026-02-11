import React from "react";

const generate = () => {
  return (
    <div className="bg-[#d5a334] grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="form flex justify-center items-center flex-col px-6 sm:px-8 lg:px-14 py-8 lg:py-0 mt-[15vh] ">
        <div className="w-full max-w-2xl space-y-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Create your Links!
            </h1>
            <p className="text-white/80 text-sm sm:text-base">
              Build your personalized link collection
            </p>
          </div>

          {/* Step 1: Claim your Handle */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 1: Claim your Handle
            </h2>
            <input
              type="text"
              placeholder="claim handle"
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Step 2: Add Links */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 2: Add Links
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter link text"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Enter link"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button className="w-fit px-6 py-3 bg-white text-[#d5a334] font-bold text-base sm:text-lg rounded-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-2xl hover:shadow-xl tracking-wide">
              Add Link
            </button>
          </div>

          {/* Step 3: Add Picture and Finalize */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Step 3: Add Picture and Finalize
            </h2>
            <input
              type="text"
              placeholder="Enter link to your Picture"
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
            />
            <button className="w-fit px-6 py-3 bg-white text-[#d5a334] font-bold text-base sm:text-lg rounded-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-2xl hover:shadow-xl tracking-wide">
              Create your BitLink
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
    </div>
  );
};

export default generate;
