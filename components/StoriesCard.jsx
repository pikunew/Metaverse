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
        src="/planet-03.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto mt-[100px] w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto  lg:mt-28 md:mt-36">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              &quot;Shabashian&quot;
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            &quot;Shabashian&quot; is a captivating genre of stories penned by extraordinary women who have triumphed against the societal odds, showcasing resilience and indomitable spirit. The term &quot;Shabashian&quot; is derived from the word &quot;shabash,&quot; which means thanking or applauding in various South Asian languages. These narratives are a celebration of women who have not only achieved remarkable feats in their lives but have also navigated through the challenges imposed by societal norms. Through the art of storytelling, Shabashian serves as an inspiring platform to acknowledge and express gratitude for the relentless efforts and groundbreaking accomplishments of women who have defied expectations, shattered stereotypes, and emerged as beacons of inspiration for others. Each Shabashian story unfolds a tapestry of strength, determination, and success, leaving an indelible mark on the cultural landscape and encouraging others to embark on their own journeys of empowerment.
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