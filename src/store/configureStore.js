import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// React-router-redux
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import api from '../../api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middlewareRouter = routerMiddleware(history);

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
        logger,
        middlewareRouter
      )
    )
  );
  return store;
};

export default configureStore;
