"use Client";
import Image from "next/image";

import Link from "next/link";

const StoriesInfoCard = () => {
  return (
    <section className="h-[700vh] w-full bg-[#F8EDE7] ">
      {/* stories one */}
      <section className=" flex flex-col-reverse lg:flex-row md:justify-center md:items-center gap-12 lg:gap-16 md:gap-10 lg:mx-10 mx-4 ">
        <div className="bg-white rounded-lg h-[600px] md:h[800px] lg:w-[1000px] sm:w-[700px]  md:w-[700px]  lg:px-14 sm:px-10  px-6  pb-[200px] pt-[220px] flex flex-col justify-center  md:gap-2 gap-4">
          <h4 className=" font-black text-8xl flex  ">01</h4>
          <h2 className=" font-bold text-2xl   ">
            Rising Beyond: Aanya`&apos;s Himalayan Quest
          </h2>
          <p className="text-justify lg:text-lg text-base">
            In the heart of Uttarakhand, nestled amidst the lush greenery, lived
            Aanya <span className=" font-semibold">(name changed)</span>, a
            young woman whose life was an embodiment of resilience and
            determination. Her defining moment came when she set her sights on
            pursuing higher education despite the odds stacked against her.....
          </p>
          <Link href="/shabashian/rising-beyond" className="inline-block">
            <button className="flex justify-start bg-[#BE185D] w-[180px] h-[50px]  rounded-md font-bold text-lg  pl-6 mt-8  text-white items-center gap-2">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 text-lg font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" bg-purple-400">
          <Image
            width={500}
            height={500}
            src="/stories_1.jpg"
            alt="bg-img"
            className="h-[350px] sm:h-[600px] md:h-[500px]  lg:h-[600px] lg:w-[950px] md:w-[700px] w-full max-w-[52rem] xl:max-w-[38rem] lg:max-w-[28rem] md:max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          />
        </div>
      </section>
      {/* stories two */}
      <section className=" mt-20 flex flex-col-reverse lg:flex-row-reverse md:justify-center md:items-center gap-12 lg:gap-16 md:gap-10 lg:mx-10 mx-4 ">
        <div className="bg-white rounded-lg h-[600px] md:h[800px] lg:w-[1000px] sm:w-[700px]  md:w-[700px]  lg:px-14 sm:px-10  px-6  pb-[200px] pt-[220px] flex flex-col justify-center  md:gap-2 gap-4">
          <h4 className=" font-black text-8xl flex  ">02</h4>
          <h2 className=" font-bold text-2xl   ">
            *उषा चौमर ने बदली अनेक महिलाओं की जिंदगी*
          </h2>
          <p className="text-justify lg:text-lg text-base">
            धानमंत्री नरेंद्र मोदी सरकार के पिछले कार्यकाल में भारत स्वच्छता
            अभियान के तहत हर घर शौचालय बनाने की जो महत्वपूर्ण योजना संचालित की
            गई थी उसकी बदौलत आज सफाई कर्मियों के लिए सर पर मैला ढोने की प्रथा से
            पूरी तरह निजात मिल चुकी है।.....
          </p>
          <Link href="/shabashian/usha-chaumar" className="inline-block">
            <button className="flex justify-start bg-[#BE185D] w-[180px] h-[50px]  rounded-md font-bold text-lg  pl-6 mt-8  text-white items-center gap-2">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 text-lg font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" bg-purple-400">
          <Image
            width={500}
            height={500}
            src="/stories_2.jpg"
            alt="bg-img"
            className="h-[350px] sm:h-[600px] md:h-[500px]  lg:h-[600px] lg:w-[950px] md:w-[700px] w-full max-w-[52rem] xl:max-w-[38rem] lg:max-w-[28rem] md:max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          />
        </div>
      </section>

      {/* stories three */}
      <section className=" mt-20 flex flex-col-reverse lg:flex-row md:justify-center md:items-center gap-12 lg:gap-16 md:gap-10 lg:mx-10 mx-4 ">
        <div className="bg-white rounded-lg h-[600px] md:h[800px] lg:w-[1000px] sm:w-[700px]  md:w-[700px]  lg:px-14 sm:px-10  px-6  pb-[200px] pt-[220px] flex flex-col justify-center  md:gap-2 gap-4">
          <h4 className=" font-black text-8xl flex  ">03</h4>
          <h2 className=" font-bold text-2xl   ">
            &apos;Guardian of Dreams: The Inspiring Journey of Suneeta&apos;
          </h2>
          <p className="text-justify lg:text-lg text-base">
            Once upon a time, in the bustling city of Noida, there lived a young
            girl named Suneeta
            <span className=" font-semibold">(name changed)</span>. At the
            tender age of 17, she already bore the weight of responsibility on
            her slender shoulders. Suneeta&apos;s family wasn&apos;t wealthy; in
            fact, they were humble and hardworking. Her father, a dedicated
            night guard, kept watch over a residential society, ensuring the
            safety ...
          </p>
          <Link href="/shabashian/guardian-of-dreams" className="inline-block">
            <button className="flex justify-start bg-[#BE185D] w-[180px] h-[50px]  rounded-md font-bold text-lg  pl-6 mt-8  text-white items-center gap-2">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 text-lg font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" bg-purple-400">
          <Image
            width={500}
            height={500}
            src="/stories_3.jpg"
            alt="bg-img"
            className="h-[350px] sm:h-[600px] md:h-[500px]  lg:h-[600px] lg:w-[950px] md:w-[700px] w-full max-w-[52rem] xl:max-w-[38rem] lg:max-w-[28rem] md:max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
          />
        </div>
      </section>
    </section>
  );
};

export default StoriesInfoCard;
