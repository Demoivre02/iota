import React , {useState} from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export  function SideNav() {


    const items=[
        {id: 1 , name: " Dashboard", icon : <Icon icon="material-symbols:home-rounded" color='#1ba9b5' width="30" /> ,  link: '/dashboard'},
        {id: 2, name: " Appointments", icon : <Icon icon="bxs:chat" color='#1ba9b5' width="30" /> , link: '/appointment'},
        {id: 3, name: " Chat", icon :<Icon icon="material-symbols:chat" color='#1ba9b5' width="30" /> ,link: '/chat'},
        {id: 4 , name: " Medical History", icon :<Icon icon="material-symbols:event-note" color='#1ba9b5' width="30" />, link: '/history'},
        {id: 5 , name: " Profile", icon : <Icon icon="mdi:user-circle" color="#1ba9b5" width="30" />, link: '/profile'},
        {id: 6 , name: " Support  & faq", icon : <Icon icon="bx:support" color="#1ba9b5" width="30" />,link: '/support'},
        {id: 7 , name: " Logout", icon : <Icon icon="ic:twotone-log-out"color="#1ba9b5" width="30" />, link: '/logout'}
    ]
    
  return (
    <div className='w-[302px] fixed lg:block hidden'>
            {
                items.map((item)=>{
                    return (
                        <Link key={item.id} to={item.link}>
                            <div className='flex items-center justify-center w-[272px] h-[56.56px] hover:bg-[#DFFBFD] rounded-[10px] ml-[15px] mt-[10px]  text-center'>
                                <div className=''>
                                    {item.icon} 
                                </div>
                               
                                <p className='ml-[19px] w-[100px] font-mulish text-[13px] font-[700] text-[#1ba9b5] text-left'>{item.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
    </div>
  )
}
