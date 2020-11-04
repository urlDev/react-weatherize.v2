/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import Weather from '../../components/weather/Weather';

import { weather } from '../fixtures/weather';
import { mockStore } from '../__mocks__/store';
import * as ReactReduxHooks from '../__mocks__/reactReduxHooks';

describe('Weather component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      weather,
    });

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());

    wrapper = shallow(<Weather store={store} />);
  });

  test('Should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should get the weather state', () => {
    expect(store.getState().weather).toBeTruthy();
  });
});
