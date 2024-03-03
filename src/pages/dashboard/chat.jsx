import React from 'react'
import { Link } from 'react-router-dom'
import { TopNav, SideNav } from './components'
import { chatsArray } from './utils/chat'

export function Chat() {
  return (
    <div>
        <TopNav/>
        <SideNav/>
        <div  className='lg:ml-[262px] md:ml-[70px] sm:ml-[20px] ml-[0px] mr-[20px] min-h-[88vh] px-[1em] '>
          <div>
            {chatsArray.map((item)=>{
              return (
                <Link to={`/chats/${item.id}`}>
                  <div className='flex gap-[10px] w-[300px] my-[10px] text-[#1ba9b5] my-[10px] hover:bg-[#DFFBFD] p-[4px] rounded-[8px]' role='button' key={item.id}>
                    <img src='images/badgs.png' alt='profile photo' className='w-[50px] h-[50px] rounded-full' />
                    <div>
                      <p className='text-[16px] font-[600]'>{item.name} </p>
                      <p className='text-[12px] italic'>{item.message}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
    </div> 
  )
}
