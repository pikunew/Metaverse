"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";



export function StoriesStats() {
  return (
    <section className="px-8 pt-60 mt-52">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Explore Our Impressive Stats
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            We take pride in our commitment to excellence and our dedication to
            your success.
          </Typography>
        </div>
   
      </div>
    </section>
  );
}
export default StoriesStats;