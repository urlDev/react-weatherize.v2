/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { fetchWeather } from './redux/weather/weatherActions';

import Weather from './components/weather/Weather';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import Search from './components/search/Search';
import PrevCities from './components/prevCities/PrevCities';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const storage = useSelector((state) => state.weather.storage);

  const dispatch = useDispatch();

  useEffect(() => {
    storage && dispatch(fetchWeather(storage.pop()));
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default App;
