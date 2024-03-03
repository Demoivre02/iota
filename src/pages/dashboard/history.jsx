import React from 'react'
import { array } from './components/medicalArray'
import {TopNav , SideNav, HistoryHeader , TableHearders , TableBody } from './components'

export  function History() {
  return (
    <div>
        <TopNav/>
        <SideNav/>
        <div  className='lg:ml-[302px] md:ml-[70px] ml-[20px] mr-[20px]'>
            <p className='font-mulish font-[600] md:text-[17px] text-[13px]'>Medical History</p>
            {
                array.slice(0,1).map((item, index)=>{
                    return(
                        <div key={index} className='mt-[20px]'>
                            <div className='font-mulish text-[500] mt-[10px]'> 
                                <span>Name:</span> {''}  
                                <p className='text-[#999] md:text-[14px] text-[12px]' >{item.name}</p> 
                            </div>
                            <div className='font-mulish text-[500] mt-[10px]'>
                                <span>Email address:</span> {''} 
                               <p className='text-[#999] md:text-[14px] text-[12px]' >{item.email}</p> 
                            </div>
                            <div className='font-mulish text-[500] mt-[10px]'> 
                                <span>Phone number:</span> {''} 
                                <p className='text-[#999] md:text-[14px] text-[12px]' >{item.phone}</p> 
                            </div>
                            <div className='font-mulish text-[500] mt-[10px]'> 
                                <span>Gender: </span>{''} 
                                 <p className='text-[#999] md:text-[14px] text-[12px]' >{item.gender}</p> 
                            </div>
                        </div>
                    )
                })
            }

           <div className='lg:w-[772px] sm:w-[96%] w-[100%] border-[.5px] border-[#333] rounded-[10px] mt-[26px] py-[20px]'>
                <TableHearders />
                <TableBody/>
           </div>
        </div>
    </div>
  )
}
