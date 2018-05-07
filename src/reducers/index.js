import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import organizations from './organizations';
import user from './user';

export default combineReducers({
  organizations,
  user,
  router: routerReducer
});
