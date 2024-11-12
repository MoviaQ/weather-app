import React, { useState } from "react";
import Temperature from "./Temperature";
import OtherWeatherInfo from "./OtherWeatherInfo";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  const fetchWeather = async (city) => {
    const apiKey = "ba89a568f5cacd471d2e9738290feb63";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="city-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={city}
          placeholder="Type your city"
          className="city-input"
        />
        <button className="city-button" onClick={() => fetchWeather(city)}>
          Find city
        </button>
      </div>
      
      {weather && weather.main && (
        <div className="weather-container"> 
          <Temperature temperature={Math.round(weather.main.temp - 273.15)} />
          <OtherWeatherInfo
            feelsLike={Math.round(weather.main.feels_like - 273.15)}
            rain={weather.rain ? weather.rain["1h"] || 0 : 0}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity || 0}
            windSpeed={weather.wind.speed || 0}
        
            
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;