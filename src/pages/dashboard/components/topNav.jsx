import React from 'react'
import { Slider } from './slider'
import {Search} from './search'

export  function TopNav() {
  return (
    <div className='relative mt-[6em] sm:ml-[4em] ml-[10px]' >
        <div className='flex justify-between items-center sm:w-[90%] w-[100%] mx-auto fixed z-[666] bg-[#fff] top-0'>
          <div className='flex items-center justify-center'>
              <Slider />
              <img src='images/DavsHealth.png' alt='logo' />
          </div>

          <Search/>

          <div>
              <img className='sm:w-auto w-[80%]' src='images/badgs.png' alt='notification' />
          </div>
        </div>
    </div>
  )
}
