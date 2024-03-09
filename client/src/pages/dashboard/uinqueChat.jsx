import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link,useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { io } from 'socket.io-client';

import { chatsArray } from './utils/chat';
import { ChatFooter } from './components/chatFooter';
import ChatDetails from './components/chatDetails';

const socket = io.connect("http://localhost:3001")


export function UniqueChat() {



  const { chatId } = useParams();
  const location = useLocation()

  const [messages, setMessages] =  useState([])

  const deleteMessage = (index) => {
      const updatedMessages = [...messages];
      updatedMessages.splice(index, 1); // Remove message at the given index
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages); // Update state to re-render component
    };
  
  const joinNewRoom = (roomId) => {
    socket.emit("join_new_room", roomId);
  }
  



  const chat = chatsArray.find(item => item.id == chatId);


  return (
    <div className=''>
        <div className='flex'>
            <div className=' md:fixed h-auto overflow-scroll w-[302px] md:block hidden'>
                <div>
                    <div className='h-[1024px] mt-[1em] '>

                        <div className='ml-[1.5em] border-b-[2px] '>
                            <Link to="/chat">
                                <Icon icon="bx:arrow-back" color="#000" width="20" /> 
                                <span><p className='text-[#1ba9b5]'>Back</p></span>
                            </Link>
                        </div>


                        <div className=' mr-[20px]  px-[1em] '>
                            {chatsArray.map((item)=>{
                            return (
                                <div onClick={() => joinNewRoom(item.id)}>
                                    <Link to={`/chats/${item.id}`}>
                                        <div className='flex gap-[10px] w-[270px] my-[10px] text-[#1ba9b5] my-[10px] hover:bg-[#DFFBFD] p-[4px] rounded-[8px]' role='button' key={item.id}>
                                            <img src='/images/badgs.png' alt='profile photo' className='w-[50px] h-[50px] rounded-full' />
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
            </div>
            
            <div className=' w-[100%] md:ml-[302px] bg-[#DFFBFD] h-screen flex flex-col justify-between  '>
                <div>
                    {chat ? (
                            <div>
                                <ChatDetails 
                                    chatName={chat.name} 
                                    messageArray={messages} 
                                    deleteFns={deleteMessage}
                                    roomId={chat}
                                />
                            </div>

                        ) : (
                            <p>Chat not found.</p>
                    )}
                </div>
                <div className='items-end'>
                    <ChatFooter room={chat}/>
                </div>
                
            </div>
        </div>
    </div>
  );
}






