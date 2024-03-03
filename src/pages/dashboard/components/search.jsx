import React from 'react'
import { Icon } from '@iconify/react';

export  function Search() {
  return (
    <div className='bg-[#fff] w-[300px] h-[50px] py-[15px] px-[20px] md:flex hidden gap-[10px] shadow-sm items-center justify-center rounded-[30px]' >
        <input
            type='text'
            className='border-0  outline-0'
            placeholder='search'
        />
        <Icon icon="material-symbols:search" color="#c3cad9" width="20" />
    </div>
  )
}

