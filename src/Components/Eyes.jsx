import React, { useEffect, useState } from 'react'

const Eyes = () => {

  const [rotate, setrotate] = useState(0)
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180)


    })
  })
  return (
    <div className=' h-screen w-full overflow-hidden '>
      <div data-scroll data-scroll-speed="-.6" className='w-full relative h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>

        <div  className='absolute  w-[50%]  top-1/2 left-1/2 flex justify-evenly translate-y-[-50%] translate-x-[-50%]'>
          <div className='h-[15vw] w-[15vw] bg-white justify-center flex  items-center rounded-full'>
            <div  className='h-[9vw] rounded-full relative  translate-x-[10%] translate-y-[10%] w-[9vw] bg-black '>
              <div style={{ transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className='h-[3vh] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]  w-full'>    <div className='h-[3vh] w-[3vh] rounded-full bg-white '></div>
              </div>

            </div>

          </div>
          <div className='h-[15vw] w-[15vw] bg-white justify-center flex  items-center rounded-full'>
            <div className='h-[9vw] rounded-full relative translate-x-[-10%] translate-y-[10%] w-[9vw] bg-black '>
              <div style={{ transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className='h-[3vh] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full'>
                <div className='h-[3vh] w-[3vh] rounded-full bg-white '></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Eyes
