import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="" className="w-20 h-auto object-contain" />
        </div>
        
        {/* Nav Links */}
        <ul className='hidden md:flex gap-8 text-white items-center font-semibold'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>HOME</a>
          <a href="/SoilAnalysis" className='cursor-pointer hover:text-gray-400'>SOIL ANALYSIS</a>
          <a href="/CropRecommendation" className='cursor-pointer hover:text-gray-400'>CROP RECOMMENDATION</a>
          
            <Link to="/Weather" className='cursor-pointer hover:text-gray-400'>WEATHER</Link>
          <a href="/Community" className='cursor-pointer hover:text-gray-400'>COMMUNITY</a>
        </ul>
        
        {/* SignUp Button */}
        <Link to="/Login">
  <button className='px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-gray-400 hover:text-gray-800 transition-colors duration-300 text-white'>
    Login
  </button>
</Link>
        
        {/* Mobile Menu Icon */}
       
      </div>

      {/* --- Mobile Menu --- */}
      <div className='md:hidden fixed w-full right-0 top-0 bottom-0 bg-black text-white overflow-hidden bg-white transition-all'>
        <div className='flex justify-end p-6 cursor-pointer'>
           <img src={assets.menu_icon} className='md:hidden  w-7 cursor-pointer' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block'>HOME</a>
          <a href="#SOIL ANALYSIS" className='px-4 py-2 rounded-full inline-block'>SOIL ANALYSIS</a>
          <a href="#CROP" className='px-4 py-2 rounded-full inline-block'>CROP RECOMMENDATION</a>
          <a href="#WEATHER" className='px-4 py-2 rounded-full inline-block'>WEATHER</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar