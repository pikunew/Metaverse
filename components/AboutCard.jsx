"use client"

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const AboutCard = () => {
  return (
    <section className={`${styles.paddings}`} >

        

        <div className=" h-[100%] sm:h-[70vh] flex justify-center items-center text-center">
                <div className="flex gap-8 justify-center items-center flex-col md:flex-row  sm:gap-3 md:gap-5">

                    <div className=" h-[38vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[62vh] xl:w-[28vw] lg:h-[52vh] lg:w-[30vw] bg-[#fff0e8] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
                        <img
                            src="/1.svg"
                            alt="lady-shape-one"
                            className=" w-full h-full object-contain  absolute"
            
                        />
                    
                        <div className ='absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center'>
                            <h1 className=' text-3xl  font-bold ' >One</h1>
                            <p className=' mt-4 text-justify  text-sm font-medium  md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic ipsum sequi ullam, saepe, modi minus quidem velit voluptatibus aperiam excepturi recusandae assumenda quisquam. Commodi, in? Eum quos commodi molestias.</p>

                            <div className='z-10 mt-2'>
                                <button type='button'  className='border-[1px] px-8 py-4 text-sm mt-4 border-gray-900 font-semibold'>Know More</button>
                            </div>

                        </div>
                    
                        



                    </div>

                    <div className=" h-[38vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[62vh] xl:w-[28vw] lg:h-[52vh] lg:w-[30vw] bg-[#E5989B] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
                        <img
                            src="/2.png"
                            alt="lady-shape-two"
                            className=" w-full h-full object-contain  absolute  opacity-60"
            
                        />
                    
                    <div className ='absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center'>
                            <h1 className=' text-3xl  font-bold ' >Two</h1>
                            <p className=' mt-4 text-justify  text-sm font-medium  md:text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic ipsum sequi ullam, saepe, modi minus quidem velit voluptatibus aperiam excepturi recusandae assumenda quisquam. Commodi, in? Eum quos commodi molestias.</p>

                            <div className='z-10 mt-2'>
                                <button type='button'  className='border-[1px] px-8 py-4 text-sm mt-4 border-white font-semibold text-white'>Know More</button>
                            </div>

                        </div>

                        
                    
                    </div>


                    <div className=" h-[38vh] w-[76vw] sm:h-[54vh] sm:w-[30vw] xl:h-[62vh] xl:w-[28vw] lg:h-[52vh] lg:w-[30vw] bg-[#6D6875] border-[1px] border-gray-600 rounded-md bg-lady relative flex  flex-col  justify-center  ">
                        <img
                            src="/3.png"
                            alt="lady-shape-three"
                            className=" w-full h-full object-contain  absolute  opacity-50"
            
                        />
                    
                    <div className ='absolute px-8 sm:px-6 flex  flex-col align-middle text-center justify-center'>
                            <h1 className=' text-3xl  font-bold ' >Three</h1>
                            <p className=' mt-4 text-justify  text-sm font-medium  md:text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic ipsum sequi ullam, saepe, modi minus quidem velit voluptatibus aperiam excepturi recusandae assumenda quisquam. Commodi, in? Eum quos commodi molestias.</p>

                            <div className='z-10 mt-2'>
                                <button type='button'  className='border-[1px] px-8 py-4 font-semibold text-sm mt-4 border-white text-white'>Know More</button>
                            </div>

                        </div>
                    
                    </div>




                    
                
                
                </div>
        </div>
    </section>
  )


}

export default AboutCard