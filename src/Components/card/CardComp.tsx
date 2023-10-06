'use client'
import { Card } from "flowbite-react"
import Image from "next/image"
import React from 'react'

const CardComp = () => {
  return (
      <>
          <div className="max-w-xl drop-shadow-xl">
              <Card >
                  <div className="flex gap-4 sm:gap-5 items-center">
                        <Image src={`/images/card-image.png`} alt="Card Image " width={128} height={128} quality={100} className="w-32" />
                  <div>
                          <p className="font-bold text-sm sm:text-lg/tight text-slate-700">209B Allen Jaja Street, Lagos Junction.</p>
                          <div className="flex  justify-between my-3 text-gray-500">
                              <p>10 Bedroom </p>
                              <p>150M </p>
                              <p>3 Garage</p>
                          </div>
                          <div className="flex  justify-between items-center  ">
                              <p className="text-sm ">Posted by Simeon</p>
                              <button className="bg-rose-600 text-white px-4 py-1.5 rounded-lg drop-shadow-2xl shadow-red-500/20 shadow-xl font-bold">$ 4550.5</button>
                          </div>
                  </div>
                </div>
      </Card>
          </div>
      
      </>
  )
}

export default CardComp