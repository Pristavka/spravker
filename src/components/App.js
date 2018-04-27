import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import router from '../configs/router';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <React.StrictMode>
          <Navigation />
          <Switch>
            {router.mainMenuLinks.map(link => (
              <Route
                key={link.path}
                exact={link.exact}
                path={link.path}
                component={link.component}
              />
            ))}
          </Switch>
        </React.StrictMode>
      </React.Fragment>
    );
  }
}
