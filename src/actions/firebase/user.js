import { auth } from '../../firebase/firebaseInitialize';

import { GET_USER } from '../constants';

// --------- Action to Firebase ---------
const getUserFromFirestore = () => dispatch => {
  auth.onAuthStateChanged(user => dispatch(getUser(user)));
};
const signInUserWithEmailAndPassword = (email, password) => dispatch => auth.signInWithEmailAndPassword(email, password);
const signOutUserWithEmailAndPassword = () => dispatch => auth.signOutUserWithEmailAndPassword();

// --------- Basics actions ---------
const getUser = user => ({
  type: GET_USER,
  payload: user
});

export {
  getUserFromFirestore,
  signInUserWithEmailAndPassword,
  signOutUserWithEmailAndPassword
};
