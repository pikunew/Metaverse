import Hero from "../../sections/Hero";
import About from "../../sections/About";
import WhatsNew from "../../sections/WhatsNew";
import Feedback from "../../sections/Feedback";
import { Navbar,Footer } from "../../components";

const index = () => {
  return (
    <div className=" bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feedback />
      <WhatsNew />
      <Footer />
    </div>
  );
};

export default index;
