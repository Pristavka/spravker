import { FETCH_ORGS, SHOW_DIALOG_WINDOW } from '../actions/constants';

const initialState = {
  organizations: [],
  show_dialog_window: {
    status: false,
    type_of_information: ''
  }
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGS:
      return {
        ...state,
        organizations: action.payload
      };
    case SHOW_DIALOG_WINDOW:
      return {
        ...state,
        show_dialog_window: { ...action.payload }
      };
    default:
      return state;
  }
};

export default organizations;
