import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    
  
    <div className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>ABOUT <span
             className='underline underline-offset-4 decoration-1 under font-light'>SMART KRISHI</span></h1>
            <p className='text-grey-500 max-w-80 text-center mb-8'>Bridging Tradition with Technology</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.farmer_img} alt="" className='w-full sm:w-1/2 max-w-lg' />  
            <div className='flex flex-col items-ceneter md:items-start mt-10 text-grey-600'>
                <div >
                <h3 className='text-xl font-semibold mb-2'>At Smart Krishi, we believe technology can transform the way farming is done. Our mission is to empower farmers with real-time insights, 
                    data-driven decisions, and sustainable solutions to improve crop yield and resource efficiency.</h3>
                    <br></br>
                <h3 className='text-xl font-semibold mb-2'>Our platform not only helps farmers monitor their fields
                     with ease but also provides them with personalized guidance for better productivity and income.</h3>
                <br></br>
                <h3 className='text-xl font-semibold mb-2 underline'>With Smart Krishi, we aim to make farming:</h3>
                <br></br>
                <h3 className='text-xl font-semibold mb-2'>🌱 Smarter with AI-powered insights

                   <br></br> 🌦️ Predictable with real-time weather updates

                    <br></br>🧑‍🌾 Accessible with farmer-friendly tools

                   <br></br> 🌍 Sustainable with optimized resource use</h3>
                </div>
            </div>
            </div>
    </div>

  )
}

export default About