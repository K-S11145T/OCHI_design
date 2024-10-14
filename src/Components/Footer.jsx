import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed="-0.1"  className='w-full rounded-tl-3xl rounded-tr-3xl px-20 pt-24 pb-5 flex  h-screen bg-zinc-200'>
      <div className='w-1/2 flex flex-col justify-between '>
        <h1 className='text-7xl text-zinc-900 font-bold tracking-tighter'>EYE- <br />OPENING</h1>

        <Logo />
      </div>
      <div className='w-1/2 '>
        <h1 className='text-7xl text-zinc-900 font-bold tracking-tighter'>PRESENTATIONS</h1>

        <div className='flex flex-col mt-5'>
          <h1>S:</h1>
          <div className='flex flex-col mt-2'>
            {["Instagram", "Behance", "Facebook", "LinkedIn"].map((i, e) => {
              return <a key={e} href=''>{i}</a>
            })}
          </div>


        </div>
        <div className='mt-5 flex justify-between items-center'>

          <div className='flex flex-col '>
            <h1>L:</h1>
            <a href='' className='mt-2'>202-1965 W 4th Ave <br />
              Vancouver, Canada</a>
            <br />
            <a className='mt-2' href="">30 Chukarina St <br />
              Lviv, Ukraine</a>
          </div>

          <div>
            <h1>M:</h1>
            <div className='flex flex-col mt-2 mr-10'>
              { ["Home" ,"Services","Our work","About us","Insights","Contact us"].map((i , e)=>{
                return <a key={e} href=''>{i}</a>
              })}
            </div>
          </div>

        </div>

        <div className='flex flex-col mt-5'>
          <h1>E</h1>
          <a href="">hello@ochi.design</a>
        </div>


      </div>
    </div>
  )
}

export default Footer
