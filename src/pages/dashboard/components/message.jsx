import React from 'react'
import { Icon } from '@iconify/react';

export default function Message({message,deleteFn}) {

    function getFormattedTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits for minutes
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      
        return `${formattedHours}:${minutes}${ampm}`;
      }
      
      const currentTime = getFormattedTime();

      function onDelete (){
        deleteFn()
      }
      

  return (
    <div className='w-fit px-[.8em] py-[.5em] bg-[#fff] rounded-[8px] flex flex-col gap-[5px] my-[2px] max-w-[200px] break-words	 '>
        <p className='text-[12px] font-[600]'> {message} </p>
        <small className='font-[400] text-[10px]  self-end '>{currentTime}</small>
        <div onClick={onDelete} className='w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center '>
            <Icon icon="iconamoon:trash-light" color="#1ba9b5" width="15" />
        </div>
    </div>
  )
}
