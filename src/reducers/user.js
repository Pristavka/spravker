import { GET_USER } from '../actions/constants';

const initialState = {
  autorizedUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        autorizedUser: action.payload
      };
    default:
      return state;
  }
};
