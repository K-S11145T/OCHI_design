import { motion } from 'framer-motion'
import React from 'react'

const Center = () => {
  return (
    <div data-scroll data-scroll-speed="-0.4" className='min-h-screen w-full pt-1 text-zinc-300 bg-zinc-950'>
      <div className="textstructure mt-20 sm:mt-32 md:mt-40 px-4 sm:px-6 md:px-10">
        {["We create", "eye opening", "presentations"].map((items, index) => {
          return (
            <div key={index} className="maskers mb-2 sm:mb-4">
              <div className='w-fit flex flex-wrap gap-2 items-center'>
                {index === 1 && (
                  <motion.div
                    animate={{ width: ["0vw", "9vw"] }}
                    transition={{ duration: 0.5, delay: 2, ease: [0.76, 0, 0.24, 1] }}
                    className='mt-1 sm:mt-2 md:mt-3 h-[5vh] sm:h-[8vh] md:h-[10.5vh] w-[9vw] rounded bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]'
                  ></motion.div>
                )}
                <h1 className='font-bold flex items-center uppercase tracking-tighter text-4xl sm:text-6xl md:text-8xl'>{items}</h1>
              </div>
            </div>
          )
        })}
      </div>

      <div className='border-t-[1px] flex flex-col sm:flex-row justify-between items-start sm:items-center border-zinc-800 mt-10 sm:mt-16 md:mt-20'>
        <div className='flex flex-col sm:flex-row w-full sm:w-auto'>
          {['For public and private companies', 'From the first pitch to IPO'].map((items, index) => {
            return <p key={index} className='mt-4 sm:mt-5 px-4 sm:px-6 md:px-10 text-sm sm:text-base'>{items}</p>
          })}
        </div>

        <div className='mt-6 sm:mt-5 flex gap-1 justify-center items-center group px-4 sm:px-6 md:px-10 w-full sm:w-auto'>
          <button className='border-[1px] group-hover:bg-zinc-300 uppercase duration-300 group-hover:text-zinc-900 border-zinc-300 px-3 py-1 rounded-full text-sm sm:text-base'>Start the Project</button>

          <button className='h-[4vh] sm:h-[5vh] flex relative justify-center group-hover:text-zinc-900 items-center w-[4vh] sm:w-[5vh] bg-transparent border-[1px] border-zinc-300 rounded-full'>
            <div className='rounded-full h-full group-hover:opacity-[100%] scale-0 group-hover:scale-[100%] duration-300 opacity-0 bg-zinc-300 w-full absolute'></div>
            <i className="absolute z-[2] ri-arrow-right-up-line text-sm sm:text-base"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Center
