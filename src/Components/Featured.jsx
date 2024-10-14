import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all'

const Featured = () => {

  const [hover, sethover] = useState(false)
  const [hover2, sethover2] = useState(false)

  return (
    <div className='w-full rounded-tl-3xl py-10 rounded-tl-xl border-b-[2px]  border-zinc-700 rounded-tr-xl'>
      <div className='w-full px-20 mt-10 border-b-[2px]  border-zinc-700'>
        <h1 className='text-6xl mb-10 text-zinc-300'>Featured Projects</h1>
      </div>
      <div className="cards w-full p-20 flex gap-10">
        <div onMouseEnter={()=>{sethover2(true)}} onMouseLeave={()=>{sethover2(false)}} className="card relative w-1/2 h-[80vh] ">

          <h1 className='absolute text-7xl font-bold text-yellow-300 top-1/2 translate-y-[-50%] tracking-tighter z-[9] left-full w-[70vw] overflow-hidden text-center translate-x-[-50%]'> {"CARDBOARD SPACESHIP".split('').map((e, i) => { return <motion.span 
          animate = {hover2 ? {y:0} : {y:"100%"}}
          transition={{ease: Power4.easeInOut , delay : i*0.01}} 
          className='inline-block translate-y-full'>{e}</motion.span> })}</h1>
          <motion.div
            layout
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 }
            }} className='h-full h-full  rounded-xl overflow-hidden '>

            <motion.img
              layout
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, delay: 0.2 }
              }

              } className='object-cover h-full w-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
          </motion.div>

        </div>

        <div onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}} className="card relative rounded-xl w-1/2 h-[80vh] ">
          <h1 className='absolute text-7xl font-bold text-yellow-300 top-1/2 translate-y-[-50%] tracking-tighter z-[9] right-full w-[70vw] overflow-hidden text-center translate-x-[50%]'>{"AH2 & MATT HORN".split('').map((e, i) => { 
            return <motion.span 
              animate = {hover ? {y:0} : {y:"100%"}}
              transition={{ease: Power4.easeInOut , delay : i*0.01}} 
             className='inline-block translate-y-full'>{e}</motion.span> })}</h1>

          <motion.div
            layout
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 }
            }} className='h-full w-full rounded-xl overflow-hidden'>

            <motion.img
              layout
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, delay: 0.2 }
              }

              } className='object-cover h-full w-full' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
          </motion.div></div>
      </div>
    </div>
  )
}

export default Featured
