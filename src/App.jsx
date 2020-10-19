/* eslint-disable global-require */
import React, { useEffect } from 'react';
// import { Blurhash } from 'react-blurhash';

import { useDispatch } from 'react-redux';
import { fetchWeather } from './redux/weather/weatherActions';
import { fetchImage } from './redux/image/imageActions';

import Weather from './components/weather/Weather';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import Search from './components/search/Search';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather('Athens'));
    dispatch(fetchImage());
  }, [fetchWeather]);

  return (
    <div className="container">
      <div className="left">
        <img className="logo" src={require('./assets/logo.svg')} alt="" />
        <Weather />
      </div>
      <div className="right">
        <div className="right__inner">
          <Search />
          <h1>Local Storage</h1>
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
