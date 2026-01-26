import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-white w-[90vw] absolute top-10 right-[5vw] rounded-full p-4 flex justify-between">
      <div className="logo flex gap-20 items-center ">
        <img
          className="h-6 ml-16"
          loading="eager"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt=""></img>

        <ul className="flex gap-10">
          <li>products</li>
          <li>Templates</li>
          <li>Marketplace</li>
          <li>Learn</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="nav-buttons flex gap-4 ">
        <button className="login bg-[#eff0ec] rounded-lg py-4 px-6 font-bold ">Login</button>
        <button className="Signupfree bg-[#1e2330] text-white py-4 px-6 font-bold  rounded-full ">Sign up free</button>
      </div>
    </nav>
  );
}

export default Navbar
