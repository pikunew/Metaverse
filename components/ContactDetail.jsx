"use client"


import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '.';
import { fadeIn, staggerContainer } from '../utils/motion';

const ContactDetail = () => {
  return (
    <div className='bg-white '>
    
    <section className={`${styles.paddings} relative z-10  `}>
    

      

      <motion.div
        variants={fadeIn('up', 'tween', 0.25, 1)}
        className="relative  md:mt-0 flex  justify-center text-center w-full h-[550px] "
      >
        <img src="/white-bg.png" alt="map" className="w-full h-full object-cover relative flex flex-col justify-center text-center" />
            <div className=' absolute flex flex-col justify-center text-center'>


                <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className=' flex xl:gap-60 flex-col sm:flex-row gap-20 md:gap-14  pt-28 '>

                    <div className='flex flex-col justify-center '>
                        <div className='bg-[#E5989B] xl:h-28 xl:w-28  md:h-28 md:w-28 h-28 w-28 lg:h-28 lg:w-28 rounded-full text-white flex flex-col justify-center text-center p-12'>
                        
                        <img src="/phone.png" alt="map" className="w-full h-full object-cover relative flex flex-col justify-center text-center" />
                        </div>
                        <p className='mt-8 font-bold text-sm'>Phone <p className=' text-base'>+91 1234 123 123</p></p>
                    </div>
                    

                     <div className='flex flex-col'>
                        <div className='bg-[#E5989B] xl:h-28 xl:w-28 md:h-28 md:w-28 h-28 w-28 lg:h-28 lg:w-28 rounded-full text-white flex flex-col justify-center text-center p-12'>
                        
                        <img src="/email.png" alt="map" className="w-full h-full object-cover relative flex flex-col justify-center text-center" />
                        </div>
                        <p className='mt-8 font-bold text-sm'>Email <p className=' text-base'>info@mahilabol.org</p></p>
                    </div>

                    <div className='flex flex-col'>
                        <div className='bg-[#E5989B] xl:h-28 xl:w-28 md:h-28 md:w-28 h-28 w-28 lg:h-28 lg:w-28 rounded-full text-white flex flex-col justify-center text-center p-12'>
                        
                        <img src="/location.png" alt="map" className="w-full h-full  object-cover relative flex flex-col justify-center text-center" />
                        </div>
                        <p className='mt-8 font-bold text-sm'>Address <p className=' text-base'> Abc road, Delhi, India</p></p>
                    </div>


                </motion.div>
            </div>
      </motion.div>

    
    </section>

   </div>
  )
}

export default ContactDetail