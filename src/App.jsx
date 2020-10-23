/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
// import { Blurhash } from 'react-blurhash';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weather/weatherActions';

import Weather from './components/weather/Weather';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import Search from './components/search/Search';
import PrevCities from './components/prevCities/PrevCities';

import './App.css';

const App = () => {
  const storage = useSelector((state) => state.weather.storage);
  const dispatch = useDispatch();

  useEffect(() => {
    storage.length > 0
      ? dispatch(fetchWeather(storage.pop()))
      : dispatch(fetchWeather('Athens'));
  }, [fetchWeather]);

  return (
    <div className="container">
      <div className="left">
        <img className="logo" src={require('./assets/logo.png')} alt="" />
        <Weather />
      </div>
      <div className="right">
        <div className="right__inner">
          <Search />
          <PrevCities />
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
