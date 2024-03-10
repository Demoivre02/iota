import React,{useState,useEffect} from "react";
import io from 'socket.io-client'

import Message from "./message";
import ChatHeader from "./chatHeader";
import { chatsArray } from "../utils/chat";
import { addMessage , getMessageList } from "./messageList";

const socket =  io("https://iota-2.onrender.com/") 


function ChatDetails ({chatName,deleteFns,roomId}){

    const room = roomId.id
    const messageList = getMessageList();
    console.log(messageList);

    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            console.log(data);
            addMessage(data)
        })
    },[socket])


    return(
        <div className='flex flex-col justify-between h-[90vh]'>
            <ChatHeader chatName={chatName} />
            <div className='self-end pr-[1em]' >
                {/* <p>{socketMessage.message}</p> */}
                {messageList.map((content)=>{
                    return (
                        <Message message={content.message?.message} deleteFn={deleteFns} />
                    )
                })}
              
            </div>
            
        </div>
    )
}

export default ChatDetails