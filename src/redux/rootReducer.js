import { combineReducers } from 'redux';

import weatherReducer from './weather/weatherReducer';
import imageReducer from './image/imageReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  image: imageReducer,
});

export default rootReducer;
