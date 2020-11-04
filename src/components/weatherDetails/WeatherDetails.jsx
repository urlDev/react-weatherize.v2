/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from '../../tests/__mocks__/reactReduxHooks';

import './WeatherDetails.css';

const WeatherDetails = () => {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <div className="weather__details">
      <h1 className="tableHeader">Weather Details</h1>
      <div className="tableDiv">
        <table>
          <tr>
            <th>Visibility</th>
            <th>{parseInt(weather.weather.visibility, 10) / 1000}.0 km</th>
          </tr>
          <tr>
            <th>Humidity</th>
            <th>{weather.weather.main.humidity}%</th>
          </tr>
          <tr>
            <th>Wind</th>
            <th>{weather.weather.wind.speed} km/h</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default WeatherDetails;
