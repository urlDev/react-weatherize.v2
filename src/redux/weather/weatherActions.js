/* eslint-disable indent */
import { toast } from 'react-toastify';
import axios from 'axios';

export const fetchWeatherBegin = () => ({
  type: 'FETCH_WEATHER_BEGIN',
});

export const fetchWeatherSuccess = (weather) => ({
  type: 'FETCH_WEATHER_SUCCESS',
  payload: { weather },
});

export const fetchWeatherError = (error) => ({
  type: 'FETCH_WEATHER_ERROR',
  payload: { error },
});

export const fetchWeather = (input = 'Helsinki') => async (dispatch) => {
  dispatch(fetchWeatherBegin());
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${process.env.WEATHER_API}&units=metric`,
    );
    const data = await response.data;
    return data.cod === 200
      ? dispatch(fetchWeatherSuccess(data))
      : [
          toast.error(
            data.message &&
              data.message.slice(0, 1).toUpperCase() + data.message.slice(1),
          ),
          dispatch(fetchWeatherError(data.message)),
        ];
  } catch (error) {
    return dispatch(fetchWeatherError(error));
  }
};
