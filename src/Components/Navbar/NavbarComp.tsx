"use client"
import React, { useState } from 'react'
import {BiLogoFacebook,BiLogoInstagram,BiLogoWhatsapp,BiLogoLinkedin} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import { Dropdown, Navbar ,Avatar } from 'flowbite-react';
import Link from 'next/link';
import { Button } from '../ui/button';
const NavbarComp = () => {
 const [user,setUser] = useState(false)

  return (
      <>
          <div className='my-2 flex  justify-between px-4 items-center '>
              <div className='flex gap-3'>
                  <BiLogoFacebook className='text-red-500 w-5 h-5' />
                  <BiLogoInstagram className='text-red-500 w-5 h-5'/>
                  <AiOutlineTwitter className='text-red-500 w-5 h-5' />
                  <BiLogoLinkedin className="text-red-500 w-5 h-5 " />
              </div>
              <div>
                  <a href='+8801291029120' className='flex items-center'>
                      <BiLogoWhatsapp className="text-red-500 w-5 h-5 " />
                      +8801291029120
                  </a>
              </div>
          </div>
       <Navbar
      fluid
      rounded
     className='bg-transparent backdrop-blur-xl inset-0 '>
      <Navbar.Brand href="https://flowbite-react.com">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold ">
          M<span className='text-2xl font-extrabold mx-1 shadow-2xl shadow-red-500 text-red-400 drop-shadow-xl font-sans'>H</span>STATE
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
                  {
                      user ? <>
                       <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
        
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
                          </Dropdown></> : <>
                              <Button className='bg-red-600 hover:bg-rose-500'>
                                  LogIn
                      </Button>
                          </>
       }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          
          href="/"
        >
          <p className='uppercase hover:underline underline-offset-8 dark:text-white decoration-red-500 transition-all duration-200 ease-in-out delay-100 '>
            Home
          </p>
        </Link>
        <Link
          
          href="/agents"
        >
          <p className='uppercase hover:underline underline-offset-8 dark:text-white decoration-red-500 transition-all duration-200 ease-in-out delay-100 '>
            Agents
          </p>
        </Link>
        <Link
          
          href="/property"
        >
          <p className='uppercase hover:underline underline-offset-8 dark:text-white decoration-red-500 transition-all duration-200 ease-in-out delay-100 '>
            Properties
          </p>
        </Link>
        <Link
          
          href="/blog"
        >
          <p className='uppercase hover:underline underline-offset-8 dark:text-white decoration-red-500 transition-all duration-200 ease-in-out delay-100 '>
            Blog
          </p>
        </Link>
      
      </Navbar.Collapse>
    </Navbar>
      </>
  )
}

export default NavbarComp