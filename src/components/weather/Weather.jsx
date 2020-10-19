/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';

import './Weather.css';

const Weather = () => {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <div className="weather__situation">
      <div className="center">
        <h1 className="degree">
          {weather.main && weather.main.temp.toString().slice(0, 2)}°
        </h1>
      </div>
      <div className="center">
        <h1 className="cityName">{weather.name}</h1>
        <h3 className="date">19.10.2020</h3>
      </div>
      <div className="center">
        {weather.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Weather;