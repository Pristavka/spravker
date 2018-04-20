import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';
import api from '../../api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creation the logger
const logger = createLogger({
  level: 'info',
  collapsed: true
});

// Configuration the store
const configureStore = (preloadedState = {}) => {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument(api),
        logger,
        window.__REDUX_DEVTOOLS_EXTENSION__
      )
    )
  );
  return store;
};

export default configureStore;
