import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    ChakraProvider
  } from '@chakra-ui/react'

export  function Slider() {

  const items=[
    {id: 1 , name: " Dashboard", icon : <Icon icon="material-symbols:home-rounded" color='#fff' width="30" /> ,  link: '/dashboard'},
    {id: 2, name: " Appointments", icon : <Icon icon="bxs:chat" color='#fff' width="30" /> , link: '/appointment'},
    {id: 3, name: " Chat", icon :<Icon icon="material-symbols:chat" color='#fff' width="30" /> ,link: '/chat'},
    {id: 4 , name: " Medical History", icon :<Icon icon="material-symbols:event-note" color='#fff' width="30" />, link: '/history'},
    {id: 5 , name: " Profile", icon : <Icon icon="mdi:user-circle" color="#fff" width="30" />, link: '/profile'},
    {id: 6 , name: " Support  & faq", icon : <Icon icon="bx:support" color="#fff" width="30" />,link: '/support'},
    {id: 7 , name: " Logout", icon : <Icon icon="ic:twotone-log-out"color="#fff" width="30" />, link: '/logout'},
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
    <>
        <div onClick={onOpen}  className='w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-sm mr-[30px]'>
            <Icon icon="fontisto:nav-icon-grid" color="#c3cad9" width="20" />
        </div>
        <ChakraProvider>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerBody className='bg-[#1ba9b5]'>
                    {
                    items.map((item)=>{
                      return (
                        <Link key={item.id} to={item.link}>
                            <div className='flex items-center h-[58.56px] rounded-[10px] ml-[15px] mt-[10px]  text-center'>
                                <div className=''>
                                    {item.icon} 
                                </div>
                               
                                <p className='ml-[5px] w-[100px] font-mulish text-[13px] font-[700] text-[#fff] text-left'>{item.name}</p>
                            </div>
                        </Link>
                      )
                    })
                  }
                </DrawerBody>
                </DrawerContent>
            </Drawer>
      </ChakraProvider>
    </>
  )
}
