import React from 'react'

const Cards = () => {
  return (
    <div className='w-full p-20'>
      <div className='w-full flex gap-10'>
        <div className='w-1/2 h-[60vh] flex relative items-center justify-center rounded-xl bg-red-800'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <h1 className='rounded-full left-[5%] top-[85%] absolute py-1 px-3 border-[2px] border-[#CDEA68] text-[#CDEA68] text-sm'>©2019-2022</h1>
        </div>
        <div className='w-1/4 h-[60vh] relative cursor-pointer  flex items-center justify-center rounded-xl bg-zinc-950'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <h1 className='rounded-full left-[5%] top-[85%] absolute py-1 px-3 border-[2px] border-zinc-300 text-zinc-300 text-sm'>RATING 5.0 ON CLUTCH</h1>
        </div>
        <div className='w-1/4 h-[60vh] relative cursor-pointer flex items-center justify-center rounded-xl bg-[#212121]'>
          <img className='h-[30%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <h1 className='rounded-full left-[5%] top-[85%] absolute py-1 px-3 border-[2px] border-zinc-300 text-zinc-300 text-sm'>BUSINESS BOOTCAMP ALUMNI</h1>
        </div>
      </div>

    </div>
  )
}

export default Cards
