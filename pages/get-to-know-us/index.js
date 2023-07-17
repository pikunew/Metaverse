import Hero from '../../sections/Hero';
import About from '../../sections/About';
import WhatsNew from '../../sections/WhatsNew';
import Feedback from '../../sections/Feedback';
import Nav from '../../components/Navbar'

const index = () => {
  return (
    <div className=' bg-primary-black overflow-hidden'>
    
    <Nav/>
    <Hero/>
    <About />
    <Feedback />
    <WhatsNew />
    
    </div>
  )
}

export default index