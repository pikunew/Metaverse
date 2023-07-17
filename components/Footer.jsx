'use client';




import React from "react";
import styled from "styled-components";
import logo from "/public/logo.png";
import footer from "../utils/footer";
import Image from "next/image";
import {
   AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";


import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative z-10 bg-[#B5838D] border-t-1 border-grey-700` }
  >
    <nav className=" flex flex-row justify-between gap-12">
        <div className="flex items-center gap-4">
          <div className="logo">
            <Image src={logo} width={180} alt="logo" />
            
          </div>
          <div className="  relative">
            <input className="w-full pt-4 pr-3 pb-4 pl-3 bg-[#FFCDB2] border-t-1 border-grey-700" type="text" placeholder ="Subscribe here..." />
            <button className=" absolute right-8  top-1/2 transform -translate-y-[50%] bg-transparent cursor-pointer transition-all ease-in-out hover:text-white ">&#8594;</button>
          </div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex align-middle gap-4 text-2xl">
            
            <AiFillTwitterCircle className="pointer transition-all  ease-in-out hover:text-white"/>
            <AiFillInstagram className="pointer transition-all  ease-in-out hover:text-white"/>
            <BsDiscord className="pointer transition-all  ease-in-out hover:text-white" />
            <AiFillLinkedin className="pointer transition-all  ease-in-out hover:text-white "/>
          </div>
        </div>
        <div className="links">
        
        </div>
      </nav>
      <p className="rights">
        <a href="">©2023 Mahilabol. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
  </motion.footer>
);

export default Footer;
