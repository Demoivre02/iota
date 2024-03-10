import React from 'react'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { TopNav, SideNav } from './components'
import { chatsArray } from './utils/chat'


const socket = io.connect("https://iota-2.onrender.com/")

export function Chat() {

  const joinRoom = (roomId) => {
    socket.emit("join_room", roomId);
    console.log(roomId);
  }
  

  return (
    <div>
        <TopNav/>
        <SideNav/>
        <div  className='lg:ml-[262px] md:ml-[70px] sm:ml-[20px] ml-[0px] mr-[20px] min-h-[88vh] px-[1em] '>
          <div>
            {chatsArray.map((item)=>{
              return (
                <div onClick={() => joinRoom(item.id)}>
                  <Link to={`/chats/${item.id}`}  >
                    <div className='flex gap-[10px] w-[300px] my-[10px] text-[#1ba9b5] my-[10px] hover:bg-[#DFFBFD] p-[4px] rounded-[8px]' role='button' key={item.id}>
                      <img src='images/badgs.png' alt='profile photo' className='w-[50px] h-[50px] rounded-full' />
                      <div>
                        <p className='text-[16px] font-[600]'>{item.name} </p>
                        <p className='text-[12px] italic'>{item.message}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
    </div> 
  )
}
