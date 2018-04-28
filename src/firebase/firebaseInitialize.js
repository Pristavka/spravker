// Firebase
import firebase from 'firebase';
import firebaseConfig from '../configs/firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
