import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.scss';
import logo from '../../assets/images/logo.png';

export default class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.loginWrapper}>
          <div className={styles.loginLogo}>
            <Link to="/">
              <img src={logo} alt="Справочник организаций" />
            </Link>
          </div>
          <h1>Войти</h1>
          <p>С помощью аккаунта Spravker</p>
          <div className={styles.formWrapper}>
            <form method="">
              <div className={styles.formControl}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Введите Ваш Email..."
                />
              </div>
              <div className={styles.formControl}>
                <input
                  type="password"
                  name="Password"
                  placeholder="Введите Ваш пароль..."
                />
              </div>
              <div className={styles.formControlSubmit}>
                <button type="submit">Войти как администратор</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
