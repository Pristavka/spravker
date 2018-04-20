import { ADD_ORG } from '../constants';

const initialState = {
  organizations: []
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORG:
      return state;
    default:
      return state;
  }
};

export default organizations;
