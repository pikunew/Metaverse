"use client";

import { motion } from "framer-motion";

import styles from "../../../styles";

import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";
import { StoriesStats } from "../../../sections";

const StoryOne = () => (
  // hero
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        
        <img
          src="/stories_1.jpg"
          alt="What-we-do"
          className=" w-[300px]  sm:h-[650px] h-[250px] object-cover  z-10 relative"
        />

        
      </motion.div>
    </motion.div>
    <StoriesStats/>
  </section>
  // body
 
);

export default StoryOne;
