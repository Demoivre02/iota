import React from 'react'
import { array } from './medicalArray'

export function TableValues() {
  return (
    <div className=' sm:ml-[27.7px] ml-[5px] sm:mr-[18.4px] mr-[5px] mt-[24px]' >
        {array.map((item,index)=>{
            return(
            <div key={index} className='flex justify-between mt-[10px] items-center'>
                <p className='text-[#333] w-[90px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.Date}</p>
                <p className='text-[#333] ml-[10px] w-[120px] font-mulish font-[500] md:text-[13px] text-[9px] text-center' >{item.Hospital}</p>
                <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.specialist || item.doctor}</p>
                <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.department}</p>
                <p className='text-[#333] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >To be determined</p>
            </div>
            )
        })}
    </div>
  )
}

// export function UpComingValues(){
//   return(

//   ) 
// }

export function UpComingValues(){
  return(
    <div className=' sm:ml-[27.7px] ml-[5px] sm:mr-[18.4px] mr-[5px] mt-[24px]' >
      {array.slice(0,4).map((item,index)=>{
          return(
          <div key={index} className='flex justify-between mt-[10px] items-center'>
              <p className='text-[#333] w-[90px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.Date}</p>
              <p className='text-[#333] ml-[10px] w-[120px] font-mulish font-[500] md:text-[13px] text-[9px] text-center' >{item.Hospital}</p>
              <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.specialist || item.doctor}</p>
              <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.department}</p>
              <p className='text-[#333] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >To be determined</p>
          </div>
          )
      })}
  </div>
  )
}
