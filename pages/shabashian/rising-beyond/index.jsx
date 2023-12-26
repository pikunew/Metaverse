import {
  Card,
  Avatar,
  CardBody,
  Typography,

} from "@material-tailwind/react";
import Image from "next/image";

import {Navbar,Footer} from "../../../components";

const StoriesOne = () => {
  return (
    <div className="h-[250vh] bg-[#F8EDE7] " >
  
    <Navbar/>
    <div className="  md:mx-16 lg:mx-40 pt-28  ">
      {/* Story one */}
      <div className=" flex gap-12 justify-center items-center">
        <Card className="w-full items-center mt-28 mb-28 p-[20px]  py-16 max-w-[48rem] flex-col">
          <CardBody >
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 text-7xl  uppercase"
            >
              01
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Rising Beyond: Aanya`&apos;s Himalayan Quest
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              In the heart of Uttarakhand, nestled amidst the lush greenery,
              lived Aanya(name changed), a young woman whose life was an
              embodiment of resilience and determination. Her defining moment
              came when she set her sights on pursuing higher education despite
              the odds stacked against her.
              <br />
              <br />
              At 24, Aanya&apos;s days were a whirlwind of responsibilities. Her
              family relied on her unwavering support, and she worked tirelessly
              to assist her parents in their daily toil. However, her unwavering
              determination to pursue education shone through the darkest of
              nights.
              <br />
              <br />
              One winter, a fierce snowstorm hit their village, cutting off
              access to the nearest school for weeks. While many resigned
              themselves to the situation, Aanya saw an opportunity. With a
              flickering candle as her companion, she transformed her humble
              home into a makeshift classroom. She gathered the village children
              and spent hours teaching them, refusing to let the storm dampen
              their thirst for knowledge.
              <br />
              <br />
              During those snowy days, Aanya&apos;s commitment to education became a
              beacon of hope for the community. She instilled in the children a
              love for learning, using anything at her disposal—a blackboard
              made from a wooden plank, chalk, and her unwavering spirit.
              <br />
              <br />
              As the storm eventually subsided and the village returned to its
              normal rhythm, Aanya&apos;s determination didn’t waver. She continued
              her studies with newfound vigour, fuelled by the realization that
              education was not confined to the walls of a classroom—it was a
              flame that could be kindled anywhere, under any circumstance.
              <br />
              <br />
              Her dedication did not go unnoticed. A local NGO recognized her
              efforts and offered her a scholarship to a prestigious university
              in the city. It was a moment of both excitement and apprehension
              for Aanya. Leaving her family and the familiarity of the mountains
              was a daunting prospect, but her burning desire for knowledge
              pushed her forward.
              <br />
              <br />
              University life was an entirely different world—fast-paced,
              bustling, and often overwhelming. Yet, Aanya stood firm, drawing
              on the resilience she cultivated in the hills. Her days were a
              tightrope walk between lectures, a part-time job, and volunteering
              for various causes. There were moments when she questioned if she
              could carry on, but the memory of those snowy days, teaching by
              candlelight, fuelled her determination.
              <br />
              <br />
              Years later, as she stood on the threshold of her dreams, holding
              her degree aloft like a beacon of triumph, Aanya knew that her
              journey was more than just personal success. It was a testament to
              the power of perseverance, the ability to adapt, and the belief
              that education was not confined by circumstance.
              <br />
              <br />
              The memory of teaching amidst a snowstorm remained etched in her
              heart—it was a reminder that the pursuit of knowledge knows no
              bounds. Aanya&apos;s journey from the hills of Uttarakhand to the halls
              of higher education was a testament to the indomitable human
              spirit and the enduring power of education to transform lives, no
              matter the obstacles.
              <br />
              <br />
              *With university degree and B.ed degree.. Aanya opens a primary
              school for kids on the hills and she continues to teach the kids
              with enthusiasm and zeal.
            </Typography>
            <div>
            {/* <Avatar className=" h-10 w-10" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" /> */}
          <Typography variant="h6">Aanya</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Author
          </Typography>
        </div>
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
      </div>
    <Footer/>
    </div>
  );
};

export default StoriesOne;
