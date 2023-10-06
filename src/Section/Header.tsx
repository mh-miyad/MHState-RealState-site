import HouseSearch from '@/Components/HouseSearch/HouseSearch'
import Image from 'next/image'
import React from 'react'

const Header = () => {

  
  return (
    <>
    
  
  <section
  className="relative bg-[url('https://i.ibb.co/JKk9Q2j/Banner-Image.png')] bg-cover bg-center  bg-no-repeat flex-shrink-0 rounded-xl py-10   drop-shadow-sm max-w-screen-xl "
>
 
  <div
    className="absolute inset-0  rounded-xl bg-gradient-to-r from-white  via-white/50 md:via-slate-100/90 to-blue-400/5  lg:via-white/70  sm:w-full md:max-w-md   lg:max-w-4xl"
  ></div>


  <div
    className="relative mx-auto  px-4 md:py-12 lg:py-20 sm:px-6 lg:flex  lg:items-center md:px-8  "
  >
    <div className="max-w-2xl  ">
            <div className='text-center md:text-start caption-top capitalize'>
               <p className="text-4xl/relaxed  font-bold md:text-5xl/relaxed lg:text-6xl/relaxed mb-4 ">
        Simple way to find <br />
       <span className='text-rose-500 caption-top capitalize font-extrabold'> perfect property </span> 
      </p>

      <p className="  font-bold max-w-2xl text-sm lg:text-xl/normal ">
       We provide a complete service for the sale,<br />
purchase or rental of real estate.
      </p>

     </div>
      
            <div className='w-full '>
                <HouseSearch />
     </div>
      
    </div>
  </div>
</section>
    
    </>
   
  )
}

export default Header