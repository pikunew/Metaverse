"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} text-red-400 mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Mahilabol" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-900"
      >
        <span className="font-extrabold text-pink-700">Dignified</span>  and <span className="font-extrabold text-pink-700">Equal Work Rights for Women</span>  is an aspiration we want to make a reality, we believe that in order to bring about a sustainable change in our society, we need to focus on dignity, equality, and the workplace. Help us spread the message and be the change
{" "}
        
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
