import { Card, CardBody, Typography,Breadcrumbs } from "@material-tailwind/react";
import Image from "next/image";
import { Navbar, Footer } from "../../../components";

const StoriesThree = () => {
  return (
    <div className=" bg-[#F8EDE7]">
      <Navbar />
      <div className="mt-[200px] md:mx-16 lg:mx-40 pt-28">
        {/* Story one */}
        <div className=" h-7 py-8 bg-white ">
          <Breadcrumbs className="">
            <a href="/" className="opacity-60  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            <a href="/shabashian" className="opacity-60  ">
              <span>Shabashian</span>
            </a>
            <a href ="shabashian/guardian-of-dreams" className=" text-pink-800 font-bold">Guardian of Dreams: The Inspiring Journey of Suneeta</a>
          </Breadcrumbs>
        </div>
        <div className="flex flex-col-reverse gap-12 justify-center items-center">
          <Card className="w-full items-center mt-28 p-[20px] py-16 max-w-[48rem] flex-row">
            <CardBody>
              <Typography
                variant="h6"
                color="gray"
                className="mb-4 text-7xl uppercase"
              >
                03
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Guardian of Dreams: The Inspiring Journey of Suneeta
              </Typography>
              <Typography color="gray" className="mb-8 font-normal text-justify">
                Once upon a time, in the bustling city of Noida, there lived a
                young girl named Suneeta(name changed). At the tender age of 17,
                she already bore the weight of responsibility on her slender
                shoulders. Suneeta&apos;s family wasn&apos;t wealthy; in fact, they were
                humble and hardworking. Her father, a dedicated night guard,
                kept watch over a residential society, ensuring the safety of
                its residents during the darkest hours. Her mother, a loving
                homemaker, tirelessly managed the household, keeping everything
                in order.
                <br />
                <br />
                Suneeta was the eldest of her siblings, a position she found
                herself in after the tragic loss of her elder brother in an
                accident two years ago. Despite the adversity life had thrown
                her way, Suneeta carried herself with a charm and grace that was
                truly magical. Her radiant smile had the power to bring
                happiness to the face of anyone she conversed with.
                <br />
                <br />
                Her day began early, at 4:30 in the morning. She rose with the
                first light of dawn, assisting her mother in preparing breakfast
                and ensuring their home was spotless. As the clock ticked
                towards 6:15, she transformed into a guardian angel for the
                children of Noida. Suneeta left for a prominent school where she
                served as a &apos;Suraksha&apos; guard, protecting the little ones on the
                school bus. Her enthusiasm was infectious, and she made sure
                every child felt safe and cared for.
                <br />
                <br />
                The children adored her, affectionately calling her &apos;didi.&apos;
                Suneeta&apos;s daily ritual involved picking children from various
                societies, making sure they had their tiffin boxes and spreading
                joy wherever she went. She safely delivered them to school by
                7:45.
                <br />
                <br />
                After her morning duties, Suneeta diligently managed paperwork,
                keeping a meticulous record of the children on the bus. Then,
                she rushed to her college for her own education, pursuing her
                studies in Class 11. She was unwavering in her commitment to
                attend every class, determined not to miss a single one. Her
                college day concluded at 1, but there was no rest for the
                devoted guardian.
                <br />
                <br />
                Suneeta hurried back to the school bus, resuming her role as the
                &apos;Suraksha&apos; guard. Once again, she ensured that each child made
                it safely to their respective societies, often waiting with them
                if their parents were running late. Her day of service concluded
                around 3 pm, but she was far from done.
                <br />
                <br />
                She returned to the school premises to meticulously complete her
                paperwork. At 3:30, she finally left the school to reach home by
                4:15. After a quick lunch, she headed off to her tutoring
                session, which began at 5. Suneeta was humble enough to admit
                that she needed assistance in English and math, and her
                commitment shone through as she made strides in her studies.
                <br />
                <br />
                By 7 pm, her tutoring was over, and she continued to another
                selfless endeavour. She offered her tutoring skills to a young
                child, a second-grader living close to her home. Her day didn&apos;t
                truly end until 8:30 when she returned home, where her mother
                eagerly awaited her to share the responsibility of serving
                dinner and tidying up the kitchen.
                <br />
                <br />
                Only after these familial duties were complete did Suneeta find
                a moment to relax and engage in conversation with her family. It
                was a time for bonding and shared moments, a cherished respite
                before bedtime. As her family retired for the night, Suneeta
                embarked on another journey, one of self-improvement and
                relentless dedication.
                <br />
                <br />
                She studied diligently until midnight, continually pursuing her
                dreams of becoming an IAS officer. Her ambition was not for
                herself alone, but for the betterment of society. Suneeta
                aspired to create opportunities, bringing employment to
                countless young individuals in her community.
                <br />
                <br />
                Her story is a testament to the power of determination,
                kindness, and the ability to find joy even in the midst of a
                demanding life. Suneeta, the guardian angel of Noida, carried
                not only the hopes of her family but the dreams of a better
                future for all who crossed her path.
                <br />
                <br />
                Life&apos;s Uplifting Lesson- The inspiring journey of Suneeta
                teaches us that unwavering determination, selflessness, and a
                boundless capacity for kindness can lead to the fulfilment of
                not only one&apos;s own dreams but also the upliftment of an entire
                community. Suneeta&apos;s story reminds us that regardless of the
                challenges we face, our actions can make a significant impact on
                the lives of others, and that by pursuing our dreams with
                dedication and a sense of service, we can create a better future
                for all.
                <br />
             
              </Typography>
              <Typography variant="h6">Gitika Verma</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Author
          </Typography>
            </CardBody>
          </Card>

          <div className="h-[600px] w-full max-w-[38rem] rounded-lg overflow-hidden object-cover object-center shadow-xl shadow-blue-gray-900/50">
            <Image width={500} height={500} src="/stories_3.jpg" alt="bg-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoriesThree;
