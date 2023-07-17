"use client";

import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} flex space py-8 relative `}
    >
      <div className="fixed left-0 top-0 w-full z-20 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-gray-800 ">
          <Link href="/home">
            <img
              src="/logo.png"
              alt="mahilabol"
              className=" xl:w-44 lg:w-44 w-32 h-auto"
            />
          </Link>
          <ul className="hidden sm:flex">
            <li className="p-4">
              <Link href="http://localhost:3000/"> Home</Link>
            </li>
            <li className="p-4">
              <Link href="/get-to-know-us"> Get to know us</Link>
            </li>
            <li className="p-4">
              <Link href="/what-we-do"> What we do</Link>
            </li>
            <li className="p-4">
              <Link href="#/"> Contribute</Link>
            </li>
            <li className="p-4">
              <Link href="/contact"> Contact us</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="block sm:hidden z-20">
            <AiOutlineMenu size={20} />
          </div>
          {/* Mobile Menu */}
          {/* <div className='sm:hidden absolute top-0 left-0 right-0 buttom-0 flex justify-center item-center w-full h-screen bg-pink-300 text-center ease-in duration-300'>
              <ul>
                  <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/home'> Home</Link>
                  </li>
                  <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/get-to-know us'> Get to know us</Link>
                  </li>
                  <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/what-we-do'> What we do</Link>
                  </li>
                  <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contribute'> Contribute</Link>
                  </li>
                  <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact-us'> Contact us</Link>
                  </li>
              </ul>
          </div> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
