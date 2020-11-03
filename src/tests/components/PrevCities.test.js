/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import PrevCities from '../../components/prevCities/PrevCities';

import * as ReactReduxHooks from '../__mocks__/reactReduxHooks';
import { mockStore } from '../__mocks__/store';
import defaultCity, { lengthTwo, lengthMore } from '../fixtures/storage';

describe('Previous Cities component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({
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
  });

  test('Should render previous cities on mount correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(store.getState().storage.length).toBe(1);
  });

  test('Should render previous cities correctly after searching for more than one city', () => {
    store = mockStore({
      ...store.getState(),
      storage: lengthTwo,
    });
    expect(wrapper).toMatchSnapshot();
    expect(store.getState().storage.length).toBe(2);
  });
  // There is a weird bug connecting mockStore with store(or persisted store).
  // After running tests, its best to delete local storage and refresh the page
  // Tests added another layer of state (e.g. storage.storage, weather.weather)
  // Trying to find the reason
});
