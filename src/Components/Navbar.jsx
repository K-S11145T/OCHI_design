import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { motion, useScroll } from 'framer-motion'


import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ scroll }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ["Services", "Our Work", "About Us", "Insight"]

  return (
    <motion.div className='text-zinc-300 text-sm fixed z-[99] bg-zinc-950/40 font-["Neue Montreal"] flex items-center justify-between py-3 px-4 md:px-7 w-full h-[10vh]'>
      <Logo />

      {windowWidth > 768 ? (
        <>
          <div className='hidden md:flex justify-evenly gap-7'>
            {navItems.map((item, index) => (
              <a key={index} href="">{item}</a>
            ))}
          </div>

          <div className='hidden md:block'>
            <a href="">Contact Us</a>
          </div>
        </>
      ) : (
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      )}

      {isOpen && windowWidth <= 768 && (
        <div className='absolute top-[10vh] left-0 w-full bg-zinc-950/90 py-4'>
          {navItems.map((item, index) => (
            <a key={index} href="" className='block py-2 px-4'>{item}</a>
          ))}
          <a href="" className='block py-2 px-4'>Contact Us</a>
        </div>
      )}
    </motion.div>
  )
}

export default Navbar
