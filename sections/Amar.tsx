"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn} from "../utils/motion";
import React, { useRef } from "react";
import Image from "next/image";
import hover3d from "../utils/motion";


const Amar = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <div className=" pt-24 bg-[#F8EDE7]" ref={hero}>
      <div className=" lg:flex-row  lg:pt-0 lg:pr-8 lg:pb-20 lg:pl-14 lg:justify-around lg:items-center lg:gap-2 lg:min-h-[90vh]  flex flex-col justify-between align-middle gap-6 min-h-full bg-primary-black  overflow-hidden">
        <div className=" p-4 rounded-lg bg-[#F8EDE7] border-[1px] border-black ">
          <Image
            src="/planet-09.png"
            width={800}
            height={600}
            alt="hero"
            style={{
              transform: imageHover.transform,
            }}
            className=" lg:w-[600px] lg:h-auto xl:w-[900px] rounded-lg z-10"
          />
        </div>

        <div className=" xl:w-[35vw] lg:w-[40vw] lg:pt-48 sm:px-16 sm:flex-col sm:text-center pb-16  px-6">
          {/* next section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} text-red-400 mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| About Amarpreet" textStyles="text-center" />

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal xl:text-[25px] text-[15px] text-center text-gray-900"
            >
             
              The trust is, formed by <span className="font-extrabold text-pink-700"> Amarpreet Kaur</span>, who has been working for enhancing the way women are treated at their workplace. Right from the year 2010, when she started educating women on their work rights, she has counseled, trained, and mentored many women on their Work Rights. Whether it be maternity-related matters,<span className="font-extrabold text-pink-700"> equality, employment, medical, hygiene, discrimination, or sexual harassment</span>, she has reached out to women in more than 13 states.{" "}
              <span className="font-extrabold text-pink-700">
              Her interviews have been aired on Indian Express by United Nations Women apart from many other occasions where her work has been featured.
              </span>{" "}
              Since 2010 Amarpreet has been a consultant to many Government bodies, NGOs, and Indian and Multinational corporations in building, stabilizing, and efficiently running the people's agenda. She is committed to enhancing awareness on the Prevention of Sexual Harassment of Women in the Workplace, and other factors that deter the workforce from being productive.
Amarpreet believes research forms an important part of any solution, by not only helping us understand an issue in greater detail but by also throwing up insights for long-lasting and high-impact initiatives.,{" "}
              <span className="font-extrabold text-pink-700">
              Amarpreet
              </span>{" "}
              – has been recognized as a Change Maker by Change.org in India and by Bill & Melinda Gates Foundation USA. She has run projects with the Government of India and the United Nations and is an author of a Book. She is an Alumnus of ISB, Hyderabad, and TISS, Mumbai. .


             
            </motion.p>

            <motion.img
              variants={fadeIn("up", "tween", 0.3, 1)}
              src="/arrow-down.svg"
              alt="arrow down"
              className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
          </motion.div>
          {/* next section end */}
        </div>
      </div>

      {/* second section starts */}
     
    </div>
  );
};

export default Amar;
