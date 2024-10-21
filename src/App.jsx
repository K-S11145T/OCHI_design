import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Center from './Components/Center'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Loading from './Components/Loading'

const App = () => {
  
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setLocomotiveScroll(new LocomotiveScroll());

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  const handleScroll = () => {
    setScroll(true);
  };

  return (
    <div onScroll={handleScroll} className='w-full relative bg-zinc-900 min-h-screen'>
      <Loading />
      <Navbar scroll={scroll} />
      <Center />
      <Marquee />
      <About />
      {windowWidth > 768 && <Eyes />}
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
