"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Video = () => {
  const video = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <div className=" py-[10vh] px-[4vw]">
      <motion.div className=" md:p-8 p-2 bg-[#161616] rounded-2xl" ref={video}>
        <iframe
          className=" w-[100%] h-60  md:h-96 lg:h-[48rem] rounded-none"
          src="https://www.youtube.com/embed/rraNVeJ5fu0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Video;
