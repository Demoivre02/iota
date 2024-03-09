import React from 'react'
import { Icon } from '@iconify/react';
import heroImage from '../../../assets/images/Group 1.png'
import { Link } from 'react-router-dom';

export const HeroView = () => {
  return (
	<div className='flex md:flex-row flex-col md:gap-0 gap-[2em] mx-4 hero-section lg:mx-24  relative '>
	  <div className='flex flex-col gap-4 md:text-center md:mt-0 mt-[2em] md:text-start md:w-1/2 lg:gap-7 md:items-start md:justify-center max-w-[700px] '>
			<Link  to={"/emergency"}>	  
				<div className='flex gap-[15px] absolute top-0 '>
					<div className=' animate-ping md:ml-0 ml-[2em]  flex gap-[10px] items-center' >
							<p className='text-[red] sm:text-[25px] text-[1p6x] uppercase  font-[700] '>Emergency</p>
							<div className='md:block hidden'>
								<Icon icon="medical-icon:emergency" color='red' width="25"  />
							</div>
							<div  className='md:hidden block'>
								<Icon icon="medical-icon:emergency" color='red' width="15"  />
							</div>
							
					</div>

					<div className='md:ml-[7em] ml-[3em]' role='button'>
						<div className='md:block hidden'>
							<Icon icon="line-md:arrow-right-circle" color='red' width="35"  />
						</div>

						<div  className='md:hidden block'>
							<Icon icon="line-md:arrow-right-circle" color='red' width="25"  />
						</div>
					</div>
				</div>
			</Link>

			<div className='flex'>
				<p className='text-[14px] text-[green] font-[600] '>Need Help? </p>
				<a href='tel:199' className='flex items-center gap-[2px] ml-[12px] text-[green] '>
					<Icon icon="ic:baseline-phone" /> 119
				</a> 
			</div>

	

			<p className='font-[500]'>Welcome to DavsHealth</p>
			<p className='text-[#10217D] max-w-[500px] text-2xl md:text-3xl lg:text-4xl md:leading-[74px] leading-[35px] capitalize font-bold  '>where you can easily book doctors, hospitals, and find the nearest pharmacy!</p>
			<p className='max-w-[500px]'>Our platform allows you to search for doctors and hospitals based on specialty, location, and availability.</p>
			<button className='px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5] self-center md:self-start'>Get Started</button>
	  </div>
	  <div className='w-full md:w-1/2'>
		<img src={heroImage} alt="" width={'700'} height={'700'}/>
	  </div>
	</div>
  )
}


