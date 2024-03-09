import React, {useEffect} from 'react'
import { array } from './medicalArray'
import {HistoryHeader , TableHearders } from './historyHeader'
import { TableValues } from './tableValues'

export function HistotyTable() {

  return (
    <div className='lg:w-[772px] sm:w-[96%] w-[100%] sm:h-[230px] h-auto border-[.5px] border-[#333] rounded-[10px] mt-[26px] py-[10px] mr-[20px]'>
        <HistoryHeader />
        <TableHearders />
        <div className=' sm:ml-[27.7px] ml-[5px] sm:mr-[18.4px] mr-[5px] mt-[24px]' >
            {array.slice(0,3).map((item)=>{
                return(
                    <div className='flex justify-between mt-[10px] items-center'>
                        <p className='text-[#333] w-[90px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.Date}</p>
                        <p className='text-[#333] ml-[10px] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.Hospital}</p>
                        <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.specialist || item.doctor}</p>
                        <p className='text-[#333] w-[120px] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >{item.department}</p>
                        <p className='text-[#333] font-mulish font-[500] sm:text-[13px] text-[9px] text-center' >To be determined</p>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}
