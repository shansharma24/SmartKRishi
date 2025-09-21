import React from 'react'
import { assets } from '../assets/assets'

const Foot = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-green-600 w-full overflow-hidden' id="Foot">
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <div className='w-29 h-auto object-contain'>
         <img 
  src={assets.logo} 
  alt="logo" 
  className="w-11 h-auto " /></div>
          <p className='text-white mt-4'>Smart Krishi – Empowering farmers with AI and IoT-driven insights for smarter, sustainable, and more profitable farming. Together, we are building the future of agriculture.</p>
        </div>
        
        {/* New container for the two side-by-side sections */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-end space-y-8 md:space-y-0 md:space-x-12">
          <div className='w-full md:w-1/2'>
            <h3 className='text-black text-lg font-bold mb-4 underline'>Company</h3>
            <ul className='flex flex-col gap-2 text-white'>
              <a href="#Header" className='hover:text-black'>Home</a>
              <a href="#About" className='hover:text-black'>About Us</a>
              <a href="/Contact" className='hover:text-black'>Contact Us</a>
              <a href="#" className='hover:text-black'>Private Policy</a>
            </ul>
          </div>
          
          <div className='w-full md:w-1/4'>
            <h3 className='text-black text-lg font-bold mb-4 underline'>Join Us</h3>
            <ul className='flex flex-col gap-2 text-white'>
              <a href="#" className='hover:text-black'>Instagram</a>
              <a href="#" className='hover:text-black'>Facebook</a>
              <a href="#" className='hover:text-black'>Twitter</a>
              <a href="#" className='hover:text-black'>LinkedIn</a>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-white'>
        © 2025 Smart Krishi. All Rights Reserved.
      </div>
    </div>
  )
}

export default Foot
