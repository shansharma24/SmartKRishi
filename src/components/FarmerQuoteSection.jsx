import React from 'react';
import { Link } from 'react-router-dom'

const FarmerQuoteSection = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 md:px-20 lg:px-32">
      {/* Container with a subtle grid background */}
      <div className="relative p-8 md:p-16 rounded-xl overflow-hidden">
        {/* Faint grid pattern as a background */}
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}
        ></div>
        
        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image and Quote */}
          <div className="relative">
            <img 
              src="src\assets\guide_img2.png" 
              alt="Happy farmer" 
              className="rounded-xl shadow-lg w-full" 
            />
            {/* Quote Box */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 p-6 rounded-xl shadow-lg w-11/12">
              <p className="text-lg text-center">
                Smart Krishi ke madad se mujhe beej aur fasal ka sahi sujhav mila, ab meri paidawar zyada aur munafa bhi achha hai!
              </p>
            </div>
          </div>
          
          {/* Right Column - Text and Button */}
          <div className="flex flex-col items-start text-left mt-16 lg:mt-0">
            {/* Quote icon */}
            <svg 
              className="w-12 h-12 mb-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16l3 3 3-3M12 21V3" />
            </svg>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Join thousands of farmers transforming their fields with Smart Krishi. Monitor soil, predict weather, and protect crops with AI-powered insights for higher yield and sustainable farming.”
            </h2>
            <Link to="/Contact">
            <button className="mt-6 px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300">
              Contact now
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FarmerQuoteSection;
