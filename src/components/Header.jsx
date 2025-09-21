import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img.png')"}} id="Header">

        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font bold pt-20 text-white font-bold'>Welcome to SmartKrishi</h1> 
            <div className='space-x-6 mt-16' >
               <a href="/MarketPricePage" className='border border-white px-8 py-3 rounded'>Market Price</a>
               <a href="/Chatbot" className='bg-green-500 px-8 py-3 rounded hover:bg-green-600'>Kisan AI</a>
            </div>
        </div>
    </div>
  )
  
}

export default Header