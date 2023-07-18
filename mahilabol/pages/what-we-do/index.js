
import { AboutCircle } from '../../components';
import { Hero2 } from '../../sections';
import About from '../../sections/About';
import WhatsNew from '../../sections/WhatsNew';
import Nav from '../../components/Navbar'

const WhatWeDo = () => {
  return (
    <div className=' bg-primary-black overflow-hidden'>
    
    <Nav/>
    <Hero2/>
    <About />
    <AboutCircle/>
    <WhatsNew />
    </div>
  )
}

export default WhatWeDo