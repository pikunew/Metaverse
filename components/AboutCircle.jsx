"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import React from 'react'

const AboutCircle = () => {
  return (
    
    <div className="bg-white ">
          <section className={`${styles.paddings} relative z-10 h-[120vh] md:h-[90vh]  `}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
              <TypingText title="| What Mahilabol Do" textStyles="text-center" />
              <TitleText
                title={<>What We are meant for</>}
                textStyles="text-center"
              />
    
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="relative  md:mt-0 flex justify-center text-center w-full h-full "
              >
                <Image
                  height={800}
                  width={1920}
                  src="/white-bg.png"
                  alt="map"
                  className="w-full h-full object-cover relative flex flex-col justify-center text-center"
                />
                <div className=" absolute flex flex-col justify-center text-center">
                  <motion.div
                    variants={fadeIn("up", "tween", 0.5, 1)}
                    className=" flex flex-col sm:flex-row gap-5 md:gap-24 xl:gap-32 pt-28 "
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-[#E5989B] xl:h-62 xl:w-62 md:h-40 md:w-40 h-36 w-36 lg:h-56 lg:w-56 rounded-full text-white flex flex-col justify-center text-center p-12">
                        <Image
                          width={834}
                          height={856}
                          src="/4.png"
                          alt="map"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center"
                        />
                      </div>
                      <p className="mt-8 font-bold text-xl">Women Helpline 
0124-4007444</p>
                    </div>
    
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-[#E5989B] xl:h-62 xl:w-62 md:h-40 md:w-40 h-36 w-36 lg:h-56 lg:w-56 rounded-full text-white flex flex-col justify-center text-center p-12">
                        <Image
                          width={834}
                          height={847}
                          src="/5.png"
                          alt="map"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center"
                        />
                      </div>
                      <p className="mt-8 font-bold text-xl">Awareness & Education</p>
                    </div>
     <div className="flex flex-col justify-center items-center">
                      <div className="bg-[#E5989B] xl:h-62 xl:w-62 md:h-40 md:w-40 h-36 w-36 lg:h-56 lg:w-56 rounded-full text-white flex flex-col justify-center text-center p-12">
                        <Image
                          width={765}
                          height={797}
                          src="/6.png"
                          alt="map"
                          className="w-full h-full  object-cover relative flex flex-col justify-center text-center"
                        />
                      </div>
                      <p className="mt-8 font-bold text-xl ">Livlihood and Distress Aid</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
    
    
    
    
  )
}

export default AboutCircle