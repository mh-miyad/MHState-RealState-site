'use client'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import pic from "../../public/images/features.png"
import { Button } from 'flowbite-react'
const Feature = () => {
    const array = [1,2,3,4,5,6,7,8,9,10]
  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
          
          {
              array.map((e, i) => {
                  return (
                      <div key={i}>
                             <div className='max-w-xl mx-auto'>
              <Card className=' drop-shadow-xl'>
                  <div>
                      <Image src={pic} alt='' width={1000} height={1200} className='drop-shadow-2xl' />
                      <div className='flex justify-between md:px-10 mt-2'>
                          <p className='text-xl md:text-3xl text-slate-500'><span className='text-slate-900 font-extrabold'>Kigali,</span> Kenya</p>
                          <Button color='failure' size={'xs'}>Explore</Button>
                      </div>
                  </div>
              </Card>
</div>
                      </div>
                  )
              })
}
       

    </div>
  )
}

export default Feature