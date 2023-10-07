'use client'
import React from 'react'
import CountUp from "react-countup"
const CountComp = () => {
  return (
    <div>
      <h2 className='text-center sm:text-4xl mb-5 drop-shadow-xl  font-extrabold text-slate-500'> Our Work </h2>
      <div className='flex justify-center items-center px-2  gap-3'>
       
        <div className='border-e-4 p-1 sm:px-5 border-red-500 '>
          <span className='text-md drop-shadow-2xl font-extrabold text-rose-600 sm:text-4xl lg:text-6xl lg:font-bold'><CountUp  start={10} end={1000}/> +</span>
          <p className='text-sm drop-shadow-lg text-slate-500 font-bold lg:text-3xl sm:text-lg '>Happy Client</p>
        </div>
        <div className='border-e-4 p-1 sm:px-5 border-red-500 '>
          <span className='text-md drop-shadow-2xl font-extrabold text-rose-600 sm:text-4xl lg:text-6xl lg:font-bold'><CountUp  start={10} end={1000}/> +</span>
          <p className='text-sm drop-shadow-xl text-slate-500 font-bold lg:text-3xl sm:text-xl '>Premium Houses</p>
        </div>
        <div className='border-e-4 p-1 sm:px-5 border-red-500 '>
          <span className='text-md drop-shadow-2xl font-extrabold text-rose-600 sm:text-4xl lg:text-6xl lg:font-bold'><CountUp  start={10} end={78}/> +</span>
          <p className='text-sm drop-shadow-xl text-slate-500 font-bold lg:text-3xl sm:text-xl '>Get Awards</p>
        </div>
        <div className='border-e-4 p-1 sm:px-5 border-red-500 '>
          <span className='text-md drop-shadow-2xl font-extrabold text-rose-600 sm:text-4xl lg:text-6xl lg:font-bold'><CountUp  start={10} end={1245}/> +</span>
          <p className='text-sm drop-shadow-xl text-slate-500 font-bold lg:text-3xl sm:text-xl '>Reliable Clients</p>
        </div>
      </div>
        <p className='text-4xl my-10 text-center drop-shadow-2xl font-bold  text-slate-600'>We are available in different <br />
cities across the globe.</p>

    </div>
  )
}

export default CountComp