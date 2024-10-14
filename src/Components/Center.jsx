import { motion } from 'framer-motion'
import React from 'react'

const Center = () => {
  
  return (
    <div data-scroll data-scroll-speed="-0.4" className='h-screen w-full pt-1 text-zinc-300 bg-zinc-950'>
      <div className="textstructure mt-40 px-10">

        {["We create", "eye opening", "presentations"].map((items, index) => {
          return <div className="maskers ">
            <div className='w-fit flex gap-2 items-center'>
              {index==1 && (<motion.div  animate={{width:"9vw"}} transition={{duration:0.5 , delay:1 , ease : [0.76, 0, 0.24, 1]}} className=' mt-3 h-[10.5vh] rounded bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]'></motion.div>)}
              <h1 className=' font-bold flex items-center uppercase tracking-tighter text-8xl'>{items}</h1>
            </div>
          </div>
        })}


      </div>

      <div className='border-t-[1px] flex justify-between items-center border-zinc-800 mt-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((items, index) => {
          return <p className='mt-5 px-10'>{items}</p>
        })}

        <div className='mt-5 flex gap-1 justify-center items-center group px-10'>
          <button className='border-[1px] group-hover:bg-zinc-300 uppercase duration-300 group-hover:text-zinc-900 border-zinc-300 px-3 py-1 rounded-full'>Start the Project</button>

          <button className='h-[5vh] flex relative justify-center group-hover:text-zinc-900 items-center w-[5vh] bg-transparent border-[1px] border-zinc-300 rounded-full'>

            <div className='rounded-full h-full group-hover:opacity-[100%] scale-0 group-hover:scale-[100%] duration-300 opacity-0 bg-zinc-300  w-full absolute'></div>

            <i class="absolute z-[2] ri-arrow-right-up-line "></i>
          </button>


        </div>
      </div>
    </div>
  )
}

export default Center
