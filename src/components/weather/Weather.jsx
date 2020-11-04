/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import moment from 'moment';
import { useSelector } from '../../tests/__mocks__/reactReduxHooks';

import './Weather.css';

const Weather = () => {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <div className="weather__situation">
      <div className="center">
        <h1 className="degree">
          {weather.weather.main && parseInt(weather.weather.main.temp, 10)}°
        </h1>
      </div>
      <div className="center">
        <h1 className="cityName">{weather.weather.name}</h1>
        <h3 className="date">{moment().format('DD.MM.YYYY')}</h3>
      </div>
      <div className="center">
        {weather.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
