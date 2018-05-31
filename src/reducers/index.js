// import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import organizations from './organizations';
import user from './user';

// combineReducers from Scratch
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](
        state[key],
        action,
      );
      return nextState;
    },
      {}
    );
  };
};


export default combineReducers({
  organizations,
  user,
  router: routerReducer,
  form: formReducer,
});
