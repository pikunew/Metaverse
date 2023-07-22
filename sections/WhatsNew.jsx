"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures,featuresTwo,featuresThree } from "../constants";
import { NewFeatures,FeatureTwo, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* first feature starts */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| About Us?" />
        <TitleText title={<>What we do?</>} />
        <div className="mt-[48px] flex  justify-center gap-1">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/one_v.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    {/* first feature ends */}
    {/* Second feature starts */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mt-24 flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/one_v.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex  justify-center gap-1">
          {featuresTwo.map((feature) => (
            <FeatureTwo key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
    {/* Second feature ends */}
    {/* Third feature starts */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mt-24 flex lg:flex-row flex-col-reverse gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex  justify-center gap-1">
          {featuresThree.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/one_v.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    {/* Third feature ends */}
  </section>
);

export default WhatsNew;
