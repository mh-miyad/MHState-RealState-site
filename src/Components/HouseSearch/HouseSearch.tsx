import React from 'react'

import RangeComp from '../Range/Range'

const HouseSearch = () => {
  return (
      <div className='my-4 w-full  '>
          <div className='bg-white border border-black/20  rounded-3xl'>
              <form className='py-5 flex justify-between px-3 flex-col md:flex-row '>
                  <div className='flex flex-col gap-5 '>
                       <div className='flex gap-5 justify-between items-center  '>
                        <select name="" id="" className='border rounded-full border-rose-500 text-center focus:ring-1 focus:ring-rose-500 focus:border-none transition-all duration-150 ease-out cursor-pointer drop-shadow-lg bg-gray-100/30 shadow-sm text-slate-600 font-bold'>
                      <option value="rent" className='bg-white text-black'>Rent</option>
                      </select>
                      <input type="text" placeholder='Enter Location ' className='w-full  rounded-full shadow-2xl border  border-rose-500 text-center focus:ring-1 focus:ring-rose-500 focus:border-none transition-all duration-150 ease-out cursor-text drop-shadow-lg bg-gray-100/30  text-slate-600 font-bold' />
                        <select name="" id="" className='border rounded-full border-rose-500 text-center focus:ring-1 focus:ring-rose-500 focus:border-none transition-all duration-150 ease-out cursor-pointer drop-shadow-lg bg-gray-100/30 shadow-sm text-slate-600 font-bold'>
                      <option value="home" className='bg-white text-black'>Home</option>
                  </select>
                </div>
                       <div className='flex gap-5 justify-between items-center'>
                        <select name="" id="" className='border rounded-full border-rose-500 text-center focus:ring-1 focus:ring-rose-500 focus:border-none transition-all duration-150 ease-out cursor-pointer drop-shadow-lg bg-gray-100/30 shadow-sm text-slate-600 font-bold'>
                      <option value="rent" className='bg-white text-black'>Rent</option>
                          </select>
                          {/* input */}
                      
                          <RangeComp />
                          {/* input */}
                        <select name="" id="" className='border rounded-full border-rose-500 text-center focus:ring-1 focus:ring-rose-500 focus:border-none transition-all duration-150 ease-out cursor-pointer drop-shadow-lg bg-gray-100/30 shadow-sm text-slate-600 font-bold'>
                      <option value="home" className='bg-white text-black'>Rooms</option>
                  </select>
                </div>
                  </div>
                  <div className='px-8 
                 '>
                      <div className='text-center md:border-l-2  border-rose-500'>
                             <p className='text-xl font-semibold text-gray-600'>723</p> <span className='text-xs uppercase font-semibold'> Result </span>
                      </div>
            <div className='text-center'>
               <button className='px-5 py-2 bg-rose-600 text-white  drop-shadow-2xl  rounded-full shadow-xl shadow-red-500/30 mx-auto'>Search</button>
                     </div>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default HouseSearch