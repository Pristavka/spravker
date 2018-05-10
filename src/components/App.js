import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import router from '../configs/router';

import styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <React.StrictMode>
          <Navigation />
          <div className={styles.wrapper}>
            <Switch>
              {router.mainMenuLinks.map(link => (
                <Route
                  key={link.path}
                  exact={link.exact}
                  path={link.path}
                  component={link.component}
                />
              ))}
              <Redirect from='/' to='/login' />
            </Switch>
          </div>
        </React.StrictMode>
      </React.Fragment>
    );
  }
}
