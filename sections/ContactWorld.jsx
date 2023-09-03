"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";



const ContactWorld = () => (
  <section className= {`${styles.paddings} h-[130vh] relative `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.25, 1)}
        className="relative mt-[68px] flex w-full h-[15vh] md:h-[400px]"
      >
        <img
          src="/contact-m.png"
          alt="map"
          className="w-full md:h-full h-full md:object-cover object-contain  pr-0"
        />
      </motion.div>
      <div className=" mt-8">
      <TypingText title="| Feel Free to " textStyles="text-center" />
      </div>
      <TitleText title={<>Get In Touch</>} textStyles="text-center" />
    </motion.div>

    {/* New added Section */}

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative  md:mt-0 flex justify-center text-center w-full h-full "
      >
        <Image
          height={800}
          width={1920}
          src="/white-bg.png"
          alt="map"
          className="sm:w-full sm:h-full h-[50vh]  relative flex flex-col justify-center text-center"
        />
        <div className=" absolute flex flex-col justify-center text-center">
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className=" flex flex-col sm:flex-row gap-28 md:gap-28 lg:gap-52 xl:gap-60 sm:pt-20 pt-12 "
          >
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#E5989B] h-32 w-32 rounded-full text-white flex flex-col justify-center text-center p-12">
                <Image
                  width={512}
                  height={512}
                  src="/phone.png"
                  alt="map"
                  className="w-full h-full   relative flex flex-col justify-center items-center"
                />
              </div>
              <p className="mt-8 font-bold text-base">0124 4007444
</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#E5989B] h-32 w-32 rounded-full text-white flex flex-col justify-center text-center p-12">
                <Image
                  width={834}
                  height={847}
                  src="/email.png"
                  alt="map"
                  className="w-full h-full object-cover relative flex flex-col justify-center text-center"
                />
              </div>
              <p className="mt-8 font-bold text-base">empower@mahilabol.org</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#E5989B] h-32 w-32 rounded-full text-white flex flex-col justify-center text-center p-12">
                <Image
                  width={765}
                  height={797}
                  src="/location.png"
                  alt="map"
                  className="w-full h-full  object-cover relative flex flex-col justify-center text-center"
                />
              </div>
              <p className="mt-8 font-bold text-base">Lajpat Nagar 3, New Delhi-110024
 , India</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

    {/* New Added Ends */}




  </section>
);

export default ContactWorld;
