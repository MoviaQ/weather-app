import React from 'react'

const OtherWeatherInfo = ( {feelsLike, rain, pressure, humidity, windSpeed} ) => {
  return (
    <div className='other-container'>
      <p>Feels like:  {feelsLike}°C</p>
      <p>Rain: {rain}cm </p>
      <p>Pressure: {pressure}HPA </p>
      <p>Humidity: {humidity}% </p>
      <p>Wind: {windSpeed}km/h </p>

    </div>
  )
}

export default OtherWeatherInfo
