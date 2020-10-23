import weatherActionTypes from './weatherActionTypes';

import prevSearchedCities from './weatherUtils';

const initialState = {
  loading: false,
  weather: [],
  error: null,
  storage: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherActionTypes.FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case weatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload.weather,
        storage: prevSearchedCities(state.storage, action.payload.weather.name),
      };
    case weatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default weatherReducer;
