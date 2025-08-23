import React from 'react'
import bgremove from "../assets/bgremove.png"
const Bgremove = () => {
  return (
    <>
    <div className=' border-red-600 grid sm:grid-cols-12 mt-8 ' >
        <div className='order-2 mt-3 sm:order-none border-amber-300 sm:col-span-6 sm:m-auto text-4xl  sm:[&>p]:text-7xl font-semibold'>
            <p>Remove the</p>
            <p className=' bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>Background from </p>
            <p> images for free.</p>
           <button className="  mt-7 h-[65px] w-[239px] bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 text-transparent  m-auto rounded-3xl text-2xl text-white">
            Generate Images
          </button>
        </div>
        <div className=' border-amber-300 sm:col-span-6'>
            <img src={bgremove} alt="" />
        </div>
    </div>
    </>
  )
}

export default Bgremove