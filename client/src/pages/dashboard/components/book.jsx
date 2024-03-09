import React from 'react'
import { Switcher } from './switcher'

export function Book() {
  return (
    <div className='lg:w-[772px] sm:w-[96%] w-[100%] sm:h-[337px] h-[250px] border-[.5px] border-[#333] rounded-[10px] mt-[26px] mr-[20px]'>
        <div className='ml-[20px]'>
            <p className='font-mulish font-[600] sm:text-[17px] text-[14px] mt-[20px]'>Appointments</p>
        </div>  
        <Switcher/>
    </div>
  )
}
