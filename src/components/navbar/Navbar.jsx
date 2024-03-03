import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as MenuOpenIcon} from "../../assets/svg/menuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../../assets/svg/menuClose.svg";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className='mx-4 mt-6 px-3 py-3 lg:mx-24 lg:mt-8 flex justify-between items-center border rounded-3xl md:px-[42px] md:py-[28px]'>
        <div className='text-base font-medium font-poppins lg:w-1/4'>
            DavsHealth
        </div>
        <div className="items-center justify-around flex-grow hidden lg:flex">
          <div className='flex flex-col gap-12 lg:flex-row'>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Home</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>About Us</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Services</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Blog</p>
          </div>
          <div className='font-medium font-poppins'>
              <Link to='/login'>
                  <button className='px-8 py-2 border border-[#000] rounded-xl text-black'>Login</button>
              </Link>
              <Link to='/signup'>
                  <button className='ml-4 px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5]'>Register</button>
              </Link>
          </div>
        </div>
        <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
          {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
        </div>
      </nav>
      <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-slate-200 mt-3 rounded-xl mx-4`}>
          <div className='flex flex-col items-center gap-5'>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Home</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>About Us</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Services</p>
              <p className='hover:text-[#1BA9B5] cursor-pointer'>Blog</p>
          </div>
          <div className='flex gap-4 font-medium font-poppins'>
              <Link to='/login'>
                  <button className='ml-6 px-8 py-2 border border-[#000] rounded-xl text-black'>Login</button>
              </Link>
              <Link to='/signup'>
                  <button className='px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5]'>Register</button>
              </Link>
          </div>
      </div>
    </div>
  )
}

