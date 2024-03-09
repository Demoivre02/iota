import React from 'react'
import { Image } from './components'
import Validation from './components/validation'

export const Validate =() =>{
  return (
    <div className="lg:flex block items-center">
        <div  className="lg:block hidden">
            <Image />
        </div>

        <div className="xl:ml-[100px] lg:ml-[40px] lg:mr-[40px] ml-auto mx-auto">
            <Validation/>
        </div>

    </div>
  )
}
