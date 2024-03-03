import React from 'react'
import { Card } from '../../../components'
import image1 from "../../../assets/images/Rectangle 17(3).png"
import image2 from "../../../assets/images/Rectangle 17(4).png"
import image3 from "../../../assets/images/Rectangle 17(5).png"

export const NewsView = () => {
  return (
	<section className='pb-16 mx-4 lg:mx-24'>
	  <p className='text-base text-center font-bold tracking-[4px]'>Blog</p>
	  <p className='mb-11 text-3xl text-center font-bold text-[#10217D]'>News and Events</p>
	  <div className='grid gap-10 md:grid-cols-section md:gap-5 lg:gap-20'>
		<Card imageUrl={image1} heading="The Benefits of Strength Training for Women" description="Strength training is an excellent way for women to improve their physical health and overall well-being......."/>
		<Card imageUrl={image2} heading="5 Simple Tips for Boosting Your Immune System" description="Your immune system is your body's natural defense against harmful bacteria, viruses, and other pathogens that can make you sick."/>
		<Card imageUrl={image3} heading="5 Simple Habits to Improve Your Mental Health" description="Good mental health is essential for a happy and fulfilling life. However, many people struggle to,,,,"/>
	  </div>
	</section>
  )
}


