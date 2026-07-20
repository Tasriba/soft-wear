import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we believe fashion is more than just clothing—it's a way to express confidence, personality, and individuality. Our mission is to bring you stylish, high-quality apparel that combines modern trends with everyday comfort, making fashion accessible to everyone.</p>
          <p>We carefully curate our collections to ensure every piece meets our standards of quality, affordability, and style. Whether you're looking for casual essentials or statement outfits, Forever is committed to providing a seamless shopping experience and helping you discover your perfect look every season.</p>
          <b>Our Mission</b>
          <p>Our mission at Forever is to inspire confidence through fashion by offering high-quality, trendy, and affordable clothing for every lifestyle. We are committed to delivering exceptional customer service, embracing innovation, and creating a seamless shopping experience that helps every customer look and feel their best</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality Assurance is at the heart of everything we do. Every product is carefully inspected to ensure high quality, comfort, and durability, so you can shop with confidence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>onvenience is our priority. Enjoy easy shopping, secure payments, fast delivery, and a seamless experience every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional Customer Service is our promise. Our friendly support team is always here to provide quick, reliable assistance whenever you need it.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
