"use client";
import Image from "next/image";
import { TypingText } from "../components";

const Spreading = () => {
  return (
    <div className=" my-36  ">
      <div className=" sm:px-10 px-2  lg:pt-0  lg:pb-20 lg:justify-around lg:items-center   flex flex-col justify-between align-middle gap-4 min-h-full bg-primary-black  overflow-hidden">
        <Image
          src="/img_007.jpg"
          width={1200}
          height={1000}
          alt="hero"
          className="rounded-lg z-10 lg:w-[60] h-auto"
        />
      </div>
      <div className=" pt-10 lg:pt-12 2xl:px-[380px] lg:px-[180px] sm:px-20 sm:flex-col sm:text-center pb-16  px-8">

      <TypingText title="| Activities" textStyles="text-center" />
        <h2 className=" text-3xl font-extrabold text-pink-700">
  POSH Training at a school
        </h2>
       
        <p className=" text-justify text-xl">
          <br />
          <br />
          To someone who was struggling with unstable jobs, a job at a prestigious school in a tier-2 city in India was a blessing in disguise. Here unlike her normal job being a house help, Mira did not have to worry about being needlessly replaced. She could work there for years without worry as long as she did her work well. The working hours and conditions weren’t terrible, she only had to clean up after the children. 
          <br />
          <br />
          As with every job, this job had its negatives too. Mira’s job was good by itself but her co-workers were sometimes terrible. Some people sometimes behaved in inappropriate ways with her and other female staff. A few male staff commented on them and were rude when asked for help with physically demanding tasks. Most of the staff including Mira ignored this behavior. The school sometimes made them work for longer hours than normal or demanded them to work for a lesser wage than what was agreed upon.
          <br />
          <br />
          It was then that the mandatory PoSH training session by HRhelpdesk Trust was held at this school. The sessions led by Amarpreet Kaur were a revelation for the staff. A lot of behaviors that they considered normal but annoying and ignored, were offences that had legal provisions for prevention. The sessions were filled with the staff raising amazed questions about behaviors that could be considered offensive. 
          <br />
          <br />
          Another great benefit of this session was the raising of awareness among the staff members about their work rights and work rights in general.
          <br />
          <br />
          Self awareness is the best way to bring about change.
        
        </p>
        
      </div>
    </div>
  );
};

export default Spreading;
