import React from 'react'
import WeatherLast from '../Weather/Weather-last'
import WeatherMid from '../Weather/Weather-mid'
import { useSelector } from 'react-redux'
import Dropdown from '../Dropdown/Dropdown'
import Footer from '../Footer/Footer'

function Card() {




  return (
    <div className='mt-5 fluid ts '>
      <div className='container card'>
     <div className='mt-2'>
      <Dropdown/>
         </div>   
     <div className='container mt-3'>

         <WeatherMid/>
    </div> 
     <div className='container seven-day' >
       <WeatherLast/>
       
     </div>
     <div className='container icon_div mt-5'>
<Footer/>
     </div>
        </div>
    </div>
  )
}

export default Card