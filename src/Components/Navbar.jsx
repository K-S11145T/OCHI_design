import React, { useState } from 'react'
import Logo from './Logo'
import { motion, useScroll } from 'framer-motion'

const Navbar = (scroll) => {
  
 
  

  return (
    <motion.div   className='text-zinc-300 text-sm fixed z-[99] bg-zinc-950/40 font-["Neue Montreal"] flex items-center justify-between py-3 px-7 w-full h-[10vh]'>
      <Logo />

      <div className='ml-60 flex justify-evenly gap-7'>
        {["Services","Our Work","About Us","Insight" ].map((items, index)=>{
          return <a key={index} href="">{items}</a>
        })}
        
      </div>

      <div>
        <a href="">Contact Us</a>
      </div>
    </motion.div>
  )
}

export default Navbar
