"use client";

import React, { useRef } from "react";
import Image from "next/image";
import hover3d from "../utils/motion";
import Link from "next/link";

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
    <div className="mt-28" ref={hero}>
      <div className=" lg:flex-row  lg:pt-0 lg:pr-8 lg:pb-20 lg:pl-14 lg:justify-around lg:items-center lg:gap-2 lg:min-h-[90vh] p-0 flex flex-col-reverse justify-between align-middle gap-6 min-h-full bg-primary-black  overflow-hidden">
        <div className=" xl:w-[35vw] lg:w-[40vw] lg:pt-48 sm:px-16 sm:flex-col sm:text-center pb-16 pt-2 px-6">
          <h1 className=" font-bold text-4xl text-[#6D6875]">
            Making the voice of women heard
          </h1>
          <p className="xl:text-base  text-sm   text-gray-800 transition-all ease-linear py-8 text-justify">
            Women have to struggle for some of the basic tenants of living.
            Whether it be as basic as awareness or whether it be as basic as
            prioritizing their own life over that of others. <br />
            Amarpreet started working on making women aware of a simple aspect,
            that is their work rights at the workplace, her belief was that if
            women can be financially independent, they can do things or
            activities which have them at the centre, her intention was for
            Women to consider them also as individuals rather than machines
            designed to support others existence.
            <br />
            Over the years, Amarpreet started realizing that the concept of
            being human isn&apos;t easily understood by both women and the society,
            hence the journey started of making women aware of their rights,
            preparing them to handle the world and presenting the world with
            reality check by doing many data-based studies on how women are
            treated.
            <br />
            In March 2018, a legal shape was given to this initiative, and an
            NGO was launched, primarily to ensure that the dream which Amarpreet
            has is accomplished.
            <br /> We work in ensuring Dignified and Equal work rights for
            Women.
          </p>

          <div className=" sm:justify-center sm:gap-5 sm:flex-row flex flex-col items-center ">
            <Link href="/get-to-know-us">
              {" "}
              <button className="sm:px-20 sm:py-3 rounded-3xl border-[1px] bg-[#c93179] hover:text-white hover:font-bold text-gray-200  px-20 py-4 mt-4">
                Know More
              </button>
            </Link>
            <Link href="/what-we-do">
              <button className=" sm:px-20 sm:py-3 rounded-3xl border-[1px] hover:text-[#c93179] hover:font-bold border-black px-20 py-4 mt-4">
                Learn More
              </button>
            </Link>
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
            className=" lg:w-[600px] lg:h-auto xl:w-[900px] rounded-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
