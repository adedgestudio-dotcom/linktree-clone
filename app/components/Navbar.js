import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-white w-[90vw] fixed top-10 right-[5vw] rounded-full p-4 flex justify-between ">
      {/* absolute= “Float this element freely and pin it somewhere.” */}
      <div className="logo flex gap-20 items-center ">
        <img
          className="h-6 ml-16"
          loading="eager"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt=""
        ></img>

        <ul className="flex gap-2 text-sm">
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg  ">
            <Link href="/products">Products</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg ">
            <Link href="/templates">Templates</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg ">
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg ">
            <Link href="/learn">Learn</Link>
          </li>
          <li className="cursor-pointer hover:bg-[#eff0ec] font-medium py-3 px-4 rounded-lg ">
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons flex gap-4 ">
        <button className="login bg-[#eff0ec] rounded-lg py-4 px-6 font-bold cursor-pointer ">
          Login
        </button>
        <button className="Signupfree bg-[#1e2330] text-white py-4 px-6 font-bold  rounded-full cursor-pointer ">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
