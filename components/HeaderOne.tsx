"use client";

import React, { useRef } from "react";
import Image from "next/image";
import hover3d from "../utils/motion";
const HeaderOne = () => {
  const hero = useRef<HTMLDivElement>(null);

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
    <div className="mt-20" ref={hero}>
      <div className=" lg:flex-row  lg:pt-0 lg:pr-8 lg:pb-20 lg:pl-14 lg:justify-around lg:items-center lg:gap-2 lg:min-h-[90vh] p-0 flex flex-col-reverse justify-between align-middle gap-6 min-h-full bg-primary-black  overflow-hidden">
        <div className=" xl:w-[35vw] lg:w-[40vw] lg:pt-48 sm:px-16 sm:flex-col sm:text-center pb-16 pt-2 px-6">
          <h1 className=" font-bold text-4xl">This is the Main Heading One</h1>
          <p className="xl:text-base  text-sm   text-gray-800 transition-all ease-linear py-8 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been theindustry'sstandarddummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been
            theindustry'sstandarddummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
          </p>

          <div className=" sm:justify-center sm:gap-5 sm:flex-row flex flex-col ">
            {/* <Button 
              name="Know More"
              background="#c93179"
              color="#fff"
              border="1px solid #c93179"
              icon={<FaRegArrowAltCircleRight />}
             /> */}

            <button className="sm:w-[200px] rounded-3xl border-[1px] bg-[#c93179] hover:text-white hover:font-bold text-gray-200  py-4 mt-4">
              Know More
            </button>
            <button className=" sm:w-[200px] rounded-3xl border-[1px] hover:text-[#c93179] hover:font-bold border-black py-4 mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div className=" p-4 rounded-lg bg-[#F8EDE7] border-[1px] border-black ">
          <Image
            src="/img_1.jpg"
            width={800}
            height={600}
            alt="hero"
            style={{
              transform: imageHover.transform,
            }}
            className=" lg:w-[600px] lg:h-auto xl:w-[900px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
