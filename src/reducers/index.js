// import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import organizations from './organizations';
import user from './user';

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](
        state[key],
        action
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
  router: routerReducer
});
