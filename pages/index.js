import { Footer, Navbar, HeaderOne,AboutCard,AboutCircle } from '../components';
import { About, Explore, Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black    overflow-hidden">
    <Navbar />
    <HeaderOne/>
    <AboutCard/>
    <About />
    <Explore />
    <AboutCircle/>
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Home;
