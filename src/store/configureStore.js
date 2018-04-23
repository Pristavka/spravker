import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import api from '../../api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creation the logger
const logger = createLogger({
  level: 'info',
  collapsed: true,
  duration: true,
  diff: true
});

// Configuration the store
const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument(api),
        logger
      )
    )
  );
  return store;
};

export default configureStore;
