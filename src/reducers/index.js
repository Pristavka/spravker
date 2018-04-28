import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import organizations from './organizations';

export default combineReducers({
  organizations,
  router: routerReducer
});
