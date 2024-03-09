import React from 'react'
import { Navbar, Footer } from '../../components'
import { CallToAction, ContactUsView, HeroView, VisionView, FeedbackView, NewsView } from './components'

export const LandingPage = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
     <Navbar/>
     <HeroView/>
     <VisionView/>
     <CallToAction/>
     <FeedbackView/>
     <NewsView/>
     <ContactUsView/>
     <Footer/>
    </div>
    
  )
}
