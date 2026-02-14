"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-white w-[95vw] md:w-[90vw] fixed top-4 md:top-10 right-[2.5vw] md:right-[5vw] rounded-full p-3 md:p-4 flex flex-row justify-between items-center z-50">
      <div className="logo flex flex-row gap-2 md:gap-20 items-center  ">
        <img
          className="h-5 md:h-6 md:ml-12 hidden md:block"
          loading="eager"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt="Linktree Logo"
        />
        <img
          className="h-6 w-6 block md:hidden ml-6"
          loading="eager"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b48ad59add9f2777bb76f_download-2.svg"
          alt="Linktree Tree Logo"
        />

        <ul className="hidden md:flex gap-2 text-sm">
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
            <Link href="/products">Products</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
            <Link href="/templates">Templates</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
            <Link href="/learn">Learn</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Nav Buttons - Always visible */}
        <button className="login bg-[#eff0ec] rounded-lg py-3 px-5 md:py-4 md:px-6 font-bold cursor-pointer text-sm md:text-base whitespace-nowrap">
          Login
        </button>
        <button className="Signupfree bg-[#1e2330] text-white py-3 px-5 md:py-4 md:px-6 font-bold rounded-full cursor-pointer text-sm md:text-base whitespace-nowrap">
          Sign up free
        </button>

        {/* Hamburger Menu - Mobile Only */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-[#1e2330] transition-all ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-[#1e2330] transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-[#1e2330] transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-lg p-6 md:hidden">
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
              <Link href="/templates" onClick={() => setIsMenuOpen(false)}>
                Templates
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
              <Link href="/marketplace" onClick={() => setIsMenuOpen(false)}>
                Marketplace
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
              <Link href="/learn" onClick={() => setIsMenuOpen(false)}>
                Learn
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg">
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
