import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { Power4 } from 'gsap/all'

const Featured = () => {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  return (
    <div className='w-full rounded-tl-3xl py-5 sm:py-8 md:py-10 rounded-tl-xl border-b-[1px] sm:border-b-[2px] border-zinc-700 rounded-tr-xl'>
      <div className='w-full px-4 sm:px-10 md:px-20 mt-5 sm:mt-8 md:mt-10 border-b-[1px] sm:border-b-[2px] border-zinc-700'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-8 md:mb-10 text-zinc-300'>Featured Projects</h1>
      </div>
      <div className="cards w-full p-4 sm:p-10 md:p-20 flex flex-col md:flex-row gap-5 sm:gap-8 md:gap-10">
        <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className="card relative w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[80vh]">
          <h1 className={`absolute text-3xl sm:text-5xl md:text-7xl font-bold text-yellow-300 ${isMobile ? 'top-full left-1/2 -translate-x-1/2 mt-4' : 'top-1/2 -translate-y-1/2 z-[9] left-full'} w-full md:w-[70vw] overflow-hidden text-center ${!isMobile && '-translate-x-1/2'}`}>
            {"CARDBOARD SPACESHIP".split('').map((e, i) => (
              <motion.span
                key={i}
                animate={hover2 ? { y: 0 } : { y: "100%" }}
                transition={{ ease: Power4.easeInOut, delay: i * 0.01 }}
                className='inline-block translate-y-full'
              >
                {e}
              </motion.span>
            ))}
          </h1>
          <motion.div
            layout
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 }
            }}
            className='h-full w-full rounded-xl overflow-hidden'
          >
            <motion.img
              layout
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, delay: 0.2 }
              }}
              className='object-cover h-full w-full'
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </motion.div>
        </div>

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="card relative rounded-xl w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[80vh]">
          <h1 className={`absolute text-3xl sm:text-5xl md:text-7xl font-bold text-yellow-300 ${isMobile ? 'top-full left-1/2 -translate-x-1/2 mt-4' : 'top-1/2 -translate-y-1/2 z-[9] right-full'} w-full md:w-[70vw] overflow-hidden text-center ${!isMobile && 'translate-x-1/2'}`}>
            {"AH2 & MATT HORN".split('').map((e, i) => (
              <motion.span
                key={i}
                animate={hover ? { y: 0 } : { y: "100%" }}
                transition={{ ease: Power4.easeInOut, delay: i * 0.01 }}
                className='inline-block translate-y-full'
              >
                {e}
              </motion.span>
            ))}
          </h1>
          <motion.div
            layout
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 }
            }}
            className='h-full w-full rounded-xl overflow-hidden'
          >
            <motion.img
              layout
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, delay: 0.2 }
              }}
              className='object-cover h-full w-full'
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
