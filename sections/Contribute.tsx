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
            <TypingText title="| Our Dream" textStyles="text-center" />

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal xl:text-[25px] text-[15px] text-center text-gray-900"
            >
              <span className="font-extrabold text-pink-700">In Mahilabol</span>
              Every change starts with a belief, we believe that all of us have
              the capacity and intent to make a change for society, but lack the
              strength of like-minded people. We invite you to be part of our
              social change champions and be the driving force for making a
              change.{" "}
              <span className="font-extrabold text-pink-700">
                We can all work to make a difference whether by way of a
                volunteer
              </span>{" "}
              time or whether by way of financial contribution. We are always on
              the look out for people who can contribute to the undermentioned,{" "}
              <span className="font-extrabold text-pink-700">
                Social Media outreach
              </span>{" "}
              – to spread the message on social media Women helpline advisors –
              to talk to women and assist them in regional language Partnership
              champions – to forge associations with other NGOs and Government
              bodies for ensuring women have an all-round solution Donation
              partners – to drive donors for contributing to our cause
              <span className="font-extrabold text-pink-700">
                If you feel
              </span>{" "}
              there is some other way in which you can contribute, please feel
              free to write to us and start a conversation.


              <span className="font-extrabold text-pink-700"> Partner With Us

empower@mahilabol.org</span>{" "}

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
          <h1 className=" font-bold text-4xl lg:pb-8 pb-4">Donate</h1>
          <p>
            A little contribution can impact a life. Whatever small be your
            contribution, we can make a change only if the financial
            contribution flows in, everyone has a phase in life, and we need
            your help in supporting people to stand up and be independent{" "}
          </p>
        </div>
        <div className=" bg-[#B5838D] xl:w-[700px] xl:h-[700px] lg:w-[500px] lg:h-[500px] sm:w-[380px]  w-[340px] h-[500px] flex flex-col justify-center items-center lg:p-16 p-4 text-white">
          <h1 className=" font-bold text-4xl lg:pb-8 pb-4">Volunteer</h1>
          <p>
            Together we can make a sustainable change. We look forward to
            like-minded individuals who are committed to making an impact in the
            society they live. Join hands with us, even if it is for a few days,
            and support the change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default contribute;
