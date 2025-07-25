import React from 'react'

const WeatherDisplay = ({weather}) => {
    console.log(weather)
    const tempStyle = {
        color: weather.temperature > 20 ? 'red' : 'blue'
    }

  return (
    <div>
      <p>Temperature: <span style={tempStyle}>{weather.temperature}</span></p>
      <p>Conditions: <span>{weather.conditions}</span></p>
    </div>
  )
}

export default WeatherDisplay
