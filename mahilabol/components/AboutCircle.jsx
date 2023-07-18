"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const AboutCircle = () => {
  return (
   
      <div className="relative h-[90vh] flex flex-col justify-center text-center">
      
          <Image
              fill
              objectFit="cover"
              src="/white-bg.png"
              alt="White feather background"
            />

            
            {/*destop view  */}
           <div className=" md:flex-row hidden sm:flex  justify-center xl:gap-28 md:gap-16">
              {/* Fucntion One of Mahilabol */}
              <div>
                  <div className="relative flex flex-col justify-center text-center xl:h-[280px] xl:w-[280px] md:h-[180] md:w-[180px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/4.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-8">Function One</h3>
              </div>

              {/* Fucntion Two of Mahilabol */}
              <div>
                  <div className="relative flex flex-col justify-center text-center xl:h-[280px] xl:w-[280px] md:h-[180] md:w-[180px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/5.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-8">Function One</h3>
              </div>

              {/* Function Three of Mahilabol */}
              <div>
                  <div className="relative flex flex-col justify-center text-center xl:h-[280px] xl:w-[280px] md:h-[180] md:w-[180px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/6.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-8">Function One</h3>
              </div>
          </div>
          {/* Desktop View Ends */}

          {/* Mobile View Start */}
          <div className=" md:flex-row flex flex-col sm:hidden text-center justify-center xl:gap-28 md:gap-16">
              {/* Fucntion One of Mahilabol */}
              <div className="flex justify-center mt-6">
                <div className="flex flex-col">
                  <div className="relative flex flex-col justify-center text-center h-[140] w-[140px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/4.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-4">Function One</h3>
                </div>
              </div>

              {/* Fucntion Two of Mahilabol */}
              <div className="flex justify-center mt-6">
                <div className="flex flex-col">
                  <div className="relative flex flex-col justify-center text-center h-[140] w-[140px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/5.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-4">Function One</h3>
                </div>
              </div>

              {/* Function Three of Mahilabol */}
              <div className="flex justify-center mt-6">
                <div className="flex flex-col">
                  <div className="relative flex flex-col justify-center text-center h-[140] w-[140px] rounded-full bg-[#e5989b] ">
                        <Image
                          width={100}
                          height={100}
                          src="/6.png"
                          alt="Mahilabol funtion One"
                          className="w-full h-full object-cover relative flex flex-col justify-center text-center p-10"
                        />
                        

                  </div>
                  <h3 className=" relative mt-4">Function One</h3>
                </div>
              </div>
          </div>
          {/* Mobile View Ends */}
      </div>
    
  );
};

export default AboutCircle;
