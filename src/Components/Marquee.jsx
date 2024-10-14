import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.025" className='w-full rounded-tl-3xl rounded-tr-3xl py-16 text-zinc-200 bg-orange-500'>
      <div className='border-t-[1px] border-b-[1px] whitespace-nowrap border-zinc-300 flex'> 
       
       <motion.h1 animate={{x:"-100%"}} transition={{duration:5 , ease:"linear", repeat:Infinity}} className='text-[20vw] -mt-6 px-16 font-bold uppercase leading-none'> we are ochi </motion.h1>
        
        <motion.h1 animate={{x:"-100%"}} transition={{duration:5 , ease:"linear" , repeat:Infinity}} className='text-[20vw] -mt-6  px-16 font-bold uppercase leading-none'> we are ochi </motion.h1>
      </div>
      
    </div>
  )
}

export default Marquee
