import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'

const Loading = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      if (count >= 100) {
        clearInterval(inter);
      } else {
        setCount(prevCount => prevCount + 1);
      }
    }, 0);

    return () => clearInterval(inter);
  }, [count]);

  return (
    <motion.div 
      animate={{ x: "-100%", opacity: 0 }}
      transition={{ delay: 1.3, duration: 1 }}
      className='w-full absolute z-[100] origin-left flex flex-col justify-center items-center h-screen bg-zinc-300'
    >
      <img 
        className='w-[70%] max-w-[300px] rounded-3xl' 
        src="./load.png" 
        alt="Loading" 
      />
      <motion.h1
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='font-semibold flex flex-col sm:flex-row items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4'
      >
        <span className="mb-2 sm:mb-0 sm:mr-2">Loading</span>
        <div id='count' className='w-[60px] sm:w-[80px] flex items-center justify-center'>
          {count}%
        </div>
      </motion.h1>
    </motion.div>
  )
}

export default Loading
