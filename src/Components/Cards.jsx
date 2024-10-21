import React from 'react'

const Cards = () => {
  return (
    <div className='w-full p-4 sm:p-8 md:p-12 lg:p-20'>
      <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
        <div className='w-full sm:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] flex relative items-center justify-center rounded-xl bg-red-800'>
          <img className='w-1/2 sm:w-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <h1 className='rounded-full left-[5%] bottom-[5%] sm:top-[85%] absolute py-1 px-2 sm:px-3 border-[1px] sm:border-[2px] border-[#CDEA68] text-[#CDEA68] text-xs sm:text-sm'>©2019-2022</h1>
        </div>
        <div className='w-full sm:w-1/4 h-[40vh] sm:h-[50vh] md:h-[60vh] relative cursor-pointer flex items-center justify-center rounded-xl bg-zinc-950'>
          <img className='w-1/2 sm:w-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <h1 className='rounded-full left-[5%] bottom-[5%] sm:top-[85%] absolute py-1 px-2 sm:px-3 border-[1px] sm:border-[2px] border-zinc-300 text-zinc-300 text-xs sm:text-sm'>RATING 5.0 ON CLUTCH</h1>
        </div>
        <div className='w-full sm:w-1/4 h-[40vh] sm:h-[50vh] md:h-[60vh] relative cursor-pointer flex items-center justify-center rounded-xl bg-[#212121]'>
          <img className='h-[20%] sm:h-[30%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <h1 className='rounded-full left-[5%] bottom-[5%] sm:top-[85%] absolute py-1 px-2 sm:px-3 border-[1px] sm:border-[2px] border-zinc-300 text-zinc-300 text-xs sm:text-sm'>BUSINESS BOOTCAMP ALUMNI</h1>
        </div>
      </div>
    </div>
  )
}

export default Cards
