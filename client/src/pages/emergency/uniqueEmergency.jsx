import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

import incidents from './utils/information'
import Payment from '../donation/paystack';

export  function UniqueEmergency() {

    const {uniqueId} = useParams()

  return (
    <div className='pt-[1em] flex justify-center items-center bg-[#dffbfd] min-h-[100vh] '>
        {incidents.map((item) => {
            if (uniqueId == item.id) {
            return (
                <div key={item.id} className='text-center'>
                    <p className=' md:text-[40px] text-[30px] font-[600]  mb-[1em] '>{item.name}</p>
                    <p className='my-[12px] md:text-base text-[14px] '>{item.details}</p>
                    <small className='italic font-[500]'>{item.date}</small>

                    <div className='flex  justify-center  mt-[1em] '>
                        <pre>Location: </pre>
                        <p className='md:text-base text-[14px]'>{item.location.latitude}</p> ,
                        <p className='md:text-base text-[14px]'>{item.location.longitude}</p>
                    </div>

                    <div className='mt-[2em]'>
                        <pre className='md:text-base text-[14px]'> Casualties : {item.casualties}</pre>
                        <pre className='md:text-base text-[14px]'> Fatalities : {item.fatalities}</pre>
                    </div>

                     {/* button */}

                    <div className='flex justify-evenly mt-[1em]  ' >
                    <Payment/>

                        <Link to={"/donate"}>
                            <div className=''>
                                <button className='bg-[red] py-[4px] px-[4px] rounded-[8px] text-[#fff] flex items-center gap-[10px]'>
                                    <p className='text-[#fff] text-[14px] font-[600]' >Donate blood</p>
                                
                                    <div><Icon icon="noto:drop-of-blood"  /></div>
                                </button>

                            </div>
                            
                        </Link>
                    </div>


                    <img 
                        src={item.pictureLink} 
                        alt='image' 
                        className='md:w-[500px] md:h-700px] w-[300px] h-[300px] max-w-[100%] mt-[1em] mx-auto ' 
                    />
                    
                </div>
            );
            } else {
            return <p className='hidden' key="no-incident">No incident found</p>;
            }
        })}
    </div>

  )
}
