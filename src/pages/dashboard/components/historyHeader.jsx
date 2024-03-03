import React from 'react'
import { Link } from "react-router-dom";

export function HistoryHeader() {
  return (
    <div className='flex items-center justify-between mt-[20px]'>

        <div className='ml-[27px]'>
            <p className='font-mulish font-[600] md:text-[17px] text-[13px]'>Medical History</p>
        </div>  

        <div className='border sm:px-[18px] px-[8px] rounded-[9px] mr-[21px]'>
            <input
             className='md:text-[15px] text-[12px] font-mulish text-[#333]'
             type='date'
             defaultValue="2017-06-01"
            />
        </div>

    </div>
  )
}


export function TableHearders(){

    const headers = ['Appointment' , 'Hospital name' , 'Doctor' , 'Diagnosis' , 'Next Appointment']

    return(
        <div className='flex sm:ml-[27.7px] ml-[9px] mr-[18.4px] justify-between mt-[24px]'  >
            {headers.map((items,index)=>{
                return(
                <p className='font-mulish text-[#AEABD8] font-[400] sm:text-[13px] text-[9px]' key={index}>{items}</p>
                )
            })}
        </div>
    )
}

export function Upcoming(){
    return(
        <div className='sm:mt-0 mt-[15px]'>
            <p className="font-mulish text-[14px] font-400 text-[#333]">You have no upcoming appointments</p>
            <Link to={'/appointment'}>
                <button className="bg-[#1BA9B5]  h-[27px] px-[18px] mt-[27px] rounded-[11.55px] font-mulish text-[13px] font-[400] text-[#fff]">Book an appointment</button>
            </Link>
        </div> 
    )
}

export function Past(){
    return(
        <div className='sm:mt-0 mt-[15px]'>
            <p className="font-mulish text-[14px] font-400 text-[#333]">Please book your first appointment</p>
            <Link to={'/appointment'}>
                <button className="bg-[#1BA9B5]  h-[27px] px-[18px] mt-[27px] rounded-[11.55px] font-mulish text-[13px] font-[400] text-[#fff]">Book an appointment</button>
            </Link>
        </div>
    )
}

