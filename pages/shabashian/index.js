import { Footer, Navbar, StoriesCard, StoriesInfoCard } from "../../components";
import { StoriesStats } from "../../sections";
import Image from "next/image";

const Shabashian = () => {
  return (
    <div className=" bg-[#F8EDE7]">
      <Navbar />
      <StoriesCard />
      <StoriesStats />
      <StoriesInfoCard/>
    
      <Footer />
    </div>
  );
};

export default Shabashian;
