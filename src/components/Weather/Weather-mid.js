import React, { useEffect } from 'react'
import { fetchData } from '../../redux/weatherSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
function WeatherMid() {


const item =useSelector(state=>state.weather.items)
const value=useSelector(state=>state.weather.value)
const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(fetchData(value))
  },[value])

  return (
    <div className='row'>
        <div className="col-sm-4 first " >
            <img src={` http://openweathermap.org/img/wn/${item[0]?.weather[0].icon}@2x.png`} alt="" />
           <h3>{item[0]?.weather[0].description}</h3> 
        </div>
        <div className="col-sm-4 mid">
            <h3>{Math.floor(item[0]?.temp?.day)}°C</h3>
        </div>
        <div className="col-sm-4  mid-last">
            <p>Rüzgar: {Math.floor(item[0]?.wind_speed)}</p>
            <p>Yağis: {Math.floor(item[0]?.rain)}</p>
            <p>Basınç: {Math.floor(item[0]?.pressure)}mb</p>
        </div>
        
    </div>
  )
}

export default WeatherMid