import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import styles from './LoginForm.scss';

const renderErrorMessage = error => {
  if (error.code === 'auth/invalid-email') return (<div>Введите корректный Email</div>);
  if (error.code === 'auth/user-not-found') return (<div>Данный пользователь не существует</div>);
};

const RenderInput = ({ input, meta: { error }, type, placeholder }) => (
  <div className={styles.formControl}>
    <input {...input} type={type} placeholder={placeholder} />
    {error && renderErrorMessage(error)}
  </div>
);
RenderInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.any,
  error: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

const validate = values => {
  const errors = {};
  console.log(values);
  return errors;
};

const LoginForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={RenderInput} placeholder="Введите Ваш Email..."/>
      <Field name="password" type="password" component={RenderInput} placeholder="Введите Ваш пароль..."/>
      <div className={styles.formControlSubmit}>
        <button type="submit" disabled={pristine || submitting}>Войти как администратор</button>
      </div>
    </form>
  );
};
LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
