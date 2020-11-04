/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import PrevCities from '../../components/prevCities/PrevCities';

import * as ReactReduxHooks from '../__mocks__/reactReduxHooks';
import { mockStore } from '../__mocks__/store';
import defaultCity, { lengthTwo } from '../fixtures/storage';

describe('Previous Cities component', () => {
  let wrapper;
  let store;

  test('Should render previous cities on mount correctly', () => {
    store = mockStore({
      loading: false,
      error: null,
      weather: [],
      storage: defaultCity,
    });
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<PrevCities store={store} />);
    expect(wrapper).toMatchSnapshot();
    expect(store.getState().storage.length).toBe(1);
  });

  test('Should render previous cities correctly after searching for more than one city', () => {
    store = mockStore({
      loading: false,
      error: null,
      weather: [],
      storage: lengthTwo,
    });
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<PrevCities store={store} />);

    expect(wrapper).toMatchSnapshot();
    expect(store.getState().storage.length).toBe(2);
  });
  // There is a weird bug connecting mockStore with store(or persisted store).
  // After running tests, its best to delete local storage and refresh the page
  // Tests added another layer of state (e.g. storage.storage, weather.weather)
  // Trying to find the reason
});
