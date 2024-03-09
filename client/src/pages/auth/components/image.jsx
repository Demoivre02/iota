import React from 'react'

export function Image() {
  return (
    <div className='relative'>
        <div className='bg-[#000] opacity-[0.2] absolute top-0 left-0 w-full h-full'></div>
        <div className=' absolute bottom-0 mb-[42px] ml-[27px]  z-[1]'>
            <p className='font-mulish text-[22px] text-[#fff] font-[600]'>Our platform allows you to search for doctors and hospitals based on specialty,
             location, and availability.</p>
        </div>
        <img className='h-screen' src='/images/Rectangle98.png' alt='image' />
    </div>
  )
}
