import React from 'react';

import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { fetchWeather } from './redux/weather/weatherActions';

import Weather from './components/weather/Weather';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import Search from './components/search/Search';
import PrevCities from './components/prevCities/PrevCities';
import logo from './assets/logo.png';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="left">
        <img className="logo" src={logo} alt="" />
        <Weather />
      </div>
      <div className="right">
        <div className="rightInner">
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
    </div>
  );
};

export default App;
