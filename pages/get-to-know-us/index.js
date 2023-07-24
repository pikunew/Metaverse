
import { GetStarted,About,Hero } from "../../sections";
import Feedback from "../../sections/Feedback";
import { Navbar,Footer } from "../../components";

const index = () => {
  return (
    <div className=" bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feedback />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default index;
