"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[570px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-[#c93179]">
          Amarpreet Kaur
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-gray-500">
          On a mission to make the voice of women heard
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-gray-700">
          “The trust is formed by Mrs. Amarpreet Kaur, who has been working for enhancing the way women are treated at their workplace. Right from the year 2010, when she started educating women on their work rights, she has counseled, trained, and mentored many women on their Work Rights. Whether it be maternity-related matters, equality, employment, medical, hygiene, discrimination, or sexual harassment, she has reached out to women across socioeconomic levels and across states, with the aim of making sure that their Voice is heard.

”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-auto h-auto min-h-[210px] object-cover rounded-[40px]"
        />
<Link href="/amarpreet">
        <motion.div
          
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[135px] h-[135px] object-contain"
          />
        </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
