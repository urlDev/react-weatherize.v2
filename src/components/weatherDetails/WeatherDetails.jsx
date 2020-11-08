/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from '../../tests/__mocks__/reactReduxHooks';

import logo from '../../assets/logo.png';
import './WeatherDetails.css';

const WeatherDetails = () => {
  const weather = useSelector((state) => state.weather.weather);
  const loading = useSelector((state) => state.weather.loading);

  return (
    <div className="weatherDetails">
      <h1 className="tableHeader">Weather Details</h1>
      {loading ? (
        <img alt="logo" src={logo} className="loading" />
      ) : (
        <>
          <table className="tableDiv">
            <tbody>
              <tr>
                <td>Visibility</td>
                <td>
                  {parseInt(weather.weather.visibility, 10) / 1000}
                  .0 km
                </td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.weather.main.humidity}%</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>{weather.weather.wind.speed} km/h</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
