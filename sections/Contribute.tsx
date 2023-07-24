"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import React, { useRef } from "react";
import Image from "next/image";
import hover3d from "../utils/motion";
import Link from "next/link";

const contribute = () => {
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
                src="/planet-01.png"
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
                <TypingText title="| Contribute" textStyles="text-center" />

                <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="mt-[8px] font-normal xl:text-[32px] text-[20px] text-center text-gray-900"
                >
                <span className="font-extrabold text-pink-700">Mahilabol</span> is
                a new thing in the future, where you can enjoy the virtual world
                by feeling like it's really real, you can feel what you feel in
                this metaverse world, because this is really the{" "}
                <span className="font-extrabold text-pink-700">
                    madness of the metaverse
                </span>{" "}
                of today, using only{" "}
                <span className="font-extrabold text-pink-700">VR</span> devices
                you can easily explore the metaverse world you want, turn your
                dreams into reality. Let's{" "}
                <span className="font-extrabold text-pink-700">explore</span> the
                madness of the metaverse by scrolling down
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
        <div className="flex sm:flex-row flex-col justify-center items-center gap-8 lg:gap-14 py-12 ">
            <div className=" bg-[#6D6875] xl:w-[700px] xl:h-[700px] lg:w-[500px] lg:h-[500px] sm:w-[380px]  w-[340px] h-[500px] flex flex-col justify-center items-center lg:p-16 p-4 text-white">
                <h1 className=" font-bold text-4xl lg:pb-8 pb-4">Section One</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero rem eligendi quos culpa in, incidunt ad nulla alias rerum ab distinctio quasi itaque! Sit consectetur minima nesciunt voluptate soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in praesentium, provident dolorem ipsa, libero sequi nulla modi reprehenderit sint molestias repellendus possimus id alias molestiae maxime a nobis et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div className=" bg-[#B5838D] xl:w-[700px] xl:h-[700px] lg:w-[500px] lg:h-[500px] sm:w-[380px]  w-[340px] h-[500px] flex flex-col justify-center items-center lg:p-16 p-4 text-white">
            <h1 className=" font-bold text-4xl lg:pb-8 pb-4">Section Two</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero rem eligendi quos culpa in, incidunt ad nulla alias rerum ab distinctio quasi itaque! Sit consectetur minima nesciunt voluptate soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in praesentium, provident dolorem ipsa, libero sequi nulla modi reprehenderit sint molestias repellendus possimus id alias molestiae maxime a nobis et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
        </div>
    </div>
  );
};

export default contribute;
