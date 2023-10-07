import CardComp from '@/Components/card/CardComp'
import Header from '@/Section/Header'
import React from 'react'

const Home = () => {
  const card = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    <Header />
    
      <div className='my-20 px-5 md:px-10'>
        <div>
          <h2 className='text-xl font-bold drop-shadow-2xl md:text-4xl'>Recently Added</h2>

        </div>

        <div className='mt-5 mb-10 flex justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
              card.map((card, index) => {
                return (
                   <div key={index}>
                 <CardComp />
                </div>
                )
              })
            }
         </div>
        </div>
    </div>
    </>
  )
}

export default Home