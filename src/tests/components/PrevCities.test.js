/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import PrevCities from '../../components/prevCities/PrevCities';
import defaultCity, { lengthTwo, lengthMore } from '../fixtures/storage';

test('Should render Previous searched cities list', () => {
  const wrapper = shallow(<PrevCities defaultCity={defaultCity} />);

  console.log(wrapper);
});
