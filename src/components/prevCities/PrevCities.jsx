import React from 'react';
import {
  useSelector,
  useDispatch,
} from '../../tests/__mocks__/reactReduxHooks';

import { fetchWeather } from '../../redux/weather/weatherActions';

import './PrevCities.css';

/*
Because of a bug that got created after mockStore/testing,
I had to add storage.storage and || operator.
*/

const PrevCities = () => {
  const storage = useSelector((state) => state.weather.storage);
  const dispatch = useDispatch();

  return (
    <div
      className={
        (storage.storage || storage).length === 2
          ? 'localContainer lengthTwo'
          : 'localContainer lengthMore'
      }
    >
      {(storage.storage || storage).slice(-3).map((city) => (
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
