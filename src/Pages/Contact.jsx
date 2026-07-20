import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center my-10 md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>no. 2 Kandirpar <br /> Cumilla ,Bangladesh</p>
          <p className='text-gray-500'>Tel: +880 1712-345678 <br /> Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more aboit our teams and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
