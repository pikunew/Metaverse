import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

const StoriesInfoCard = () => {
  return (
    <div className=" h-[50vh] ">
      <div className=" flex gap-12 justify-center">
        <Card className="w-full  max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
           <Image
        width={400}
        height={400}
        src="/stories_1.jpg"
        alt="bg-img"
        className="h-full w-full object-cover"
      />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              01
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
            Rising Beyond: Aanya&apos;s Himalayan Quest
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
            In the heart of Uttarakhand, nestled amidst the lush greenery, lived Aanya <span className=" font-semibold">(name changed)</span>, a young woman whose life was an embodiment of resilience and determination. Her defining moment came when she set her sights on pursuing higher education despite the odds stacked against her. 
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex bg-[#BE185D]  text-white items-center gap-2">
                Learn More
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
            </a>
          </CardBody>
        </Card>
        <Card className="w-full  max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
                <Image
        width={400}
        height={400}
        src="/stories_2.jpg"
        alt="bg-img"
        className="h-full w-full  object-contain"
      />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              02
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
            *उषा चौमर ने बदली अनेक महिलाओं की जिंदगी*  
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
            धानमंत्री नरेंद्र मोदी सरकार के पिछले कार्यकाल में भारत स्वच्छता अभियान के तहत हर घर शौचालय बनाने की जो महत्वपूर्ण योजना संचालित की गई थी उसकी बदौलत आज सफाई कर्मियों के लिए सर पर मैला ढोने की  प्रथा से पूरी तरह निजात मिल चुकी है। 
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex bg-[#BE185D] text-white items-center gap-2">
                Learn More
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
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StoriesInfoCard;
