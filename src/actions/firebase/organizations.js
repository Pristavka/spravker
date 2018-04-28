import { database } from '../../firebase/firebaseInitialize';
import { FETCH_ORGS } from '../constants';

// Action to firebase
const fetchInitialDataFromFirebase = () => dispatch =>
  database
    .ref('/')
    .once('value', snap => {
      dispatch(fetchOrgs(snap.val()));
    })
    .catch(error => console.log(error));

// Basics actions
const fetchOrgs = orgs => ({ type: FETCH_ORGS, payload: orgs });

export { fetchInitialDataFromFirebase };
