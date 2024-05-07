import Image from "next/image";
import React from "react";
import Bottombar from "./Bottombar";

const Navbar = () => {
  return (
    <div className="shadow px-4 py-2 fixed top-0 bg-white w-full z-10">
      <div className="mx-auto flex items-center gap-3">
        <Image
          alt="Examys Logo"
          src={"images/Examys_Logo.svg"}
          width={90}
          height={90}
          priority={"low"}
          className="size-12 md:size-14 lg:size-20 rounded-[20%]"
        ></Image>
        <div className="flex flex-col grow ">
          <div className="flex justify-center">
            <div className="relative flex items-center">
              <span className="material-icons-outlined absolute left-1 text-gray-500">
                search
              </span>
              <input
                type="search"
                className="default-border input icon-input w-full max-w-xs"
                placeholder="Search"
              />
            </div>
            <ul className="lg:flex items-center justify-center hidden *:px-2 text-stone-400 ">
              <li className="hover:text-stone-900">Exam list</li>
              <li className="hover:text-stone-900">Refer & Earn</li>
              <li className="hover:text-stone-900">Examist First</li>
              <li className="hover:text-stone-900">Coupon</li>
              <li className="hover:text-stone-900">Download App</li>
            </ul>
          </div>
          <Bottombar></Bottombar>
        </div>
        {/* <div className="sidebar  fixed top-0 h-dvh w-10/12 bg-red-500"></div> */}
        {/* 2 icons needed */}

        <div className="hidden lg:flex h-full">
          <div className="default-border px-2 py-1 rounded-md flex items-center">
            <span className="material-icons-outlined">translate</span>
            <select name="lang" defaultValue={"eng"} id="lang">
              <option value="eng">English</option>
              <option value="hin">Hindi</option>
            </select>
          </div>
        </div>
        <button className="bg-examys-600 text-white hover:bg-examys-500 px-4 ml-1 py-1 rounded-md">
          Login
        </button>
        <span className="lg:hidden flex items-center">
          <span className="material-icons-outlined ">menu</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
