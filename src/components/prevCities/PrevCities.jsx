import React from 'react';
import {
  useSelector,
  useDispatch,
} from '../../tests/__mocks__/reactReduxHooks';

import { fetchWeather } from '../../redux/weather/weatherActions';

import './PrevCities.css';

const PrevCities = () => {
  const storage = useSelector((state) => state.weather.storage);
  const dispatch = useDispatch();

  // console.log(useSelector);

  return (
    <div
      className={
        storage.length === 2
          ? 'localContainer lengthTwo'
          : 'localContainer lengthMore'
      }
    >
      {storage.slice(-3).map((city) => (
        <button
          type="button"
          className="localStorage"
          onClick={() => {
            dispatch(fetchWeather(city));
          }}
          key={city}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default PrevCities;
