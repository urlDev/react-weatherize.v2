import moxios from 'moxios';
import toast from 'react-toastify';

import { store } from '../../__mocks__/store';
import {
  fetchWeatherBegin,
  fetchWeatherSuccess,
  fetchWeatherError,
  fetchWeather,
} from '../../../redux/weather/weatherActions';
import { weatherDefault, weather, weatherError } from '../../fixtures/weather';
import error from '../../fixtures/error';

test('Should start fetching weather data', () => {
  const action = fetchWeatherBegin();

  expect(action).toEqual({
    type: 'FETCH_WEATHER_BEGIN',
  });
});

test('Should get the weather data successfully', () => {
  const action = fetchWeatherSuccess(weather);

  expect(action).toEqual({
    type: 'FETCH_WEATHER_SUCCESS',
    payload: { weather },
  });
});

test('Should show error correctly', () => {
  const action = fetchWeatherError(error);

  expect(action).toEqual({
    type: 'FETCH_WEATHER_ERROR',
    payload: { error },
  });
});

describe('Mocking fetchWeather and API calls', () => {
  beforeEach(() => {
    moxios.install();
    // store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Should fetch weather with given weather data correctly', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: weather,
      });
    });

    const expectedActions = [
      { type: 'FETCH_WEATHER_BEGIN' },
      {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: { weather },
      },
    ];

    return store.dispatch(fetchWeather()).then(() => {
      const actionsGetCalled = store.getActions();

      expect(actionsGetCalled).toEqual(expectedActions);
      expect(actionsGetCalled[1].payload).toEqual(expectedActions[1].payload);
      // console.log(actionsGetCalled);
    });
  });

  test('Should fetch weather data with default input correctly', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: weatherDefault,
      });
    });

    const expectedActions = [
      {
        type: 'FETCH_WEATHER_BEGIN',
      },
      {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: weatherDefault,
      },
    ];

    return store.dispatch(fetchWeather()).then(() => {
      const actionsGetCalled = store.getActions();

      expect(actionsGetCalled[3].payload.weather).toEqual(
        expectedActions[1].payload,
      );
    });
  });

  test('Should show error with wrong city names', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: weatherError,
      });
    });

    const expectedActions = [
      { type: 'FETCH_WEATHER_BEGIN' },
      { type: 'FETCH_WEATHER_ERROR', payload: error },
    ];

    return store.dispatch(fetchWeather()).then(() => {
      const actionsGetCalled = store.getActions();

      expect(actionsGetCalled[5].payload).toEqual(expectedActions[1].payload);
    });
  });

  test('Should open toaster and show the error message', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: weatherError,
      });
    });

    return store.dispatch(fetchWeather()).then(() => {
      const actionsCalled = store.getActions();

      console.log(toast, actionsCalled);
    });
  });
});
