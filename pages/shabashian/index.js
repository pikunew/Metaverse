import { Footer, Navbar, StoriesCard, StoriesInfoCard } from "../../components";
import { StoriesStats } from "../../sections";


const Shabashian = () => {
  return (
    <div className=" bg-[#F8EDE7]">
      <Navbar />
  <section className=" w-full"><StoriesCard /></section>  
      <StoriesStats />
      <StoriesInfoCard/>
    
      <Footer />
    </div>
  );
};

export default Shabashian;
