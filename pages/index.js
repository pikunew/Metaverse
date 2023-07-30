import {
  Footer,
  Navbar,
  HeaderOne,
  AboutCard,
  AboutCircle,
  

} from "../components";
import { SliderData } from "../components/SliderData";

import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Slider,
  Insights,
  Video,
  World,
  
} from "../sections";




const Home = () => (
  <div className="bg-primary-black    overflow-hidden">
    <Navbar />
    <HeaderOne />
    <AboutCard />
    <About />
    <Explore />
    <AboutCircle />
    <GetStarted />
    <Video />
    <World />
    
    <Feedback />
    <Insights />
    <Slider slides={SliderData}/>
    <Footer />
  </div>
);

export default Home;
