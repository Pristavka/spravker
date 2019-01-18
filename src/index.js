// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
// import { history } from './store/configureStore';
import app from 'components/app';

const store = configureStore();

const renderApp = Component => {
    render(
        <Provider store={store}>
            <Component />
        </Provider>
        ,
        document.querySelector('#root')
    );
};

renderApp(app);

if (module.hot) {
    module.hot.accept('components/app', () => {
        const NextRootContainer = import('components/app');
        renderApp(NextRootContainer);
    });
}
