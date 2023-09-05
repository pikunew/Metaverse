"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Link from "next/link";

const AboutCard = () => {
  return (
    <section className={`${styles.paddings}`}>
      <div className=" h-[100%] sm:h-[70vh] flex justify-center items-center text-center">
        <div className="flex gap-8 justify-center items-center flex-col md:flex-row  sm:gap-3 md:gap-5">
          <div className=" h-[50vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[65vh] xl:w-[28vw] lg:h-[65vh] lg:w-[30vw] bg-[#fff0e8] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
            <Image
              width={150}
              height={200}
              src="/1.svg"
              alt="lady-shape-one"
              className=" w-full h-full object-contain  absolute"
            />

            <div className="absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center">
              <h1 className=" text-2xl  font-bold ">
                Women Helpline
                <br />
                0124-4007444
              </h1>
              <p className=" mt-4 text-justify  text-sm font-medium  md:text-base">
                The dedicated women helpline Guides women and girls on how to
                handle the situation they seek assistance on. Further, how to
                take the next course of action, either by going to police or
                going to a relevant NGO in their location for solutions
              </p>

              <div className="z-10 mt-2">
                <Link href="/get-to-know-us">
                  <button
                    type="button"
                    className=" hover:bg-[#f8ede7]  hover:border-white transition-all ease-out hover:scale-110 hover:font-bold  border-[1px] px-8 py-4 text-sm mt-4 border-gray-900 font-semibold"
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" h-[50vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[65vh] xl:w-[28vw] lg:h-[65vh] lg:w-[30vw] bg-[#E5989B] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
            <Image
              width={150}
              height={200}
              src="/2.png"
              alt="lady-shape-two"
              className=" w-full h-full object-contain  absolute  opacity-20"
            />

            <div className="absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center">
              <h1 className=" text-3xl  font-bold ">Awareness & Education</h1>
              <p className=" mt-4 text-justify  text-sm font-medium  md:text-base text-white">
                Make the voice of women and girls heard and spread awareness
                about their rightful place in the society. We educate women and
                girls on their legal rights, employment options, health matters,
                skill options and provide them with a platform to voice their
                views and opinions
              </p>

              <div className="z-10 mt-2">
                <Link href="/what-we-do">
                  <button
                    type="button"
                    className="hover:bg-[#E5989B] hover:text-white hover:border-white transition-all ease-out hover:scale-110 hover:font-bold  border-[1px] px-8 py-4 text-sm mt-4 border-white font-semibold text-white"
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" h-[50vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[65vh] xl:w-[28vw] lg:h-[65vh] lg:w-[30vw] bg-[#6D6875] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
            <Image
              width={150}
              height={200}
              src="/3.png"
              alt="lady-shape-three"
              className=" w-full h-full object-contain  absolute  opacity-10"
            />

            <div className="absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center">
              <h1 className=" text-3xl  font-bold text-white">
                Livlihood and Distress Aid
              </h1>
              <p className=" mt-4 text-justify  text-sm font-medium  md:text-base text-white">
                Provide material support when women and girls are in need of
                financial or emotional assistance .
              </p>

              <div className="z-10 mt-20">
                <Link href="/what-we-do">
                  <button
                    type="button"
                    className="hover:bg-[#6D6875] hover:text-white hover:border-white transition-all ease-out hover:scale-110 hover:font-bold  border-[1px] px-8 py-4 font-semibold text-sm mt-4 border-white text-white"
                  >
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
