// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer } from 'reducers';
import { rootSaga } from 'sagas';

// React-router-redux
// import createHistory from 'history/createBrowserHistory';
// import { routerMiddleware } from 'react-router-redux';

// import api from '../../api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create a history of your choosing (we're using a browser history in this case)
// export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
// const middlewareRouter = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    level: 'info',
    collapsed: true,
    duration: true,
    diff: true
});

const configureStore = (preloadedState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                logger,
                // middlewareRouter
            )
        )
    );

    sagaMiddleware.run(rootSaga);
    return store;
};


export default configureStore;
