"use client";

import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";

export function StoriesStats() {
  return (
    <section className="px-8 pt-60 mt-52">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Stories from and about brave Women
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            "Shabashian" is a captivating genre of stories penned by
            extraordinary women who have triumphed against the societal odds,
            showcasing resilience and indomitable spirit.
          </Typography>
         
        </div>
       
      </div>
    </section>
  );
}
export default StoriesStats;
