import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <div className="bottombar bg-white fixed bottom-0 border-solid border-t lg:border-0 border-gray-300 w-full left-0 lg:block lg:static">
      <ul className="flex items-center justify-evenly lg:justify-center text-stone-500 lg:mt-3 ">
        <Link
          href={"/"}
          className="hover:text-examys-600 px-1 md:px-6 md:hidden p-2"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="material-icons-outlined">home</span>
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href={"/courses"} className="hover:text-examys-600 px-1 md:px-6">
          <div className="flex flex-col justify-center items-center">
            <span className="material-icons-outlined">school</span>
            <span className="text-xs">Courses</span>
          </div>
        </Link>
        <Link
          href={"/test-series"}
          className="hover:text-examys-600 px-1 md:px-6"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="material-icons-outlined">description</span>
            <span className="text-xs">Test Series</span>
          </div>
        </Link>
        <Link
          href={"/test-pass-pro-plus"}
          className="hover:text-examys-600 px-1 md:px-6 md:block hidden"
        >
          <div className=" flex flex-col justify-center items-center">
            <span className="material-icons-outlined">workspace_premium</span>
            <span className="text-xs">Test Pass Pro+</span>
          </div>
        </Link>
        <Link
          href={"/examys-ai"}
          className="hover:text-examys-600 px-1 md:px-6 md:block"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="material-icons-outlined">auto_awesome</span>
            <span className="text-xs">Examys AI</span>
          </div>
        </Link>
        <Link href={"/inspire"} className="hover:text-examys-600 px-1 md:px-6">
          <div className="flex flex-col justify-center items-center">
            <span className="material-icons-outlined">tips_and_updates</span>
            <span className="text-xs">Examys Inspire</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Bottombar;
