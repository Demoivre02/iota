import React from 'react'

export const ContactUsView = () => {
  return (
	<div className='flex flex-col items-center mx-5 text-center bg-white md:mx-24 lg:my-16 '>
	  <h2 className='font-bold md:text-4xl text-[24px] text-[#282938]'>Contact us</h2>
	  <p className='text-[#00008B] font-normal md:text-lg text-[16px] mt-6 mb-8 md:mb-16'>Let us know what you will like to tell us</p>
	  <form action="">
		<div className='flex flex-col gap-5 md:flex-row'>
			<div className='flex flex-col items-start gap-3'>
				<label htmlFor='first-name'>
					First Name
				</label>
				<input name="first-name" id='first-name' type="text" className='px-4 py-2 border-2 rounded-md h-[48px] w-full md:w-80 lg:w-96'/>
			</div>
			<div className='flex flex-col items-start gap-3'>
				<label htmlFor='last-name'> 
					Last Name
				</label>
				<input name="last-name" type="text" id='last-name' className='px-4 py-2 border-2 rounded-md h-[48px] w-full md:w-80 lg:w-96'/>
			</div>
		</div>
		<div className='flex flex-col gap-5 md:flex-row'>
			<div className='flex flex-col items-start gap-3'>
				<label htmlFor='email'>
					Email
				</label>
				<input name="email" type="text" className='px-4 py-2 border-2 rounded-md h-[48px] w-full md:w-80 lg:w-96' id='email'/>
			</div>
			<div className='flex flex-col items-start gap-3'>
				<label htmlFor='phone'>
					Phone Number
				</label>
				<input name="phone" type="text" id='phone' className='px-4 py-2 border-2 rounded-md h-[48px] w-full md:w-80 lg:w-96'/>
			</div>
		</div>
		<div className='flex flex-col items-start gap-2 my-5 md:my-10'>
			<label htmlFor='message'>
					Message
			</label>
			<textarea name="message" id="message" cols="30" rows="10" className='px-4 py-2 border-2 rounded-md resize-none md:w-full'></textarea>
		</div>
		<button className='px-8 py-2 border border-[#1BA9B5] rounded-xl text-white bg-[#1BA9B5]' type="submit" onClick={(e) => {e.preventDefault()}}>Submit</button>
	  </form>
	</div>
  )
}

