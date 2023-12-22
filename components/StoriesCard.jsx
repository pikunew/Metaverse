"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";


const StoriesCard = () => {
  return (
    <section className="bg-[#F8EDE7]">
    <div className="!flex h-[55vh] w-full items-center justify-between pt-[200px] px-10 bg-[#F8EDE7]">
      <Image
        width={1200}
        height={1200}
        src="/img_hero.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto mt-[100px] w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Some Of the real stories 
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button className=" bg-[#BE185D]">view all stories</Button>
             
            </div>
           
          </Card>


        </div>

      </div>
      
    </div>
    
    </section>
  )
}

export default StoriesCard