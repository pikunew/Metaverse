import {
  Footer,
  Navbar,
  HeaderOne,
  AboutCard,
  AboutCircle,

} from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
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

    <Footer />
  </div>
);

export default Home;
