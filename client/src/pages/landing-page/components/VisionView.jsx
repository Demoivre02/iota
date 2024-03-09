import React from 'react'
import { Card } from '../../../components'
import image1 from "../../../assets/images/Rectangle 17.png"
import image2 from "../../../assets/images/Rectangle 17(1).png"
import image3 from "../../../assets/images/Rectangle 17(2).png"

export const VisionView = () => {

  return (
	<section className='pb-16 mx-4 lg:mx-24'>
	  <p className='text-base font-bold text-center'>Service</p>
	  <p className='mb-11 md:text-3xl text-[24px] text-center font-bold text-[#10217D]'>Our Vision & Our Goal</p>
	  <div className='grid gap-10 md:grid-cols-section md:gap-5 lg:gap-20'>
		<Card 
			imageUrl={image1} 
			heading="Health Complaints" 
			description="Our platform allows you to search for doctors and hospitals based on specialty, location, and availability."
		/>
		<Card 
			imageUrl={image2} 
			heading="Pharmacy" 
			description="Our platform allows you to search for doctors and hospitals based on specialty, location, and availability."
		/>
		<Card 
			imageUrl={image3} 
			heading="Hospital Search" 
			description="Our platform allows you to search for doctors and hospitals based on specialty, location, and availability."
		/>
	  </div>
	</section>
  )
}


