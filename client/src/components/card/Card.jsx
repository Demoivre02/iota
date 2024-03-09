import React from 'react'
import {ReactComponent as Arrow} from "../../assets/svg/Vector(3).svg";

export const Card = ({imageUrl, heading, description}) => {
  return (
    <div className='flex flex-col items-center py-6 shadow-2xl md:gap-5 gap-11 lg:gap-11 rounded-xl'>
      <div className='w-[80%]'>
        <img src={imageUrl} alt="" width={500}  height={500}/>
      </div>
      <div className='w-[80%] flex flex-col gap-3 md:gap-1 lg:gap-3'>
        <p className='md:text-2xl text-[20px] md:text-lg lg:text-2xl font-bold text-[#10217D]'>{heading}</p>
        <p>{description}</p>
        <div className='flex items-center gap-3'>
            <p>Learn more</p>
            <Arrow/> 
        </div>
      </div>
    </div>
  )
}


