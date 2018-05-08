import { auth } from '../../firebase/firebaseInitialize';

import { GET_USER, SIGN_IN_ERROR } from '../constants';

// --------- Action to Firebase ---------
const getUserFromFirestore = () => dispatch => {
  auth.onAuthStateChanged(user => dispatch(getUser(user)));
};
const signInUserWithEmailAndPassword = (email, password) => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
    .catch(error => dispatch(signInError(error)));
};

// --------- Basics actions ---------
const getUser = user => ({
  type: GET_USER,
  payload: user
});

const signInError = error => ({
  type: SIGN_IN_ERROR,
  payload: error
});

export {
  getUserFromFirestore,
  signInUserWithEmailAndPassword
};
