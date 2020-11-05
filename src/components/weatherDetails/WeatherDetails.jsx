/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from '../../tests/__mocks__/reactReduxHooks';

import './WeatherDetails.css';

const WeatherDetails = () => {
  const weather = useSelector((state) => state.weather.weather);

  return (
    <div className="weatherDetails">
      <h1 className="tableHeader">Weather Details</h1>
      <table className="tableDiv">
        <tbody>
          <tr>
            <td>Visibility</td>
            <td>
              {weather.weather &&
                parseInt((weather.weather || weather).visibility, 10) / 1000}
              .0 km
            </td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>
              {weather.weather && (weather.weather || weather).main.humidity}%
            </td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>
              {weather.weather && (weather.weather || weather).wind.speed} km/h
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
