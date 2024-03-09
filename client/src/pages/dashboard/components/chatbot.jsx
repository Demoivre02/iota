import React from 'react'
import ChatBot from 'react-simple-chatbot';
import steps from './steps';
import { Support } from '../support';

function Bot() {

  return (
    <div className='flex justify-between '>
        <ChatBot steps={steps} />
    </div>
  )
}

export default Bot

