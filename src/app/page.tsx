import CardComp from '@/Components/card/CardComp'
import CountComp from '@/Section/CountUp'
import Feature from '@/Section/Feature'
import Header from '@/Section/Header'
import Image from 'next/image'
import React from 'react'
import pic from "../../public/images/whychose.png"
import{TbCheckbox} from "react-icons/tb"
const Home = () => {
  const card = [1,2,3,4,5,6]
  return (
    <>
    <Header />
      <div className='my-10'>
        <div>
          <CountComp />
        </div>
    </div>
      <div className='my-10'>
        <div>
          <Feature />
        </div>
      </div>
      {/*   Here Use recently Added  Card  */}
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
      {/*   Here Use recently Added  Card  */}
      {/*  Here  */}
      
      <div className='my-10 drop-shadow-xl flex flex-col lg:flex-row'>
        <div>
          <Image src={pic} alt='Why You Choose us ' width={1000} height={1222} />
        </div>
        <div>
          <p className='text-sm sm:text-lg/relaxed md:text-xl/relaxed'>
            Creating quality urban lifestyles, building stronger communities and creating a safe haven for the general populace is what we do, we give affordabel house for sell, rent and also lease great propertities for any kind of usage. <br /><br />
we give premium offers to all our client and our customer service is top notch
          </p>
          <div className='flex justify-center '>
            <div className=''>
              <TbCheckbox className={ `w-5 h-5 text-pink-700 `} /> <span>WOrld Class</span>
            </div>
            <div className=''>
              <TbCheckbox className={ `w-5 h-5 text-pink-700 `} /> <span>WOrld Class</span>
            </div>
            <div className=''>
              <TbCheckbox className={ `w-5 h-5 text-pink-700 `} /> <span>WOrld Class</span>
            </div>
            <div className=''>
              <TbCheckbox className={ `w-5 h-5 text-pink-700 `} /> <span>WOrld Class</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home