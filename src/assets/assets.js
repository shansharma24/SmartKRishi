import logo from './logo.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.svg'
import farmer_img from './farmer_img.png'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import slider1 from './slider1.png'
import slider2 from './slider2.png'
import slider3 from './slider3.svg'
import guide_img from './guide_img.png'
import guide_img2 from './guide_img2.png'
import rice from './rice.jpeg'
import wheat from './wheat.jpeg'
import tomato from './tomato.jpeg'
import { href } from 'react-router-dom'

export const assets = {
    logo,
    menu_icon,
    cross_icon
    ,farmer_img,
    left_arrow,
    right_arrow,
    slider1,slider2,slider3,
    guide_img,
    guide_img2,
    rice,
    wheat,
    tomato,

}

export const sliderData = [
  {
    image_src: slider1, 
    title: 'Daily Market Prices',
    description: 'Stay updated with the latest crop prices from local and national markets. Smart Krishi helps farmers make better selling decisions by providing real-time, accurate, and location-based price updates, ensuring transparency and boosting farmer income.',
  },
  {
    image_src: slider2, 
    title: 'Crop Recommendation',
    description: 'Smart Krishi uses AI to recommend the most suitable crops for your land. By considering soil nutrients, weather patterns, and regional conditions, it guides farmers to choose crops that ensure better yield, reduced risk, and higher profitability.',
  },
  {
    image_src: slider3, 
    title: 'ChatBot Assistance',
    description: 'Smart Krishi’s intelligent chatbot provides farmers with instant answers and personalized guidance. From crop care to weather tips, it offers real-time, accurate, and easy-to-understand support, ensuring better decisions and improving farming outcomes.',
  },
];
