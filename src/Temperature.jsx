import React from 'react'

const Temperature = ({ temperature }) => {
  return (
    <div className='temperature-container'>
      {temperature}°C
    </div>
  )
}

export default Temperature
