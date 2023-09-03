"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn} from "../utils/motion";
import React, { useRef } from "react";
import Image from "next/image";
import hover3d from "../utils/motion";


const Hero3 = () => {
  const hero = useRef(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <div className=" pt-24 bg-[#F8EDE7]" ref={hero}>
      <div className="   lg:pt-0  lg:pb-20 lg:justify-around lg:items-center   flex flex-col justify-between align-middle gap-4 min-h-full bg-primary-black  overflow-hidden">
        <div className=" p-4 rounded-lg bg-[#F8EDE7] border-[1px] border-black ">
          <Image
            src="/planet-03.jpg"
            width={1200}
            height={1000}
            alt="hero"
            style={{
              transform: imageHover.transform,
            }}
            className="rounded-lg z-10"
          />
        </div>

        <div className="  lg:pt-12 sm:px-16 sm:flex-col sm:text-center pb-16  px-6">
          {/* next section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} text-red-400 mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Our Dream" textStyles="text-center" />

            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="mt-[8px] font-normal xl:text-[25px] text-[15px] text-center text-gray-900"
            >
              <span className="font-extrabold text-pink-700">
                POSH Training in the Tea Gardens of Assam
              </span>
              <br />
              <br />
              <p className=" text-justify">
                The quintessential Indian experience that people of all ages can
                relate to is having a lazy cup of tea early morning with a
                biscuit or a rusk; an amazing way to start the day. The tea that
                most Indians enjoy is made by the hard work of the tea garden
                workers of Assam, who pluck fresh tea leaves for further
                processing and later selling.
                <br />
                <br />
                Radha was one of those tea garden workers in Assam. She had no
                particular inclination nor dislike towards the job but was doing
                it because it was among the only unskilled work she could
                perform in that region.
                <br />
                <br />
                Radha was the sole breadwinner of her household. Her husband was
                a drunkard who stole her money for drinking and abused her
                regularly. She took care of her 3 children and managed the
                household all by herself.
                <br />
                <br />
                Every morning, Radha would go to the tea plantations to pick
                leaves. She would have to work tirelessly all day without any
                rest. Most of the days she took her baby with her as well. There
                was no one at home to watch the kids. So she let the child sleep
                in some shade, as was done by most women who worked there.
                Sometimes they gave the babies some tincture to ensure they
                would stay asleep the entire time. Radha's heart would ache from
                worry as there were insects, snakes and other animals nearby.
                All she could do was keep the child in sight and hope for the
                best.
                <br />
                <br />
                The long hours she stood in the fields, under harsh weather,
                were not the toughest part of her job. The toughest part of the
                job was dealing with the managers. The managers were known for
                being fickle with salaries. They were also foul-tempered and
                would use foul language, shove or even hit the workers. Under
                the threat of losing their jobs, the workers, including Radha
                stayed silent.
                <br />
                <br />
                It was then that a PoSH training session, conducted by
                HRhelpdesk Trust, took place. The session led by Amarpreet Kaur
                was eye-opening to the workers. It surprised them to know the
                provisions and rights they had for the Prevention of Sexual
                Harassment and to have a proper safe work environment. They
                didn't realize that they could have childcare facilities, fixed
                salaries, breaks when necessary and most importantly, provisions
                to prevent abuse and harassment.
                <br />
                <br />
                The women who worked there were surprised to know that the day
                to day violence and exploitation they faced were against the
                law. To them, it was merely a way of life. As surprised as they
                were, the women sadly stated that the rights and provisions
                would only ever be a fantasy. It may exist but it might never be
                put into action, they said.
                <br />
                <br />
                For the lowest strata of society to enjoy the same benefits and
                rights that the rest of the world had, provisions have to - not
                only be made but also be put into practice. Many laws and rights
                exist merely on paper for them, a distant dream. Let's work
                together to make a change at the grassroots level. To create a
                world that is safe and equal for everyone, but putting the laws
                in to practice.
                <br />
                <br />
              </p>
            </motion.p>
          </motion.div>
          {/* next section end */}
        </div>
      </div>

     
    </div>
  );
};

export default Hero3;
