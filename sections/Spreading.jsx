"use client";
import Image from "next/image";
import { TypingText } from "../components";

const Spreading = () => {
  return (
    <div className=" my-36  ">
      <div className=" sm:px-10 px-2  lg:pt-0  lg:pb-20 lg:justify-around lg:items-center   flex flex-col justify-between align-middle gap-4 min-h-full bg-primary-black  overflow-hidden">
        <Image
          src="/img_006.jpg"
          width={1200}
          height={1000}
          alt="hero"
          className="rounded-lg z-10 lg:w-[60] h-auto"
        />
      </div>
      <div className=" pt-10 lg:pt-12 2xl:px-[380px] lg:px-[180px] sm:px-20 sm:flex-col sm:text-center pb-16  px-8">

      <TypingText title="| Activities" textStyles="text-center" />
        <h2 className=" text-3xl font-extrabold text-pink-700">
          Food Distribution during Covid
        </h2>
       
        <p className=" text-justify text-xl">
          <br />
          <br />
          <span className=" font-black text-2xl text-pink-700">2021</span> was a
          year of hope for Savitri’s family. After all the suffering and
          hardship they went through during the first wave of COVID-19, they
          were looking forward to a kinder year. Fewer people were sick around
          them. It seemed that the pandemic was finally loosening its grip on
          society. They hoped to finally return to normalcy, the reassuring
          stability of ordinary life. But that was not meant to be.
          <br />
          <br />
          Savitri’s kitchen which fed 6 souls was about to run out of
          necessities. The bare minimum provisions, that the meager money from
          her former employers could only buy enough to sustain them for a week.
          She had already asked them for help, and for employment twice. They
          offered some money but ultimately didn't employ them back.
          <br />
          <br />
          Hers was a family that sustained themself on the earnings of Savitri
          and her Husband Tilak. Savitri worked as a house help, Tilak was a
          daily wage labourer. They have been unemployed since the advent of the
          pandemic. They were helped financially during the first wave by their
          former employers but they refused to employ them again for the fear of
          contagion due to their living situation in a slum. But as the second
          wave began, they were stranded with no jobs or help. In a hellish
          situation with the risk of starvation as high as the risk of disease,
          Savitri was at the end of her rope.
          <br />
          <br />
          Hope was not completely lost. In this terrible situation, HRhelpdesk
          Trust stepped in to help. Hearing about the awful situation, the trust
          decided to help by providing food and help. The trust distributed meal
          kits to all the families in the slum. The kits containing provisions,
          such as rice, dal , rava, oil, soaps, toothbrushes etc ,were
          distributed several times throughout the second wave, until the
          people's financial situation stabilized. Additional help for the
          payment of bills and hospital costs was also provided.
          <br />
          <br />
          Hundreds of families, like Savitri's, were able to survive the second
          wave due to the efforts of many NGOs like the HRhelpdesk Trust, who
          stepped in and helped those who would have fallen through society's
          safety nets.
          <br />
          <br />
          We strive to provide dignity where we can.
        </p>
        
      </div>
    </div>
  );
};

export default Spreading;
