"use client";

import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#eadbd3");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-300 pr-6"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-gray-800 ">
        <Link href="/#">
          <Image
            width={120}
            height={50}
            src="/logo.png"
            alt="mahilabol"
            className=" xl:w-44 lg:w-44 w-28 pl-5 lg:pl-10 h-auto"
          />
        </Link>
        <ul
          style={{ backgroundColotr: `${textColor}` }}
          className="hidden lg:flex"
        >
            <li className=" xl:text-base sm:text-sm p-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/#"> Home</Link>
            </li>
            <li className=" xl:text-base sm:text-sm p-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/get-to-know-us"> Get to know us</Link>
            </li>
            <li className=" xl:text-base sm:text-sm p-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/what-we-do"> What we do</Link>
            </li>
            <li className=" xl:text-base sm:text-sm p-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/contribute"> Contribute</Link>
            </li>
            <li className=" xl:text-base sm:text-sm p-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/contact"> Contact us</Link>
            </li>

            <Link href="https://rzp.io/l/mahilabol">
            <li  className=" lg:text-base sm:text-sm ml-8 px-6 py-4 hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold border-[1px] border-black  rounded-full">
               <span className="flex justify-center items-center sm:gap-2 gap-3">  {<FaWallet />}  Make a donation</span>
            </li></Link>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block pr-4 lg:hidden z-50">
          {nav ? (
            <AiOutlineClose size={35} style={{ color: "#ffff" }} />
          ) : (
            <AiOutlineMenu size={24} style={{ color: `$textColor` }} />
          )}
        </div>
        {/* mobile stars */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-[#c93179] text-center ease-in duration-300  z-20"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-[#c93179] text-center eas duration-300 "
          }
        >
          <ul className="">
            <li className=" p-4 text-white text-3xl hover:text-gray-200 transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/#"> Home</Link>
            </li>
            <li className=" p-4 text-white text-3xl hover:text-gray-200  transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/get-to-know-us"> Get to know us</Link>
            </li>
            <li className=" p-4 text-white text-3xl hover:text-gray-200  transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/what-we-do"> What we do</Link>
            </li>
            <li className=" p-4 text-white text-3xl hover:text-gray-200  transition-all ease-out hover:scale-110 hover:font-bold">
              <Link href="/contribute"> Contribute</Link>
            </li>
            <li className=" p-4 text-white text-4xl hover:text-gray-200 ">
              <Link href="/contact"> Contact us</Link>
            </li>
          </ul>
        </div>
        {/* mobile ends */}
      </div>
    </div>
  );
};

export default Navbar;
