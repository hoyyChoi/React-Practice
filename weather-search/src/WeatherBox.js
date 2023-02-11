import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <div>{weather&&weather.main.temp}C /  {weather&&Math.floor(weather.main.temp)*1.8+32}F</div>
        <div>{weather&&weather.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox