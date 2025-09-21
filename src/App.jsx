import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import FarmerQuoteSection from './components/FarmerQuoteSection'
import Foot from './components/Foot'
import WeatherApp from './pages/WeatherApp'
import Community from './pages/community'
import Login from './pages/Login'
import CropRecommendation from './pages/CropRecommendation'
import Contact from './pages/Contact'
import Chatbot from './pages/Chatbot'
import MarketPricePage from './pages/MarketPricePage'
import SoilAnalysis from './pages/SoilAnalysis'



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Features />
              <FarmerQuoteSection />
              <Foot />
            </>
          }
        />
        <Route path="/Weather" element={<WeatherApp />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CropRecommendation" element={<CropRecommendation/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Chatbot" element={<Chatbot/>}/>
        <Route path="/MarketPricePage" element={<MarketPricePage/>}/>
        <Route path="/SoilAnalysis" element={<SoilAnalysis/>}/>
      
       
      </Routes>
    </div>
  )
}

export default App