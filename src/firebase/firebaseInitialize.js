// Firebase (Cloud Firestore)
import firebase from '@firebase/app';
import '@firebase/firestore';

import firebaseConfig from '../configs/firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
