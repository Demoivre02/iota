import React from 'react'
import {ReactComponent as Facebook} from "../../assets/svg/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/svg/instagram.svg";
import {ReactComponent as Twitter} from "../../assets/svg/twitter.svg";

export const Footer = () => {
  return (
    <footer className='mx-4 my-8 lg:mx-24'>
      <div className='flex flex-col md:grid grid-cols-footer gap-5 lg:gap-40 md:mb-[50px]'>
        <div>
            <p className='mb-4 text-2xl font-bold'>DavsHealth</p>
            <p className='md:text-sm text-[14px] leading-[25px] lg:text-base'>Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.</p>
        </div>
        <div className='flex flex-col grid-cols-4 gap-4 md:grid lg:gap-20'>
            <div>
                <p className='mb-2 md:mb-4 font-bold text-[16px] lg:text-xl md:text-base text-[#527C88]'>Overview</p>
                <p className='md:text-sm text-[14px] lg:text-base'>Medicines</p>
            </div>
            <div>
                <p className='mb-2 mb:mb-4 font-bold text-[16px] lg:text-xl md:text-base text-[#527C88]'>Company</p>
                <p className='md:text-sm text-[14px] lg:text-base'>Home</p>
                <p className='md:text-sm text-[14px] lg:text-base'>About us</p>
                <p className='md:text-sm text-[14px] lg:text-base'>Services</p>
            </div>
            <div>
                <p className='mb-2 md:mb-4 font-bold text-[16px] lg:text-xl md:text-base text-[#527C88]'>Explore</p>
                <p className='md:text-sm text-[14px] lg:text-base'>Blogs & Feeds</p>
            </div>
            <div>
                <p className='mb-2 md:mb-4 font-bold text-[16px] lg:text-xl md:text-base text-[#527C88]'>Social Media</p>
                <div className='flex items-center gap-2'>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </div>
        </div>
      </div>
      <div className='text-center text-sm mt-[3em]' >
        <p>Copyright @ Davshealth 2024</p>
      </div>
    </footer>
  )
}


