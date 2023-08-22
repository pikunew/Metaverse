"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import React from 'react'

const Chart = () => {
  return (
    
    <div className="bg-[#f8ede7] pb-8 ">
          <section className= "relative z-10    ">
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
    
              
            </motion.div>
          </section>
        </div>
    
    
    
    
  )
}

export default Chart