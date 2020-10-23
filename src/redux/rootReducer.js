import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weatherReducer from './weather/weatherReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['weather'],
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
