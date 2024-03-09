import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as ArrowDown} from "../../../assets/svg/Vector(4).svg";

export const CallToAction = () => {
  return (
	<div className="bg-callToActionImage bg-center md:bg-cover lg:h-[400px] md:py-16 md:px-16 lg:py-36 lg:px-56 flex items-center justify-center">
	  <div className='w-full md:bg-white rounded-xl'>
		<div className='w-full grid md:grid-cols-section mb-10 text-slate-900 md:text-[#10217D]'>
			<Link to='./login' className='text-center my-5 h-3/4 hover:border-b-4 border-[#1BA9B5] cursor-pointer'>
				<h2 className='m-1 text-lg font-semibold '>Call Doctor</h2>
				<p className='text-sm'>Quick Consult via Call </p>
			</Link>
			<Link to='./login' className='text-center my-5 h-3/4 hover:border-b-4 border-[#1BA9B5] cursor-pointer'>
				<h2 className='m-1 text-lg font-semibold'>Book Appointment</h2>
				<p className='text-sm'>long established fact that</p>
			</Link>
			<Link to='./login' className='text-center my-5 h-3/4 hover:border-b-4 border-[#1BA9B5] cursor-pointer'>
				<h2 className='m-1 text-lg font-semibold'>Quick Health Checkup</h2>
				<p className='text-sm'>Contrary to popular belief</p>
			</Link>
		</div>
		<div className='flex flex-col items-center justify-center gap-3 my-10 md:flex-row md:gap-0'>
			<input type="text" placeholder='enter...' className='h-full px-4 py-2 border rounded-lg md:rounded-none md:rounded-l-lg'/>
			<button className='flex items-center rounded-lg md:rounded-none gap-5 px-8 py-2 border md:rounded-r-lg border-[#1BA9B5] text-white bg-[#1BA9B5]'> 
				<p>Select the Reason</p>
				<ArrowDown/>
			</button>
		</div>
	  </div>
	</div>
  )
}
