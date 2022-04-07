import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function WeatherLast() {

  const item=useSelector(state=>state.weather.items)
  const loading=useSelector(state=>state.weather.isLoading)
 





  if(loading===true){
    return <div>loading</div>
  }
  return (
 <div  className='container ' >
      <div className='row ' >
      {

item.map(res=>{
var date = new Date((res.dt) * 1000);
   
  
  return<div className='col-sm  '>
   <h6> {date.toUTCString().slice(0,3)}</h6>
  <img src={`http://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`} alt="" />
  <h6>{Math.floor(res.temp?.day)}°C</h6>
  </div>
})
}
      </div>
      </div>
  
  )
}

export default WeatherLast