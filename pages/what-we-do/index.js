
import { AboutCircle } from '../../components';
import { Hero2 } from '../../sections';
import About from '../../sections/About';
import WhatsNew from '../../sections/WhatsNew';
import { Navbar,Footer } from "../../components";

const WhatWeDo = () => {
  return (
    <div className=' bg-primary-black overflow-hidden'>
    
    <Navbar/>
    <Hero2/>
    <About />
    <AboutCircle/>
    {/* <WhatsNew /> */}
    <Footer/>
    </div>
  )
}

export default WhatWeDo