import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import { history } from './store/configureStore';
import app from 'components/app';

// const store = configureStore();

const render = Component => {
    ReactDOM.render(
        // <Provider store={store}>
        <Component />
        // </Provider>
        ,
        document.querySelector('#root')
    );
};

render(app);

if (module.hot) {
    module.hot.accept('components/app', () => {
        console.log('HOOOOOOOOOOOOTTTTTT');
        const NextRootContainer = import('components/app');
        render(NextRootContainer);
    });
}
