import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const StoriesInfoCard = () => {
  return (
    <div className=" lg:h-[280vh] md:h-[400vh] md:mx-16 lg:mx-40 ">
      {/* Story one */}
      <div className=" flex gap-12 justify-center">
        <Card className="w-full items-center p-24 max-w-[48rem] flex-row">
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 text-7xl  uppercase">
              01
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Rising Beyond: Aanya`&apos;s Himalayan Quest
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              In the heart of Uttarakhand, nestled amidst the lush greenery,
              lived Aanya <span className=" font-semibold">(name changed)</span>
              , a young woman whose life was an embodiment of resilience and
              determination. Her defining moment came when she set her sights on
              pursuing higher education despite the odds stacked against her.
            </Typography>
            <Link href="/shabashian/storyone" className="inline-block">
              <Button
                variant="text"
                className="flex bg-[#BE185D]  text-white items-center gap-2"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Image
          width={500}
          height={500}
          src="/stories_1.jpg"
          alt="bg-img"
          className="h-[600px] w-full max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        />
      </div>
      {/* Story two */}
      <div className=" flex gap-12 mt-24 justify-center">
      <Image
          width={500}
          height={500}
          src="/stories_2.jpg"
          alt="bg-img"
          className="h-[600px] w-full max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        />
        <Card className="w-full items-center p-24 max-w-[48rem] flex-row">
          <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 text-7xl uppercase">
              02
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              *उषा चौमर ने बदली अनेक महिलाओं की जिंदगी*
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              धानमंत्री नरेंद्र मोदी सरकार के पिछले कार्यकाल में भारत स्वच्छता
              अभियान के तहत हर घर शौचालय बनाने की जो महत्वपूर्ण योजना संचालित की
              गई थी उसकी बदौलत आज सफाई कर्मियों के लिए सर पर मैला ढोने की प्रथा
              से पूरी तरह निजात मिल चुकी है।
            </Typography>
            <Link href="/shabashian/storytwo" className="inline-block">
              <Button
                variant="text"
                className="flex bg-[#BE185D]  text-white items-center gap-2"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
       
      </div>
      {/* Story Three */}
      <div className=" flex gap-12 mt-24 justify-center mb-[800px]">
        <Card className="w-full items-center p-24 max-w-[48rem] flex-row">
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 text-7xl uppercase">
              03
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
               &apos;Guardian of Dreams: The Inspiring Journey of Suneeta&apos;
            </Typography>
            <Typography color="gray" className="mb-8 font-normal ">
            Once upon a time, in the bustling city of Noida, there lived a young girl named Suneeta<span className=" font-semibold">(name changed)</span>. At the tender age of 17, she already bore the weight of responsibility on her slender shoulders. Suneeta&apos;s family wasn&apos;t wealthy; in fact, they were humble and hardworking. Her father, a dedicated night guard, kept watch over a residential society, ensuring the safety ... 
            </Typography>
            <Link href="/shabashian/storythree" className="inline-block">
              <Button
                variant="text"
                className="flex bg-[#BE185D]  text-white items-center gap-2"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Image
          width={500}
          height={500}
          src="/stories_3.jpg"
          alt="bg-img"
          className="h-[600px] w-full max-w-[38rem] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        />
      </div>
    </div>
  );
};

export default StoriesInfoCard;
