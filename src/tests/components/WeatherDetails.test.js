/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import WeatherDetails from '../../components/weatherDetails/WeatherDetails';

import * as ReactReduxHooks from '../__mocks__/reactReduxHooks';
import { weather } from '../fixtures/weather';
import { mockStore } from '../__mocks__/store';

describe('Weather details component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      weather,
    });

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    wrapper = shallow(<WeatherDetails store={store} />);
  });

  test('Should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should get the weather details', () => {
    expect(store.getState().weather).toBeTruthy();
  });
});
