"use client";

import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";
import Subscribe from "./Subscribe";




const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} sm:pt-20 align-bottom justify-end flex sm:h-1/3 flex-col h-[75vh] relative z-10 bg-[#B5838D] border-t-[1px] text-gray-900`}
  >
    <div className="flex flex-col lg:px-10 ">
      <nav className=" flex sm:flex-row  flex-col  justify-around lg:justify-evenly  gap-6">
        <div className="flex flex-col sm:w-[40vw] sm:mr-5 justify-center  sm:sm:items-start items-center gap-6">
         
          <div className="logo">
            <Image src={logo} width={170} alt="logo" className=" h-16 w-auto" />
            
          </div>
          {/* Subscribe button starts */}
          <Subscribe/>
          {/* subscribe button ends */}
          {/* Hidden Menu Starts */}
          <div className=" sm:hidden flex align-middle jus text-center gap-5  mt-8">
            <div className="flex flex-col">
              {/* Menu One Starts */}
              <h3 className=" font-bold text-xl text-gray-800 hover:text-white mb-6">
                Main Menu
              </h3>
              <nav>
                <ul className=" flex flex-col gap-4 text-gray-900 hover:text-white text-sm">
                  <li>
                    <Link href="/#">Home</Link>
                  </li>
                  <li>
                    <Link href="/get-to-know-us">Get to know us</Link>
                  </li>
                  <li>
                    <Link href="what-we-do">What we do</Link>
                  </li>
                  <li>
                    <Link href="/contribute">Contribute</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Menu One Ends */}
            <div className="flex flex-col">
              {/* Menu two Starts */}

              <h3 className=" font-bold text-xl text-gray-800 hover:text-white mb-6">
                Useful Links
              </h3>
              <nav>
                <ul className=" flex flex-col gap-4 text-gray-900 hover:text-white text-sm">
                  <li>
                    <Link href="https://rzp.io/l/mahilabol">
                      Make a donation
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-to-know-us"> Get to know us</Link>
                  </li>
                  <li>
                    <Link href="/what-we-do"> What we do</Link>
                  </li>
                  <li>
                    <Link href="/contribute"> Contribute</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Menu two End */}
          </div>
          {/* Hidden Menu Ends */}
          <div className=" flex flex-col justify-center sm:items-start items-center  sm:text-start text-center gap-5">
            <p className=" text-gray-800 hover:text-white text-sm">
              Making the voice of women heard.
            </p>
            <div className="flex align-middle gap-4 text-2xl">
              <Link href="https://twitter.com/amar_hrhelpdesk?lang=en">
                <AiFillTwitterCircle className="pointer transition-all text-gray-800 ease-in-out hover:text-white" />
              </Link>
              <Link href="https://www.instagram.com/hrhelpdesk/">
                <AiFillInstagram className="pointer transition-all text-gray-800 ease-in-out hover:text-white" />
              </Link>

              <Link href="https://www.facebook.com/MahilaBol/">
                <AiFillFacebook className="pointer transition-all text-gray-800 ease-in-out hover:text-white " />
              </Link>
              <Link href="https://www.youtube.com/@hrhelpdeskdotin/videos">
                <AiFillYoutube className="pointer transition-all text-gray-800 ease-in-out hover:text-white "></AiFillYoutube>
              </Link>
            </div>
          </div>
        </div>
        <div className=" sm:flex justify-between hidden  lg:gap-[5vw] gap-10">
          <div className="flex flex-col">
            {/* Menu One Starts */}
            <h3 className=" font-bold text-xl sm:text-2xl text-gray-800 hover:text-white mb-6">
              Main Menu
            </h3>
            <nav>
              <ul className=" flex flex-col gap-4 text-gray-900  sm:text-base  text-sm">
                <li className=" hover:text-white ">
                  <Link href="/#">Home</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="/get-to-know-us">Get to know us</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="what-we-do">What we do</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="/contribute">Contribute</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Menu One Ends */}
          <div className="flex flex-col">
            {/* Menu two Starts */}

            <h3 className=" font-bold text-xl sm:text-2xl text-gray-800 hover:text-white mb-6">
              Useful Links
            </h3>
            <nav>
              <ul className=" flex flex-col gap-4  text-gray-900  sm:text-base text-sm">
                <li className=" hover:text-white ">
                  <Link href="/refunds">Refunds</Link>
                </li>
                <li className=" hover:text-white ">
                  {" "}
                  <Link href="/ethical-standard">Ethical Standard.</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="/terms-of-service">Term of service</Link>
                </li>
                <li className=" hover:text-white ">
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Menu two End */}
        </div>
      </nav>

      <p className="flex justify-between align-middle  mt-8 py-8 px-0  border-t-[1px] border-gray-800">
        <a className="text-sm" href="https://www.hrhelpdesk.in/">
          ©2023 HRhelpdesk Trust. All rights reserved.
        </a>
      </p>
    </div>
  </motion.footer>
);

export default Footer;