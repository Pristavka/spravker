// React
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import { history } from './store/configureStore';

// App component
import App from './components/App';

// Creating store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
    {/* </BrowserRouter> */}
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = import('./components/App');
    ReactDOM.render(
      <Provider store={store}>
        {/* <BrowserRouter> */}
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
        {/* </BrowserRouter> */}
      </Provider>,
      document.querySelector('#root')
    );
  });
}
