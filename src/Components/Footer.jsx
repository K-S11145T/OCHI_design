import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed="-0.1" className='w-full rounded-tl-3xl rounded-tr-3xl px-4 sm:px-8 md:px-16 lg:px-20 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-5 flex flex-col lg:flex-row h-auto lg:h-screen bg-zinc-200'>
      <div className='w-full lg:w-1/2 flex flex-col justify-between mb-8 lg:mb-0'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 font-bold tracking-tighter'>EYE- <br />OPENING</h1>

        <div className='mt-8 lg:mt-0'>
          <Logo />
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 font-bold tracking-tighter mb-8'>PRESENTATIONS</h1>

        <div className='flex flex-col mb-8'>
          <h2 className='text-lg font-semibold mb-2'>S:</h2>
          <div className='flex flex-wrap gap-4'>
            {["Instagram", "Behance", "Facebook", "LinkedIn"].map((i, e) => (
              <a key={e} href='' className='hover:underline'>{i}</a>
            ))}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between mb-8'>
          <div className='mb-8 sm:mb-0'>
            <h2 className='text-lg font-semibold mb-2'>L:</h2>
            <a href='' className='block hover:underline mb-4'>
              202-1965 W 4th Ave <br />
              Vancouver, Canada
            </a>
            <a href='' className='block hover:underline'>
              30 Chukarina St <br />
              Lviv, Ukraine
            </a>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-2'>M:</h2>
            <div className='flex flex-col'>
              {["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((i, e) => (
                <a key={e} href='' className='hover:underline mb-2'>{i}</a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-lg font-semibold mb-2'>E:</h2>
          <a href="" className='hover:underline'>hello@ochi.design</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
