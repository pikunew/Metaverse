import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Navbar, Footer } from "../../../components";

const StoriesThree = () => {
  return (
    <div className="h-[250vh] bg-[#F8EDE7]">
      <Navbar />
      <div className="mt-[200px] md:mx-16 lg:mx-40">
        {/* Story one */}
        <div className="flex gap-12 justify-center items-center">
          <Card className="w-full items-center p-[20px] py-16 max-w-[48rem] flex-row">
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
              <Typography color="gray" className="mb-8 font-normal">
                Once upon a time, in the bustling city of Noida, there lived a
                young girl named Suneeta(name changed). At the tender age of 17,
                she already bore the weight of responsibility on her slender
                shoulders. Suneeta's family wasn't wealthy; in fact, they were
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
                served as a "Suraksha" guard, protecting the little ones on the
                school bus. Her enthusiasm was infectious, and she made sure
                every child felt safe and cared for.
                <br />
                <br />
                The children adored her, affectionately calling her "didi."
                Suneeta's daily ritual involved picking children from various
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
                "Suraksha" guard. Once again, she ensured that each child made
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
                child, a second-grader living close to her home. Her day didn't
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
                Life's Uplifting Lesson- The inspiring journey of Suneeta
                teaches us that unwavering determination, selflessness, and a
                boundless capacity for kindness can lead to the fulfilment of
                not only one's own dreams but also the upliftment of an entire
                community. Suneeta's story reminds us that regardless of the
                challenges we face, our actions can make a significant impact on
                the lives of others, and that by pursuing our dreams with
                dedication and a sense of service, we can create a better future
                for all.
                <br />
                <br />
                *With university degree and B.ed degree.. Aanya opens a primary
                school for kids on the hills and she continues to teach the kids
                with enthusiasm and zeal.
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