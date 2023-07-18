"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
const ContactWorld = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.25, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/contact-m.png"
          alt="map"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Get In Touch</>} textStyles="text-center" />
    </motion.div>
  </section>
);

export default ContactWorld;
