"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import styles from "../styles";
import { newFeatures,featuresTwo,featuresThree } from "../constants";
import { NewFeatures,FeatureTwo, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
       <div className=" flex justify-center items-center flex-col pb-16"> <TypingText title="| About Us?" />
        <TitleText title={<>What we do?</>} /></div>
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
        className="flex-[0.95] flex justify-center items-center flex-col"
      >
        
        <div className="mt-[48px] flex flex-col justify-center gap-1">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
          <Link href="https://rzp.io/l/mahilabol">
          <button className=" mt-5 w-[200px] h-10 sm:text-sm ml-8  hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold border-[1px] border-black  rounded-full"><span className="flex justify-center items-center sm:gap-2 gap-3">  {<FaWallet />}  Make a donation</span></button>
          </Link>

        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          width={500}
          height={500}
          src="/one_v.jpg"
          alt="Women Helpline"
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
        <Image
          width={500}
          height={500}
          src="/img_001.jpg"
          alt="Awareness & Education"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex flex-col justify-center gap-1">
          {featuresTwo.map((feature) => (
            <FeatureTwo key={feature.title} {...feature} />
          ))}

          <Link href="https://rzp.io/l/mahilabol">
          <button className=" mt-5 w-[200px] h-10 sm:text-sm ml-8  hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold border-[1px] border-black  rounded-full"><span className="flex justify-center items-center sm:gap-2 gap-3">  {<FaWallet />}  Make a donation</span></button>
          </Link>

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
        <div className="mt-[48px] flex flex-col justify-center gap-1">
          {featuresThree.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
        <Link href="https://rzp.io/l/mahilabol">
          <button className=" mt-5 w-[200px] h-10 sm:text-sm ml-8  hover:text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold border-[1px] border-black  rounded-full"><span className="flex justify-center items-center sm:gap-2 gap-3">  {<FaWallet />}  Make a donation</span></button>
          </Link>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          height={500}
          width={500}
          src="/img_003.jpg"
          alt="Livlihood and Distress Aid"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    {/* Third feature ends */}
  </section>
);

export default WhatsNew;
