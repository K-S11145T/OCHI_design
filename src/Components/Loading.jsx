import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Loading = () => {
  let count = 0

  const inter = setInterval(() => {
    if (count >= 100) {

      clearInterval(inter);  // Stop the interval when it reaches 100%
    }
    else {
      count++
      document.querySelector("#count").innerHTML = count
    }
  }, 0)

 


  return (
    <motion.div 

    animate={{ x: "-100%" , opacity:0}}
    transition={{delay : 1.3 , duration:1}}
    
    className='w-full absolute z-[100] origin-left flex flex-col justify-center items-center h-screen bg-zinc-300'>
      <img className='scale-[70%] rounded-3xl' src="./load.png" alt="" />
      <motion.h1
        animate={  { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}

        className='font-semibold flex items-center text-5xl ml-[-60vw]'>Loading - <div id='count' className='w-[10vw] flex items-center justify-center h-fit '> </div>

      </motion.h1>

    </motion.div>
  )
}

export default Loading
