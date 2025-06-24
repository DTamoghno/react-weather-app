import React from 'react'
import { convertUnixToTime } from '../utils/formatTime';

const WeatherCards = ({data}) => {
  const {main,wind,visibility,sys,timezone} = data;

  return (
    <div className='row row-cols-1 row-cols-md-3 text-center my-3'>
      {/*Temperature Card */}
      <div className='col mb-3'>
        <div className='card border-primary shadow-sm'>
          <div className='card-header bg-primary text-white'>Temperatures</div>
          <div className='card-body'>
            <h2>{main.temp}°C</h2>
            <p>Max Temperature is {main.temp_max}°C</p>
            <p>Min Temperature is {main.temp_min}°C</p>
          </div>
        </div>
      </div>
      {/*Wind Card */}
      <div className='col mb-3'>
        <div className='card border-primary shadow-sm'>
          <div className='card-header bg-primary text-white'>Wind Speed</div>
          <div className='card-body'>
            <h2>{wind.speed}m/s</h2>
            <p>Wind Speed is {wind.speed} m/s</p>
            <p>Visibility is {visibility} meters</p>
          </div>
        </div>
      </div>
      {/*Sunrise and Sunset Card */}
      <div className='col mb-3'>
        <div className='card border-primary shadow-sm'>
          <div className='card-header bg-primary text-white'>Sunrise and Sunset</div>
          <div className='card-body'>
            <h5>24 Hour Format</h5>
            <p>Sunrise Time: {convertUnixToTime(sys.sunrise,timezone)}</p>
            <p>Sunset Time: {convertUnixToTime(sys.sunset,timezone)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCards