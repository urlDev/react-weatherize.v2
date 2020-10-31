import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const initialState = {};

const middlewares = [thunk];

export const mockStore = configureMockStore(middlewares);

export const makeMockStore = (state = {}) => {
  return mockStore({
    ...initialState,
    ...state,
  });
};
