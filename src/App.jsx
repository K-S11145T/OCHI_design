import React, { useState } from 'react'
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
  
  const locomotiveScroll = new LocomotiveScroll();
  const [scroll, setscroll] = useState(false)

  return (
    <div onScroll={()=>{setscroll(true)}} className='w-full relative bg-zinc-900 min-h-screen '>

      <Loading />

      <Navbar scroll={scroll} />
      <Center />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
