import { auth } from '../../firebase/firebaseInitialize';

import { GET_USER } from '../constants';

// --------- Action to Firebase ---------
const getUserFromFirestore = () => dispatch => {
  auth.onAuthStateChanged(user => dispatch(getUser(user)));
};

// --------- Basics actions ---------
const getUser = user => ({
  type: GET_USER,
  payload: user
});

export {
  getUserFromFirestore
};
