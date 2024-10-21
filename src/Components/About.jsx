import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='bg-yellow-300 text-zinc-800 w-full rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='p-4 sm:p-8 md:p-12 lg:p-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='border-t-[1px] flex flex-col lg:flex-row items-start justify-between p-4 sm:p-8 md:p-12 lg:p-20 border-zinc-700'>
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Our Approach:</h1>
          <button className='mt-8 lg:mt-16 bg-zinc-800 uppercase group flex items-center justify-center gap-3 sm:gap-5 rounded-full py-2 sm:py-3 px-4 sm:px-5'>
            <h1 className='text-lg sm:text-xl text-zinc-100'>Read more</h1>
            <div className='rounded-full flex justify-center items-center p-2 sm:p-3 scale-[30%] duration-300 group-hover:scale-[100%] h-[0.3vh] w-[0.3vh] bg-white'>
              <i className="ri-arrow-right-up-line duration-300 group-hover:opacity-[100%] opacity-0"></i>
            </div>
          </button>
        </div>
        <div className='w-full lg:w-[40vw] h-[40vh] sm:h-[50vh] lg:h-[60vh] lg:ml-8 bg-cover bg-center rounded bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)]'>
        </div>
      </div>
    </div>
  )
}

export default About
