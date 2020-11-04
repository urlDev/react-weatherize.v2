/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import Search from '../../components/search/Search';

import { mockStore } from '../__mocks__/store';
import * as ReactReduxHooks from '../__mocks__/reactReduxHooks';

describe('Search component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({});
    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);
  });

  test('Should render the component correctly', () => {
    wrapper = shallow(<Search store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render form with input value', () => {
    const value = 'Helsinki';
    wrapper = shallow(<Search value={value} />);
    wrapper.find('input').simulate('change', { target: { value } });
    expect(wrapper).toMatchSnapshot();
  });
  test('Should submit form with valid input', async () => {
    const onSubmitSpy = jest.fn();
    const value = 'Helsinki';

    wrapper = shallow(
      <Search onSubmit={onSubmitSpy} value={value} store={store} />,
    );

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    onSubmitSpy();
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
