// Firebase (Cloud Firestore)
import firebase from 'firebase';
import firestore from '@firebase/app';
import '@firebase/firestore';

import firebaseConfig from '../configs/firebase';

// Initialize Firebase
firestore.initializeApp(firebaseConfig);

const database = firestore.firestore();
const auth = firebase.auth();

export {
  database,
  auth
};
