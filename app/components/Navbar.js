import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-white w-[95vw] lg:w-[90vw] fixed top-4 lg:top-10 right-[2.5vw] lg:right-[5vw] rounded-full p-3 lg:p-4 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 z-50">
      <div className="logo flex flex-col lg:flex-row gap-2 lg:gap-20 items-center w-full lg:w-auto">
        <img
          className="h-5 lg:h-6 lg:ml-16"
          loading="eager"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt="Linktree Logo"
        />

        <ul className="hidden lg:flex gap-2 text-sm">
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
      <div className="nav-buttons flex gap-2 lg:gap-4 w-full lg:w-auto justify-center">
        <button className="login bg-[#eff0ec] rounded-lg py-2 px-4 lg:py-4 lg:px-6 font-bold cursor-pointer text-sm lg:text-base flex-1 lg:flex-none">
          Login
        </button>
        <button className="Signupfree bg-[#1e2330] text-white py-2 px-4 lg:py-4 lg:px-6 font-bold rounded-full cursor-pointer text-sm lg:text-base flex-1 lg:flex-none">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
