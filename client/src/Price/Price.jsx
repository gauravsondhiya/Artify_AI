import React from 'react'
import {plans} from '../assets/assets.js'
import logo from '../assets/favicon.svg'
const Price = () => {
  return (
    <div>
        {/* heading */}

         <div className='text-center mt-7'>
            <p className='text-xl border border-black border-2 rounded-2xl w-[160px] m-auto'>Our Plans</p>
            <p className='text-3xl font-bold mt-2'>Choose the Plan</p>
         </div>
         <div className='grid sm:grid-cols-3 gap-4 '>
            {
                plans.map((e)=>(
                    <div className='shadow-xl rounded-2xl  w-[335px] m-auto h-[400px] p-7  [&>button,p,img]:mt-5'>
                    <img src={logo} alt="" />
                    <p className='text-xl font-bold'>{e.id}</p>
                    <p className='text-2xl text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>{e.desc}</p>
                    <div className='flex gap-1  '>
                        <p className='text-xl font-bold'>Rs.{e.price}</p>
                        <p className=''>/{e.credits}credits</p>
                    </div>
                    
                    <button className='bg-black text-white h-[50px] w-[220px] rounded-2xl'>Get Started</button>
                    </div>
                ))
            }
         </div>

    </div>
  )
}

export default Price
