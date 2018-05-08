import { GET_USER, SIGN_IN_ERROR } from '../actions/constants';

const initialState = {
  autorizedUser: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        autorizedUser: action.payload
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
