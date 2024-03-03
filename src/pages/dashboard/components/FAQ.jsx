import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'


function Faq() {
  return (
    <div className='md:w-[50%]'>
        <p className='sm:text-[20px] text-[16px] font-[500]'>Support</p>
        <div>
            <p className='sm:text-[16px] mt-[2em] text-[14px] font-[500]'> How to reach us</p>
            <ul className='sm:text-[14px] text-[12px] mt-[2em]'>
                <li className='mt-[10px] text-[14px]' >Email:  <a href='mailto:davidtimilehin739@gmail.com.com'>davidtimilehin739@gmail.com </a></li>
                <li className='mt-[10px] text-[14px]' >Phone <a href='tel:+2349031953494'>+2343901953494</a></li>
                <li className='mt-[10px] text-[14px]' >ChatBot: Our Chatbot is right beside you, always ready to answer your questions</li>
            </ul>
        </div>


        <div className='mt:mt-[5em] mt-[2em] ' >
            <p className='sm:text-[20px] text-[16px] font-[500]'>FAQ</p>


            {data.map((item)=>{
                return (
                    <Accordion allowToggle key={item.id} >
                        <AccordionItem className='mt-[10px]'>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                                    {item.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}  fontSize={"14px"}>
                                {item.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                )
            })}

            
        </div>
       
    </div>
  )
}

export default  Faq


const data = [
    {
      id: 1,
      question: "How do I schedule an appointment with a healthcare provider?",
      answer: "To schedule an appointment, log in to your account and navigate to the 'Appointments'section. Choose your preferred provider, date, and time, then confirm your appointment."
    },
    {
      id: 2,
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment by logging in to your account and accessing the 'Dashboard' section. Select the appointment you wish to cancel or reschedule and follow the prompts."
    },
    {
      id: 3,
      question: "s my personal health information secure?", 
      answer: "Yes, we take the security and privacy of your personal health information seriously. We employ industry-standard security measures to protect your data and comply with all relevant regulations."
    },
    {
      id: 4,
      question: " How do I update my personal information? ",
      answer: "You can update your personal information by logging in to your account and accessing the'Profile' section. From there, you can edit your contact details, insurance information, and more."
    },
    {
      id: 5,
      question: " How do I contact customer support?",
      answer: "If you have any further questions or need assistance, please don't hesitate to contact our customer support team. You can reach us via email, phone, or chat during our support hours."
    }
  ];
  

  