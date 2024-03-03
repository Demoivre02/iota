import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

function ChatHeader ({chatName}){
    return(
        <div className='relative'>
            <div className='w-[100%] px-[18px] py-[4px] bg-[#fff] shadow-lg flex justify-between items-center fixed z-[222] '>

                <div className='flex gap-[25px] items-center'>

                    <div className='md:ml-[1.5em] '>
                        <Link to="/chat">
                            <Icon icon="bx:arrow-back" color="#1ba9b5" width="20" /> 
                        </Link>
                    </div>

                    <div className='flex gap-[10px]'>
                        <img src='/images/badgs.png' alt='profile photo' className='w-[50px] h-[50px] rounded-full' />
                    </div>
                    <div className='flex gap-[10px]'>
                    <p className='font-[500]'>{chatName}</p>
                    </div>
                </div>

                <div className='flex gap-[5px] items-center md:w-[30%]  justify-end md:mr-[20em]  ' >
                    <div className='w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center '>
                        <Icon  icon="mynaui:video" color="#1ba9b5" width="25" />
                    </div>

                    <div className='w-[30px] h-[30px] rounded-full bg-[#fff] hover:bg-[#DFFBFD] flex justify-center items-center '>
                        <Icon icon="fluent:call-32-regular" color="#1ba9b5" width="25" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChatHeader