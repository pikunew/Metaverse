"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Some of the Activities</>} textStyles="text-center" />
    {/* story one start */}
        <div className=" mt-12 flex flex-col lg:flex-row lg:gap-6 gap-4  justify-center align-middle items-center">
          <Image
            width={512}
            height={512}
            src="/planet-03.jpg"
            alt="map"
            className=" rounded-xl"
          />
          <div>
            <Link href="/tea_garden">
            <div className="flex flex-col justify-center items-center align-middle">
              <h2 className="  w-[400px] align-middle text-center sm:text-2xl text-xl font-bold">Training in the tea plantation of Assam</h2>
              <div className=" text-sm ml-8 text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold ">
                <span className="flex justify-center text-center items-center">
                  Click to Know more
                </span>
              </div>
            </div>  
            </Link>
          </div>
        </div>
  {/* story one end */}

  {/* story two start */}
  <div className=" mt-12 flex flex-col lg:flex-row lg:gap-6 gap-4  justify-center align-middle items-center">
          <Image
            width={512}
            height={512}
            src="/img_006.jpg"
            alt="map"
            className=" rounded-xl"
          />
          <div>
            <Link href="/wazirabad_food_essentials">
            <div className="flex flex-col justify-center items-center align-middle">
              <h2 className=" align-middle text-center sm:text-2xl text-xl font-bold w-[400px] ">Food Distribution during Covid</h2>
              <div className=" text-sm ml-8 text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold ">
                <span className="flex justify-center text-center items-center">
                  Click to Know more
                </span>
              </div>
            </div>  
            </Link>
          </div>
        </div>
        {/* story two ends */}
        {/* story three starts */}
        <div className=" mt-12 flex flex-col lg:flex-row lg:gap-6 gap-4  justify-center align-middle items-center">
          <Image
            width={512}
            height={512}
            src="/img_007.jpg"
            alt="map"
            className=" rounded-xl"
          />
          <div>
            <Link href="/training_school">
            <div className="flex flex-col justify-center items-center align-middle">
              <h2 className=" align-middle text-center sm:text-2xl text-xl font-bold w-[400px] ">Training at School</h2>
              <div className=" text-sm ml-8 text-[#c93179] transition-all ease-out hover:scale-110 hover:font-bold ">
                <span className="flex justify-center text-center items-center">
                  Click to Know more
                </span>
              </div>
            </div>  
            </Link>
          </div>
        </div>
        {/* story three ends */}
        {/* {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))} */}
      
    </motion.div>
  </section>
);

export default Insights;
