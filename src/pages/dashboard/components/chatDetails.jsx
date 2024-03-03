import React from "react";
import { useState, useEffect } from "react";
import Message from "./message";
import ChatHeader from "./chatHeader";

function ChatDetails ({chatName,messageArray,deleteFns}){


    return(
        <div className='flex flex-col justify-between h-[90vh] '>
            <ChatHeader chatName={chatName} />
            <div className='self-end pr-[1em]' >
                {messageArray.map((message, index) => <Message key={index} message={message} deleteFn={deleteFns} />)}
            </div>
            
        </div>
    )
}

export default ChatDetails