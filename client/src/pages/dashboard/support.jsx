import React from 'react'
import { TopNav, SideNav } from './components'
import Bot from './components/chatbot'
import Faq from './components/FAQ'


export  function Support() {
  return (
    <div>
        <TopNav/>
        <SideNav/>
        <div  className='lg:ml-[262px] md:ml-[70px] sm:ml-[20px] ml-[0px] mr-[20px] min-h-[88vh] px-[1em] '>
            <div className='flex md:flex-row flex-col md:gap-[00px] gap-[50px]  justify-evenly '>
              <Faq/>
              <Bot/>
            </div>
          </div>
    </div>
  )
}
