import { FETCH_ORGS, ADD_ORG } from '../actions/constants';

const initialState = {
  organizations: [],
  organization: {}
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGS:
      return {
        ...state,
        organizations: action.payload
      };
    case ADD_ORG:
      return state;
    default:
      return state;
  }
};

export default organizations;
