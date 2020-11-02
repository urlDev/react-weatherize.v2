import weatherReducer from '../../../redux/weather/weatherReducer';
import { weatherDefault } from '../../fixtures/weather';
import { error } from '../../fixtures/error';

import prevSearchedCities from '../../../redux/weather/weatherUtils';

const initialState = {
  loading: false,
  weather: [],
  error: null,
  storage: [],
};

test('Should set default state', () => {
  const state = weatherReducer(initialState, { type: '@INIT' });
  expect(state).toEqual(initialState);
});

test('Should begin fetching', () => {
  const state = weatherReducer(initialState, { type: 'FETCH_WEATHER_BEGIN' });
  expect(state).toEqual({
    ...initialState,
    loading: true,
  });
});

test('Should successfully get weather data', () => {
  const state = weatherReducer(initialState, {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: weatherDefault,
  });
  expect({
    ...state,
    storage: prevSearchedCities(initialState.storage, weatherDefault.name),
  }).toEqual({
    ...initialState,
    loading: false,
    weather: weatherDefault,
    storage: prevSearchedCities(initialState.storage, weatherDefault.name),
  });
});

test('Should show error if there is an error fetching', () => {
  const state = weatherReducer(initialState, {
    type: 'FETCH_WEATHER_ERROR',
    payload: error,
  });

  expect(state).toEqual({
    ...initialState,
    error: error.error,
    loading: false,
  });
});
