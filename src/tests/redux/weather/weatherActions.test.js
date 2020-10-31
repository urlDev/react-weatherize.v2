import moxios from 'moxios';
import expect from 'expect';

import { initialState, mockStore, makeMockStore } from '../../__mocks__/store';
import {
  fetchWeatherBegin,
  fetchWeatherSuccess,
  fetchWeatherError,
  fetchWeather,
} from '../../../redux/weather/weatherActions';
import weather, { weatherDefault, weatherError } from '../../fixtures/weather';
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
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Should fetch weather data with default input correctly', async (done) => {
    const store = makeMockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ response: weather });
    });

    await store.dispatch(fetchWeather()).then(() => {
      const actionsGetCalled = store.getActions();

      // expect(actionsGetCalled[1].response).toEqual({
      //   response: weather,
      // });
    });
    done();
  });
});
