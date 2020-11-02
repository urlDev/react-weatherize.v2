import moxios from 'moxios';
import { store } from '../__mocks__/store';
import { fetchWeather } from '../../redux/weather/weatherActions';

const moxiosDefault = async (payload, fetch, bool, num, done) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: payload,
    });
  });

  const expectedActions = [
    { type: 'FETCH_WEATHER_BEGIN' },
    {
      type: fetch,
      payload: { payload },
    },
  ];

  return store.dispatch(fetchWeather()).then(() => {
    const actionsGetCalled = store.getActions();

    if (bool) {
      expect(actionsGetCalled).toEqual(expectedActions);
    }

    expect(actionsGetCalled[num].payload).toEqual(expectedActions[1].payload);
  });
};

export default moxiosDefault;
