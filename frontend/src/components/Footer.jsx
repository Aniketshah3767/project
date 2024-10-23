import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        {/* lefttt */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-[#9E9E9E] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt corporis laboriosam culpa officia. Doloribus accusamus, adipisci ut ducimus voluptas exercitationem mollitia, fugit molestiae odit iusto nobis!</p>
        </div>
        {/* center */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-[#9E9E9E]'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Privacy Ploicy</li>

            </ul>
        </div>
        {/* right */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-[#9E9E9E]'>
                <li>+911234567</li>
                <li>presperito@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* comment */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@- All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
