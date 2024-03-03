import React from 'react'
import Container from './components/container'
import data from './utils/data'
import { useParams, Link } from 'react-router-dom'

export function Emergency() {
  return (
    <div className='bg-[#dffbfd] '>

    <div className='py-[2em] text-center '>
      <p className='text-[30px]'> Current Incidents</p>
    </div>


      {data.map((item,index)=>{
        return (
          <Link to={`/emergency/${index+1}`} >
            <div key={index} >
              <Container 
                name={item.name}
                time={item.time}
                address={item.address}
                date={item.date}
              />
              
            </div>
          </Link>
        )
      })}


    </div>
  )
}
