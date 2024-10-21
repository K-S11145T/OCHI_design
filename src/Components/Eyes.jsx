import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div 
        data-scroll 
        data-scroll-speed="-.6" 
        className='w-full relative h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'
      >
        <div className='absolute w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] top-1/2 left-1/2 flex justify-evenly transform -translate-y-1/2 -translate-x-1/2'>
          {[0, 1].map((index) => (
            <div key={index} className='h-[25vw] w-[25vw] sm:h-[20vw] sm:w-[20vw] md:h-[18vw] md:w-[18vw] lg:h-[15vw] lg:w-[15vw] bg-white flex justify-center items-center rounded-full'>
              <div className={`h-[15vw] w-[15vw] sm:h-[12vw] sm:w-[12vw] md:h-[11vw] md:w-[11vw] lg:h-[9vw] lg:w-[9vw] rounded-full relative ${index === 0 ? 'translate-x-[10%]' : 'translate-x-[-10%]'} translate-y-[10%] bg-black`}>
                <div 
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                  className='h-[5vw] sm:h-[4vw] md:h-[3.5vw] lg:h-[3vh] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full'
                >
                  <div className='h-[5vw] w-[5vw] sm:h-[4vw] sm:w-[4vw] md:h-[3.5vw] md:w-[3.5vw] lg:h-[3vh] lg:w-[3vh] rounded-full bg-white'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Eyes
