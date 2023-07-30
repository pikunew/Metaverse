"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import React from 'react'

const Chart = () => {
  return (
    
    <div className="bg-[#f8ede7]  sm:h-[90vh]">
          <section className= "relative z-10 h-[45vh]   ">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
              <TypingText title="| Amarpreet's Journey" textStyles="text-center" />
              <TitleText
                title={<>How the Journey Been</>}
                textStyles="text-center"
              />
    
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="relative  md:mt-0 flex justify-center text-center w-full h-full "
              >
                <Image
                  height={800}
                  width={1920}
                  src="/chart.png"
                  alt="chart"
                  className="w-full h-full object-cover relative flex flex-col justify-center text-center"
                />
               
              </motion.div>
            </motion.div>
          </section>
        </div>
    
    
    
    
  )
}

export default Chart