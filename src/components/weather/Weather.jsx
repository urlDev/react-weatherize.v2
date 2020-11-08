import React from 'react';
import moment from 'moment';
import { useSelector } from '../../tests/__mocks__/reactReduxHooks';

import logo from '../../assets/logo.png';
import './Weather.css';

const Weather = () => {
  const weather = useSelector((state) => state.weather.weather);
  const loading = useSelector((state) => state.weather.loading);

  return (
    <div className="weatherSituation">
      {loading ? (
        <img alt="logo" src={logo} className="loading" />
      ) : (
        <>
          <div className="center">
            <h1 className="degree">
              {parseInt(weather.weather.main.temp, 10)}°
            </h1>
          </div>
          <div className="center">
            <h1 className="cityName">{weather.weather.name}</h1>
            <h3 className="date">{moment().format('DD.MM.YYYY')}</h3>
          </div>
          <div className="center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
