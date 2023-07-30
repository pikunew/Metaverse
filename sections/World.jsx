"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Places we have reached" textStyles="text-center" />
      <TitleText
        title={
          <>
            Places where we have reached women on the ground to contribute to providing dignified and equal work right for women

          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-90vh justify-center "
      >
        <img src="/whats-new.png" alt="map" className=" xl:w-[700px] sm:w-[500px] h-auto object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
