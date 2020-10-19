import imageActionTypes from './imageActionTypes';

const initialState = {
  loading: false,
  image: [],
  error: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case imageActionTypes.FETCH_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case imageActionTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.image,
      };
    case imageActionTypes.FETCH_IMAGE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default imageReducer;
