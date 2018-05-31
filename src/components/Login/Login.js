import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { replace, goBack } from 'react-router-redux';
// Actions from firebase
import { signInUserWithEmailAndPassword, getUserFromFirestore } from '../../actions/firebase/user';
// Selectors for redux
import { getUserFromStoreWithSelector } from '../../selectors/user';

import styles from './Login.scss';
import logo from '../../assets/images/logo.png';

@connect(
  store => getUserFromStoreWithSelector(store),
  {
    signInUserWithEmailAndPassword,
    getUserFromFirestore,
    replace,
    goBack
  }
)
export default class Login extends React.Component {
  static propTypes = {
    signInUserWithEmailAndPassword: PropTypes.func,
    getUserFromFirestore: PropTypes.func,
    replace: PropTypes.func,
    goBack: PropTypes.func,
    user: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user) nextProps.replace('/');
    return prevState;
  }
  

  handleOnChange = e => {
    e.persist();
    this.setState(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.signInUserWithEmailAndPassword(this.state.email, this.state.password)
      // .then(this.props.goBack())
      .catch(error => this.setState(state => ({ ... state, error })));
  };

  renderErrorMessage = () => {
    if (this.state.error.code === 'auth/invalid-email') return (<div>Введите корректный Email</div>);
    if (this.state.error.code === 'auth/user-not-found') return (<div>Данный пользователь не существует</div>);
  }

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
            <form onSubmit={this.handleOnSubmit}>
              <div className={styles.formControl}>
                <input
                  type="email"
                  name="email"
                  placeholder="Введите Ваш Email..."
                  onChange={this.handleOnChange}
                />
                {this.state.error && this.renderErrorMessage()}
              </div>
              <div className={styles.formControl}>
                <input
                  type="password"
                  name="password"
                  placeholder="Введите Ваш пароль..."
                  onChange={this.handleOnChange}
                  required
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
