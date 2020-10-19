import weatherActionTypes from './weatherActionTypes';

const initialState = {
  loading: false,
  weather: [],
  error: null,
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
