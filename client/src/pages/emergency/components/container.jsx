import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import Payment from '../../donation/paystack';


function Container({date, time,address,name}) {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      // Update the current date only once when the component mounts
      const interval = setInterval(() => {
        setCurrentDate(new Date()); // Update the date every 1000 ms (1 second)
      }, 1000);
  
      // Clean up function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);

  return (
    <div  role='button'  className='px-[1em] z-[-1] py-[.8em] bg-[#FEFFFE] rounded-[12px]  shadow-lg  hover:bg-[#eee] transition md:w-[550px] w-[90%] mx-auto  my-[10px] isolate '>
        <div className='flex justify-between items-center '>
           <div className='w-[100px] h-auto rounded-[18px] p-4 bg-[#eceef9] '>
                <time className='text-[20px] font-[700]'>{time}</time>
                <p className='text-[12px]'>{date}</p>
           </div>

           <div>
                <p className='md:text-[30px] text-[20px] text-[#1b2543] font-[700]'>{name}</p>
                <div className='flex items-center'>
                    <div><Icon icon="mdi:location" color='black'/></div>
                    <address className='text-[14px] font-[400] '>{address}</address>
                </div>
                
           </div>
            
        </div>
        {/* button */}
        <div className='flex justify-between mt-[1em]' >

            <div className='relative z-[2000] '>
                <Payment/>
            </div>

           
            <Link to={"/donate"}>
                <div className=''>
                    <button className='bg-[red] py-[4px] px-[4px] rounded-[8px] text-[#fff] flex items-center gap-[10px]'>
                        <p className='text-[#fff] text-[14px] font-[600]' >Donate blood</p>
                      
                        <div><Icon icon="noto:drop-of-blood"  /></div>
                    </button>

                </div>
                
            </Link>
            
        </div>
    </div>
  )
}

export default Container